"use client";

import {
  Award,
  Building2,
  Calendar,
  Globe,
  GraduationCap,
} from "lucide-react";
import type { University } from "@/types/university";
import type { Programme } from "@/types/programme";
import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type UniversityFactsProps = {
  university: University;
  programmes: Programme[];
};

type FactItem = {
  id: string;
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  badge: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function AnimatedFactCard({
  fact,
  index,
  active,
}: {
  fact: FactItem;
  index: number;
  active: boolean;
}) {
  const { display, isComplete } = useCountUp(fact.targetNumber, {
    duration: 1500,
    start: active,
  });

  const Icon = fact.icon;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border",
        "bg-gradient-to-b from-surface via-surface to-secondary/30 p-6 sm:p-7 shadow-xs",
        "transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-xl",
        active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
      )}
      style={active ? { animationDelay: `${index * 120}ms` } : undefined}
    >
      {/* Subtle ambient light glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-500 group-hover:bg-primary/10"
      />

      {/* Top Bar: Icon + Category Badge */}
      <div>
        <div className="flex items-center justify-between">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary-200 bg-primary-subtle text-primary shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-surface group-hover:shadow-md">
            <Icon className="size-6 transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
          </div>

          <span className="rounded-full border border-border/80 bg-secondary/80 px-2.5 py-0.5 text-[11px] font-semibold text-primary transition-colors group-hover:border-primary-200 group-hover:bg-primary-subtle">
            {fact.badge}
          </span>
        </div>

        {/* Counter & Value */}
        <div className="mt-6">
          <p
            className="font-serif text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold tracking-tight text-heading tabular-nums leading-none transition-colors duration-300 group-hover:text-primary"
            aria-label={`${fact.prefix ?? ""}${fact.targetNumber}${fact.suffix ?? ""} ${fact.label}`}
          >
            {fact.prefix && <span>{fact.prefix}</span>}
            <span aria-hidden="true">{display}</span>
            {fact.suffix && (
              <span
                aria-hidden="true"
                className={cn(
                  "ml-0.5 align-top text-[0.55em] text-accent transition-opacity duration-300",
                  isComplete ? "opacity-100" : "opacity-0",
                )}
              >
                {fact.suffix}
              </span>
            )}
          </p>

          <h3 className="mt-2 text-base font-semibold text-heading transition-colors group-hover:text-primary">
            {fact.label}
          </h3>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            {fact.sublabel}
          </p>
        </div>
      </div>

      {/* Bottom Accent line that animates on hover */}
      <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-[11px] text-muted">
        <span className="flex items-center gap-1.5 font-medium text-body">
          <Award className="size-3.5 text-accent" aria-hidden="true" />
          Verified Metric
        </span>
        <span className="text-[10px] text-muted/80">Official MQA Data</span>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out motion-reduce:hidden"
      />
    </div>
  );
}

export default function UniversityFacts({
  university,
  programmes,
}: UniversityFactsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const active = prefersReducedMotion || inView;

  const uniProgrammes = programmes.filter(
    (programme) => programme.universitySlug === university.slug,
  );
  const schoolCount =
    university.schools?.length ||
    new Set(uniProgrammes.map((programme) => programme.schoolSlug)).size;
  const modeCount = university.modes.length;

  const facts: FactItem[] = [
    {
      id: "established",
      targetNumber: university.established,
      label: "Foundation Year",
      sublabel: `Established in ${university.city}, Malaysia`,
      badge: "Legacy",
      icon: Calendar,
    },
    {
      id: "schools",
      targetNumber: schoolCount > 0 ? schoolCount : 4,
      suffix: " Faculties",
      label: "Academic Faculties",
      sublabel: "Specialized schools of excellence",
      badge: "Structure",
      icon: Building2,
    },
    {
      id: "programmes",
      targetNumber: uniProgrammes.length > 0 ? uniProgrammes.length : 15,
      suffix: "+",
      label: "Degree Pathways",
      sublabel: "Doctoral, Master's & Bachelor's",
      badge: "Curricula",
      icon: GraduationCap,
    },
    {
      id: "modes",
      targetNumber: modeCount > 0 ? modeCount : 3,
      suffix: " Formats",
      label: "Study Delivery Modes",
      sublabel: "Campus in KL, ODL & Online",
      badge: "Flexibility",
      icon: Globe,
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="university-facts-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-secondary/40 via-secondary/20 to-surface py-12 sm:py-16 lg:py-20"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/3 size-96 rounded-full bg-primary-100/40 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 size-80 rounded-full bg-primary-200/30 blur-3xl -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>

            <h2
              id="university-facts-heading"
              className={cn(
                "text-balance font-serif",
                "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.18]",
                "font-semibold tracking-tight text-heading",
                "sm:text-[2.5rem]",
              )}
            >
              Academic Capacity &amp; Global Standing
            </h2>
          </div>


        </div>

        {/* Animated Fact Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {facts.map((fact, index) => (
            <AnimatedFactCard
              key={fact.id}
              fact={fact}
              index={index}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
