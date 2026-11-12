import Link from "next/link";
import { MapPin, ArrowRight, Phone, Mail, Globe2 } from "lucide-react";
import { WhatsappIcon } from "@/components/shared/whatsapp-icon";
import { centers } from "@/data/centers";
import { cn } from "@/lib/utils";

export default function FacilitationCenters() {
  const internationalCenters = centers.filter((center) => center.isInternational);

  return (
    <section
      aria-labelledby="facilitation-centers-heading"
      className="bg-surface-alt py-12 sm:py-16 lg:py-20 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-sm">
              Global Presence &amp; Support
            </p>
            <h2
              id="facilitation-centers-heading"
              className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-heading"
            >
              International Facilitation Centres
            </h2>
          </div>
          <Link
            href="/centers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary hover:underline transition-colors duration-200 motion-reduce:transition-none shrink-0"
          >
            <span>Explore all centres</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* 4 International Centres Grid */}
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 sm:mt-10 list-none">
          {internationalCenters.map((center) => (
            <li
              key={center.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Badge / Role */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subtle border border-primary-200 px-3 py-1 text-xs font-semibold text-primary">
                    <Globe2 className="size-3.5" aria-hidden="true" />
                    <span>{center.role}</span>
                  </span>
                </div>

                {/* Center Name */}
                <h3
                  className={cn(
                    "mt-3 font-display font-bold tracking-tight text-heading",
                    "text-xl sm:text-2xl leading-snug",
                  )}
                >
                  {center.name}
                </h3>

                {/* Contact Name if present */}
                {center.contactName && (
                  <p className="mt-1 text-sm font-semibold text-accent">
                    Contact Person: {center.contactName}
                  </p>
                )}

                {/* Address */}
                {center.address && (
                  <div className="flex items-start gap-2 text-muted mt-3 pt-3 border-t border-border">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed sm:text-sm">
                      {center.address}
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Info (Phone / Email) */}
              {(center.phone || center.phones || center.whatsapp || center.email || center.emails) && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted mt-4 pt-3 border-t border-border">
                  {center.whatsapp && (
                    <div className="flex items-center gap-1.5">
                      <WhatsappIcon className="size-3.5 text-success shrink-0" aria-hidden="true" />
                      <a
                        href={`https://wa.me/${center.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors font-medium inline-flex items-center gap-1"
                      >
                        <span>{center.whatsapp}</span>
                        <span className="text-[10px] font-semibold text-success bg-success-50 px-1 py-0.5 rounded">WhatsApp</span>
                      </a>
                    </div>
                  )}
                  {center.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="size-3.5 text-accent shrink-0" aria-hidden="true" />
                      <a
                        href={`tel:${center.phone.replace(/\s+/g, "")}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {center.phone}
                      </a>
                    </div>
                  )}
                  {center.phones?.map((p) => (
                    <div key={p} className="flex items-center gap-1.5">
                      <Phone className="size-3.5 text-accent shrink-0" aria-hidden="true" />
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
                      <div key={email} className="flex items-center gap-1.5">
                        <Mail className="size-3.5 text-accent shrink-0" aria-hidden="true" />
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-primary transition-colors font-medium"
                        >
                          {email}
                        </a>
                      </div>
                    ))
                  ) : center.email ? (
                    <div className="flex items-center gap-1.5">
                      <Mail className="size-3.5 text-accent shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${center.email}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {center.email}
                      </a>
                    </div>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA banner to explore the rest of the centers */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-primary/20 bg-primary-subtle p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-heading">
              Looking for our regional learning and facilitation centers?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-body">
              Explore our nationwide network of regional offices and student support centers across Pakistan.
            </p>
          </div>
          <Link
            href="/centers"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-surface shadow-xs transition-colors hover:bg-primary-hover active:bg-primary-pressed"
          >
            <span>Explore All Centres</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
