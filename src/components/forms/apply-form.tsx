"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  GraduationCap,
  MessageSquare,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import FormField from "@/components/forms/form-field";
import {
  assessProgrammeEligibility,
  type EligibilityResult,
} from "@/lib/eligibility";
import {
  applySchema,
  type ApplyInput,
  type CompletionStatus,
  type ProfessionalQualification,
  type QualificationValue,
  type WorkExperience,
} from "@/lib/validations/apply";
import type { Programme, ProgrammeRequirement } from "@/types/programme";
import type { University } from "@/types/university";

type ApplyFormProps = {
  programmes: Programme[];
  universities: Array<Pick<University, "slug" | "name" | "shortName">>;
  requirements: ProgrammeRequirement[];
  whatsappNumber: string;
};

type CompletedCheck = {
  input: ApplyInput;
  programme: Programme;
  result: EligibilityResult;
};

const qualificationLabels: Record<QualificationValue, string> = {
  secondary: "SSC / Matric / O-Level",
  "higher-secondary": "HSSC / Intermediate / A-Level",
  foundation: "Foundation qualification",
  diploma: "Diploma",
  associate: "Associate degree",
  "bachelors-2": "2-year bachelor's degree",
  "bachelors-4": "4-year bachelor's degree",
  masters: "Master's / MPhil degree",
  doctorate: "Doctoral degree",
  other: "Other academic qualification",
};

const completionLabels: Record<CompletionStatus, string> = {
  completed: "Completed",
  "final-year": "Final year / awaiting result",
  "in-progress": "Currently in progress",
};

const professionalLabels: Record<ProfessionalQualification, string> = {
  none: "None",
  "acca-part-qualified": "ACCA part-qualified",
  "acca-member": "ACCA affiliate / member",
  "icap-caf": "ICAP CAF",
  "icap-member": "ICAP member",
  other: "Other professional qualification",
};

const experienceLabels: Record<WorkExperience, string> = {
  none: "No relevant experience",
  "under-1": "Less than 1 year",
  "1-2": "1–2 years",
  "3-4": "3–4 years",
  "5-plus": "5 or more years",
};

const levelLabels: Record<Programme["level"], string> = {
  bachelors: "Bachelor's programmes",
  masters: "Master's programmes",
  doctoral: "Doctoral programmes",
  "graduate-diplomas": "Graduate diplomas",
};

const levelOrder: Programme["level"][] = [
  "bachelors",
  "masters",
  "doctoral",
  "graduate-diplomas",
];

const fieldClassName =
  "min-h-12 w-full rounded-xl border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-heading transition-colors placeholder:text-muted hover:border-primary-300 focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring";

function genericCriteria(level: Programme["level"]): string[] {
  if (level === "doctoral") {
    return [
      "A recognized master's degree or university-approved equivalent is normally expected.",
      "Academic relevance, prior research, and complete documents require university review.",
    ];
  }

  if (level === "masters") {
    return [
      "A recognized bachelor's degree or accepted equivalent is normally required.",
      "Professional qualifications and work experience may be assessed case by case.",
    ];
  }

  if (level === "graduate-diplomas") {
    return [
      "A recognized bachelor's degree or accepted equivalent profile is generally expected.",
      "The university confirms subject relevance and document equivalence.",
    ];
  }

  return [
    "A recognized higher secondary, foundation, diploma, or equivalent qualification is normally required.",
    "Prior diploma or professional study may be considered for credit exemptions.",
  ];
}

export default function ApplyForm({
  programmes,
  universities,
  requirements,
  whatsappNumber,
}: ApplyFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [completedCheck, setCompletedCheck] =
    useState<CompletedCheck | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    setError,
    control,
    formState: { errors },
  } = useForm<ApplyInput>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      name: "",
      programme: "",
      completionStatus: "completed",
      professionalQualification: "none",
      workExperience: "none",
      score: "",
      notes: "",
    },
  });

  const selectedProgrammeSlug = useWatch({
    control,
    name: "programme",
  });
  const selectedProgramme = programmes.find(
    (programme) => programme.slug === selectedProgrammeSlug,
  );
  const universityBySlug = useMemo(
    () => new Map(universities.map((university) => [university.slug, university])),
    [universities],
  );

  const publishedRequirement = completedCheck
    ? requirements.find(
        (requirement) =>
          requirement.programmeSlug === completedCheck.programme.slug,
      )
    : undefined;
  const criteria = completedCheck
    ? completedCheck.programme.eligibility?.items ||
      publishedRequirement?.academic ||
      genericCriteria(completedCheck.programme.level)
    : [];

  const cleanWhatsappNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappMessage = completedCheck
    ? [
        "Hello OM International, I completed the website eligibility checker and would like a confirmed assessment.",
        "",
        `Name: ${completedCheck.input.name}`,
        `Programme: ${completedCheck.programme.title}`,
        `Highest qualification: ${qualificationLabels[completedCheck.input.highestQualification]}`,
        `Status: ${completionLabels[completedCheck.input.completionStatus]}`,
        `Professional qualification: ${professionalLabels[completedCheck.input.professionalQualification]}`,
        `Relevant experience: ${experienceLabels[completedCheck.input.workExperience]}`,
        completedCheck.input.score
          ? `Result / CGPA: ${completedCheck.input.score}`
          : null,
        completedCheck.input.notes
          ? `Additional details: ${completedCheck.input.notes}`
          : null,
        "",
        `Preliminary result: ${completedCheck.result.title}`,
        "Please review my profile and advise the next steps.",
      ]
        .filter((line): line is string => line !== null)
        .join("\n")
    : "";
  const whatsappHref = `https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  async function continueToProfile() {
    const isValid = await trigger(["name", "programme"], {
      shouldFocus: true,
    });

    if (isValid) {
      setStep(2);
    }
  }

  function completeEligibilityCheck(input: ApplyInput) {
    const programme = programmes.find(
      (item) => item.slug === input.programme,
    );

    if (!programme) {
      setError("programme", {
        type: "validate",
        message: "Select a valid programme.",
      });
      setStep(1);
      return;
    }

    setCompletedCheck({
      input,
      programme,
      result: assessProgrammeEligibility(programme, input),
    });
    setStep(3);
  }

  function startAgain() {
    reset({
      name: "",
      programme: "",
      completionStatus: "completed",
      professionalQualification: "none",
      workExperience: "none",
      score: "",
      notes: "",
    });
    setCompletedCheck(null);
    setStep(1);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-secondary/35 px-5 py-5 sm:px-8 sm:py-6">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[16.67%] right-[16.67%] top-5 h-px bg-border-strong"
          />
          <ol className="relative grid grid-cols-3" aria-label="Eligibility check progress">
            {["Programme", "Your profile", "Result"].map((label, index) => {
              const stepNumber = (index + 1) as 1 | 2 | 3;
              const isComplete = step > stepNumber;
              const isCurrent = step === stepNumber;

              return (
                <li
                  key={label}
                  className="flex flex-col items-center text-center"
                  aria-current={isCurrent ? "step" : undefined}
                >
                  <span
                    className={
                      isComplete || isCurrent
                        ? "relative z-10 flex size-10 items-center justify-center rounded-full border border-primary bg-primary text-sm font-bold text-surface shadow-sm"
                        : "relative z-10 flex size-10 items-center justify-center rounded-full border border-border-strong bg-surface text-sm font-bold text-muted"
                    }
                  >
                    {isComplete ? (
                      <Check className="size-4" aria-hidden="true" />
                    ) : (
                      stepNumber
                    )}
                  </span>
                  <span
                    className={
                      isCurrent
                        ? "mt-2 text-[11px] font-semibold text-primary sm:text-xs"
                        : "mt-2 text-[11px] font-medium text-muted sm:text-xs"
                    }
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        {step === 1 && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              void continueToProfile();
            }}
            noValidate
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Step 1 of 2
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
              Which programme interests you?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-base">
              Choose a programme so we can compare your background with its
              qualification level and available entry guidance.
            </p>

            <div className="mt-7 space-y-5">
              <FormField
                id="apply-name"
                label="Full name"
                required
                error={errors.name?.message}
              >
                <input
                  {...register("name")}
                  id="apply-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Ayesha Khan"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "apply-name-error" : undefined}
                  className={fieldClassName}
                />
              </FormField>

              <FormField
                id="apply-programme"
                label="Programme of interest"
                required
                error={errors.programme?.message}
              >
                <select
                  {...register("programme")}
                  id="apply-programme"
                  defaultValue=""
                  aria-invalid={Boolean(errors.programme)}
                  aria-describedby={
                    errors.programme ? "apply-programme-error" : undefined
                  }
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select a programme
                  </option>
                  {levelOrder.map((level) => (
                    <optgroup key={level} label={levelLabels[level]}>
                      {programmes
                        .filter((programme) => programme.level === level)
                        .map((programme) => {
                          const university = universityBySlug.get(
                            programme.universitySlug,
                          );
                          return (
                            <option key={programme.slug} value={programme.slug}>
                              {programme.title}
                              {university ? ` — ${university.shortName}` : ""}
                            </option>
                          );
                        })}
                    </optgroup>
                  ))}
                </select>
              </FormField>
            </div>

            {selectedProgramme && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-primary-200 bg-primary-subtle p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface text-primary shadow-2xs">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    {selectedProgramme.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-body">
                    {selectedProgramme.awardingBodyConfirmed === false
                      ? "Awarding body to be confirmed"
                      : universityBySlug.get(selectedProgramme.universitySlug)
                          ?.name || "Partner university"}
                    {" · "}
                    {levelLabels[selectedProgramme.level]}
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:w-auto"
            >
              Continue to my profile
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit(completeEligibilityCheck)} noValidate>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Step 2 of 2
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
                  Tell us about your background
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-base">
                  These details are used only to generate your preliminary
                  result in this browser.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-10 shrink-0 items-center gap-1.5 self-start rounded-lg px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Change programme
              </button>
            </div>

            {selectedProgramme && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <GraduationCap
                  className="size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="truncate text-xs text-muted">Checking for</p>
                  <p className="truncate text-sm font-semibold text-heading">
                    {selectedProgramme.title}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <FormField
                id="highest-qualification"
                label="Highest academic qualification"
                required
                error={errors.highestQualification?.message}
              >
                <select
                  {...register("highestQualification")}
                  id="highest-qualification"
                  defaultValue=""
                  aria-invalid={Boolean(errors.highestQualification)}
                  aria-describedby={
                    errors.highestQualification
                      ? "highest-qualification-error"
                      : undefined
                  }
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select qualification
                  </option>
                  {Object.entries(qualificationLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField
                id="completion-status"
                label="Qualification status"
                required
                error={errors.completionStatus?.message}
              >
                <select
                  {...register("completionStatus")}
                  id="completion-status"
                  aria-invalid={Boolean(errors.completionStatus)}
                  className={fieldClassName}
                >
                  {Object.entries(completionLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField
                id="professional-qualification"
                label="Professional qualification"
                required
                error={errors.professionalQualification?.message}
                hint="If applicable"
              >
                <select
                  {...register("professionalQualification")}
                  id="professional-qualification"
                  aria-invalid={Boolean(errors.professionalQualification)}
                  className={fieldClassName}
                >
                  {Object.entries(professionalLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField
                id="work-experience"
                label="Relevant work experience"
                required
                error={errors.workExperience?.message}
              >
                <select
                  {...register("workExperience")}
                  id="work-experience"
                  aria-invalid={Boolean(errors.workExperience)}
                  className={fieldClassName}
                >
                  {Object.entries(experienceLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField
                id="academic-score"
                label="Result or CGPA"
                hint="Optional"
                error={errors.score?.message}
              >
                <input
                  {...register("score")}
                  id="academic-score"
                  type="text"
                  placeholder="e.g. 3.1 CGPA, 65%, Grade B"
                  aria-invalid={Boolean(errors.score)}
                  className={fieldClassName}
                />
              </FormField>

              <FormField
                id="eligibility-notes"
                label="Additional qualification details"
                hint="Optional"
                error={errors.notes?.message}
              >
                <input
                  {...register("notes")}
                  id="eligibility-notes"
                  type="text"
                  placeholder="e.g. 9 ACCA papers completed"
                  aria-invalid={Boolean(errors.notes)}
                  className={fieldClassName}
                />
              </FormField>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4 text-xs leading-5 text-body">
              <ShieldCheck
                className="mt-0.5 size-4 shrink-0 text-success"
                aria-hidden="true"
              />
              <p>
                Nothing is submitted automatically. Your profile is only
                shared if you choose to continue through WhatsApp or the
                Contact Us page after viewing your result.
              </p>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface px-5 py-3 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back
              </button>
              <button
                type="submit"
                className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <FileCheck2 className="size-4" aria-hidden="true" />
                Check my eligibility
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>
        )}

        {step === 3 && completedCheck && (
          <div role="status" aria-live="polite">
            <div
              className={
                completedCheck.result.status === "likely"
                  ? "rounded-2xl border border-success/30 bg-success-50 p-5 sm:p-6"
                  : "rounded-2xl border border-info/30 bg-info-50 p-5 sm:p-6"
              }
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span
                  className={
                    completedCheck.result.status === "likely"
                      ? "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface text-success shadow-xs"
                      : "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface text-info shadow-xs"
                  }
                >
                  {completedCheck.result.status === "likely" ? (
                    <CheckCircle2 className="size-6" aria-hidden="true" />
                  ) : (
                    <CircleAlert className="size-6" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <span
                    className={
                      completedCheck.result.status === "likely"
                        ? "inline-flex rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-success"
                        : "inline-flex rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-info"
                    }
                  >
                    {completedCheck.result.status === "likely"
                      ? "Preliminary match"
                      : "Advisor review recommended"}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-heading sm:text-2xl">
                    {completedCheck.result.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-heading">
                    {completedCheck.programme.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-body sm:text-base">
                    {completedCheck.result.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <section
                aria-labelledby="eligibility-checkpoints-heading"
                className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
              >
                <h4
                  id="eligibility-checkpoints-heading"
                  className="text-base font-semibold text-heading"
                >
                  What to do next
                </h4>
                <ul className="mt-4 space-y-3">
                  {completedCheck.result.checkpoints.map((checkpoint) => (
                    <li
                      key={checkpoint}
                      className="flex items-start gap-2.5 text-sm leading-6 text-body"
                    >
                      <CheckCircle2
                        className="mt-1 size-4 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span>{checkpoint}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="programme-criteria-heading"
                className="rounded-2xl border border-border bg-secondary/30 p-5 sm:p-6"
              >
                <h4
                  id="programme-criteria-heading"
                  className="text-base font-semibold text-heading"
                >
                  Criteria to confirm with an advisor
                </h4>
                <ul className="mt-4 space-y-3">
                  {criteria.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-body"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/programmes/${completedCheck.programme.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  View programme details
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </section>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-surface-dark p-5 text-surface sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
                    Your check is complete
                  </p>
                  <h4 className="mt-2 text-xl font-semibold sm:text-2xl">
                    Contact an advisor for a confirmed assessment
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-surface/80">
                    Choose WhatsApp to send your checker summary instantly, or
                    visit Contact Us to use the enquiry form and other contact
                    options.
                  </p>
                </div>
                <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-success px-5 py-3 text-sm font-semibold text-surface transition-colors hover:bg-success/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                  >
                    <MessageSquare className="size-4" aria-hidden="true" />
                    Continue on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-surface/30 bg-surface/10 px-5 py-3 text-sm font-semibold text-surface transition-colors hover:border-surface/60 hover:bg-surface/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                  >
                    Go to Contact Us
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
              <p className="text-xs leading-5 text-muted">
                This result is guidance only. Admission and exemptions are
                confirmed by the awarding university after document review.
              </p>
              <button
                type="button"
                onClick={startAgain}
                className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <RotateCcw className="size-3.5" aria-hidden="true" />
                Check another programme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
