import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqAccordion from "@/components/shared/faq-accordion";
import PageHeader from "@/components/shared/page-header";
import ProgrammeApelC from "@/components/programmes/programme-apel-c";
import ProgrammeExemptions from "@/components/programmes/programme-exemptions";
import ProgrammeFacts from "@/components/programmes/programme-facts";
import ProgrammeSemesterPlan from "@/components/programmes/programme-semester-plan";
import ProgrammeSpecializations from "@/components/programmes/programme-specializations";
import ProgrammeStructureVisual from "@/components/programmes/programme-structure-visual";
import ProgrammeSummaryCard from "@/components/programmes/programme-summary-card";
import { programmes } from "@/data/programmes";
import { universities } from "@/data/universities";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);

  if (!programme) {
    return {
      title: "Programme Not Found | OM International",
    };
  }

  const title = `${programme.title} | OM International`;
  const description =
    programme.summary ||
    `Explore ${programme.title} degree pathways, entry requirements, and professional credit exemptions with OM International.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);

  if (!programme) {
    notFound();
  }

  const isConfirmed = programme.awardingBodyConfirmed !== false;
  const awardingUniversity = isConfirmed
    ? universities.find((u) => u.slug === programme.universitySlug)
    : undefined;

  // JSON-LD structured data for Course
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programme.title,
    description:
      programme.summary || `${programme.title} academic degree pathway`,
  };

  if (isConfirmed && awardingUniversity) {
    jsonLd.provider = {
      "@type": "CollegeOrUniversity",
      name: awardingUniversity.name,
      url: `https://ominternational.edu.pk/universities/${awardingUniversity.slug}`,
    };
  }

  // Eyebrow formatting
  const eyebrow =
    programme.slug === "bs-accounting-and-finance"
      ? "Bachelor's programme  |  Accounting and Finance"
      : programme.slug === "master-of-business-administration"
        ? "Master's programme  |  Business Administration (MBA)"
        : `${
            programme.level === "bachelors"
              ? "Bachelor's"
              : programme.level === "masters"
                ? "Master's"
                : programme.level === "doctoral"
                  ? "Doctoral"
                  : "Graduate Diploma"
          } Programme`;

  // Breadcrumbs: "Programmes" links to /programmes?level=masters / bachelors
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Programmes",
      href: `/programmes?level=${programme.level}`,
    },
    { label: programme.title },
  ];

  // Map FAQs for reusable FaqAccordion
  const faqItems = (programme.faqs || []).map((faq, index) => ({
    id: `faq-${index + 1}`,
    question: faq.question,
    answer: faq.answer,
  }));

  const isPostgraduate =
    programme.level === "masters" || programme.level === "doctoral";
  const heroActionText = isPostgraduate
    ? "Check MBA eligibility"
    : "Check my exemptions";

  return (
    <main className="min-h-full bg-surface pb-24 lg:pb-16">
      {/* Schema.org Course JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Page Header */}
      <PageHeader
        title={programme.title}
        subtitle={programme.summary}
        eyebrow={eyebrow}
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt={`${programme.title} banner`}
        breadcrumbs={breadcrumbs}
      >
        <a
          href="#exemption-check"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none"
        >
          {heroActionText}
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-surface/20 px-4 py-2.5 text-xs font-medium text-surface/90 hover:text-surface hover:border-surface/40 transition-colors"
        >
          Enquire
        </Link>
      </PageHeader>

      {/* Main Content Layout: 8 cols on left + 4 cols sticky summary on right */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Main content column */}
          <div className="space-y-10 sm:space-y-14 lg:col-span-8">
            {/* 2. Key facts strip */}
            {programme.structure && (
              <ProgrammeFacts structure={programme.structure} />
            )}

            {/* 3. Structure visual: "How your subjects add up" */}
            {programme.structure && (
              <ProgrammeStructureVisual structure={programme.structure} />
            )}

            {/* 4. Semester plan (timeline) */}
            {programme.structure?.semesters && (
              <ProgrammeSemesterPlan structure={programme.structure} />
            )}

            {/* 5. Specializations / Concentrations */}
            {programme.majors && programme.majors.length > 0 && (
              <ProgrammeSpecializations majors={programme.majors} />
            )}

            {/* 6. APEL-C */}
            {programme.structure?.apelC && (
              <ProgrammeApelC apelC={programme.structure.apelC} />
            )}

            {/* 7. Exemptions & Eligibility (id="exemption-check" inside) */}
            {(programme.structure?.exemptions || programme.eligibility) && (
              <ProgrammeExemptions
                exemptions={programme.structure?.exemptions}
                eligibility={programme.eligibility}
                programmeTitle={programme.title}
                isPostgraduate={isPostgraduate}
              />
            )}

            {/* Generic overview fallback if no custom structure data */}
            {!programme.structure && (
              <section
                aria-labelledby="programme-overview-heading"
                className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
              >
                <h2
                  id="programme-overview-heading"
                  className="text-xl font-semibold tracking-tight text-heading sm:text-2xl"
                >
                  Programme Overview
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
                  {programme.summary ||
                    "This accredited academic degree programme offers comprehensive curricula designed to equip graduates with industry-demanded skills and recognized credentials."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover"
                  >
                    Enquire about admissions
                  </Link>
                </div>
              </section>
            )}

            {/* 8. FAQs Section */}
            {faqItems.length > 0 && (
              <section
                aria-labelledby="programme-faqs-heading"
                className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
              >
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Questions & Answers
                  </span>
                  <h2
                    id="programme-faqs-heading"
                    className="mt-1 text-xl font-semibold tracking-tight text-heading sm:text-2xl"
                  >
                    Frequently asked questions
                  </h2>
                </div>
                <FaqAccordion items={faqItems} allowMultiple={false} />
              </section>
            )}
          </div>

          {/* 9. Sticky Summary Card on Desktop / Fixed Bottom Bar on Mobile */}
          <div className="lg:col-span-4">
            <ProgrammeSummaryCard programme={programme} />
          </div>
        </div>
      </div>
    </main>
  );
}
