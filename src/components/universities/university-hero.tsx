"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronRight,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { University } from "@/types/university";
import { cn } from "@/lib/utils";

type UniversityHeroProps = {
  university: University;
};

export default function UniversityHero({ university }: UniversityHeroProps) {
  const dynamicStats = university.keyStats ?? [
    { label: "Established", value: String(university.established), sublabel: university.city },
    { label: "Location", value: university.city, sublabel: university.country },
    { label: "Ownership", value: university.owner, sublabel: "Governing Authority" },
    { label: "Accreditation", value: "MQA Approved", sublabel: "MOHE Malaysia" },
  ];

  return (
    <section
      aria-labelledby="university-hero-heading"
      className={cn(
        "relative isolate overflow-hidden bg-surface-dark",
        "py-12 sm:py-16 lg:py-24",
      )}
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={university.heroImage ?? "/images/page header/unirazak.jpg"}
          alt={`${university.name} campus facilities`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/60 lg:via-primary-900/80 lg:to-primary-900/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-primary-900/40"
        />
      </div>

      {/* Radiant glow accent */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 -z-10 size-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-primary-200">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="transition-colors hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
              >
                Home
              </Link>
              <ChevronRight
                className="size-3 text-primary-300/60"
                aria-hidden="true"
              />
            </li>
            <li className="flex items-center gap-1.5">
              <Link
                href="/universities"
                className="transition-colors hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
              >
                Universities
              </Link>
              <ChevronRight
                className="size-3 text-primary-300/60"
                aria-hidden="true"
              />
            </li>
            <li>
              <span className="text-surface font-semibold" aria-current="page">
                {university.shortName}
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Heading, description, actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              {university.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  {university.badge}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-surface/20 bg-surface/10 px-3 py-1 text-xs font-medium text-surface/90">
                <MapPin className="size-3 text-accent" aria-hidden="true" />
                {university.city}, {university.country}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-surface/20 bg-surface/10 px-3 py-1 text-xs font-medium text-surface/90">
                <Calendar className="size-3 text-accent" aria-hidden="true" />
                Est. {university.established}
              </span>
            </div>

            <h1
              id="university-hero-heading"
              className={cn(
                "text-balance font-serif",
                "text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08]",
                "font-semibold tracking-tight text-surface",
              )}
            >
              {university.name}
            </h1>

            {university.tagline && (
              <p className="text-base sm:text-lg font-medium text-primary-200">
                {university.tagline}
              </p>
            )}

            <p className="text-balance text-sm leading-relaxed text-surface/85 sm:text-base sm:leading-7 max-w-2xl">
              {university.summary}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <Link
                href="#enquire"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
              >
                <span>Enquire About Admissions</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              {university.website && (
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-medium text-surface/80 hover:text-surface transition-colors"
                >
                  <span>Official Website</span>
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Feature & Fast Facts Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-surface/15 bg-surface/5 p-6 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-surface/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  University Profile
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-primary-200">
                  <Award className="size-3.5" aria-hidden="true" />
                  MQA Accredited
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {dynamicStats.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-surface/10 bg-surface/5 p-4 transition-colors hover:border-surface/20"
                  >
                    <p className="text-xs text-surface/60">{fact.label}</p>
                    <p className="mt-1 font-serif text-lg sm:text-xl font-bold text-surface truncate">
                      {fact.value}
                    </p>
                    {fact.sublabel && (
                      <p className="mt-0.5 text-[11px] text-primary-200 truncate">
                        {fact.sublabel}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Verified OM International Bridge Badge */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/10 p-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Sparkles className="size-4.5" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-surface">
                    Official Pakistan Academic Representative
                  </p>
                  <p className="text-surface/70 mt-0.5">
                    Assisting with admissions, credit evaluations &amp; HEC equivalence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
