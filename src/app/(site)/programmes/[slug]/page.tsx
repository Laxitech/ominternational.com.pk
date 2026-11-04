import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammeDetail from "@/components/programmes/programme-detail";
import { programmes } from "@/data/programmes";
import { universities } from "@/data/universities";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);

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
  const programme = programmes.find((item) => item.slug === slug);

  if (!programme) {
    notFound();
  }

  const awardingBodyConfirmed = programme.awardingBodyConfirmed !== false;
  const awardingUniversity = awardingBodyConfirmed
    ? universities.find(
        (university) => university.slug === programme.universitySlug,
      )
    : undefined;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programme.title,
    description:
      programme.summary || `${programme.title} academic degree pathway`,
  };

  if (awardingUniversity) {
    jsonLd.provider = {
      "@type": "CollegeOrUniversity",
      name: awardingUniversity.name,
      url: `https://ominternational.edu.pk/universities/${awardingUniversity.slug}`,
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgrammeDetail
        programme={programme}
        university={awardingUniversity}
      />
    </>
  );
}
