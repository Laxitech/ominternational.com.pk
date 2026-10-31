import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  GraduationCap,
  Laptop,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { University } from "@/types/university";
import type { Programme } from "@/types/programme";
import { cn } from "@/lib/utils";

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
  const uniProgrammes = programmes.filter(
    (p) => p.universitySlug === university.slug,
  );
  const programmeCount = uniProgrammes.length;
  const schoolCount =
    university.schools?.length ||
    new Set(uniProgrammes.map((p) => p.schoolSlug)).size;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10",
        "shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl",
        featured && "ring-1 ring-primary/20",
      )}
    >
      {/* Top accent badge & location strip */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {university.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                {university.badge}
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted">
              <Calendar className="size-3 text-muted/80" aria-hidden="true" />
              Est. {university.established}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            <span>{university.city}, Malaysia</span>
          </div>
        </div>

        {/* University Name & Tagline */}
        <div className="mt-5 sm:mt-6">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-heading sm:text-3xl transition-colors duration-200 group-hover:text-primary">
            <Link
              href={`/universities/${university.slug}`}
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              {university.name}
            </Link>
          </h3>
          {university.tagline && (
            <p className="mt-2 text-sm font-medium text-accent">
              {university.tagline}
            </p>
          )}
          <p className="mt-4 text-sm leading-relaxed text-body sm:text-base sm:leading-7">
            {university.summary}
          </p>
        </div>

        {/* Highlights List */}
        {university.highlights && university.highlights.length > 0 && (
          <div className="mt-6 space-y-2.5 border-t border-border/80 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Key Academic Highlights
            </p>
            <ul className="space-y-2 text-sm text-body">
              {university.highlights.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="size-4 shrink-0 text-success mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key At-a-Glance Metrics Strip */}
        <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-border/70 bg-secondary/30 p-3 sm:gap-4 sm:p-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-xs text-muted">
              <GraduationCap className="size-3.5 text-primary" aria-hidden="true" />
              <span>Programmes</span>
            </div>
            <span className="mt-1 font-serif text-lg font-bold text-heading sm:text-xl">
              {programmeCount > 0 ? `${programmeCount}+` : "Multiple"}
            </span>
            <span className="text-[11px] text-muted">Offered</span>
          </div>

          <div className="flex flex-col items-center border-x border-border/80 text-center">
            <div className="flex items-center gap-1 text-xs text-muted">
              <Building2 className="size-3.5 text-primary" aria-hidden="true" />
              <span>Faculties</span>
            </div>
            <span className="mt-1 font-serif text-lg font-bold text-heading sm:text-xl">
              {schoolCount > 0 ? `${schoolCount}` : "4+"}
            </span>
            <span className="text-[11px] text-muted">Schools</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-xs text-muted">
              <Award className="size-3.5 text-primary" aria-hidden="true" />
              <span>Accreditation</span>
            </div>
            <span className="mt-1 font-serif text-lg font-bold text-heading sm:text-xl">
              MQA
            </span>
            <span className="text-[11px] text-muted">&amp; MOHE Malaysia</span>
          </div>
        </div>

        {/* Study Modes Pill List */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted mr-1">Modes:</span>
          {university.modes.includes("conventional") && (
            <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-heading">
              <Building2 className="size-3 text-accent" aria-hidden="true" />
              Campus in KL
            </span>
          )}
          {university.modes.includes("odl") && (
            <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-heading">
              <Laptop className="size-3 text-accent" aria-hidden="true" />
              Distance Learning (ODL)
            </span>
          )}
          {university.modes.includes("online") && (
            <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-heading">
              <Globe className="size-3 text-accent" aria-hidden="true" />
              100% Online
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 border-t border-border pt-6">
        <Link
          href={`/universities/${university.slug}`}
          className="group/btn inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-all duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <span>View University &amp; Programmes</span>
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>

        {university.website && (
          <a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-heading transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            title={`Visit official ${university.shortName} website`}
          >
            <span>Official Portal</span>
            <ExternalLink className="size-3.5 text-muted" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
