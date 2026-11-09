import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { centers } from "@/data/centers";
import { cn } from "@/lib/utils";

export default function FacilitationCenters() {
  return (
    <section
      aria-labelledby="facilitation-centers-heading"
      className="bg-surface-alt py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="facilitation-centers-heading"
            className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-heading"
          >
            OM Facilitation Centres
          </h2>
          <Link
            href="/centers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary hover:underline transition-colors duration-200 motion-reduce:transition-none shrink-0"
          >
            View all centres
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Centre list — simple 2-col grid, no box borders */}
        <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 sm:mt-10">
          {centers.map((center) => (
            <li key={center.id} className="flex flex-col gap-1">
              {/* Role label */}
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {center.role}
              </p>

              {/* Name / city */}
              <p
                className={cn(
                  "font-display font-semibold tracking-tight text-heading",
                  "text-[clamp(1.1rem,2.5vw,1.4rem)] leading-snug",
                )}
              >
                {center.contactName ?? center.city}
              </p>

              {/* Address */}
              {center.address && (
                <div className="flex items-start gap-1.5 text-muted mt-0.5">
                  <MapPin
                    className="mt-0.5 size-3.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed sm:text-sm">
                    {center.address}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
