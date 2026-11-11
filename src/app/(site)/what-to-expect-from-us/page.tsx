import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Compass, Scale, Users, GraduationCap } from "lucide-react";
import PageHeader from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "What to Expect From Us | OM International",
  description:
    "Study from anywhere in the world, fit your studies around your lifestyle, and balance work, life, and education with OM International.",
};

export default function WhatToExpectFromUsPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="What to Expect From Us"
        subtitle="Study from anywhere in the world, on your terms, with full flexibility to balance your work, life, and higher education."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/who-we-are" },
          { label: "What to Expect From Us" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
        {/* Section 1: Study from anywhere in the world */}
        <section aria-labelledby="section-1-heading" className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <Globe className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Global Flexibility
            </span>
          </div>

          <h2
            id="section-1-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            Study from anywhere in the world.
          </h2>

          <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-body">
            <p>
              Learning has no boundaries and our options are not limited by geography. Every programme we offer can be studied from anywhere in the world – you can study on your own, at your own pace and place, with or without attending classes.
            </p>
            <p>
              Whichever study method you choose, you&rsquo;ll experience the same high quality, highly engaging programme of study. With nearly 15,000 active students studying from 37 different countries and 10,000+ graduate alumni, we offer a powerful network of like-minded individuals right across the globe and a learning experience that&rsquo;s both personalised and flexible.
            </p>
          </div>

          {/* Key Metrics Highlight */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border/60">
            <div className="flex items-center gap-4 rounded-2xl bg-surface-alt p-4 border border-border">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-surface shrink-0">
                <Users className="size-5" />
              </span>
              <div>
                <div className="font-display text-xl font-bold text-heading">Nearly 15,000</div>
                <div className="text-xs text-body-muted">Active Students from 37 Countries</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-surface-alt p-4 border border-border">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-surface shrink-0">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <div className="font-display text-xl font-bold text-heading">10,000+</div>
                <div className="text-xs text-body-muted">Graduate Alumni Worldwide</div>
              </div>
            </div>
          </div>

          {/* Global Students Map Section (Ready for map highlighting) */}
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-surface-alt/60 p-6 text-center">
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-subtle text-primary mb-3">
              <Globe className="size-5" />
            </div>
            <h3 className="font-display text-base font-bold text-heading">
              Global Student Community
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-body max-w-xl mx-auto">
              Nearly 15,000 active students studying from 37 different countries worldwide.
            </p>
          </div>
        </section>

        {/* Section 2: Study to suit the way you live */}
        <section aria-labelledby="section-2-heading" className="rounded-3xl border border-border bg-surface-alt p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <Compass className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Learner Empowerment
            </span>
          </div>

          <h2
            id="section-2-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            Study to suit the way you live.
          </h2>

          <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-body">
            <p>
              Studying with us puts you firmly in the driver&rsquo;s seat. We don&rsquo;t set the limits, you do. We give you the flexibility to study what, when and how you want, so you can fit your studies into your busy life.
            </p>
            <p>
              You can access all your learning resources, participate in discussions and engage with our academic staff and your fellow course mates in your own time, which means you can study when and where it suits you.
            </p>
            <p className="font-medium text-heading">
              Our goal is to bring the classroom, and everything you need for your studies, to you – no matter where you are in the world.
            </p>
          </div>
        </section>

        {/* Section 3: We help you balance work, life and study */}
        <section aria-labelledby="section-3-heading" className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <Scale className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Work &amp; Life Harmony
            </span>
          </div>

          <h2
            id="section-3-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            We help you balance work, life and study.
          </h2>

          <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-body">
            <p>
              Many of our students continue to work full-time. However, we help them balance learning with demanding careers, family commitments and hectic travel schedules.
            </p>
            <p>
              We give them the flexibility to study what, when and how they want, so they can fit their studies around their lifestyle.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-3xl bg-linear-to-br from-primary to-primary-hover p-8 sm:p-12 text-center text-surface shadow-md">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Ready to Begin Your Higher Education Journey?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-surface/90">
            Discover accredited degree programmes tailored for working professionals with flexible online and blended pathways.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 rounded-xl bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-xs hover:bg-surface-alt transition-colors"
            >
              <span>Explore Programmes</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-surface/30 px-6 py-3 text-sm font-semibold text-surface hover:bg-surface/10 transition-colors"
            >
              <span>Speak with an Advisor</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
