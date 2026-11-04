import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileCheck2,
  GraduationCap,
  Laptop,
  MapPin,
  MessagesSquare,
  Shapes,
} from "lucide-react";
import ProgrammeFilters from "@/components/programmes/programme-filters";
import PageHeader from "@/components/shared/page-header";
import { programmes } from "@/data/programmes";
import { universities } from "@/data/universities";

export const metadata: Metadata = {
  title: "Degree Programmes in Malaysia | OM International",
  description:
    "Compare bachelor's, master's, doctoral, and graduate diploma programmes from OM International's Malaysian university partners, with online, ODL, and campus study options.",
};

const supportOptions = [
  {
    icon: FileCheck2,
    title: "Qualification review",
    description:
      "We assess your academic and professional background to help identify suitable entry and credit pathways.",
  },
  {
    icon: Laptop,
    title: "Flexible study routes",
    description:
      "Compare online, open distance learning, and conventional study options around your schedule and goals.",
  },
  {
    icon: MapPin,
    title: "Local application support",
    description:
      "Get practical guidance on documents, applications, and enrolment through our advisory network in Pakistan.",
  },
];

export default function ProgrammesPage() {
  const onlineProgrammeCount = programmes.filter(
    (programme) => programme.fullyOnline,
  ).length;
  const qualificationLevelCount = new Set(
    programmes.map((programme) => programme.level),
  ).size;
  const directoryStats = [
    {
      icon: GraduationCap,
      value: programmes.length.toString(),
      label: "Degree pathways",
    },
    {
      icon: Building2,
      value: universities.length.toString(),
      label: "University partners",
    },
    {
      icon: Laptop,
      value: onlineProgrammeCount.toString(),
      label: "Online options",
    },
    {
      icon: Shapes,
      value: qualificationLevelCount.toString(),
      label: "Qualification levels",
    },
  ];

  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="Find a Programme for Your Next Step"
        subtitle="Explore flexible Malaysian degree pathways for students and working professionals, with options to study online, through ODL, or on campus."
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="University campus representing international degree programmes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes" },
        ]}
      >
        <a
          href="#programme-directory"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          Browse programmes
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-surface/40 bg-surface/10 px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:border-surface hover:bg-surface/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          Speak with an advisor
        </Link>
      </PageHeader>

      <section
        aria-label="Programme directory overview"
        className="border-b border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {directoryStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 py-5 sm:gap-4 sm:py-7 ${index % 2 === 1 ? "border-l border-border pl-4 sm:pl-6" : "pr-4 sm:pr-6"
                  } ${index > 1 ? "border-t border-border lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""
                  }`}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-surface text-primary shadow-2xs sm:size-11">
                  <stat.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium leading-4 text-muted sm:text-sm">
                    {stat.label}
                  </dt>
                  <dd className="mt-0.5 text-xl font-bold tracking-tight text-heading sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="programme-directory"
        aria-labelledby="programme-directory-heading"
        className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Programme directory
            </p>
            <h2
              id="programme-directory-heading"
              className="mt-3 text-balance text-[clamp(1.875rem,4.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-heading sm:text-[3rem]"
            >
              Compare pathways that fit your goals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-7 text-body sm:text-base">
              Search by subject or narrow the directory by qualification,
              institution, and study mode. Open any programme for detailed
              structure and eligibility information.
            </p>
          </div>

          <ProgrammeFilters
            programmes={programmes}
            universities={universities}
          />
        </div>
      </section>

      <section
        aria-labelledby="programme-support-heading"
        className="border-y border-border bg-surface-alt/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Guidance that fits your profile
            </p>
            <h2
              id="programme-support-heading"
              className="mt-3 text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-heading"
            >
              Make a confident programme choice
            </h2>
            <p className="mt-4 text-sm leading-7 text-body sm:text-base">
              Our advisors help you compare the details that matter before you
              apply, from entry routes to the way you will study.
            </p>
            <Link
              href="/centers"
              className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Find a learning center
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
            {supportOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-primary-200"
              >
                <span className="flex size-11 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                  <option.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-heading sm:text-lg">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-body">
                  {option.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="programme-cta-heading"
        className="relative isolate mx-4 my-12 overflow-hidden rounded-3xl bg-surface-dark py-14 sm:mx-6 sm:my-16 sm:py-18 lg:mx-10 lg:my-20 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 -z-10 size-80 rounded-full bg-primary-700/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-20 -z-10 size-80 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-surface/15 bg-surface/10 text-primary-200">
            <MessagesSquare className="size-6" aria-hidden="true" />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-200 sm:text-sm">
            Personal programme guidance
          </p>
          <h2
            id="programme-cta-heading"
            className="mt-3 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-surface"
          >
            Not sure which pathway matches your qualifications?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-surface/80 sm:text-base">
            Share your academic or professional background and an OM
            International advisor will help you identify relevant options and
            next steps.
          </p>

        </div>
      </section>
    </main>
  );
}
