"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Center } from "@/types/center";
import { cn } from "@/lib/utils";

export default function CenterList({ centers }: { centers: Center[] }) {
  return (
    <section
      aria-labelledby="centers-list-heading"
      className="relative isolate overflow-hidden bg-surface py-12 sm:py-16 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          className={cn(
            "mt-10 sm:mt-14 grid gap-8 list-none",
            "grid-cols-1 sm:grid-cols-2",
          )}
        >
          {centers.map((center, index) => (
            <li key={center.id}>
              <article
                className={cn(
                  "relative overflow-hidden rounded-lg border border-border",
                  "flex flex-col p-6 sm:p-8",

                  index % 2 === 0 ? "bg-surface" : "bg-surface",
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {center.role}
                </p>
                <h2
                  className={cn(
                    "mt-2 text-balance font-display",
                    "text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight text-heading",
                    "sm:text-[2.75rem] lg:text-[3rem] xl:text-[4rem]",
                  )}
                >
                  {center.contactName ?? center.city}
                </h2>
                {center.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-body sm:text-base sm:leading-7">
                    {center.summary}
                  </p>
                )}
                {center.address && (
                  <>
                    <hr className="my-4 border-border" />
                    <div className="flex items-start gap-2 text-muted">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <p className="text-xs leading-relaxed sm:text-sm">
                        {center.address}
                      </p>
                    </div>
                  </>
                )}
                <Link
                  href="/contact"
                  className={cn(
                    "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent",
                    "transition-colors duration-200",
                    "hover:text-primary hover:underline",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                    "motion-reduce:transition-none",
                  )}
                >
                  Speak to this center
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
