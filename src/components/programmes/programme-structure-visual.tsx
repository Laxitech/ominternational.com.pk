import type { ProgrammeStructure } from "@/types/programme";

interface ProgrammeStructureVisualProps {
  structure: ProgrammeStructure;
}

export default function ProgrammeStructureVisual({
  structure,
}: ProgrammeStructureVisualProps) {
  const exemptCount = structure.exemptions?.subjectCount ?? 0;
  const apelCCount = structure.apelC?.subjectCount ?? 0;
  const semestersCount = structure.semesters.reduce(
    (acc, s) => acc + s.subjectCount,
    0,
  );
  const total = structure.totalSubjects;

  // Case A: Programme with professional exemptions (e.g. BS Accounting & Finance)
  if (exemptCount > 0) {
    const exemptPct = ((exemptCount / total) * 100).toFixed(1);
    const apelCPct = ((apelCCount / total) * 100).toFixed(1);
    const semesterPct = ((semestersCount / total) * 100).toFixed(1);

    const ariaDescription = `Visual subject breakdown for ${total} total subjects: ${exemptCount} subjects exempted on the basis of CAF or ACCA qualifications, ${apelCCount} subjects awarded through APEL-C, and ${semestersCount} subjects studied over 3 semesters. Total ${structure.totalCreditHours} credit hours.`;

    return (
      <section
        aria-labelledby="structure-visual-heading"
        className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
      >
        <div className="max-w-2xl">
          <h2
            id="structure-visual-heading"
            className="text-xl font-semibold tracking-tight text-heading sm:text-2xl"
          >
            How your {total} subjects add up
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
            Rather than starting from scratch, your prior professional accounting studies are recognized as credits, significantly shortening your path to graduation.
          </p>
        </div>

        {/* Segmented Bar Visual */}
        <div className="mt-8">
          <div
            role="img"
            aria-label={ariaDescription}
            className="flex h-12 w-full overflow-hidden rounded-xl border border-border/80 shadow-xs"
          >
            {/* Exempted segment */}
            <div
              style={{ width: `${exemptPct}%` }}
              className="flex items-center justify-center bg-primary-subtle border-r border-primary/20 px-2 text-xs font-bold text-primary transition-all duration-300 sm:text-sm"
            >
              <span className="truncate">
                Exempted ({exemptCount})
              </span>
            </div>

            {/* APEL-C segment */}
            <div
              style={{ width: `${apelCPct}%` }}
              className="flex items-center justify-center bg-accent border-r border-border/40 px-2 text-xs font-bold text-heading transition-all duration-300 sm:text-sm"
            >
              <span className="truncate text-white">
                APEL-C ({apelCCount})
              </span>
            </div>

            {/* Semesters segment */}
            <div
              style={{ width: `${semesterPct}%` }}
              className="flex items-center justify-center bg-primary px-2 text-xs font-bold text-on-primary transition-all duration-300 sm:text-sm"
            >
              <span className="truncate text-white">
                Semesters ({semestersCount})
              </span>
            </div>
          </div>

          {/* Desktop aligned labels */}
          <div className="mt-3 hidden sm:flex w-full items-start justify-between text-xs text-muted">
            <div style={{ width: `${exemptPct}%` }} className="pr-2">
              <span className="font-semibold text-heading">{exemptCount} subjects</span>
              <p className="mt-0.5 text-xs text-muted">Exempted via CAF / ACCA</p>
            </div>
            <div style={{ width: `${apelCPct}%` }} className="px-2">
              <span className="font-semibold text-heading">{apelCCount} subjects</span>
              <p className="mt-0.5 text-xs text-muted">APEL-C recognition</p>
            </div>
            <div style={{ width: `${semesterPct}%` }} className="pl-2">
              <span className="font-semibold text-heading">{semestersCount} subjects</span>
              <p className="mt-0.5 text-xs text-muted">3 academic semesters</p>
            </div>
          </div>

          {/* Mobile stacked legend */}
          <div className="mt-4 flex flex-col gap-2 sm:hidden">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-primary-subtle border border-primary/30" />
                <span className="font-medium text-heading">Exempted subjects</span>
              </div>
              <span className="font-semibold text-heading">{exemptCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-accent" />
                <span className="font-medium text-heading">APEL-C subjects</span>
              </div>
              <span className="font-semibold text-heading">{apelCCount}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-primary" />
                <span className="font-medium text-heading">Semester study subjects</span>
              </div>
              <span className="font-semibold text-heading">{semestersCount}</span>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-4 text-xs font-medium text-muted">
            {structure.totalCreditHours} credit hours total across all {total} curriculum subjects.
          </p>
        </div>

        {/* Ruled three-row list */}
        <div className="mt-8 border-t border-border">
          <ul className="divide-y divide-border">
            <li className="flex flex-col py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="flex items-center gap-2 sm:w-48 shrink-0">
                <span className="inline-flex items-center rounded-md bg-primary-subtle px-2.5 py-1 text-xs font-semibold text-primary">
                  {exemptCount} Subjects
                </span>
                <span className="text-sm font-semibold text-heading">Exemptions</span>
              </div>
              <p className="mt-1 text-sm text-body sm:mt-0 sm:text-right">
                Exempted on the basis of your CAF qualification (ICAP) or ACCA part qualification papers.
              </p>
            </li>

            <li className="flex flex-col py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="flex items-center gap-2 sm:w-48 shrink-0">
                <span className="inline-flex items-center rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-heading text-white">
                  {apelCCount} Subjects
                </span>
                <span className="text-sm font-semibold text-heading">APEL-C</span>
              </div>
              <p className="mt-1 text-sm text-body sm:mt-0 sm:text-right">
                Earned through APEL-C via a challenge test or portfolio submission over 1 year.
              </p>
            </li>

            <li className="flex flex-col py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="flex items-center gap-2 sm:w-48 shrink-0">
                <span className="inline-flex items-center rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-on-primary text-white">
                  {semestersCount} Subjects
                </span>
                <span className="text-sm font-semibold text-heading">Semesters</span>
              </div>
              <p className="mt-1 text-sm text-body sm:mt-0 sm:text-right">
                Completed across 3 semesters (5 subjects per 4-month semester).
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }

  // Case B: Modular Semester Progression (e.g. 1-Year MBA)
  const semesterCount = structure.semesters.length;
  const equalPct = (100 / semesterCount).toFixed(1);
  const ariaDescription = `Curriculum structure for ${total} total subjects across ${semesterCount} four-month semesters, earning credits every two months. Total ${structure.totalCreditHours} credit hours.`;

  return (
    <section
      aria-labelledby="structure-visual-heading"
      className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
    >
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Academic Cadence & Milestone Credits
        </span>
        <h2
          id="structure-visual-heading"
          className="mt-1 text-xl font-semibold tracking-tight text-heading sm:text-2xl"
        >
          How your {total} subjects add up
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
          Complete your program within one year. Courses are organized into 2-month modules so you attain academic credits after every two months across three 4-month semesters.
        </p>
      </div>

      {/* Segmented Bar Visual for Semesters */}
      <div className="mt-8">
        <div
          role="img"
          aria-label={ariaDescription}
          className="flex h-12 w-full overflow-hidden rounded-xl border border-border/80 shadow-xs"
        >
          {structure.semesters.map((sem, idx) => {
            const isLast = idx === semesterCount - 1;
            const bgClass =
              idx === 0
                ? "bg-primary text-on-primary"
                : idx === 1
                  ? "bg-accent text-heading text-white"
                  : "bg-primary-subtle text-primary border-l border-primary/20";

            return (
              <div
                key={sem.label}
                style={{ width: `${equalPct}%` }}
                className={`flex items-center justify-center px-2 text-xs font-bold transition-all duration-300 sm:text-sm ${bgClass} ${!isLast ? "border-r border-border/30" : ""}`}
              >
                <span className="truncate  ">
                  {sem.label} ({sem.subjectCount})
                </span>
              </div>
            );
          })}
        </div>

        {/* Desktop aligned labels */}
        <div className="mt-3 hidden sm:flex w-full items-start justify-between text-xs text-muted">
          {structure.semesters.map((sem) => (
            <div key={sem.label} style={{ width: `${equalPct}%` }} className="pr-2">
              <span className="font-semibold text-heading">
                {sem.label}: {sem.subjectCount} subjects
              </span>
              <p className="mt-0.5 text-xs text-muted">2 modules · 4 months</p>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3 text-xs font-medium text-muted">
          <span>{structure.totalCreditHours} credit hours / {total} subjects in total</span>
          <span className="font-semibold text-primary">Attain credits every 2 months</span>
        </div>
      </div>

      {/* Ruled three-row list */}
      <div className="mt-6 border-t border-border">
        <ul className="divide-y divide-border">
          {structure.semesters.map((sem) => {
            const moduleInfo = sem.modules
              ? sem.modules.map((m) => `${m.label}: ${m.subjectsDescription}`).join(" · ")
              : `${sem.subjectCount} subjects over ${structure.semesterLengthMonths} months`;

            return (
              <li
                key={sem.label}
                className="flex flex-col py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="flex items-center gap-2 sm:w-48 shrink-0">
                  <span className="inline-flex items-center rounded-md bg-primary-subtle px-2.5 py-1 text-xs font-semibold text-primary">
                    {sem.label}
                  </span>
                  <span className="text-sm font-semibold text-heading">
                    {sem.subjectCount} Subjects
                  </span>
                </div>
                <p className="mt-1 text-sm text-body sm:mt-0 sm:text-right">
                  {moduleInfo}
                  {sem.extra ? ` (${sem.extra})` : ""}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
