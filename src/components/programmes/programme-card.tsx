import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Building2,
  Clock3,
  Laptop,
} from "lucide-react";
import type { Programme } from "@/types/programme";
import type { University } from "@/types/university";

type ProgrammeCardProps = {
  programme: Programme;
  university?: Pick<University, "slug" | "name" | "shortName">;
};

const levelLabels: Record<Programme["level"], string> = {
  bachelors: "Bachelor's",
  masters: "Master's",
  doctoral: "Doctoral",
  "graduate-diplomas": "Graduate diploma",
};

function getStudyModeLabel(programme: Programme) {
  if (programme.fullyOnline) {
    return "100% online available";
  }

  if (
    programme.modes.includes("conventional") &&
    programme.modes.includes("odl")
  ) {
    return "Campus & ODL";
  }

  if (programme.modes.includes("odl")) {
    return "Distance learning";
  }

  return "On-campus";
}

export default function ProgrammeCard({
  programme,
  university,
}: ProgrammeCardProps) {
  const universityName =
    programme.awardingBodyConfirmed === false
      ? "Awarding body to be confirmed"
      : university?.shortName || "Partner university";
  const detailHref = `/programmes/${programme.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary-300"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary-200 bg-primary-subtle px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {levelLabels[programme.level]}
          </span>
          {programme.fullyOnline && (
            <span className="inline-flex items-center gap-1 rounded-full border border-success/20 bg-success-50 px-2.5 py-1 text-[11px] font-semibold text-success">
              <Laptop className="size-3" aria-hidden="true" />
              Online option
            </span>
          )}
          {programme.scholarship && (
            <span className="inline-flex items-center gap-1 rounded-full border border-warning/20 bg-warning-50 px-2.5 py-1 text-[11px] font-semibold text-warning">
              <Award className="size-3" aria-hidden="true" />
              Scholarship
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted">
          <Building2 className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
          <span>{universityName}</span>
        </div>

        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-heading transition-colors duration-200 group-hover:text-primary sm:text-[1.35rem]">
          <Link
            href={detailHref}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            {programme.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-6 text-body">
          {programme.summary ||
            "Explore this flexible academic pathway and speak with an advisor about entry requirements."}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-border py-4">
          <div>
            <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
              <Laptop className="size-3.5 text-primary" aria-hidden="true" />
              Study mode
            </dt>
            <dd className="mt-1 text-xs font-medium leading-5 text-heading sm:text-sm">
              {getStudyModeLabel(programme)}
            </dd>
          </div>
          <div className="border-l border-border pl-3">
            <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
              <Clock3 className="size-3.5 text-primary" aria-hidden="true" />
              Duration
            </dt>
            <dd className="mt-1 text-xs font-medium leading-5 text-heading sm:text-sm">
              {programme.duration || "Confirm with advisor"}
            </dd>
          </div>
        </dl>

        {(programme.majors?.length ||
          programme.structure?.exemptions?.subjectCount) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {programme.majors && programme.majors.length > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-medium text-primary">
                <BookOpenCheck className="size-3.5" aria-hidden="true" />
                {programme.majors.length} specialisation
                {programme.majors.length === 1 ? "" : "s"}
              </span>
            )}
            {programme.structure?.exemptions && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-medium text-primary">
                <BookOpenCheck className="size-3.5" aria-hidden="true" />
                {programme.structure.exemptions.subjectCount} subject exemptions
              </span>
            )}
          </div>
        )}

        {programme.schoolName && (
          <p className="mt-5 text-xs leading-5 text-muted">
            {programme.schoolName}
          </p>
        )}

        <div className="mt-auto pt-6">
          <Link
            href={detailHref}
            className="group/link inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            aria-label={`View details for ${programme.title}`}
          >
            View programme
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
