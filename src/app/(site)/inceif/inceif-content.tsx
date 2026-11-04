"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Monitor,
  Clock,
  CheckCircle2,
  ClipboardCheck,
  Globe,
  Building2,
  Award,
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Scale,
  TrendingUp,
} from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import UniversityCta from "@/components/universities/university-cta";

// ─── Main Page Content ────────────────────────────────────────────────────────
export default function InceifContent() {
  return (
    <main className="min-h-full bg-surface">

      {/* ── 1. Page Header ─────────────────────────────────────────────────── */}
      <PageHeader
        title="Lead Pakistan's Islamic Finance Transformation."
        subtitle="An online postgraduate-style Certificate in Islamic Finance, delivered by OM International in exclusive collaboration with INCEIF University, Malaysia, through ISRA Associates."
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="INCEIF University — Global University of Islamic Finance, Malaysia"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "INCEIF Collaboration" },
        ]}
      >
        <Link
          href="#enroll"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none"
        >
          <span>Reserve Your Seat</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <a
          href="#curriculum"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-surface/20 px-4 py-2.5 text-sm font-medium text-surface/90 transition-colors hover:border-surface/40 hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none"
        >
          <BookOpen className="size-4" aria-hidden="true" />
          <span>View Curriculum</span>
        </a>
      </PageHeader>

      {/* ── 2. Marquee Strip ────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-border bg-primary-subtle">
        <div
          className="flex gap-14 whitespace-nowrap py-3 text-xs font-bold uppercase tracking-[0.08em] text-primary"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[
            "Online Lectures · Weekends Only",
            "4 Core Modules",
            "Assessment After Each Module",
            "For Bankers & Non-Bankers",
            "Designed Around Your Job, Not Against It",
            "Online Lectures · Weekends Only",
            "4 Core Modules",
            "Assessment After Each Module",
            "For Bankers & Non-Bankers",
            "Designed Around Your Job, Not Against It",
          ].map((text, i) => (
            <span key={i} className="shrink-0">
              {text}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ── 3. Why Now ──────────────────────────────────────────────────────── */}
      <section
        id="why"
        aria-labelledby="why-now-heading"
        className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-surface via-primary-subtle/25 to-surface py-20 sm:py-24 lg:py-32"
      >
        {/* ── Subtle background elements: geometric star lattice & soft financial ambient glows ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 -z-10 size-[520px] rounded-full bg-primary-200/30 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 -z-10 size-[520px] rounded-full bg-accent/15 blur-[130px]"
        />
        {/* Subtle geometric watermark inspired by Islamic financial architecture */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/3 opacity-[0.035] size-[800px] text-primary"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="60" />
          <rect x="36" y="36" width="128" height="128" transform="rotate(45 100 100)" />
          <rect x="36" y="36" width="128" height="128" />
        </svg>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">

            {/* ── LEFT COLUMN: Refined Glassmorphism Dashboard ── */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <div className="relative">
                {/* Soft ambient back-glow behind glass card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary-400/20 via-accent/15 to-primary-600/10 blur-xl opacity-75"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/80  p-6 sm:p-8  ">
                  {/* Subtle gloss reflection overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/90 via-white/20 to-transparent"
                  />

                  {/* Dashboard Top Header Strip */}
                  <div className="relative z-10 flex items-center justify-between gap-5 pb-10">


                  </div>



                  {/* Compact Bento Grid: Key Statistics & Highlights */}
                  <div className="relative z-10 mt-4 grid grid-cols-2 gap-3 sm:gap-3.5">
                    {/* Card 1 */}
                    <div className="rounded-xl border border-white/80 bg-white/60 p-3.5 sm:p-4 backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted">
                          Legal Scope
                        </span>
                        <Scale className="size-3.5 text-primary" aria-hidden="true" />
                      </div>
                      <p className="mt-1.5 font-mono text-lg sm:text-xl font-bold tracking-tight text-heading">
                        All Banks
                      </p>
                      <p className="mt-0.5 text-[11px] text-body">Legally bound to convert</p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl border border-white/80 bg-white/60 p-3.5 sm:p-4 backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted">
                          Market Need
                        </span>
                        <TrendingUp className="size-3.5 text-accent" aria-hidden="true" />
                      </div>
                      <p className="mt-1.5 font-mono text-lg sm:text-xl font-bold tracking-tight text-heading">
                        Talent Deficit
                      </p>
                      <p className="mt-0.5 text-[11px] text-body">Urgent demand for specialists</p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl border border-white/80 bg-white/60 p-3.5 sm:p-4 backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted">
                          Curriculum
                        </span>
                        <BookOpen className="size-3.5 text-primary" aria-hidden="true" />
                      </div>
                      <p className="mt-1.5 font-mono text-lg sm:text-xl font-bold tracking-tight text-heading">
                        4 Modules
                      </p>
                      <p className="mt-0.5 text-[11px] text-body">Comprehensive grounding</p>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-xl border border-white/80 bg-white/60 p-3.5 sm:p-4 backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted">
                          Format
                        </span>
                        <Clock className="size-3.5 text-accent" aria-hidden="true" />
                      </div>
                      <p className="mt-1.5 font-mono text-lg sm:text-xl font-bold tracking-tight text-heading">
                        Weekends
                      </p>
                      <p className="mt-0.5 text-[11px] text-body">100% online executive delivery</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Editorial Headline & Concise Urgency ── */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center  text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <span>WHY NOW</span>
              </div>

              {/* Strong Editorial Headline */}
              <h2
                id="why-now-heading"
                className="mt-4 text-balance text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-[1.14]"
              >
                Pakistan&apos;s entire financial system is being rebuilt around{" "}
                <span className="relative inline-block text-primary">
                  Islamic finance.
                  <span className="absolute bottom-1 left-0 -z-10 h-2.5 w-full rounded bg-accent/15" />
                </span>
              </h2>

              {/* Concise Supporting Paragraph */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-body text-pretty font-normal">
                Under landmark rulings from the <strong className="font-semibold text-heading">Federal Shariat Court</strong> and the <strong className="font-semibold text-heading">26th Constitutional Amendment</strong>, Pakistan&apos;s banking system is legally required to eliminate interest by <strong className="font-semibold text-primary">31 December 2027</strong>. With all commercial banks actively converting their assets, this programme gives you the accredited credentials to lead this historic transformation.
              </p>


              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#enroll"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-surface shadow-sm transition-all hover:bg-primary-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                >
                  <span>Reserve Your Seat</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-primary-200 hover:bg-primary-subtle hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
                >
                  <BookOpen className="size-4 text-accent" aria-hidden="true" />
                  <span>View Curriculum</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Backed By ────────────────────────────────────────────────────── */}
      <section
        id="backers"
        aria-labelledby="backers-heading"
        className="border-y border-border bg-secondary/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Backed By
            </p>
            <h2
              id="backers-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              Built on{" "}
              <strong className="text-primary">INCEIF University, Malaysia&apos;s</strong>{" "}
              academic authority and{" "}
              <strong className="text-primary">Bank Negara Malaysia&apos;s</strong> regulatory
              legacy.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
              OM International is the exclusive appointed representative in Pakistan for this
              programme, delivered under a formal collaboration agreement with ISRA Associates
              Sdn Bhd — the wholly-owned academic subsidiary of INCEIF University, Malaysia —
              and SKC Online Education Sdn Bhd.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                Icon: Globe,
                title: "INCEIF University — The Global University of Islamic Finance, Malaysia",
                desc: "Established with the direct support of Bank Negara Malaysia, INCEIF University is Malaysia's dedicated postgraduate Islamic finance university — internationally recognized for academic rigor and its role in shaping Islamic finance talent worldwide. All content, trainers, and advisory support are coordinated through ISRA Associates, INCEIF's wholly-owned academic subsidiary.",
                tag: "Academic Coordination & Certification Partner",
              },
              {
                Icon: Building2,
                title: "Bank Negara Malaysia",
                desc: "Malaysia's central bank and one of the principal architects of the modern global Islamic finance system. Bank Negara Malaysia's regulatory standards — and its role in establishing INCEIF University — have informed Islamic banking frameworks now adopted worldwide, including Pakistan's own transition.",
                tag: "Regulatory Framework Reference",
              },
            ].map(({ Icon, title, desc, tag }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-xs transition-colors hover:border-primary-200"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent" />
                <div className="mb-5 inline-flex size-14 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-heading sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{desc}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Formal agreement */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-xs">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent" />
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                <FileText className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading">
                  Formal Collaboration &amp; Appointment Agreement
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  This partnership is governed by a signed Letter of Collaboration and Appointment
                  between SKC Online Education Sdn Bhd, ISRA Associates Sdn Bhd (on behalf of
                  INCEIF University), and OM International (Pakistan), granting OM International
                  exclusive authority to represent, market, and coordinate delivery of the Islamic
                  Finance Executive Training Programme within Pakistan — while all programme
                  certification, academic recognition, and institutional representation remain under
                  INCEIF University.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Curriculum ───────────────────────────────────────────────────── */}
      <section
        id="curriculum"
        aria-labelledby="curriculum-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Curriculum
          </p>
          <h2
            id="curriculum-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            Four modules. One complete grounding in Islamic finance.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
            Each module builds on the last — from first principles to the regulatory frameworks
            you&apos;ll be applying on the job. An online assessment closes out every module
            before you move to the next.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border border-t border-border">
          {[
            {
              n: "01",
              title: "Foundations of Shariah & Islamic Finance",
              desc: "Core Shariah principles governing finance, the prohibition of riba and gharar, and how Islamic finance differs structurally from conventional banking.",
              final: false,
            },
            {
              n: "02",
              title: "Islamic Banking Products & Operations",
              desc: "Murabaha, Ijarah, Musharakah and Mudarabah in practice — how Shariah-compliant products are structured, priced and operated inside a bank.",
              final: false,
            },
            {
              n: "03",
              title: "Sukuk, Capital Markets & Takaful",
              desc: "Islamic capital markets, sukuk structuring, and Takaful as the Shariah-compliant alternative to conventional insurance.",
              final: false,
            },
            {
              n: "04",
              title: "Shariah Governance, Risk & Regulation",
              desc: "Shariah governance frameworks, risk management for Islamic financial institutions, and the regulatory path Pakistan is following toward 2027.",
              final: true,
            },
          ].map(({ n, title, desc, final }) => (
            <div
              key={n}
              className="grid grid-cols-[56px_1fr] gap-5 py-8 transition-colors hover:bg-primary-subtle/40 sm:grid-cols-[80px_1fr_auto] sm:gap-8 sm:-mx-4 sm:rounded-xl sm:px-4"
            >
              <span className="text-4xl font-semibold leading-none text-primary sm:text-5xl">
                {n}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-heading sm:text-lg">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{desc}</p>
              </div>
              <div className="col-span-2 flex flex-wrap gap-2 sm:col-span-1 sm:flex-col sm:items-end sm:justify-center">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  Online · Weekend
                </span>
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {final ? "Final Assessment" : "Assessment Included"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Format / Delivery ────────────────────────────────────────────── */}
      <section
        id="format"
        aria-labelledby="format-heading"
        className="border-y border-border bg-secondary/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How It&apos;s Delivered
            </p>
            <h2
              id="format-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              Built for people who already have a job.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
              Live online lectures, scheduled on weekends with flexible timing, so your weekday
              work isn&apos;t the trade-off.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                Icon: Monitor,
                title: "Live Online Lectures",
                desc: "Delivered through a high-definition virtual classroom with real-time interaction, recorded sessions, and downloadable digital course material.",
              },
              {
                Icon: Clock,
                title: "Weekend, Flexible Timing",
                desc: "Sessions are scheduled on weekends with flexible slots — designed so working bankers and professionals never have to choose between class and career.",
              },
              {
                Icon: ClipboardCheck,
                title: "Assessment After Every Module",
                desc: "A structured online assessment closes each of the four modules, so your progress — and your understanding — is verified at every stage.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface p-7 shadow-xs transition-colors hover:border-primary-200"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{desc}</p>
              </div>
            ))}
          </div>

          {/* Virtual Classroom Banner */}
          <div className="relative isolate mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 via-primary to-primary-600 px-8 py-10 sm:py-12 lg:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #fff 1px, transparent 1.6px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-200">
                  The Virtual Classroom
                </p>
                <h3 className="mt-3 text-xl font-semibold text-surface sm:text-2xl">
                  A hi-tech learning environment, wherever you are in Pakistan.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-surface/80">
                  Interactive live sessions, digital whiteboards, downloadable case studies and
                  on-demand replays — everything designed so distance from Kuala Lumpur is never
                  a barrier to the standard of education you receive.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 380 240"
                  className="w-full max-w-sm opacity-90"
                  aria-hidden="true"
                >
                  <rect x="20" y="20" width="340" height="170" rx="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" />
                  <rect x="36" y="36" width="145" height="85" rx="5" fill="white" opacity="0.12" />
                  <rect x="192" y="36" width="148" height="40" rx="5" fill="white" opacity="0.2" />
                  <rect x="192" y="83" width="70" height="38" rx="5" fill="white" opacity="0.2" />
                  <rect x="270" y="83" width="70" height="38" rx="5" fill="white" opacity="0.2" />
                  <circle cx="108" cy="78" r="18" fill="white" opacity="0.45" />
                  <rect x="36" y="135" width="304" height="9" rx="4" fill="white" opacity="0.25" />
                  <rect x="36" y="135" width="175" height="9" rx="4" fill="white" opacity="0.9" />
                  <circle cx="52" cy="185" r="6" fill="white" />
                  <circle cx="74" cy="185" r="6" fill="white" opacity="0.55" />
                  <circle cx="96" cy="185" r="6" fill="white" opacity="0.55" />
                  <line x1="190" y1="200" x2="190" y2="220" stroke="white" strokeWidth="4" />
                  <line x1="157" y1="220" x2="223" y2="220" stroke="white" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Lead Advisor ─────────────────────────────────────────────────── */}
      <section
        id="advisor"
        aria-labelledby="advisor-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Lead Advisor
          </p>
          <h2
            id="advisor-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            Guided by leadership that has built Shariah-compliant institutions from the inside.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
            Every module is designed, aligned and overseen by practitioners who have led the
            transition themselves — starting with the programme&apos;s lead advisor.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-xs">
          <div className="flex flex-col lg:flex-row">
            {/* Photo — fixed aspect ratio so it never gets a tall awkward strip */}
            <div className="relative w-full shrink-0 lg:w-72 xl:w-80">
              {/* aspect-[3/4] on mobile keeps a portrait ratio; on lg the div fills the row height */}
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[360px]">
                <Image
                  src="/images/drShahid.jpeg"
                  alt="Shahid Muhammad Khan Ghauri — Lead Advisor"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-primary-900/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface/20"
                />
              </div>
            </div>

            {/* Body */}
            <div className="p-8 sm:p-10">
              <span className="inline-flex items-center rounded-full bg-primary-subtle px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Programme Leadership
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-heading sm:text-3xl">
                Shahid Muhammad Khan Ghauri
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Banking Executive · Author · Corporate Governance Specialist
              </p>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-body">
                <p>
                  A banking executive, author, and governance specialist with over two decades of
                  leadership across conventional, microfinance, and Islamic banking institutions.
                  He brings operational mastery in converting conventional financial frameworks
                  into robust, Shariah-compliant models, alongside deep expertise in corporate
                  risk governance and branch networks.
                </p>
                <p>
                  A Fellow of the Pakistan Institute of Corporate Governance and author of{" "}
                  <em className="text-heading">
                    Islamic Banking – the philosophy and fundamentals
                  </em>{" "}
                  and the bestseller{" "}
                  <em className="text-heading">The Rightful Way of Banking</em>, Shahid bridges
                  practical executive leadership with academic rigor.
                </p>
              </div>
              <ul className="mt-6 space-y-3 border-t border-dashed border-border pt-6">
                {[
                  "Fellow of the Pakistan Institute of Corporate Governance",
                  "Active peer reviewer for international research journals",
                  "Visiting faculty across leading financial institutions",
                  "Leads programme design, delivery standards & Shariah alignment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Global Recognition ───────────────────────────────────────────── */}
      <section
        id="recognition"
        aria-labelledby="recognition-heading"
        className="border-y border-border bg-secondary/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Global Recognition
              </p>
              <h2
                id="recognition-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                Credit that travels beyond the certificate itself.
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-body sm:text-base">
                <p>
                  The credit hours earned across the four modules are accepted as coursework
                  credit at{" "}
                  <strong className="text-heading">INCEIF University, Malaysia</strong> — giving
                  graduates a genuine bridge from a professional certificate in Pakistan to further
                  postgraduate study at the world&apos;s leading hub for Islamic finance education.
                </p>
                <p>
                  This certificate is not just a career credential for the Pakistani market during
                  its transition — it is also a real academic pathway into INCEIF University,
                  Malaysia, should you choose to pursue it further.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-xs">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent" />
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                <Award className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-heading">
                Credit hours recognized toward postgraduate study at INCEIF University, Malaysia
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Graduates earn coursework credit at INCEIF University — the postgraduate
                university established with the support of Bank Negara Malaysia — providing a
                genuine bridge from this professional certificate in Pakistan to further
                postgraduate study at the world&apos;s leading dedicated hub for Islamic finance
                education.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary">
                  <GraduationCap className="size-3.5" aria-hidden="true" />
                  Postgraduate Credit
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Globe className="size-3.5" aria-hidden="true" />
                  INCEIF University, Malaysia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── 10. Who It's For ────────────────────────────────────────────────── */}
      <section
        id="audience"
        aria-labelledby="audience-heading"
        className="border-y border-border bg-secondary/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Who It&apos;s For
            </p>
            <h2
              id="audience-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              Built for two audiences with one shared stake in the outcome.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                Icon: Briefcase,
                title: "Bankers & Financial Professionals",
                desc: "Currently working in conventional banking and need to get ahead of your institution's Shariah-compliant conversion plan.",
                items: [
                  "Understand the products your bank is converting to",
                  "Position yourself ahead of the 2027 transition",
                  "Study without leaving your current role",
                ],
              },
              {
                Icon: Users,
                title: "Non-Bankers & Career Changers",
                desc: "Looking to enter one of Pakistan's fastest-growing professional fields as an entire industry is being rebuilt around it.",
                items: [
                  "No prior banking background required to enroll",
                  "A structured, internationally-informed foundation",
                  "A credential positioned for a market that's about to expand",
                ],
              },
            ].map(({ Icon, title, desc, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface p-8 shadow-xs transition-colors hover:border-primary-200"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{desc}</p>
                <ul className="mt-5 space-y-3 border-t border-border pt-5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CTA Section ─────────────────────────────────────────────────── */}
      <div id="enroll">
        <UniversityCta universityName="INCEIF University" />
      </div>

    </main>
  );
}
