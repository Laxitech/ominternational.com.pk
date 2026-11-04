import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ExternalLink,
  MapPin,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Programme } from "@/types/programme";
import type { University } from "@/types/university";

type UniversityCardProps = {
  university: University;
  programmes?: Programme[];
  featured?: boolean;
};

export default function UniversityCard({
  university,
  programmes = [],
  featured = false,
}: UniversityCardProps) {
  const universityProgrammes = programmes.filter(
    (programme) => programme.universitySlug === university.slug,
  );
  const programmeCount = universityProgrammes.length;
  const programmeSchoolCount = new Set(
    universityProgrammes
      .map((programme) => programme.schoolSlug)
      .filter(Boolean),
  ).size;
  const schoolCount = university.schools?.length || programmeSchoolCount;
  const detailHref = `/universities/${university.slug}`;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border bg-surface shadow-xs transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        featured ? "border-primary-200" : "border-border",
      )}
    >
      <div className="relative h-48 overflow-hidden bg-secondary sm:h-56 lg:h-60">
        {university.aboutImage ? (
          <Image
            src={university.aboutImage}
            alt={`${university.name} campus`}
            fill
            priority={featured}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-surface-dark text-primary-200">
            <Building2 className="size-14" aria-hidden="true" />
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface-dark/35 via-transparent to-surface-dark/10"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          {university.badge ? (
            <span className="max-w-[70%] rounded-full border border-surface/30 bg-surface/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur-sm">
              {university.badge}
            </span>
          ) : (
            <span />
          )}

          {featured && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-surface shadow-sm">
              <Star className="size-3 fill-current" aria-hidden="true" />
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full border border-primary-200 bg-primary-subtle px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {university.shortName}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {university.city}, {university.country}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-heading transition-colors group-hover:text-primary sm:text-2xl">
          <Link
            href={detailHref}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            {university.name}
          </Link>
        </h3>

        {university.tagline && (
          <p className="mt-2 text-sm font-medium leading-6 text-accent">
            {university.tagline}
          </p>
        )}

        <p className="mt-3 text-sm leading-7 text-body">
          {university.summary}
        </p>

        <div className="mt-6 grid grid-cols-2 divide-x divide-border border-y border-border py-4 text-center">
          <div className="px-2">
            <p className="text-lg font-bold tracking-tight text-heading sm:text-xl">
              {programmeCount}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-muted sm:text-xs">
              Programmes
            </p>
          </div>

          <div className="px-2">
            <p className="text-lg font-bold tracking-tight text-heading sm:text-xl">
              {university.established}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-muted sm:text-xs">
              Established
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-3 pt-5">
          <Link
            href={detailHref}
            aria-label={`View details for ${university.name}`}
            className="group/link inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            View University
            <ArrowRight
              className="size-4 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>

          {university.website && (
            <a
              href={university.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the official ${university.shortName} website`}
              title={`Official ${university.shortName} website`}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-surface text-heading transition-colors hover:border-primary hover:bg-primary-subtle hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
