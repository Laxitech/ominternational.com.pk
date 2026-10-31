import {
  Activity,
  BarChart3,
  Brain,
  Briefcase,
  Coins,
  Cpu,
  Globe2,
  HeartPulse,
  Lightbulb,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgrammeSpecializationsProps {
  majors: string[];
  className?: string;
}

// Icon mapper for known specialization tracks
function getSpecializationIcon(major: string) {
  const lower = major.toLowerCase();
  if (lower.includes("artificial intelligence") || lower.includes("ai")) {
    return Brain;
  }
  if (lower.includes("analytics")) {
    return BarChart3;
  }
  if (lower.includes("fintech") || lower.includes("financial technology")) {
    return Cpu;
  }
  if (lower.includes("islamic finance") || lower.includes("global")) {
    return Globe2;
  }
  if (lower.includes("finance")) {
    return Coins;
  }
  if (lower.includes("project")) {
    return Activity;
  }
  if (lower.includes("human resource") || lower.includes("hrm")) {
    return Users2;
  }
  if (lower.includes("entrepreneurship")) {
    return Lightbulb;
  }
  if (lower.includes("marketing")) {
    return TrendingUp;
  }
  if (lower.includes("risk")) {
    return ShieldAlert;
  }
  if (lower.includes("health care") || lower.includes("health")) {
    return HeartPulse;
  }
  if (lower.includes("supply chain")) {
    return Truck;
  }
  if (lower.includes("safety") || lower.includes("occupational")) {
    return ShieldCheck;
  }
  return Briefcase;
}

export default function ProgrammeSpecializations({
  majors,
  className,
}: ProgrammeSpecializationsProps) {
  if (!majors || majors.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="specializations-heading"
      className={cn(
        "rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs",
        className,
      )}
    >
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Customized Learning Tracks
        </span>
        <h2
          id="specializations-heading"
          className="mt-1 text-xl font-semibold tracking-tight text-heading sm:text-2xl"
        >
          {majors.length} Career Specializations
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
          Align your MBA studies with your strategic career goals. Choose from {majors.length} in-demand concentrations delivered with cutting-edge academic curricula.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {majors.map((major, index) => {
          const Icon = getSpecializationIcon(major);
          const indexFormatted = String(index + 1).padStart(2, "0");

          return (
            <div
              key={major}
              className="group relative flex items-start gap-3.5 rounded-2xl border border-border bg-surface-elevated/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface hover:shadow-xs"
            >
              <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-semibold tracking-wider text-muted font-mono">
                    #{indexFormatted}
                  </span>
                </div>
                <h3 className="mt-0.5 text-sm font-semibold text-heading leading-snug group-hover:text-primary transition-colors">
                  {major}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-4 text-xs leading-relaxed text-body sm:flex sm:items-center sm:justify-between sm:gap-4">
        <p>
          Specialization courses are integrated seamlessly into your module schedule without extending your 1-year graduation timeline.
        </p>
        <span className="mt-2 inline-block shrink-0 font-semibold text-primary sm:mt-0">
          Fully Accredited Curriculum
        </span>
      </div>
    </section>
  );
}
