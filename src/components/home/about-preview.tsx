"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export default function AboutPreview() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Trigger the count-up once the section reaches ~35% visibility.
  const { ref: sectionRef, inView } = useInView({ threshold: 0.35 });

  // Active once the section is in view, or immediately under reduced motion
  // (final values are shown right away).
  const active = prefersReducedMotion || inView;
  const { display } = useCountUp(20, { pad: 0, start: active });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-om-heading"
      className={cn(
        "relative isolate overflow-hidden bg-surface",
        "about-reveal",
        "py-12 sm:py-16 lg:py-24",
      )}
    >
      {/* Subtle ambient background accent */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 size-full rounded-full bg-primary-200/30 blur-[120px] -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-[1200px] mx-auto">
          {/* Left: Portrait + overlapping experience counter */}
          <div
            className={cn(
              "relative group lg:col-span-1 max-w-sm mx-auto w-full",
              active ? "about-reveal" : "opacity-0 motion-reduce:opacity-100",
            )}
          >
            <div
              className={cn(
                "relative aspect-[1/1] w-full max-w-md overflow-hidden rounded-3xl border border-primary-200/50 bg-surface shadow-lg",
                "sm:aspect-[1/1] lg:max-w-none lg:aspect-[1/1]",
              )}
            >
              <Image
                src="/images/drOmer.jpeg"
                alt="Prof. Dr. Omar Masood, educationist and leader of OM International"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 70vw, 90vw"
                className="object-cover object-center"
              />

              {/* Vertical leadership label along the left edge */}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2",
                  "writing-mode-vertical-rl",
                  "text-[10px] font-semibold uppercase tracking-widest",
                  "text-primary/60",
                  "hidden sm:block",
                )}
              >
                LEADERSHIP ROOTED IN EDUCATION
              </div>
            </div>

            {/* Circular experience counter at bottom-right corner */}
            <div
              className={cn(
                "absolute z-20 rounded-full border-2 border-primary-200/60 bg-primary-900 shadow-xl text-on-dark",
                // Inside bounds on mobile/tablet to avoid clipping
                "bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20",
                // Desktop: overlaps outside the corner for prominence
                "lg:-bottom-8 lg:-right-8 lg:w-28 lg:h-28",
              )}
            >
              <div
                className="flex items-center justify-center h-full px-1 sm:px-2"
                aria-hidden="true"
              >
                <span
                  className={cn(
                    "text-[clamp(1.3rem,4.5vw,2.5rem)] font-extrabold text-white leading-none",
                    "tabular-nums tracking-tight",
                  )}
                >
                  {display}
                </span>
                <span
                  className={cn(
                    "text-2xl sm:text-3xl lg:text-4xl font-black text-primary-200 leading-none",
                    "ml-0.5 inline-block -translate-y-0.5",
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              <svg
                viewBox="0 0 120 120"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden size-full overflow-visible text-primary-200 sm:block"
              >
                <defs>
                  <path
                    id="experience-text-path"
                    d="M 8,60 A 52,52 0 1,1 112,60 A 52,52 0 1,1 8,60"
                  />
                </defs>
                <text
                  fill="currentColor"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="1.3"
                >
                  <textPath
                    href="#experience-text-path"
                    startOffset="25%"
                    textAnchor="middle"
                  >
                    YEARS OF EXPERIENCE
                  </textPath>
                </text>
              </svg>

              <span className="sr-only">{display}+ years of experience</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <p className={cn(
              "text-xs font-semibold uppercase tracking-[0.24em]",
              "text-primary",
              "sm:text-sm",
            )}>
              ABOUT OM INTERNATIONAL
            </p>

            <h2
              id="about-om-heading"
              className={cn(
                "mt-3 text-balance font-display",
                "text-[clamp(1.75rem,5vw,2.5rem)] leading-[1.15]",
                "font-semibold tracking-tight text-heading",
                "sm:text-[2.25rem]",
              )}
            >
              A trusted bridge to global education
            </h2>

            {/* Highlighted introduction */}
            <div className={cn(
              "mt-6  border-l-4 border-accent bg-primary-50 p-4",
              "sm:p-5",
            )}>
              <p className={cn(
                "text-sm leading-relaxed text-body",
                "sm:text-base",
              )}>
                Led by{" "}
                <span className="font-semibold text-heading">
                  Prof. Dr. Omar Masood
                </span>{" "}
                , an educationist with over 20 years of experience in teaching,
                consultancy and administration across leading universities and
                financial institutions.
              </p>
            </div>

            {/* Supporting paragraph */}
            <p className={cn(
              "mt-6 text-sm leading-relaxed text-body",
              "sm:text-base sm:leading-7",
            )}>
              We bring emerging global higher-education trends and flexible
              international programmes closer to students in Pakistan, helping
              each learner make informed choices with confidence.
            </p>

            {/* Text CTA */}
            <Link
              href="/about"
              className={cn(
                "mt-8 inline-flex items-center gap-2",
                "text-sm font-semibold text-accent",
                "transition-colors duration-200",
                "hover:text-primary hover:underline",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                "motion-reduce:transition-none",
                "sm:text-base sm:mt-10",
              )}
            >
              Learn more about us
              <ArrowRight
                className={cn(
                  "size-4 transition-transform duration-200",
                  "group-hover:translate-x-0.5 motion-reduce:transition-none",
                )}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
