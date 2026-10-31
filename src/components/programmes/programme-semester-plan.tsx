import type { ProgrammeStructure } from "@/types/programme";

interface ProgrammeSemesterPlanProps {
  structure: ProgrammeStructure;
}

export default function ProgrammeSemesterPlan({
  structure,
}: ProgrammeSemesterPlanProps) {
  const { semesters, semesterLengthMonths } = structure;

  return (
    <section
      aria-labelledby="semester-plan-heading"
      className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
    >
      <div className="max-w-2xl">
        <h2
          id="semester-plan-heading"
          className="text-xl font-semibold tracking-tight text-heading sm:text-2xl"
        >
          Semester plan
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
          A clear timeline structured over three {semesterLengthMonths}-month semesters, balancing rigorous coursework with professional commitments.
        </p>
      </div>

      {/* Desktop Timeline (3 columns joined by a hairline with small dots) */}
      <div className="mt-12 hidden md:block">
        <div className="relative">
          {/* Connecting hairline running through the tops of columns */}
          <div
            aria-hidden="true"
            className="absolute left-6 right-6 top-3 border-t border-border"
          />

          <div className="grid grid-cols-3 gap-8">
            {semesters.map((sem, index) => (
              <div key={sem.label} className="relative flex flex-col pt-8">
                {/* Timeline Dot */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary-subtle"
                />

                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Step 0{index + 1}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-heading">
                  {sem.label}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
                  <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-heading">
                    {semesterLengthMonths} months
                  </span>
                  <span>·</span>
                  <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-heading">
                    {sem.subjectCount} subjects
                  </span>
                </div>

                {/* Optional modules breakdown (e.g. 2-month modules) */}
                {sem.modules && sem.modules.length > 0 && (
                  <div className="mt-4 space-y-2 border-t border-border/60 pt-3">
                    {sem.modules.map((mod) => (
                      <div
                        key={mod.label}
                        className="rounded-xl border border-border/70 bg-surface-elevated/70 p-2.5 text-xs"
                      >
                        <span className="font-semibold text-heading">
                          {mod.label}
                        </span>
                        <p className="mt-0.5 text-muted leading-relaxed">
                          {mod.subjectsDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional subjects list (only when provided) */}
                {sem.subjects && sem.subjects.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-xs text-body">
                    {sem.subjects.map((subject) => (
                      <li key={subject} className="flex items-start gap-1.5">
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-primary" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Extra note (e.g. final semester internship/training report) */}
                {sem.extra && (
                  <div className="mt-5 rounded-xl border border-border bg-surface-elevated p-3.5 text-xs leading-relaxed text-muted">
                    <p className="font-medium text-heading mb-1">Final Submission:</p>
                    <p>{sem.extra}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline (vertical hairline with dots on the left) */}
      <div className="mt-8 md:hidden">
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          {semesters.map((sem, index) => (
            <div key={sem.label} className="relative">
              {/* Dot on left vertical line */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary-subtle"
              />

              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Step 0{index + 1}
              </span>
              <h3 className="text-base font-semibold text-heading">
                {sem.label}
              </h3>

              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
                <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-heading">
                  {semesterLengthMonths} months
                </span>
                <span>·</span>
                <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-heading">
                  {sem.subjectCount} subjects
                </span>
              </div>

              {/* Optional modules breakdown on mobile */}
              {sem.modules && sem.modules.length > 0 && (
                <div className="mt-3 space-y-1.5 border-t border-border/60 pt-2.5">
                  {sem.modules.map((mod) => (
                    <div
                      key={mod.label}
                      className="rounded-xl border border-border/70 bg-surface-elevated/70 p-2.5 text-xs"
                    >
                      <span className="font-semibold text-heading">
                        {mod.label}
                      </span>
                      <p className="mt-0.5 text-muted leading-relaxed">
                        {mod.subjectsDescription}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional subjects list */}
              {sem.subjects && sem.subjects.length > 0 && (
                <ul className="mt-3 space-y-1.5 border-t border-border/60 pt-2 text-xs text-body">
                  {sem.subjects.map((subject) => (
                    <li key={subject} className="flex items-start gap-1.5">
                      <span className="mt-1 size-1 shrink-0 rounded-full bg-primary" />
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Extra note */}
              {sem.extra && (
                <div className="mt-3 rounded-xl border border-border bg-surface-elevated p-3 text-xs leading-relaxed text-muted">
                  <p className="font-medium text-heading mb-0.5">Final Submission:</p>
                  <p>{sem.extra}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
