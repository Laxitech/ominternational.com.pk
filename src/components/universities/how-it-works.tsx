"use client";

import {
  CheckCircle2,
  FileCheck,
  GraduationCap,
  MailCheck,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

type JourneyStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Transcript Assessment",
    description: "Submit your educational certificates and professional exam papers for evaluation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Exemption Mapping",
    description: "Our advisors map eligible credits to fast-track your degree path and reduce costs.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Official Offer Letter",
    description: "Receive your unconditional or conditional admission offer from the university.",
    icon: MailCheck,
  },
  {
    number: "04",
    title: "Commence Your Studies",
    description: "Begin learning through interactive online modules or on-campus in Kuala Lumpur.",
    icon: GraduationCap,
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative isolate overflow-hidden bg-surface py-14 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Admission Roadmap
          </p>
          <h2
            id="how-it-works-heading"
            className={cn(
              "mt-2 text-balance font-serif",
              "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.75rem]",
            )}
          >
            From Initial Enquiry to Degree Enrolment
          </h2>
          <p className="mt-3 text-sm text-body sm:text-base">
            A clear, supported 4-step path designed to eliminate bureaucratic hurdles for students in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col rounded-3xl border border-border bg-surface p-6 sm:p-7 shadow-2xs hover:border-primary-200 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-primary/25">
                  {step.number}
                </span>
                <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
                  <step.icon className="size-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 text-base font-semibold text-heading sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {step.description}
              </p>

              <div className="mt-6 flex items-center gap-1.5 border-t border-border/80 pt-3 text-[11px] font-medium text-accent">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                <span>Facilitated by OM International</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
