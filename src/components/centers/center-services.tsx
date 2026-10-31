"use client";

import Image from "next/image";
import {
  Award,
  CheckCircle2,
  Compass,
  FileCheck,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceItem = {
  number: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    badge: "Advisory & Planning",
    title: "Choosing a programme that matches your qualifications",
    description:
      "We assess your academic background, transcripts, and career aspirations to identify the ideal bachelor's, master's, or doctoral qualification at UNIRAZAK or Asia e University.",
    tags: ["Transcript Evaluation", "Pathway Mapping", "Career Consultation"],
    icon: Compass,
  },
  {
    number: "02",
    badge: "Exemption Assessment",
    title: "Understanding entry requirements and credit transfers",
    description:
      "Convert your completed ACCA papers, ICAP modules, CA, PIPFA, or recognized diploma exams into direct course exemptions—saving up to 50% on study time and tuition.",
    tags: ["ACCA / ICAP Conversion", "Prior Learning (RPL)", "HEC Equivalence Check"],
    icon: Award,
  },
  {
    number: "03",
    badge: "Verification & Quality",
    title: "Preparing and checking your application documents",
    description:
      "Our center team conducts a zero-error review of your academic certificates, Medium of Instruction (MOI) English waiver letters, and personal statements before submission.",
    tags: ["Zero-Error Dossier", "MOI English Waiver", "Attestation Guidance"],
    icon: FileCheck,
  },
  {
    number: "04",
    badge: "Admission & Enrolment",
    title: "Following your admission through to the offer letter",
    description:
      "We coordinate directly with university registrars in Malaysia to track your application, secure your official Letter of Offer, and guide your portal registration.",
    tags: ["Direct Liaison", "Official Offer Letter", "LMS Orientation"],
    icon: Send,
  },
];

export default function CenterServices() {
  return (
    <section
      aria-labelledby="center-services-heading"
      className="border-y border-border bg-secondary/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Narrative & Editorial Visual Image */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 self-start">
            <div>


              <h2
                id="center-services-heading"
                className={cn(
                  "text-balance font-serif",
                  "text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.15]",
                  "font-semibold tracking-tight text-heading",
                  "sm:text-[2.75rem]",
                )}
              >
                How a Center Can Help You
              </h2>

              <p className="mt-3 text-balance text-sm leading-relaxed text-body sm:text-base sm:leading-7">
                Our physical learning centers bring world-class Malaysian higher education within reach. Receive in-person guidance, transparent transcript audits, and hands-on application assistance from certified advisors.
              </p>
            </div>

            {/* Editorial Image Composition */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/images/ombuilding.jpeg"
                alt="Students receiving academic counseling at OM International learning center"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/25 to-transparent"
              />
            </div>
            {/* Key Value Strip */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-border bg-surface p-4 shadow-2xs text-center">
              <div>
                <p className="font-serif text-xl font-bold text-heading">100%</p>
                <p className="text-[11px] text-muted mt-0.5">Free Evaluation</p>
              </div>
              <div className="border-x border-border/80">
                <p className="font-serif text-xl font-bold text-heading">1-on-1</p>
                <p className="text-[11px] text-muted mt-0.5">Advisor Sessions</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-heading">24h</p>
                <p className="text-[11px] text-muted mt-0.5">Quick Turnaround</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Service Cards */}
          <div className="lg:col-span-7 space-y-5">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
              >
                <div>
                  {/* Card Header: Icon, Number, Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary-200 bg-primary-subtle text-primary shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-surface group-hover:shadow-md">
                        <service.icon className="size-5 transition-transform duration-300" aria-hidden="true" />
                      </span>
                      <span className="font-serif text-2xl font-bold text-primary/30">
                        {service.number}
                      </span>
                    </div>

                    <span className="rounded-full border border-border/80 bg-secondary/80 px-2.5 py-0.5 text-[11px] font-semibold text-primary transition-colors group-hover:border-primary-200 group-hover:bg-primary-subtle">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-base sm:text-lg font-semibold text-heading transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border/70">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out motion-reduce:hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
