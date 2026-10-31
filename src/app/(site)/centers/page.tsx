import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import CenterList from "@/components/centers/center-list";
import CenterServices from "@/components/centers/center-services";
import { centers } from "@/data/centers";
import { cn } from "@/lib/utils";

const cityNames = centers.map((center) => center.city).join(", ");

export const metadata: Metadata = {
  title: "Learning Centers | OM International",
  description:
    "Speak to an advisor at our centers in " +
    cityNames +
    ". We help you choose a programme and complete your admission.",
};

export default function CentersPage() {
  return (
    <main className="min-h-full bg-surface">
      {/* 1. Page header */}
      <PageHeader
        title="Learning Centers"
        subtitle={
          "Speak to an advisor in person or online. Our centers help you choose a programme and complete your admission."
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Learning Centers" },
        ]}
      />

      {/* 2. Centers list */}
      <CenterList centers={centers} />

      {/* 3. How a center can help */}
      <CenterServices />

      {/* 4. Closing call to action */}
      <section
        aria-labelledby="centers-cta-heading"
        className={cn(
          "relative isolate overflow-hidden bg-surface-dark m-10 rounded-3xl",
          "py-12 sm:py-16 lg:py-24",
        )}
      >
        {/* Subtle dot grid on dark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 text-primary-900 opacity-10"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl bg-surface-dark p-8 sm:p-12 text-surface shadow-lg shadow-primary-900/10"
          >
            <div className={cn("flex flex-col sm:flex-row sm:items-center justify-between gap-6")}>
              <div>
                <p
                  id="centers-cta-heading"
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm"
                >
                  Not sure which center to contact?
                </p>
                <h2 className={cn(
                  "mt-2 text-balance font-display",
                  "text-[clamp(1.25rem,4vw,1.75rem)] leading-[1.2]",
                  "font-semibold tracking-tight text-surface",
                  "sm:text-[2rem]",
                )}>
                  Send us an enquiry and we will point you to the right team.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors duration-200 hover:bg-surface-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:min-h-12"
                >
                  Contact us
                  <ChevronRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
