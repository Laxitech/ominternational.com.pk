import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import { universities } from "@/data/universities";
import { programmes } from "@/data/programmes";
import {
  offers,
  downloads,
  aeuOffers,
  aeuDownloads,
} from "@/data/unirazak-requirements";
import UniversityFacts from "@/components/universities/university-facts";
import UniversityAbout from "@/components/universities/university-about";
import RecognitionList from "@/components/universities/recognition-list";
import StudyModes from "@/components/universities/study-modes";
import OffersList from "@/components/universities/offers-list";
import AdmissionRequirements from "@/components/universities/admission-requirements";
import DownloadsList from "@/components/universities/downloads-list";
import HowItWorks from "@/components/universities/how-it-works";
import UniversityCta from "@/components/universities/university-cta";
import SeoJsonLd from "@/components/shared/seo-json-ld";

export function generateStaticParams() {
  return universities.map((university) => ({ slug: university.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const university = universities.find((u) => u.slug === slug);
  if (!university) {
    return { title: "University not found | OM International" };
  }
  return {
    title: `${university.name} | OM International`,
    description: university.summary,
    openGraph: {
      title: `${university.name} - OM International Pathways`,
      description: university.summary,
      url: university.website,
      type: "website",
    },
  };
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = universities.find((u) => u.slug === slug);

  if (!university) {
    notFound();
  }

  const otherUniversity = universities.find((u) => u.slug !== university.slug);

  const activeOffers =
    university.slug === "asia-e-university" ? aeuOffers : offers;
  const activeDownloads =
    university.slug === "asia-e-university" ? aeuDownloads : downloads;

  return (
    <main className="min-h-full bg-surface">
      <SeoJsonLd university={university} programmes={programmes} />

      {/* 1. Page Header with background image for site consistency */}
      <PageHeader
        title={university.name}
        subtitle={
          university.tagline
            ? `${university.tagline} — ${university.summary}`
            : university.summary
        }
        eyebrow={`Partner University • ${university.city}, ${university.country}`}
        imageSrc={university.heroImage ?? "/images/page header/unirazak.jpg"}
        imageAlt={`${university.name} campus architecture and facilities`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Universities", href: "/universities" },
          { label: university.shortName },
        ]}
      >
        <Link
          href="#enquire"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          <span>Enquire About Admissions</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>

        {university.website && (
          <a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-surface/20 px-4 py-2.5 text-xs font-medium text-surface/90 hover:text-surface hover:border-surface/40 transition-colors"
          >
            <span>Official Portal</span>
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </PageHeader>

      {/* 2. Key Facts Strip */}
      <UniversityFacts university={university} programmes={programmes} />

      {/* 3. About Section */}
      <UniversityAbout university={university} />

      {/* 4. Recognition & Awards */}
      <RecognitionList
        recognitions={university.recognitions}
        universityName={university.name}
      />

      {/* 5. Study Modes */}
      <StudyModes />



      {/* 7. Scholarships and Rebates */}
      <OffersList
        offers={activeOffers}
        universityName={university.shortName}
      />

      {/* 8. Admission Requirements */}
      <AdmissionRequirements universityName={university.name} />

      {/* 9. Official Literature Downloads */}
      <DownloadsList
        downloads={activeDownloads}
        universityName={university.shortName}
      />

      {/* 10. How It Works Timeline */}
      <HowItWorks />

      {/* 11. Conversion Enquiry & Consultation */}
      <UniversityCta universityName={university.name} />




    </main>
  );
}
