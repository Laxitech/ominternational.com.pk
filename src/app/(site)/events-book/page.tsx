import type { Metadata } from "next";
import PageHeader from "@/components/shared/page-header";
import EventBookSections from "@/components/events/event-book-sections";
import EventGallery from "@/components/events/event-gallery";
import { EVENT_BOOK_PHOTOS } from "@/data/event-book-images";

export const metadata: Metadata = {
  title: "OM International Events & Ceremonies | Events Book",
  description:
    "Explore our nationwide facilitation center inaugurations, diplomatic engagements, and career pathway sessions at OM International.",
};

export default function EventsBookPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="OM International Events & Ceremonies"
        subtitle="A visual journey of our nationwide facilitation center inaugurations, diplomatic engagements, and professional career pathway sessions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events Book" },
        ]}
      />

      {/* Featured Event Milestones */}
      <EventBookSections showMainHeader={false} showViewAllCta={false} />

      {/* Complete Visual Photo Archive */}
      <div className="border-t border-border">
        <EventGallery photos={EVENT_BOOK_PHOTOS} />
      </div>
    </main>
  );
}
