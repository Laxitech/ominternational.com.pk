"use client";

import type { Stat } from "@/data/stats";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/utils";

type StatCardProps = {
  stat: Stat;
  index: number;
  active: boolean;
};

export default function StatCard({ stat, index, active }: StatCardProps) {
  const { display, isComplete } = useCountUp(stat.value, {
    pad: stat.pad,
    start: active,
  });
  const Icon = stat.icon;
  const isFirst = index === 0;
  const finalValue = `${String(stat.value).padStart(stat.pad, "0")}${stat.suffix}`;

  return (
    <li
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-secondary p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:border-border",
        isFirst ? "border-primary-200 hover:border-primary" : undefined,
        active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
      )}
      style={active ? { animationDelay: `${index * 120}ms` } : undefined}
    >
      {isFirst && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-8 size-40 rounded-full bg-primary/[0.08] blur-[60px]"
        />
      )}

      <span
        className={cn(
          "relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-primary-200 bg-primary-subtle text-primary transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          isFirst ? "ring-1 ring-primary-200" : undefined,
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>

      <p
        className="relative z-10 mt-4 font-serif text-[clamp(2rem,5vw,3rem)] leading-none tracking-tight text-heading tabular-nums"
        aria-label={finalValue}
      >
        <span aria-hidden="true">{display}</span>
        {stat.suffix ? (
          <span
            aria-hidden="true"
            className={cn(
              "ml-0.5 align-top text-[0.55em] text-primary transition-opacity duration-300 motion-reduce:transition-none",
              isComplete ? "opacity-100" : "opacity-0",
            )}
          >
            {stat.suffix}
          </span>
        ) : null}
      </p>

      {stat.tag && (
        <p className="relative z-10 mt-2 text-xs font-semibold uppercase tracking-wider text-primary/70">
          {stat.tag}
        </p>
      )}

      <p className="relative z-10 mt-1 text-sm leading-6 text-body">
        {stat.label}
      </p>

      {stat.description && (
        <p className="relative z-10 mt-1 text-xs leading-5 text-muted">
          {stat.description}
        </p>
      )}


    </li>
  );
}
