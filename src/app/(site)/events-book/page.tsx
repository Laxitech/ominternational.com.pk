import type { Metadata } from "next";
import PageHeader from "@/components/shared/page-header";
import EventBookSections from "@/components/home/event-book-sections";
import EventGallery from "@/components/events/event-gallery";
import { EVENT_BOOK_PHOTOS } from "@/data/event-book-images";

export const metadata: Metadata = {
  title: "Events Book | OM International",
  description:
    "Explore our milestones, ceremony inaugurations, diplomatic engagements, and pathway sessions at OM International.",
};

export default function EventsBookPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="Events Book"
        subtitle="Explore our nationwide facilitation center inaugurations, diplomatic engagements, and milestones."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events Book" },
        ]}
      />

      {/* Featured Event Milestones (Identical to Home Page Event Section) */}
      <EventBookSections showMainHeader={false} showViewAllCta={false} />

      {/* Complete Visual Photo Archive (All 72 Event Photographs) */}
      <div className="border-t border-border">
        <EventGallery photos={EVENT_BOOK_PHOTOS} />
      </div>
    </main>
  );
}
