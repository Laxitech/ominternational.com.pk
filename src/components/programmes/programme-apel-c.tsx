import type { ProgrammeStructureApelC } from "@/types/programme";

interface ProgrammeApelCProps {
  apelC: ProgrammeStructureApelC;
}

export default function ProgrammeApelC({ apelC }: ProgrammeApelCProps) {
  const methodText = apelC.method.join(" or ");

  return (
    <section
      aria-labelledby="apel-c-heading"
      className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 items-start">
        {/* Left Column: Heading and short intro text */}
        <div className="md:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Experiential Learning Credit
          </span>
          <h2
            id="apel-c-heading"
            className="mt-1 text-xl font-semibold tracking-tight text-heading sm:text-2xl"
          >
            APEL-C Credit Recognition
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
            APEL-C lets you earn credit for {apelC.subjectCount} subjects through a challenge test or by submitting a portfolio, instead of attending classes.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Accreditation of Prior Experiential Learning for Credit (APEL-C) is an established mechanism under the Malaysian Qualifications Agency (MQA) that formally validates your workplace skills and prior professional competencies.
          </p>
        </div>

        {/* Right Column: Ruled list */}
        <div className="md:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            <li className="flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                Subjects Credited
              </span>
              <span className="mt-1 font-semibold text-heading sm:mt-0 sm:text-right">
                {apelC.subjectCount} subjects
              </span>
            </li>

            <li className="flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                Assessment Method
              </span>
              <span className="mt-1 font-semibold text-heading sm:mt-0 sm:text-right">
                {methodText}
              </span>
            </li>

            <li className="flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                Completion Period
              </span>
              <span className="mt-1 font-semibold text-heading sm:mt-0 sm:text-right">
                {apelC.period.startsWith("Completed") ? apelC.period : `Completed ${apelC.period.toLowerCase()}`}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
