"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/shared/whatsapp-icon";
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
                    "text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-heading",
                  )}
                >
                  {center.name || center.city}
                </h2>
                {center.contactName && center.contactName !== center.name && (
                  <p className="mt-1 text-sm font-semibold text-accent">
                    Contact: {center.contactName}
                  </p>
                )}
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
                {(center.phone || center.phones || center.whatsapp || center.email || center.emails) && (
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted sm:text-sm">
                    {center.whatsapp && (
                      <div className="flex items-center gap-2">
                        <WhatsappIcon className="size-3.5 shrink-0 text-success" aria-hidden="true" />
                        <a
                          href={`https://wa.me/${center.whatsapp.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
                        >
                          <span>{center.whatsapp}</span>
                          <span className="rounded-sm bg-success-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-success">
                            WhatsApp
                          </span>
                        </a>
                      </div>
                    )}
                    {center.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                        <a
                          href={`tel:${center.phone.replace(/\s+/g, "")}`}
                          className="hover:text-primary transition-colors font-medium"
                        >
                          {center.phone}
                        </a>
                      </div>
                    )}
                    {center.phones?.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <Phone className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                        <a
                          href={`tel:${p.replace(/\s+/g, "")}`}
                          className="hover:text-primary transition-colors font-medium"
                        >
                          {p}
                        </a>
                      </div>
                    ))}
                    {center.emails && center.emails.length > 0 ? (
                      center.emails.map((email) => (
                        <div key={email} className="flex items-center gap-2">
                          <Mail className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                          <a
                            href={`mailto:${email}`}
                            className="hover:text-primary transition-colors break-all"
                          >
                            {email}
                          </a>
                        </div>
                      ))
                    ) : center.email ? (
                      <div className="flex items-center gap-2">
                        <Mail className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
                        <a
                          href={`mailto:${center.email}`}
                          className="hover:text-primary transition-colors break-all"
                        >
                          {center.email}
                        </a>
                      </div>
                    ) : null}
                  </div>
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
