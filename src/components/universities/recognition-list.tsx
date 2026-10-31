"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import type { UniversityRecognition } from "@/types/university";
import { cn } from "@/lib/utils";

type RecognitionListProps = {
  recognitions: UniversityRecognition[];
  universityName?: string;
};

export default function RecognitionList({
  recognitions,
  universityName,
}: RecognitionListProps) {
  return (
    <section
      aria-labelledby="recognition-heading"
      className="border-y border-border bg-secondary/25 py-14 sm:py-20 lg:py-24"
    >


      <ShieldCheck className="absolute rotate-330 -top-sm    left-5 sm:size-60 text-primary-200/50 pointer-events-none select-none -z-0 " aria-hidden="true" />
      <ShieldCheck className="absolute rotate-330    left-50 pt-10 sm:size-30 text-primary-200/50 pointer-events-none select-none -z-0 " aria-hidden="true" />
      <ShieldCheck className="absolute rotate-330    -left-5 pb-10 sm:size-30 text-primary-200/50 pointer-events-none select-none -z-0 " aria-hidden="true" />


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Quality Assurance &amp; Standing
          </p>
          <h2
            id="recognition-heading"
            className={cn(
              "mt-2 text-balance font-serif",
              "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.75rem]",
            )}
          >
            Accreditations &amp; Recognitions
          </h2>
          <p className="mt-3 text-sm text-body sm:text-base max-w-xl mx-auto">
            {universityName
              ? `Official awards, government approvals, and international memberships held by ${universityName}.`
              : "Official awards, government approvals, and international accreditations."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {recognitions.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:border-primary-200 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex size-9 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                    <ShieldCheck className="size-4.5" aria-hidden="true" />
                  </div>
                  {item.year && (
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-muted">
                      {item.year}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-base font-semibold text-heading leading-snug">
                  {item.title}
                </h3>

                {item.detail && (
                  <p className="mt-1.5 text-xs text-body leading-relaxed">
                    {item.detail}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center gap-1.5 border-t border-border/70 pt-3 text-[11px] font-medium text-success">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                <span>MQA / MOHE Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
