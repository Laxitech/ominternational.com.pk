import Link from "next/link";
import { BookOpen, Clock, FileCheck2, GraduationCap, Sparkles } from "lucide-react";
import type { Programme } from "@/types/programme";

interface ProgrammeSummaryCardProps {
  programme: Programme;
}

export default function ProgrammeSummaryCard({
  programme,
}: ProgrammeSummaryCardProps) {
  const structure = programme.structure;
  const exemptionsCount = structure?.exemptions?.subjectCount;
  const isPostgraduate = programme.level === "masters" || programme.level === "doctoral";
  const checkActionLabel = isPostgraduate ? "Check MBA Eligibility" : "Check my exemptions";
  const mobileCheckLabel = isPostgraduate ? "Check eligibility" : "Check exemptions";

  return (
    <>
      {/* Desktop Sticky Summary Card (Sticky top-28) */}
      <aside
        aria-label="Programme Quick Summary"
        className="hidden lg:block sticky top-28 space-y-6"
      >
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
          <div className="border-b border-border pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Degree Summary
            </span>
            <h3 className="mt-1 text-lg font-semibold text-heading">
              {programme.title}
            </h3>
            {programme.level && (
              <p className="mt-1 text-xs text-muted capitalize">
                Level: {programme.level === "masters" ? "Master's (MQF Level 7)" : `${programme.level} Degree`}
              </p>
            )}
          </div>

          {/* Quick Specifications */}
          <dl className="divide-y divide-border text-sm">
            {structure && (
              <>
                <div className="flex items-center justify-between py-3">
                  <dt className="flex items-center gap-2 text-muted">
                    <BookOpen className="size-4 text-primary" aria-hidden="true" />
                    <span>Total subjects</span>
                  </dt>
                  <dd className="font-semibold text-heading">
                    {structure.totalSubjects}
                  </dd>
                </div>

                <div className="flex items-center justify-between py-3">
                  <dt className="flex items-center gap-2 text-muted">
                    <GraduationCap className="size-4 text-primary" aria-hidden="true" />
                    <span>Credit hours</span>
                  </dt>
                  <dd className="font-semibold text-heading">
                    {structure.totalCreditHours}
                  </dd>
                </div>

                <div className="flex items-center justify-between py-3">
                  <dt className="flex items-center gap-2 text-muted">
                    <Clock className="size-4 text-primary" aria-hidden="true" />
                    <span>Duration</span>
                  </dt>
                  <dd className="font-semibold text-heading">
                    {programme.duration || `${structure.semesters.length} Semesters (${structure.semesterLengthMonths} mos)`}
                  </dd>
                </div>
              </>
            )}

            {exemptionsCount !== undefined && exemptionsCount > 0 ? (
              <div className="flex items-center justify-between py-3">
                <dt className="flex items-center gap-2 text-muted">
                  <FileCheck2 className="size-4 text-primary" aria-hidden="true" />
                  <span>Exemptions</span>
                </dt>
                <dd className="font-semibold text-heading">
                  Up to {exemptionsCount} subjects
                </dd>
              </div>
            ) : structure ? (
              <div className="flex items-center justify-between py-3">
                <dt className="flex items-center gap-2 text-muted">
                  <Sparkles className="size-4 text-primary" aria-hidden="true" />
                  <span>Credit cadence</span>
                </dt>
                <dd className="font-semibold text-heading">
                  Every 2 months
                </dd>
              </div>
            ) : null}

            {programme.majors && programme.majors.length > 0 && (
              <div className="flex items-center justify-between py-3">
                <dt className="text-muted">Specializations</dt>
                <dd className="font-semibold text-heading">
                  {programme.majors.length} Options
                </dd>
              </div>
            )}

            <div className="flex items-center justify-between py-3">
              <dt className="text-muted">Delivery mode</dt>
              <dd className="font-semibold text-heading">
                {programme.fullyOnline ? "Online / Blended" : "On-Campus"}
              </dd>
            </div>

            {/* Scholarship info */}
            {programme.scholarship && (
              <>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">Scholarship</dt>
                  <dd className="font-semibold text-heading">
                    {programme.scholarship.totalFee}
                  </dd>
                </div>
                <div className="py-3">
                  <p className="text-xs text-muted leading-relaxed">
                    {programme.scholarship.description}
                  </p>
                  {programme.scholarship.instalmentPlan && (
                    <>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">
                        Instalment plan
                      </p>
                      <ul className="space-y-1 mt-1 text-xs text-body">
                        {programme.scholarship.instalmentPlan.map((item, idx) => (
                          <li key={idx} className="flex justify-between">
                            <span>{item.label}</span>
                            <span>{item.amount}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-1 text-[10px] text-muted">
                        {programme.scholarship.instalmentPlan
                          .map((item) => item.when)
                          .join(" · ")}
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </dl>

          {/* CTAs */}
          <div className="mt-6 space-y-3 pt-2">


            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              Enquire Now
            </Link>


          </div>
        </div>
      </aside>

      {/* Mobile Fixed Bottom Bar */}
      <div
        role="region"
        aria-label="Mobile quick actions"
        className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-surface/95 p-3.5 backdrop-blur-md lg:hidden shadow-lg"
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <a
            href="#exemption-check"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition-colors active:bg-primary-dark"
          >
            {mobileCheckLabel}
          </a>

          <Link
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-heading transition-colors active:bg-secondary"
          >
            Enquire
          </Link>
        </div>
      </div>
    </>
  );
}
