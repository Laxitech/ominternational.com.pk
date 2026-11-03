import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  Globe,
  GraduationCap,
  Layers,
  ShieldCheck,

  TrendingUp,
} from "lucide-react";
import PageHeader from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "About Us | OM International",
  description:
    "Learn about OM International. We connect professional qualifications like ACCA and ICAP with international university degree pathways from accredited Malaysian institutions.",
};

const BENEFITS = [
  {
    icon: Compass,
    title: "Personalised Guidance",
    description:
      "One-on-one academic assessments that evaluate your educational history to identify the most suitable degree route.",
  },
  {
    icon: Globe,
    title: "International Pathways",
    description:
      "Direct pathway collaborations with Malaysian institutions recognized by the Ministry of Higher Education Malaysia.",
  },
  {
    icon: TrendingUp,
    title: "Professional Progression",
    description:
      "Converting professional qualifications (including ACCA & ICAP) into university degrees with advanced standing.",
  },
  {
    icon: ShieldCheck,
    title: "Application Support",
    description:
      "End-to-end assistance from initial credential evaluation and document preparation to official enrollment.",
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-full bg-surface">
      {/* 1. Reusable Page Header */}
      <PageHeader
        title="About Us"
        subtitle="Empowering Your Academic Journey"
        eyebrow="OM International"
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="University campus architecture and modern academic facilities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Immersive Hero Section */}
      <section
        aria-labelledby="about-hero-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Text Story */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1 rounded-full  py-1 text-xs font-semibold text-primary">

              <span>Education Without Borders</span>
            </div>

            <h2
              id="about-hero-heading"
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl lg:leading-[1.12]"
            >
              Professional Qualifications. Recognized Degrees.
            </h2>

            <p className="mt-5 text-balance text-base leading-relaxed text-body sm:text-lg sm:leading-8">
              OM International facilitates streamlined academic pathways with
              premier Malaysian universities. We help ambitious learners and
              professionals across Pakistan convert their hard-earned exams,
              diplomas, and practical experience into accredited university
              qualifications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-heading">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="size-4.5 text-accent"
                  aria-hidden="true"
                />
                <span>Credit Transfer Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="size-4.5 text-accent"
                  aria-hidden="true"
                />
                <span>Flexible Blended Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="size-4.5 text-accent"
                  aria-hidden="true"
                />
                <span>12 Centers Across Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right: Asymmetrical Editorial Image Composition */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg sm:aspect-[16/11]">
                <Image
                  src="/images/universities/girl-uniRazak.jpg"
                  alt="Graduating students celebrating their academic achievements"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                  <span className="inline-block rounded-lg bg-surface/90 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
                    Academic Pathway Excellence
                  </span>
                </div>
              </div>

              {/* Inset Overlapping Card */}
              <div className="absolute -bottom-6 -left-4 w-56 rounded-2xl border border-border bg-surface p-4 shadow-xl sm:-bottom-8 sm:-left-8 sm:w-64 sm:p-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary border border-primary-200"
                  >
                    <BookOpen className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Accredited By
                    </p>
                    <p className="text-xs font-semibold text-heading sm:text-sm">
                      MQA &amp; Malaysian MOHE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are Section */}
      <section
        aria-labelledby="who-we-are-heading"
        className="border-y border-border bg-secondary/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Mission statement */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Who We Are
              </p>
              <h2
                id="who-we-are-heading"
                className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                Connecting Prior Study with Global Degrees
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                Traditional higher education often fails to recognize years of
                rigorous professional training. OM International serves as a
                dedicated facilitator, opening doors to Malaysian universities
                that formally evaluate prior qualifications for advanced degree
                standing.
              </p>
            </div>

            {/* Right Column: 2 Feature Cards */}
            <div className="space-y-6 lg:col-span-7">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs sm:p-8 transition-colors hover:border-primary-200">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary"
                  >
                    <Layers className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-heading sm:text-xl">
                      The Pathway Bridge
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      We collaborate with partner institutions—including
                      Universiti Tun Abdul Razak (UNIRAZAK) map existing credentials to degree requirements.
                      This eliminates redundant learning and accelerates
                      graduation timelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs sm:p-8 transition-colors hover:border-primary-200">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary"
                  >
                    <Building2 className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-heading sm:text-xl">
                      Nationwide Support &amp; International Horizon
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      With 12 learning centers across Pakistan and an international
                      flagship presence in London, students benefit from localized
                      academic counseling, documentation assistance, and digital
                      resources while earning authentic international degrees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission Section (Distinctive Layout & Subtle Gradients) */}
      <section
        aria-labelledby="mission-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="relative isolate overflow-hidden rounded-3xl border border-surface/10 bg-surface-dark px-6 py-14 text-on-dark shadow-2xl sm:px-12 sm:py-20 lg:px-16">
          {/* Subtle Ambient Radial Lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 size-96 rounded-full bg-primary-500/20 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-200">
              Our Mission
            </p>

            <h2
              id="mission-heading"
              className="mt-4 text-balance text-2xl font-semibold tracking-tight text-on-dark sm:text-3xl md:text-4xl lg:text-4xl lg:leading-tight"
            >
              To remove geographic and institutional barriers, empowering
              learners to earn recognized international degrees through
              flexible, merit-based pathways.
            </h2>
          </div>

          {/* Core Mission Pillars */}
          <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 border-t border-surface/15 pt-10 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="font-mono text-xs font-semibold text-primary-200">
                01 / RECOGNITION
              </p>
              <h3 className="mt-2 text-base font-semibold text-on-dark">
                Prior Learning Value
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-on-dark/70 sm:text-sm">
                Respecting prior exam success to ensure completed coursework is
                credited toward graduation.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold text-primary-200">
                02 / FLEXIBILITY
              </p>
              <h3 className="mt-2 text-base font-semibold text-on-dark">
                Work-Study Balance
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-on-dark/70 sm:text-sm">
                Distance and blended study frameworks designed to fit around
                full-time employment commitments.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs font-semibold text-primary-200">
                03 / INTEGRITY
              </p>
              <h3 className="mt-2 text-base font-semibold text-on-dark">
                Clear Advisory
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-on-dark/70 sm:text-sm">
                Transparent information regarding admissions, accredited partner
                degrees, and evaluation policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose OM International? Section */}
      <section
        aria-labelledby="why-choose-heading"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why Choose Us
          </p>
          <h2
            id="why-choose-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            Why Choose OM International?
          </h2>
          <p className="mt-2.5 text-balance text-sm leading-relaxed text-body sm:text-base">
            Dedicated advising and accredited university collaborations tailored
            to your academic and career goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-12 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                >
                  <Icon className="size-6" />
                </span>

                <h3 className="mt-5 text-base font-semibold text-heading">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-body">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 7. Premium Call-to-Action Section */}
      <section
        aria-labelledby="cta-heading"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-surface shadow-xl sm:px-12 sm:py-18 lg:px-16 lg:py-20">
          {/* Subtle Ambient Background Lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary-400/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-primary-800/50 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="text-3xl font-semibold tracking-tight text-surface sm:text-4xl lg:text-5xl"
            >
              Your Next Chapter Starts Here
            </h2>

            <p className="mt-4 text-base leading-relaxed text-surface/90 sm:text-lg">
              Explore our full catalogue of degree programmes or speak with an
              academic advisor to plan your pathway to an international university
              degree.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/programmes"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-surface px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-colors duration-200 hover:bg-surface-alt active:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:w-auto"
              >
                <span>Explore Academic Programmes</span>
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-surface/40 bg-surface/10 px-6 py-3 text-sm font-semibold text-surface transition-colors duration-200 hover:border-surface/70 hover:bg-surface/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:w-auto"
              >
                <span>Talk to an Advisor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
