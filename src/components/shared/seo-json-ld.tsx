import type { University } from "@/types/university";
import type { Programme } from "@/types/programme";

type SeoJsonLdProps = {
  university: University;
  programmes: Programme[];
};

export default function SeoJsonLd({
  university,
  programmes,
}: SeoJsonLdProps) {
  const uniProgrammes = programmes.filter(
    (programme) => programme.universitySlug === university.slug,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: university.name,
    alternateName: university.shortName,
    description: university.summary,
    url: university.website,
    address: {
      "@type": "PostalAddress",
      addressLocality: university.city,
      addressCountry: university.country,
    },
    foundingYear: university.established,
    owner: {
      "@type": "Organization",
      name: university.owner,
    },
    hasCourse: uniProgrammes.map((programme) => ({
      "@type": "Course",
      name: programme.title,
      description: programme.summary ?? null,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
