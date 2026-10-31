"use client";

import { useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import type { ProgrammeLevel } from "@/types/programme";
import {
  unirazakRequirements,
  englishRequirements,
} from "@/data/unirazak-requirements";
import { cn } from "@/lib/utils";

type Tab = {
  value: ProgrammeLevel;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const TABS: Tab[] = [
  { value: "doctoral", label: "Doctoral Degree (PhD / DBA)", icon: GraduationCap },
  { value: "masters", label: "Master's Degree (MBA / MEd)", icon: Award },
  { value: "bachelors", label: "Bachelor's Degree", icon: BookOpen },
];

type AdmissionRequirementsProps = {
  universityName?: string;
};

export default function AdmissionRequirements({
  universityName = "Partner University",
}: AdmissionRequirementsProps) {
  const [activeTab, setActiveTab] = useState<ProgrammeLevel>("doctoral");

  const englishForLevel = (() => {
    switch (activeTab) {
      case "doctoral":
        return englishRequirements[0].doctoral;
      case "masters":
        return englishRequirements[0].masters;
      case "bachelors":
        return englishRequirements[0].bachelors;
      case "graduate-diplomas":
        return englishRequirements[0].graduateDiplomas;
    }
  })();

  return (
    <section
      id="admissions"
      aria-labelledby="admission-requirements-heading"
      className="relative isolate overflow-hidden bg-surface py-14 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Criteria &amp; Eligibility
          </p>
          <h2
            id="admission-requirements-heading"
            className={cn(
              "mt-2 text-balance font-serif",
              "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.75rem]",
            )}
          >
            Admission &amp; Entry Requirements
          </h2>
          <p className="mt-3 text-sm text-body sm:text-base">
            Academic prerequisites and qualification equivalents established under Malaysian Qualifications Agency standards for {universityName}.
          </p>
        </div>

        {/* Tab Selection */}
        <div
          role="tablist"
          aria-label="Entry requirement tabs"
          className="flex flex-wrap gap-2.5 mb-10 sm:mb-12 border-b border-border pb-3"
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={active}
                aria-controls={`admission-tab-${tab.value}`}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200",
                  active
                    ? "bg-primary text-surface shadow-xs"
                    : "bg-secondary/50 text-body hover:bg-secondary hover:text-heading",
                )}
              >
                <tab.icon className="size-4 shrink-0" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        {TABS.map((tab) => {
          const active = activeTab === tab.value;
          const req = unirazakRequirements.find((r) => r.level === tab.value);
          if (!active) return null;

          return (
            <div
              key={tab.value}
              role="tabpanel"
              id={`admission-tab-${tab.value}`}
              aria-labelledby={`admission-tab-${tab.value}`}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Academic Criteria Checklist */}
                <div className="lg:col-span-8 rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-2xs space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Standard Academic Criteria
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-heading mt-1">
                      {tab.label} Requirements
                    </h3>
                  </div>

                  <ul className="space-y-3.5">
                    {req?.academic.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-body"
                      >
                        <CheckCircle2
                          className="size-5 shrink-0 text-success mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-2xl border border-border bg-secondary/30 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        English Language Standard
                      </p>
                      <p className="text-sm font-medium text-heading mt-0.5">
                        {englishForLevel}
                      </p>
                    </div>
                    <span className="rounded-full bg-primary-subtle text-primary border border-primary-200 px-2.5 py-1 text-xs font-semibold">
                      IELTS / MOI
                    </span>
                  </div>
                </div>

                {/* Pakistani Equivalence & Credit Transfer Spotlight */}
                <div className="lg:col-span-4 rounded-3xl border border-primary-200 bg-primary-subtle/40 p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <Sparkles className="size-4.5 text-accent" aria-hidden="true" />
                    <span>Pakistani Student Fast-Track</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-heading">
                    Direct Credit Exemptions
                  </h4>

                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    Have you completed ACCA fundamental/professional papers, ICAP modules, PIPFA, CA, or a local Pakistani university diploma?
                  </p>

                  <ul className="text-xs text-body space-y-2 pt-2 border-t border-primary-200/60">
                    <li className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-primary shrink-0" />
                      <span>ACCA / ICAP exam mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-primary shrink-0" />
                      <span>Advanced standing up to 50%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-primary shrink-0" />
                      <span>HEC degree equivalence clearance</span>
                    </li>
                  </ul>

                  <a
                    href="#enquire"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-surface hover:bg-primary-hover transition-colors"
                  >
                    Request Free Transcript Audit
                  </a>
                </div>
              </div>
            </div>
          );
        })}



      </div>
    </section>
  );
}
