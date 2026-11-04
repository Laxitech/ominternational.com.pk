import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  GraduationCap,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "@/components/shared/page-header";


export const metadata: Metadata = {
  title: "Degree Eligibility Checker | OM International",
  description:
    "Complete a preliminary eligibility check for bachelor's, master's, doctoral, and graduate diploma programmes, then contact an OM International advisor for confirmation.",
};

const checkerBenefits = [
  {
    icon: Clock3,
    title: "A few minutes",
    description: "Answer a short set of academic profile questions.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    description: "Nothing is sent until you choose to contact an advisor.",
  },
  {
    icon: FileCheck2,
    title: "Clear next steps",
    description: "See a preliminary result and what needs confirmation.",
  },
];

const checkerSteps = [
  {
    number: "01",
    title: "Select your programme",
    description:
      "Choose from the available Malaysian university pathways in our programme directory.",
  },
  {
    number: "02",
    title: "Add your qualification profile",
    description:
      "Tell us your highest qualification, completion status, professional papers, and experience.",
  },
  {
    number: "03",
    title: "Confirm with an advisor",
    description:
      "Review your preliminary result, then continue through the Contact Us page.",
  },
];

export default function ApplyPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="Check Your Programme Eligibility"
        subtitle="Compare your academic and professional background with the entry level of your chosen degree pathway before speaking with an admissions advisor."
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="International university campus representing degree eligibility assessment"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Eligibility Checker" },
        ]}
      >
        <a
          href="#eligibility-checker"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          Start eligibility check
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <Link
          href="/programmes"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-surface/40 bg-surface/10 px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:border-surface hover:bg-surface/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          Browse programmes first
        </Link>
      </PageHeader>

      <section
        aria-label="Eligibility checker benefits"
        className="border-b border-border bg-secondary/40"
      >
        <div className="mx-auto grid max-w-7xl sm:grid-cols-3 sm:px-6 lg:px-8">
          {checkerBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-start gap-3 border-border px-4 py-5 sm:px-6 sm:py-7 ${index > 0 ? "border-t sm:border-l sm:border-t-0" : ""
                }`}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-surface text-primary shadow-2xs">
                <benefit.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-heading">
                  {benefit.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-body">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="eligibility-checker"
        aria-labelledby="eligibility-checker-heading"
        className="scroll-mt-24 py-14 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Degree eligibility checker
            </p>
            <h2
              id="eligibility-checker-heading"
              className="mt-3 text-balance text-[clamp(1.875rem,4.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-heading sm:text-[3rem]"
            >
              Find out if your profile is ready for review
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
              Select a programme and add your current qualification details.
              You will receive an immediate preliminary result with the option
              to send your summary to an advisor.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">


            <aside className="space-y-5 lg:sticky lg:top-24 lg:col-span-4">
              <div className="rounded-3xl border border-border bg-secondary/35 p-6 sm:p-7">
                <span className="flex size-11 items-center justify-center rounded-xl border border-primary-200 bg-surface text-primary shadow-2xs">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-semibold text-heading">
                  Have these details ready
                </h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "Your highest completed or current qualification",
                    "Result, percentage, or CGPA if available",
                    "ACCA, ICAP, or other professional status",
                    "Relevant work experience",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-body"
                    >
                      <CheckCircle2
                        className="mt-1 size-4 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-surface-dark p-6 text-surface sm:p-7">
                <span className="flex size-11 items-center justify-center rounded-xl border border-surface/15 bg-surface/10 text-primary-200">
                  <MessageSquare className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-semibold">
                  Why advisor confirmation matters
                </h2>
                <p className="mt-3 text-sm leading-6 text-surface/80">
                  Entry, credit exemptions, and scholarship decisions depend on
                  verified documents and the awarding university&apos;s final
                  assessment. The checker helps you prepare for that review.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-surface/30 px-4 py-2.5 text-sm font-semibold text-surface transition-colors hover:border-surface/60 hover:bg-surface/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                >
                  Contact us before checking
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="checker-process-heading"
        className="border-y border-border bg-surface-alt/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Simple and transparent
            </p>
            <h2
              id="checker-process-heading"
              className="mt-3 text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-heading"
            >
              From quick check to confirmed guidance
            </h2>
            <p className="mt-4 text-sm leading-7 text-body sm:text-base">
              The checker organizes your information so an advisor can give you
              a more useful programme assessment.
            </p>
          </div>

          <ol className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            {checkerSteps.map((item) => (
              <li
                key={item.number}
                className="rounded-2xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-primary-200 sm:p-7"
              >
                <span className="text-3xl font-bold tracking-tight text-primary/30">
                  {item.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-body">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-primary-200 bg-primary-subtle p-6 text-center sm:flex-row sm:p-8 sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-heading">
                Prefer to explore before checking?
              </h3>
              <p className="mt-1 text-sm leading-6 text-body">
                Compare every programme, study mode, and university pathway in
                the programme directory.
              </p>
            </div>
            <Link
              href="/programmes"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Explore programmes
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
