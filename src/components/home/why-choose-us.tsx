"use client";

import Link from "next/link";
import {
  Award,
  Laptop,
  Coins,
  Users,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Building2,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type FeatureCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: FeatureCard[] = [
  {
    id: "recognised-qualifications",
    category: "Accreditation",
    title: "Globally Recognised Degrees",
    description:
      "Study toward degrees accredited by the Malaysian Qualifications Agency (MQA) and respected internationally by employers and academic bodies.",

    Icon: Award,
  },
  {
    id: "flexible-online-learning",
    category: "Flexibility",
    title: "Flexible Digital Learning",
    description:
      "Designed specifically for working executives and busy learners. Access modern digital LMS portals and recorded seminars on your schedule.",

    Icon: Laptop,
  },
  {
    id: "affordable-fee-structure",
    category: "Value & Transparency",
    title: "Affordable Tuition & Installments",
    description:
      "Earn an internationally recognized qualification with transparent installment payment plans.",

    Icon: Coins,
  },
  {
    id: "admissions-guidance",
    category: "Dedicated Advisory",
    title: "Personal Admissions Guidance",
    description:
      "Our experienced education consultants guide you step-by-step from initial credit exemption evaluation to university acceptance.",

    Icon: Users,
  },
  {
    id: "local-support-centres",
    category: "Local Presence",
    title: "Support Centers in PK",
    description:
      "Access face-to-face academic advisory, attend executive workshops, and utilize quiet study facilities across major cities and London.",

    Icon: MapPin,
  },
  {
    id: "uae-attestation-pathway",
    category: "Global Mobility",
    title: "UAE & Global Attestation Pathway",
    description:
      "Complete end-to-end facilitation for degree recognition and attestation through MOFA, HEC, WES, NASBA, and the UAE Embassy.",

    Icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.15 });
  const active = prefersReducedMotion || inView;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-choose-us-heading"
      className={cn(
        "relative isolate overflow-hidden bg-surface",
        "py-12 sm:py-16 lg:py-24",
      )}
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 size-[480px] rounded-full bg-primary-100/35 blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-10 size-[480px] rounded-full bg-primary-50/60 blur-[140px] -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            WHY OM INTERNATIONAL
          </p>

          <h2
            id="why-choose-us-heading"
            className={cn(
              "mt-3 text-balance",
              "text-[clamp(1.75rem,5vw,2.5rem)] leading-[1.15]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.25rem]",
            )}
          >
            Support That Goes Beyond Admission
          </h2>

          <p className="mt-4 max-w-[580px] mx-auto text-sm leading-relaxed text-body sm:text-base sm:leading-7">
            Practical guidance, accessible study options and local support throughout your education journey.
          </p>
        </div>

        {/* Feature cards grid */}
        <ul
          className={cn(
            "mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "max-w-7xl mx-auto list-none",
          )}
        >
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <li
                key={feature.id}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
                  "border border-border bg-surface p-6 sm:p-7 shadow-xs",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md",
                  "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                  active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
                )}
                style={
                  active ? { animationDelay: `${index * 80}ms` } : undefined
                }
              >
                {/* Subtle top accent bar on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div>
                  {/* Top row: Icon container + Category badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="size-12 rounded-xl bg-primary-50 text-primary border border-primary-200/70 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-surface group-hover:border-primary group-hover:scale-105 shadow-xs">
                      <Icon
                        className="size-6 transition-transform duration-300 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-secondary px-2.5 py-1 rounded-full border border-primary-100/80">
                      {feature.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-base sm:text-lg font-semibold text-heading group-hover:text-primary transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>


              </li>
            );
          })}
        </ul>

        {/* Bottom support bar bridging to centers & advisory */}
        <div
          className={cn(
            "mt-12 sm:mt-16 rounded-2xl bg-secondary/80 border border-primary-200/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto shadow-xs",
            active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
          )}
          style={active ? { animationDelay: "500ms" } : undefined}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div
              className="size-12 rounded-xl bg-primary text-surface flex items-center justify-center flex-shrink-0 shadow-xs hidden sm:flex"
              aria-hidden="true"
            >
              <Building2 className="size-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider">
                  Local Access Across Pakistan
                </span>
              </div>
              <h3 className="font-semibold text-heading text-base sm:text-lg">
                Need guidance choosing the right study pathway?
              </h3>
              <p className="text-sm text-body mt-0.5">
                Visit any of our 12 learning centers across Pakistan or schedule a free virtual advisory session.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/centers"
              className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-surface border border-border-strong px-5 py-2.5 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:text-primary hover:bg-primary-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              Find Nearest Center
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              Speak With Us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
