import type { ProgrammeStructure } from "@/types/programme";

interface ProgrammeFactsProps {
  structure: ProgrammeStructure;
}

export default function ProgrammeFacts({ structure }: ProgrammeFactsProps) {
  const exemptionsCount = structure.exemptions?.subjectCount ?? 0;
  const semesterCount = structure.semesters.length;

  const fourthFact =
    exemptionsCount > 0
      ? {
          value: String(exemptionsCount),
          label: "Subjects exempted",
          subtext: "Credited via CAF / ACCA",
        }
      : {
          value: "1 Year",
          label: "Program duration",
          subtext: "Credits every 2 months",
        };

  const facts = [
    {
      value: String(structure.totalSubjects),
      label: "Total subjects",
      subtext: "Full degree curriculum",
    },
    {
      value: String(structure.totalCreditHours),
      label: "Credit hours",
      subtext: "Accredited degree weight",
    },
    {
      value: String(semesterCount),
      label: `Semesters of ${structure.semesterLengthMonths} months`,
      subtext: "Accelerated academic pathway",
    },
    fourthFact,
  ];

  return (
    <section aria-label="Key programme facts" className="w-full">
      <div className="grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-xs sm:grid-cols-4 sm:divide-y-0">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col justify-center p-5 sm:p-6"
          >
            <span className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {fact.value}
            </span>
            <span className="mt-1 text-sm font-semibold text-heading sm:text-base">
              {fact.label}
            </span>
            <span className="mt-0.5 text-xs text-muted">
              {fact.subtext}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
