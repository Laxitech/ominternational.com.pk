"use client";

import { Building2, Laptop, Globe, Laptop2, CheckCircle2, } from "lucide-react";
import { cn } from "@/lib/utils";

type StudyModeItem = {
  title: string;
  description: string;
  features: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const MODES: StudyModeItem[] = [
  {
    title: "Conventional (On-Campus)",
    description:
      "Full on-campus immersion in Kuala Lumpur with classroom lectures, faculty consultations, and campus amenities.",
    features: [
      "Student visa & arrival assistance",
      "Access to physical libraries & campus facilities",
      "Dynamic international peer community",
    ],
    Icon: Building2,
  },
  {
    title: "Open Distance Learning (ODL)",
    description:
      "Structured distance learning combining interactive digital classrooms with localized examination support across Pakistan.",
    features: [
      "Study from Pakistan without relocating",
      "Weekend & evening live academic lectures",
      "Local OM International exam center proctoring",
    ],
    Icon: Laptop,
  },
  {
    title: "100% Online Delivery",
    description:
      "Self-directed digital learning designed for working executives, with round-the-clock LMS access and remote assessments.",
    features: [
      "24/7 access to university learning portals",
      "Asynchronous modular study plans",
      "Continuous assessment and coursework format",
    ],
    Icon: Globe,
  },
];

export default function StudyModes() {
  return (
    <section
      aria-labelledby="study-modes-heading"
      className="relative isolate overflow-hidden bg-surface py-14 sm:py-20 lg:py-24"
    >
      <Laptop2 className="absolute size-50 shrink-0 text-primary-100/50 rotate-45 top-0 mt-0.5" />


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Delivery Options
          </p>
          <h2
            id="study-modes-heading"
            className={cn(
              "mt-2 text-balance font-serif",
              "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.75rem]",
            )}
          >
            Flexible Study Modes for Every Lifestyle
          </h2>
          <p className="mt-3 text-sm text-body sm:text-base">
            Whether you want to study full-time in Malaysia or maintain your professional career in Pakistan, our partner universities offer accredited pathways to suit your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODES.map((mode) => (
            <div
              key={mode.title}
              className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary-200 bg-primary-subtle text-primary shrink-0">
                    <mode.Icon className="size-6" aria-hidden="true" />
                  </div>

                </div>

                <h3 className="mt-5 text-lg font-semibold text-heading sm:text-xl">
                  {mode.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {mode.description}
                </p>

                <div className="mt-6 border-t border-border pt-5 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Key Advantages
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-body">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="size-4 shrink-0 text-success mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
