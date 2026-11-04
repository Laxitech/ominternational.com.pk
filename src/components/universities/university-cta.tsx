"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

type UniversityCtaProps = {
  universityName?: string;
};

export default function UniversityCta({
  universityName = "Malaysian Partner Universities",
}: UniversityCtaProps) {
  const { contact } = siteConfig;

  return (
    <section
      aria-labelledby="university-enquire-heading"
      id="enquire"
      className={cn(
        "relative isolate overflow-hidden bg-surface-dark m-10 rounded-3xl border border-surface/10 shadow-2xl",
        "py-14 sm:py-20 lg:py-24",
      )}
    >


      <Mail className="absolute size-50 shrink-0 text-primary-100/50 rotate-45 top-0 mt-0.5" />
      {/* Background patterned dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 text-primary-900 opacity-20 "
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 -z-10 size-80 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Information, contact details */}
          <div className="lg:col-span-5 space-y-6">


            <h2
              id="university-enquire-heading"
              className={cn(
                "text-balance font-serif",
                "text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.15]",
                "font-semibold tracking-tight text-surface",
                "sm:text-[2.75rem] lg:text-[3.25rem]",
              )}
            >
              Speak to an Academic Advisor
            </h2>

            <p className="text-sm leading-relaxed text-surface/85 sm:text-base sm:leading-7">

              Need guidance on {universityName} degree pathways, eligibility, or fees? Our education counselors in Pakistan are here to help.

            </p>




          </div>

          {/* Right Column: Embedded Enquiry Form */}
          <div className="lg:col-span-7">

            <div className="mt-8 space-y-5 rounded-2xl border border-surface/10 bg-surface/5 p-6 backdrop-blur-xs">
              <div className="flex items-start gap-3">
                <Mail className="size-5 shrink-0 text-primary-200 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-surface/70 uppercase tracking-wider">
                    Official Inquiries Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-surface font-medium hover:text-gold transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-surface/10 pt-4">
                <Phone className="size-5 shrink-0 text-primary-200 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-surface/70 uppercase tracking-wider">
                    Direct Helpline
                  </p>
                  <p className="text-sm text-surface font-medium">
                    {contact.phoneDisplay}
                  </p>
                  <p className="mt-0.5 text-xs text-surface/70">
                    {contact.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-surface/10 pt-4">
                <MapPin className="size-5 shrink-0 text-primary-200 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-surface/70 uppercase tracking-wider">
                    Head Office Pakistan
                  </p>
                  <p className="text-xs sm:text-sm text-surface/85 leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
