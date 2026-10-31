import Link from "next/link";
import { ArrowRight } from "lucide-react";
import UniversityCard from "@/components/universities/university-card";
import { universities } from "@/data/universities";
import { programmes } from "@/data/programmes";

export default function PartnerUniversities() {
  return (
    <section
      aria-labelledby="home-partner-universities-heading"
      className="border-b border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">

            <h2
              id="home-partner-universities-heading"
              className="mt-3 text-balance font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-heading sm:text-[2.75rem] leading-[1.15]"
            >
              Premier Partner Universities in Malaysia
            </h2>
            <p className="mt-3 text-sm text-body sm:text-base leading-relaxed">
              OM International officially represents top-tier Malaysian institutions, bringing world-class degrees, professional credit exemptions, and flexible study modes to ambitious learners in Pakistan.
            </p>
          </div>

          <Link
            href="/universities"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover shrink-0"
          >
            <span>Explore All Universities</span>
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {universities.map((university, index) => (
            <UniversityCard
              key={university.slug}
              university={university}
              programmes={programmes}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
