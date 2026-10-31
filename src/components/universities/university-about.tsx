"use client";

import Image from "next/image";
import { ExternalLink, MapPin, Award } from "lucide-react";
import type { University } from "@/types/university";
import { cn } from "@/lib/utils";

type UniversityAboutProps = {
  university: University;
};

export default function UniversityAbout({ university }: UniversityAboutProps) {
  const pullQuote =
    university.highlights?.[0] ??
    `${university.name} provides internationally recognized higher education accredited by the Malaysian Qualifications Agency.`;

  const aboutImage =
    university.aboutImage ??
    university.heroImage ??
    "/images/universities/girl-uniRazak.jpg";

  return (
    <section
      aria-labelledby="university-about-heading"
      className="relative isolate overflow-hidden bg-surface py-14 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Visual Image Composition & Profile Card */}
          <div className="lg:col-span-6 space-y-6 lg:sticky">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
                About {university.shortName}
              </p>
              <h2
                id="university-about-heading"
                className={cn(
                  "mt-2 text-balance font-serif",
                  "text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.15]",
                  "font-semibold tracking-tight text-heading",
                  "sm:text-[2.75rem]",
                )}
              >
                Pioneering Higher Education in Malaysia
              </h2>
            </div>

            {/* University Corresponding Image Composition */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg sm:aspect-[16/11]">
              <Image
                src={aboutImage}
                alt={`${university.name} campus and academic environment`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"
              />

              {/* Floating Image Badges */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-surface/90 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-xs">
                  <Award className="size-3.5 text-accent" aria-hidden="true" />
                  <span>{university.badge ?? "MQA Accredited"}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-xl bg-surface-dark/80 px-3 py-1.5 text-xs font-medium text-surface backdrop-blur-md">
                  <MapPin className="size-3 text-gold" aria-hidden="true" />
                  <span>{university.city}</span>
                </span>
              </div>
            </div>

            {/* Official Portal CTA */}
            {university.website && (
              <div className="pt-1">
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-primary/20 bg-primary-subtle px-6 py-3.5 text-sm font-semibold text-primary shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-surface hover:shadow-md active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  <span>Visit {university.shortName} Official Portal</span>
                  <ExternalLink
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Narrative paragraphs + pull quote + distinctions */}
          <div className="lg:col-span-6 space-y-6 lg:pt-4">
            {university.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-body sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}

            {/* Styled Pull quote */}
            <blockquote
              className={cn(
                "relative mt-6 rounded-2xl border-l-4 border-primary bg-secondary/40 p-5 sm:p-6",
                "text-base leading-relaxed text-heading sm:text-lg",
              )}
            >
              <div className="flex items-start gap-3">
                <p className="font-semibold italic text-heading">
                  &ldquo;{pullQuote}&rdquo;
                </p>
              </div>
            </blockquote>


          </div>
        </div>
      </div>
    </section>
  );
}
