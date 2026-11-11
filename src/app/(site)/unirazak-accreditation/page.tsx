import type { Metadata } from "next";
import PageHeader from "@/components/shared/page-header";
import UnirazakAccreditationGallery from "@/components/unirazak/unirazak-accreditation-gallery";

export const metadata: Metadata = {
  title: "UniRazak Accreditation | OM International",
  description:
    "Explore UNIRAZAK UAE embassy attestations, ministry endorsements, and sample degree scrolls.",
};

export default function UnirazakAccreditationPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="UniRazak Accreditation"
        subtitle="Official UAE embassy attestations and degree scrolls."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "UNIRAZAK", href: "/universities/unirazak" },
          { label: "UniRazak Accreditation" },
        ]}
      />

      <UnirazakAccreditationGallery />
    </main>
  );
}
