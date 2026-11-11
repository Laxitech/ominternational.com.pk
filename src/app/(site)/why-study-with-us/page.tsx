import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Compass, Laptop, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Why Study With Us | OM International",
  description:
    "A name that opens doors. Fit your studies around your lifestyle and study at your own pace with accredited online and blended learning.",
};

export default function WhyStudyWithUsPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="Why Study With Us"
        subtitle="A name that opens doors. Designed for busy professionals with flexible, accredited, and fully supported learning."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/who-we-are" },
          { label: "Why Study With Us" },
        ]}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
        {/* Section 1: A name that opens doors */}
        <section aria-labelledby="section-1-heading" className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <Compass className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Strategic Vision
            </span>
          </div>

          <h2
            id="section-1-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            A name that opens doors.
          </h2>

          <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-body">
            <p>
              We work hard to remove barriers to higher education, inspiring new ways to learn and enriching people and their lives. Everything we do is informed and directed by our Strategic Plan. The Strategic Plan presents a bold vision, offering our students a personalised learning experience with premium digital engagement, creating the power and opportunities to live in a connected and evolving world.
            </p>
            <p>
              We ensure that engagement and innovation &lsquo;anywhere&rsquo; and &lsquo;everywhere we are&rsquo; are grounded in all aspects of academic life – our teaching, our learning and our research.
            </p>
          </div>
        </section>

        {/* Section 2: You can fit your studies around your lifestyle */}
        <section aria-labelledby="section-2-heading" className="rounded-3xl border border-border bg-surface-alt p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <Clock className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Flexible Schedule
            </span>
          </div>

          <h2
            id="section-2-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            You can fit your studies around your lifestyle.
          </h2>

          <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed text-body">
            <p>
              We appreciate that our students are busy working professionals who have to balance study with careers and family life. Over 90% of our students work alongside their studies. Many have family or caring responsibilities too. From watching recorded lectures on the train, writing assignments at the kitchen table or reading books in the online library whilst enjoying your holiday, you can complete your studies without putting your life on hold.
            </p>

            <div className="my-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-heading text-base sm:text-lg">
                    Need a little more structure?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    We have our main campus in Malaysia and collaborative learning centres throughout the world that offer face-to-face tutorial sessions using our innovative &lsquo;blended learning&rsquo; schedule. You get all the same great online materials and support, with the addition of two days face-to-face tutorials or seminars per month during the semester.
                  </p>
                </div>
              </div>
            </div>

            <p className="font-medium text-heading">
              Study with us and you&rsquo;re able to fit your learning into your current commitments, making life easier for you and your family.
            </p>
          </div>
        </section>

        {/* Section 3: You can study at your own pace, in your own space */}
        <section aria-labelledby="section-3-heading" className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <ShieldCheck className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Independent &amp; Supported
            </span>
          </div>

          <h2
            id="section-3-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            You can study at your own pace, in your own space.
          </h2>

          <div className="mt-6 space-y-6 text-sm sm:text-base leading-relaxed text-body">
            <p>
              You may be studying independently, but with OM International you&rsquo;re never on your own. We&rsquo;ve designed an educational experience that fits into your life and supports your professional and personal goals. We&rsquo;ve tailored your learning experience with quality and flexibility in mind.
            </p>

            <div className="rounded-2xl border border-primary-200 bg-primary-subtle p-6 text-center">
              <p className="font-display text-lg sm:text-xl font-bold text-primary">
                &ldquo;You&rsquo;re fully supported – however, whenever and wherever you need it.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: UROX (UNIRAZAK Online Experience) & Video Walk-through */}
        <section aria-labelledby="section-urox-heading" className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200">
              <Laptop className="size-4.5" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Learning Management System
            </span>
          </div>

          <h2
            id="section-urox-heading"
            className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            UROX (UNIRAZAK Online Experience)
          </h2>

          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-body">
            <p>
              UROX (UNIRAZAK Online Experience) is the award-winning Learning Management System (LMS) utilized by Universiti Tun Abdul Razak (UNIRAZAK). Built on the powerful, globally recognized Canvas LMS framework, the platform operates as a centralized hub for online and Open Distance Learning (ODL).
            </p>
            <p>
              If you are looking for video walk-throughs or system demonstrations, UNIRAZAK provides video walk-throughs covering key features of the platform as below:
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div
            className="relative mt-8 w-full overflow-hidden rounded-2xl border border-border shadow-lg bg-surface-dark"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/EawawErYGpo"
              title="UNIRAZAK Online Experience (UROX) Platform Walk-through"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </section>

        {/* Closing CTA */}
        <div className="rounded-3xl bg-primary p-8 sm:p-12 text-center text-surface shadow-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-surface/90">
            Discover accredited degree pathways designed to accommodate your busy lifestyle. Speak with an advisor today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface px-6 py-3 text-sm font-semibold text-primary shadow-xs hover:bg-surface-alt transition-colors"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/programmes"
              className="inline-flex items-center justify-center rounded-xl border border-surface/40 bg-surface/10 px-6 py-3 text-sm font-semibold text-surface hover:bg-surface/20 transition-colors"
            >
              <span>Browse Programmes</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
