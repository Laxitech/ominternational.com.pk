"use client";

import Link from "next/link";
import {
  Compass,
  FileCheck,
  Award,
  GraduationCap,
  ArrowRight,
  ChevronRight,

} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type JourneyStep = {
  id: string;
  step: string;
  stage: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: JourneyStep[] = [
  {
    id: "programme-advisory",
    step: "01",
    stage: "Consultation",
    title: "Explore Programmes",
    description:
      "Explore your options with an advisor.",
    Icon: Compass,
  },
  {
    id: "document-verification",
    step: "02",
    stage: "Preparation",
    title: "Submit Documents",
    description:
      "Share your academic documents securely.",
    Icon: FileCheck,
  },
  {
    id: "university-offer",
    step: "03",
    stage: "Admission",
    title: "Receive Offer Letter",
    description:
      "We coordinate your university application.",
    Icon: Award,
  },
  {
    id: "enrolment-study",
    step: "04",
    stage: "Onboarding",
    title: "Begin Studying",
    description:
      "Access digital learning portals Start learning online.",
    Icon: GraduationCap,
  },
];

export default function JourneySection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });
  const active = prefersReducedMotion || inView;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="journey-heading"
      className={cn(
        "relative isolate overflow-hidden bg-surface-alt border-y border-border",
        "py-12 sm:py-16 lg:py-24",
      )}
    >


      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 size-96 rounded-full bg-primary-200/35 blur-[120px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 size-96 rounded-full bg-primary-100/40 blur-[120px] -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            YOUR JOURNEY
          </p>

          <h2
            id="journey-heading"
            className={cn(
              "mt-3 text-balance",
              "text-[clamp(1.75rem,5vw,2.5rem)] leading-[1.15]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.25rem]",
            )}
          >
            From Enquiry to Enrolment
          </h2>

          <p className="mt-4 max-w-[580px] mx-auto text-sm leading-relaxed text-body sm:text-base sm:leading-7">
            A clear, supported four-step roadmap connecting you directly to
            accredited Malaysian degrees without unnecessary delays.
          </p>
        </div>

        {/* Step cards grid */}
        <ol
          aria-label="Admissions process steps"
          className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:mt-16 lg:grid-cols-4 lg:gap-8 max-w-[1240px] mx-auto list-none"
        >
          {steps.map((step, index) => {
            const Icon = step.Icon;
            const isLast = index === steps.length - 1;

            return (
              <li
                key={step.id}
                className={cn(
                  "group relative flex flex-col justify-between h-full rounded-2xl border border-border bg-surface p-6 shadow-xs",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md",
                  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                  active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
                )}
                style={
                  active ? { animationDelay: `${index * 100}ms` } : undefined
                }
              >
                {/* Top border accent line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-t-2xl bg-primary-50"
                >
                  <div
                    className={cn(
                      "h-full bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-700 ease-out origin-left",
                      "motion-reduce:scale-x-100 motion-reduce:transition-none",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                    style={
                      active
                        ? { transitionDelay: `${index * 120 + 200}ms` }
                        : undefined
                    }
                  />
                </div>

                <div>
                  {/* Top bar: Icon + Step number */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="size-11 sm:size-12 rounded-xl bg-primary-50 text-primary border border-primary-200/70 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-surface group-hover:border-primary group-hover:scale-105 shadow-xs">
                      <Icon
                        className="size-5 sm:size-6 transition-transform duration-300 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight text-primary/30 group-hover:text-primary transition-colors tabular-nums">
                      {step.step}
                    </span>
                  </div>

                  {/* Stage badge & titles */}
                  <div className="mt-4 sm:mt-5">
                    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-accent mb-1.5">
                      Stage {step.step} • {step.stage}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-heading group-hover:text-primary transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop connector arrow between cards */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute left-[calc(100%+1rem)] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 size-8 rounded-full bg-surface border border-primary-200/80 items-center justify-center text-primary shadow-xs transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
                  >
                    <ChevronRight className="size-4 stroke-[2.5]" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {/* Next steps CTA banner */}
        <div
          className={cn(
            "mt-12 sm:mt-16 rounded-2xl border border-primary-200/80 bg-surface p-6 sm:p-8 lg:p-10 shadow-xs max-w-[1240px] mx-auto",
            active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
          )}
          style={active ? { animationDelay: "450ms" } : undefined}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-centerpy-1 rounded-full text-xs font-semibold  text-primary  mb-3">
                {/* <Sparkles className="size-3.5 text-accent" aria-hidden="true" /> */}
                Zero Obligation • Transparent Admissions
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-heading">
                Ready to begin your education journey?
              </h3>
              <p className="mt-2 text-sm text-body leading-relaxed sm:text-base">
                Our education advisors are available to assess your qualifications,
                evaluate eligible ACCA/ICAP credit exemptions, and map out your degree path.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
              >
                Start Application
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-6 py-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:text-primary hover:bg-primary-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
