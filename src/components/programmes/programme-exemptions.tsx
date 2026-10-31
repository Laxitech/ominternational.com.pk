import { Check, GraduationCap } from "lucide-react";
import type {
  ProgrammeEligibility,
  ProgrammeStructureExemptions,
} from "@/types/programme";
import ExemptionCheckForm from "@/components/forms/exemption-check-form";

interface ProgrammeExemptionsProps {
  exemptions?: ProgrammeStructureExemptions;
  eligibility?: ProgrammeEligibility;
  programmeTitle?: string;
  isPostgraduate?: boolean;
}

export default function ProgrammeExemptions({
  exemptions,
  eligibility,
  programmeTitle = "BS Accounting and Finance",
  isPostgraduate = false,
}: ProgrammeExemptionsProps) {
  const hasExemptions = Boolean(exemptions && exemptions.subjectCount > 0);

  return (
    <section
      id="exemption-check"
      aria-labelledby="exemptions-heading"
      className="scroll-mt-24 rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Left Column: Heading, criteria list, and applicant note */}
        <div className="lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {hasExemptions ? "Direct Credit Transfer" : "Admissions & Entry Route"}
          </span>

          <h2
            id="exemptions-heading"
            className="mt-1 text-xl font-semibold tracking-tight text-heading sm:text-2xl"
          >
            {hasExemptions ? "Subject exemptions" : eligibility?.title || "MBA Eligibility Criteria"}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
            {hasExemptions
              ? `${exemptions!.subjectCount} subjects are exempted on the basis of your CAF or ACCA qualification.`
              : "Admission is open to candidates holding recognized Level-6 qualifications for accelerated graduation within one year."}
          </p>

          {/* Basis list for exemptions (BS) */}
          {hasExemptions && exemptions?.basis && (
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Recognized Qualification Basis
              </h3>
              <ul className="mt-3 space-y-2.5">
                {exemptions.basis.map((basis) => (
                  <li
                    key={basis}
                    className="flex items-center gap-2.5 text-sm font-medium text-heading"
                  >
                    <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-primary">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span>{basis}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Entry criteria list (MBA & others) */}
          {eligibility?.items && eligibility.items.length > 0 && (
            <div className={hasExemptions ? "mt-6 border-t border-border pt-4" : "mt-6"}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {eligibility.title || "Mandatory Criteria (Level-6)"}
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-heading">
                {eligibility.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-medium">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-primary">
                      <GraduationCap className="size-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applicant note in highlighted plain block */}
          {eligibility?.applicantNote && (
            <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-4 text-sm leading-relaxed text-body">
              <p className="font-semibold text-heading mb-1">
                Note for Applicants
              </p>
              <p>{eligibility.applicantNote}</p>
            </div>
          )}
        </div>

        {/* Right Column: Interactive eligibility form */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-border bg-surface-elevated/50 p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-heading sm:text-xl">
                {isPostgraduate ? "Check MBA Eligibility" : "Check my exemptions"}
              </h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                {isPostgraduate
                  ? "Enter your academic credentials and an advisor will verify your Level-6 eligibility for 1-year fast-track entry."
                  : "Enter your passed papers and an OM International advisor will evaluate your transferable subject exemptions."}
              </p>
            </div>

            <ExemptionCheckForm
              programmeTitle={programmeTitle}
              isPostgraduate={isPostgraduate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
