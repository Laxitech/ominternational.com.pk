import type { Metadata } from "next";
import Link from "next/link";
import AdvisoryBoardSection from "@/components/board/advisory-board-section";
import PageHeader from "@/components/shared/page-header";
import {
  ADVISORY_BOARD_HEADLINE,
  ADVISORY_BOARD_INTRO,
  boardMembers,
} from "@/data/board";

export const metadata: Metadata = {
  title: "Advisory Board | OM International",
  description:
    "Meet the Advisory Board of OM International, whose distinguished professionals and business leaders provide academic and strategic guidance.",
  openGraph: {
    title: "Advisory Board | OM International",
    description:
      "Meet the Advisory Board of OM International, whose distinguished professionals and business leaders provide academic and strategic guidance.",
    type: "website",
  },
};

export default function AdvisoryBoardPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title={ADVISORY_BOARD_HEADLINE}
        subtitle={ADVISORY_BOARD_INTRO}
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="OM International advisory board"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Advisory Board" },
        ]}
      />

      <AdvisoryBoardSection members={boardMembers} />

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
