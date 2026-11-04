import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import GoverningBoardSection from "@/components/board/governing-board-section";
import {
  boardMembers,
  GOVERNING_BOARD_HEADLINE,
  GOVERNING_BOARD_SUBHEADING,
} from "@/data/board";

export const metadata: Metadata = {
  title: "Governing Board | OM International",
  description:
    "Meet the Governing Board of OM International, providing academic governance, strategic direction, and leadership across global degrees.",
  openGraph: {
    title: "Governing Board | OM International",
    description:
      "Meet the Governing Board of OM International, providing academic governance, strategic direction, and leadership across global degrees.",
    type: "website",
  },
};

export default function GoverningBoardPage() {
  return (
    <main className="min-h-full bg-surface">
      {/* 1. Page Header (Existing Shared Component) */}
      <PageHeader
        title={GOVERNING_BOARD_HEADLINE}
        subtitle={GOVERNING_BOARD_SUBHEADING}
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="OM International leadership and governance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Governing Board" },
        ]}
      />

      {/* 2. Governing Board Section */}
      <GoverningBoardSection members={boardMembers} />

      {/* 3. Closing Note */}
      <section
        aria-label="More about OM International"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="rounded-2xl border border-border bg-surface-elevated/40 p-6 text-center sm:p-8">
          <p className="text-sm text-body sm:text-base">
            Want to know more about OM International?{" "}
            <Link
              href="/about"
              className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore our mission, academic partners, and vision
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
