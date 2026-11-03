import type { Programme } from "@/types/programme";
import type {
  ApplyInput,
  QualificationValue,
} from "@/lib/validations/apply";

export type EligibilityResult = {
  status: "likely" | "review";
  title: string;
  summary: string;
  checkpoints: string[];
};

const bachelorOrHigher = new Set<QualificationValue>([
  "bachelors-2",
  "bachelors-4",
  "masters",
  "doctorate",
]);

const fourYearBachelorOrHigher = new Set<QualificationValue>([
  "bachelors-4",
  "masters",
  "doctorate",
]);

const bachelorEntryQualifications = new Set<QualificationValue>([
  "higher-secondary",
  "foundation",
  "diploma",
  "associate",
  "bachelors-2",
  "bachelors-4",
  "masters",
  "doctorate",
]);

function matchingResult(summary: string, checkpoints: string[]): EligibilityResult {
  return {
    status: "likely",
    title: "Your profile looks suitable for preliminary review",
    summary,
    checkpoints,
  };
}

function reviewResult(summary: string, checkpoints: string[]): EligibilityResult {
  return {
    status: "review",
    title: "An advisor should review your profile",
    summary,
    checkpoints,
  };
}

export function assessProgrammeEligibility(
  programme: Programme,
  input: ApplyInput,
): EligibilityResult {
  const isCompleted = input.completionStatus === "completed";
  const hasProfessionalMembership =
    input.professionalQualification === "acca-member" ||
    input.professionalQualification === "icap-member";
  const hasRelevantExperience = input.workExperience !== "none";
  const hasFiveYearsExperience = input.workExperience === "5-plus";

  if (programme.level === "doctoral") {
    const hasMasters =
      input.highestQualification === "masters" ||
      input.highestQualification === "doctorate";

    if (hasMasters && isCompleted) {
      return matchingResult(
        "A completed master's-level qualification aligns with the published academic level for doctoral entry.",
        [
          "Prepare your master's transcript and completion certificate.",
          "An admissions advisor must verify recognition and subject relevance.",
          "The university makes the final admission decision.",
        ],
      );
    }

    if (hasMasters) {
      return reviewResult(
        "Your master's-level qualification is not yet complete. Final documents are normally needed before doctoral admission can be confirmed.",
        [
          "Share your latest transcript and expected completion date.",
          "Ask an advisor when you can begin the formal assessment.",
          "Direct bachelor's-to-doctoral entry is not normally available.",
        ],
      );
    }

    return reviewResult(
      "Published doctoral requirements normally expect a completed master's degree or an accepted equivalent qualification.",
      [
        "Ask about an appropriate master's pathway first.",
        "Share any research experience or equivalent postgraduate study.",
        "An advisor can check whether a university-approved alternative applies.",
      ],
    );
  }

  if (programme.level === "masters") {
    const hasStandardAcademicEntry = fourYearBachelorOrHigher.has(
      input.highestQualification,
    );
    const hasFlexibleMbaEntry =
      programme.slug === "master-of-business-administration" &&
      (input.highestQualification === "bachelors-2" ||
        hasProfessionalMembership);
    const hasPotentialAcademicEntry = bachelorOrHigher.has(
      input.highestQualification,
    );

    if ((hasStandardAcademicEntry || hasFlexibleMbaEntry) && isCompleted) {
      const experienceNote = hasFiveYearsExperience
        ? " Your five or more years of experience may also support a case-by-case assessment where required."
        : "";

      return matchingResult(
        `Your completed qualification aligns with a listed or typical master's-level entry route.${experienceNote}`,
        [
          "Prepare your degree or membership certificate and full transcript.",
          "The university will verify qualification level, grades, and relevance.",
          "An advisor can also check exemptions or accelerated pathways.",
        ],
      );
    }

    if (hasPotentialAcademicEntry || hasProfessionalMembership) {
      return reviewResult(
        isCompleted
          ? "Your background may be considered, but this programme requires a case-by-case review of qualification level, subject relevance, or experience."
          : "Your qualification is still in progress, so an advisor should confirm when a formal master's assessment can begin.",
        [
          "Share your latest transcript and qualification details.",
          hasRelevantExperience
            ? "Include evidence of relevant professional experience."
            : "Relevant work experience may strengthen some alternative entry routes.",
          "Ask the admissions team to verify the programme-specific criteria.",
        ],
      );
    }

    return reviewResult(
      "Master's admission generally requires a recognized bachelor's degree, accepted professional membership, or another university-approved equivalent.",
      [
        "Ask about a bachelor's completion or graduate bridge pathway.",
        "Share professional papers or diplomas for a credit review.",
        "An advisor can identify the closest available route.",
      ],
    );
  }

  if (programme.level === "graduate-diplomas") {
    const hasGraduateEntry = bachelorOrHigher.has(input.highestQualification);

    if (hasGraduateEntry && isCompleted) {
      return matchingResult(
        "Your completed bachelor's-level or higher qualification aligns with the typical entry level for this graduate diploma.",
        [
          "Prepare your final transcript and completion certificate.",
          "The university will confirm subject relevance and recognition.",
          "Ask whether any prior study can receive credit.",
        ],
      );
    }

    return reviewResult(
      hasGraduateEntry
        ? "Your qualifying degree is still in progress, so final eligibility will depend on completion and document review."
        : "Graduate diploma entry typically requires a completed bachelor's degree or an accepted equivalent profile.",
      [
        "Share your latest academic and professional documents.",
        "Ask whether an alternative or bridge route is available.",
        "An advisor will verify the exact programme criteria.",
      ],
    );
  }

  const hasBachelorEntry = bachelorEntryQualifications.has(
    input.highestQualification,
  );

  if (hasBachelorEntry && isCompleted) {
    return matchingResult(
      "Your completed post-secondary qualification aligns with a typical bachelor's-level entry route.",
      [
        "Prepare your secondary and post-secondary transcripts.",
        "Professional papers or a diploma may qualify for credit exemptions.",
        "The university will confirm equivalence and programme-specific subjects.",
      ],
    );
  }

  if (hasBachelorEntry) {
    return reviewResult(
      "Your current qualification may support bachelor's entry once it is completed and verified.",
      [
        "Share your latest transcript and expected completion date.",
        "Ask whether conditional assessment is available.",
        "Include any ACCA, ICAP, or diploma papers for an exemption review.",
      ],
    );
  }

  return reviewResult(
    "A completed higher secondary, foundation, diploma, or accepted equivalent qualification is normally required for bachelor's entry.",
    [
      "Ask about a foundation or preparatory pathway.",
      "Share any professional papers or additional study completed.",
      "An advisor can recommend the next suitable qualification level.",
    ],
  );
}
