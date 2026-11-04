"use client";

import { stats } from "@/data/stats";
import StatCard from "@/components/shared/stat-card";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export default function StatsStrip() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // One-shot trigger when the section reaches ~20% visibility.
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });

  // Active once the section is in view, or immediately under reduced motion.
  const active = prefersReducedMotion || inView;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="impact-stats-heading"
      className="relative isolate overflow-hidden bg-surface py-12 sm:py-16 lg:py-24"
    >
      {/* Subtle ambient lighting glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 size-[600px] rounded-full bg-primary-100/35 blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-10 size-[450px] rounded-full bg-primary-200/20 blur-[150px] -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Subheading, Eyebrow */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5  py-1  text-xs font-semibold text-primary  mb-3.5 w-fit">
              Our Reach &amp; Impact
            </div>

            <h2
              id="impact-stats-heading"
              className={cn(
                "text-balance",
                "text-[clamp(1.875rem,4.5vw,2.75rem)] leading-[1.12]",
                "font-semibold tracking-tight text-heading",
              )}
            >
              A Decade of Connecting Students to World-Class Education
            </h2>

            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
              Connecting ambitious learners across Pakistan, the UK, and Malaysia to
              globally recognised, accredited university degree pathways.
            </p>

            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm font-medium text-heading">
                <div className="size-2 rounded-full bg-accent flex-shrink-0" />
                <span>Accredited by the Malaysian Qualifications Agency (MQA)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-heading">
                <div className="size-2 rounded-full bg-accent flex-shrink-0" />
                <span>Direct pathways for ACCA, ICAP &amp; working professionals</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid with the 4 Cards */}
          <div className="lg:col-span-7">
            <ul
              aria-label="Institutional reach statistics"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 list-none"
            >
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.id}
                  stat={stat}
                  index={index}
                  active={active}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
