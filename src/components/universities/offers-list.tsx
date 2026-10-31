"use client";

import { Clock, Gift } from "lucide-react";
import type { Offer } from "@/types/programme";
import { cn } from "@/lib/utils";

type OffersListProps = {
  offers: Offer[];
  universityName?: string;
};

export default function OffersList({ offers }: OffersListProps) {
  const now = new Date();
  const activeOffers = offers.filter(
    (offer) => !offer.validUntil || new Date(offer.validUntil) >= now,
  );

  return (
    <section
      aria-labelledby="offers-heading"
      className="border-y border-border bg-secondary/30 py-14 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          <h2
            id="offers-heading"
            className={cn(
              "mt-3 text-balance font-serif",
              "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.75rem]",
            )}
          >
            Scholarships, Grants &amp; Fee Rebates
          </h2>
          <p className="mt-3 text-sm text-body sm:text-base">
            Take advantage of institutional grants, early enrolment rebates, and professional credential concessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activeOffers.map((offer) => (
            <div
              key={offer.title}
              className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 shadow-2xs transition-all duration-200 hover:border-gold hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                    <Gift className="size-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold text-muted">
                    Active Grant
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-heading sm:text-lg">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {offer.description}
                </p>
              </div>

              {offer.validUntil && (
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted border-t border-border/70 pt-3">
                  <Clock className="size-3.5 text-accent" aria-hidden="true" />
                  <span>Valid until {offer.validUntil}</span>
                </div>
              )}
            </div>
          ))}

          {activeOffers.length === 0 && (
            <div className="col-span-full py-12 text-center text-sm text-muted">
              No active offers at this time. Inquire with an advisor for current promotions.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
