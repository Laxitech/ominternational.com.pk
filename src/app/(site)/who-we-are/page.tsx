import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Building2, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import ImpactNumbers from "@/components/shared/impact-numbers";

export const metadata: Metadata = {
  title: "Who We Are | OM International",
  description:
    "Learn about OM International, part of the OM Group of Companies. Pioneering accredited online degree pathways and partner university collaborations in Pakistan.",
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="Who We Are"
        subtitle="Pioneering quality higher education opportunities and accredited Malaysian university partnerships across Pakistan."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Who We Are" },
        ]}
      />

      {/* 1. Introduction & Corporate Heritage */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Our Heritage &amp; Mission
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl">
                Part of the OM Group of Companies
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                OM International is part of the OM Group of Companies, a highly diversified global business operating in finance, metals extraction &amp; processing, oil &amp; gas, international commodities trading, and human resource &amp; education services with an annual turnover of $3 billion USD and offices in London, Malaysia, Dubai, and Pakistan.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subtle border border-primary-200 px-3 py-1 text-xs font-semibold text-primary">
                  <CheckCircle2 className="size-3.5" /> 10,000 Graduates
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subtle border border-primary-200 px-3 py-1 text-xs font-semibold text-primary">
                  <CheckCircle2 className="size-3.5" /> 12 Learning Centers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subtle border border-primary-200 px-3 py-1 text-xs font-semibold text-primary">
                  <CheckCircle2 className="size-3.5" /> 5 Countries Facilitation Centers
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm leading-7 text-body sm:text-base">
              <p>
                OM International has become a recognized name for providing quality online higher education opportunities. OM International has brought many notable names to Pakistan in the higher education sector from Malaysia.
              </p>
              <p>
                OM International is headed by internationally renowned educationist <strong>Prof. Dr. Omar Masood</strong>, CEO of OM Group of Companies. Prof. Masood has over 20 years’ experience of teaching, consultancy, and administrative roles in leading universities including Oxford University and global financial institutions like HSBC and Goldman Sachs, as well as advising technology leaders like Intel and Microsoft. He has authored over 250 reviewed research papers and 16 books (6 international bestsellers).
              </p>
              <p>
                Ever since the inception of OM International, our vision has been to embrace future trends in Higher Education from around the world and introduce them in Pakistan. After more than a decade of dedicated service, we have proudly achieved that goal by introducing accredited Online Degree Programmes to countless students across the length and breadth of the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reusable Numbering & Impact Section */}
      <ImpactNumbers className="border-t border-border bg-surface-alt/40" />

      {/* 3. Premier Partner University: UNIRAZAK */}
      <section className="border-y border-border bg-surface-alt py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Premier University Collaboration
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl">
              Universiti Tun Abdul Razak (UNIRAZAK)
            </h2>
            <p className="mt-3 text-sm text-body sm:text-base">
              Connecting ambitious Pakistani learners with internationally accredited Malaysian higher education and world-class professional pathways.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-subtle text-primary border border-primary-200">
                  <GraduationCap className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Established 18 December 1997</span>
                  <h3 className="text-2xl font-bold text-heading">Universiti Tun Abdul Razak</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3.5 py-1.5 text-xs font-semibold text-accent w-fit">
                <Award className="size-3.5" />
                <span>5-Star SETARA Rating</span>
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-body sm:text-base">
              <p>
                OM International proudly introduced Universiti Tun Abdul Razak (UNIRAZAK) to Pakistan. Established on 18 December 1997, UNIRAZAK is one of the premier private universities in Malaysia, wholly-owned by <strong>Yayasan Pelaburan Bumiputra</strong> (which also owns Permodalan Nasional Berhad - PNB).
              </p>
              <p>
                Under the leadership of esteemed Pro-Chancellor <strong>YBhg. Dato’ Mohamed Nizam Abdul Razak</strong>, UNIRAZAK is celebrated for coveted degrees jointly-developed with premier international professional bodies including <strong>CPA Australia</strong>, <strong>CMI (UK)</strong>, <strong>MATA</strong>, <strong>CTIM</strong>, <strong>IBFIM</strong>, and <strong>MII</strong>.
              </p>
              <p>
                UNIRAZAK holds MSC-status, ISO 9001:2000 certification, a 4-star MYRA rating, Ministry of Education Grand Award for “Entrepreneurial Private University of the Year”, and a 5-star SETARA rating under the Emerging University category.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-heading">
                <ShieldCheck className="size-4 text-primary" />
                <span>MQA Accredited • MOHE Malaysia Approved • CPA Australia &amp; CMI Dual Qualifications</span>
              </div>
              <Link
                href="/universities/unirazak"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                <span>View Full University Profile</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Facilitation Role */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-sm text-center">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-subtle text-primary border border-primary-200 mb-4">
              <Building2 className="size-6" />
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              Transparent, Student-Centric Facilitation Along with 5 (FIVE) International Centers
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-body max-w-3xl mx-auto">
              As the official facilitation partner of our partner university, OM International maintains complete academic independence: OM International has no role in marking, grading, checking, or evaluation in on-campus or distance learning programmes.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-body max-w-3xl mx-auto">
              Our role is solely to provide seamless, end-to-end guidance, documentation review, counseling, and admission processing through our 3 plus centers nationwide at significantly discounted tuition rates, <strong>Along with 5 (FIVE) International Centers</strong>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/centers"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-xs hover:bg-primary-hover transition-colors"
              >
                <span>Find a Learning Center</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/universities/unirazak"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-heading hover:bg-surface-alt transition-colors"
              >
                <span>Explore UNIRAZAK</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
