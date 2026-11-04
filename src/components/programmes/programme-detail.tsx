import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  GraduationCap,
  Laptop,
  Shapes,
} from "lucide-react";
import FaqAccordion from "@/components/shared/faq-accordion";
import PageHeader from "@/components/shared/page-header";
import WhatsappButton from "@/components/shared/whatsapp-button";
import { cn } from "@/lib/utils";
import type { Programme } from "@/types/programme";
import type { University } from "@/types/university";

interface ProgrammeDetailProps {
  programme: Programme;
  university?: Pick<University, "slug" | "name" | "shortName">;
}

const levelLabels: Record<Programme["level"], string> = {
  bachelors: "Bachelor's",
  masters: "Master's",
  doctoral: "Doctoral",
  "graduate-diplomas": "Graduate diploma",
};

function getStudyModeLabel(programme: Programme) {
  if (programme.fullyOnline) {
    return "Online / blended";
  }

  if (
    programme.modes.includes("conventional") &&
    programme.modes.includes("odl")
  ) {
    return "Campus & ODL";
  }

  if (programme.modes.includes("odl")) {
    return "Open distance learning";
  }

  return "On campus";
}

export default function ProgrammeDetail({
  programme,
  university,
}: ProgrammeDetailProps) {
  const structure = programme.structure;
  const levelLabel = levelLabels[programme.level];
  const studyModeLabel = getStudyModeLabel(programme);
  const awardingBodyConfirmed = programme.awardingBodyConfirmed !== false;
  const universityLabel = awardingBodyConfirmed
    ? university?.shortName || "Partner university"
    : "To be confirmed";
  const durationLabel =
    programme.duration ||
    (structure
      ? `${structure.semesters.length} semester${structure.semesters.length === 1 ? "" : "s"}`
      : "Confirm with advisor");
  const hasEntryInformation = Boolean(
    programme.eligibility || structure?.exemptions || structure?.apelC,
  );
  const faqItems = (programme.faqs || []).map((faq, index) => ({
    id: `${programme.slug}-faq-${index + 1}`,
    question: faq.question,
    answer: faq.answer,
  }));
  const quickFacts = [
    {
      icon: GraduationCap,
      label: "Qualification",
      value: levelLabel,
    },
    {
      icon: Clock3,
      label: "Duration",
      value: durationLabel,
    },
    {
      icon: Laptop,
      label: "Study mode",
      value: studyModeLabel,
    },
    {
      icon: Building2,
      label: "Institution",
      value: universityLabel,
    },
  ];

  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title={programme.title}
        subtitle={programme.summary}
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt={`${programme.title} programme banner`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: programme.title },
        ]}
      />

      <section
        aria-label="Programme facts"
        className="border-b border-border bg-secondary/40"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {quickFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={cn(
                "flex min-w-0 items-center gap-3 py-5 sm:gap-4 sm:py-7",
                index % 2 === 1
                  ? "border-l border-border pl-4 sm:pl-6"
                  : "pr-4 sm:pr-6",
                index > 1 && "border-t border-border lg:border-t-0",
                index > 0 && "lg:border-l lg:pl-8",
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-surface text-primary shadow-2xs sm:size-11">
                <fact.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted sm:text-sm">
                  {fact.label}
                </p>
                <p className="mt-0.5 text-sm font-bold leading-5 text-heading sm:text-base">
                  {fact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="programme-overview-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Programme overview
            </p>
            <h2
              id="programme-overview-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
            >
              A clear route to your next qualification
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-body sm:text-lg">
              {programme.summary ||
                "A flexible academic pathway designed to build relevant knowledge and support your next professional or academic step."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                Enquire about this programme
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

            </div>
          </div>

          <aside
            aria-label="Academic institution"
            className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xs lg:col-span-5"
          >
            <div className="border-b border-primary-200 bg-primary-subtle p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-surface">
                  <Building2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Academic home
                  </p>
                  <h3 className="mt-0.5 text-lg font-semibold text-heading">
                    Programme provider
                  </h3>
                </div>
              </div>
            </div>

            <dl className="divide-y divide-border px-5 sm:px-6">
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Awarding institution
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-heading">
                  {awardingBodyConfirmed && university
                    ? university.name
                    : "Awarding institution to be confirmed"}
                </dd>
              </div>
              {programme.schoolName && (
                <div className="py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    School
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-6 text-heading">
                    {programme.schoolName}
                  </dd>
                </div>
              )}
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Delivery
                </dt>
                <dd className="mt-1 text-sm font-semibold text-heading">
                  {studyModeLabel}
                </dd>
              </div>
            </dl>

            {awardingBodyConfirmed && university && (
              <div className="border-t border-border p-5 sm:p-6">
                <Link
                  href={`/universities/${university.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  View {university.shortName}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      {structure && (
        <section
          aria-labelledby="programme-structure-heading"
          className="border-y border-border bg-secondary/35 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
                Curriculum
              </p>
              <h2
                id="programme-structure-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
              >
                Programme structure
              </h2>
              <p className="mt-4 text-sm leading-7 text-body sm:text-base">
                Review the overall curriculum and the study load planned for
                each semester.
              </p>
            </div>

            <div className="lg:col-span-8">
              <dl className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-xs">
                <div className="p-4 text-center sm:p-6">
                  <dt className="text-xs font-medium text-muted">Subjects</dt>
                  <dd className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                    {structure.totalSubjects}
                  </dd>
                </div>
                <div className="p-4 text-center sm:p-6">
                  <dt className="text-xs font-medium text-muted">Credit hours</dt>
                  <dd className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                    {structure.totalCreditHours}
                  </dd>
                </div>
                <div className="p-4 text-center sm:p-6">
                  <dt className="text-xs font-medium text-muted">Semesters</dt>
                  <dd className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                    {structure.semesters.length}
                  </dd>
                </div>
              </dl>

              <ol className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-xs">
                {structure.semesters.map((semester, index) => (
                  <li
                    key={semester.label}
                    className="grid gap-4 p-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:p-6"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full border border-primary-200 bg-primary-subtle font-mono text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                        <h3 className="text-lg font-semibold text-heading">
                          {semester.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                            {semester.subjectCount} subjects
                          </span>
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                            {structure.semesterLengthMonths} months
                          </span>
                        </div>
                      </div>

                      {semester.modules && semester.modules.length > 0 && (
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {semester.modules.map((module) => (
                            <li
                              key={module.label}
                              className="rounded-xl border border-border bg-secondary/30 p-3"
                            >
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                {module.label}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-body">
                                {module.subjectsDescription}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}

                      {semester.subjects && semester.subjects.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {semester.subjects.map((subject) => (
                            <li
                              key={subject}
                              className="flex items-start gap-2 text-sm text-body"
                            >
                              <CheckCircle2
                                className="mt-0.5 size-4 shrink-0 text-primary"
                                aria-hidden="true"
                              />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      )}

                      {semester.extra && (
                        <p className="mt-4 rounded-xl border border-primary-200 bg-primary-subtle p-3 text-sm leading-6 text-body">
                          <span className="font-semibold text-heading">
                            Final submission: {" "}
                          </span>
                          {semester.extra}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {programme.majors && programme.majors.length > 0 && (
        <section
          aria-labelledby="programme-specialisations-heading"
          className="py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
            <div className="lg:col-span-4">
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                <Shapes className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
                Study options
              </p>
              <h2
                id="programme-specialisations-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
              >
                {programme.majors.length} specialisation
                {programme.majors.length === 1 ? "" : "s"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-body sm:text-base">
                Choose a focus that supports your academic interests and career
                direction.
              </p>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {programme.majors.map((major, index) => (
                <li
                  key={major}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 shadow-xs"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-subtle font-mono text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-heading">
                    {major}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {hasEntryInformation && (
        <section
          id="entry-requirements"
          aria-labelledby="entry-requirements-heading"
          className="scroll-mt-24 border-y border-border bg-secondary/35 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <span className="flex size-11 items-center justify-center rounded-xl border border-primary-200 bg-surface text-primary">
                <FileCheck2 className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
                Admissions
              </p>
              <h2
                id="entry-requirements-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
              >
                Entry and credit routes
              </h2>
              <p className="mt-4 text-sm leading-7 text-body sm:text-base">
                Check the stated entry criteria and any available recognition
                for prior academic or professional learning.
              </p>
            </div>

            <div className="space-y-5 lg:col-span-8">
              {programme.eligibility && (
                <article className="rounded-3xl border border-border bg-surface p-6 shadow-xs sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Entry criteria
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-heading">
                    {programme.eligibility.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {programme.eligibility.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-medium leading-6 text-heading sm:text-base"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {programme.eligibility.applicantNote && (
                    <p className="mt-6 rounded-2xl border border-primary-200 bg-primary-subtle p-4 text-sm leading-6 text-body">
                      <span className="font-semibold text-heading">
                        Applicant note: {" "}
                      </span>
                      {programme.eligibility.applicantNote}
                    </p>
                  )}
                </article>
              )}

              {structure?.exemptions && (
                <article className="rounded-3xl border border-border bg-surface p-6 shadow-xs sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Prior qualification credit
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-heading">
                    {structure.exemptions.subjectCount} subject exemptions
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-body sm:text-base">
                    These credits may be recognized on the basis of the
                    following qualifications.
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {structure.exemptions.basis.map((basis) => (
                      <li
                        key={basis}
                        className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 p-4 text-sm font-semibold text-heading"
                      >
                        <CheckCircle2
                          className="size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {basis}
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {structure?.apelC && (
                <article className="rounded-3xl border border-border bg-surface p-6 shadow-xs sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Experiential learning credit
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-heading">
                    APEL-C recognition
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-body sm:text-base">
                    Complete {structure.apelC.subjectCount} subjects through
                    recognition of relevant prior experience.
                  </p>
                  <dl className="mt-5 divide-y divide-border border-y border-border">
                    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Assessment
                      </dt>
                      <dd className="text-sm font-semibold text-heading sm:text-right">
                        {structure.apelC.method.join(" or ")}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Period
                      </dt>
                      <dd className="text-sm font-semibold text-heading sm:text-right">
                        {structure.apelC.period}
                      </dd>
                    </div>
                  </dl>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {programme.scholarship && (
        <section
          aria-labelledby="scholarship-heading"
          className="py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-warning/20 bg-surface shadow-xs">
              <div className="grid gap-8 bg-warning-50 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
                <div className="lg:col-span-8">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-warning/20 bg-surface text-warning">
                    <Award className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-warning">
                    Scholarship opportunity
                  </p>
                  <h2
                    id="scholarship-heading"
                    className="mt-2 text-balance text-2xl font-semibold tracking-tight text-heading sm:text-3xl"
                  >
                    {programme.scholarship.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-body sm:text-base">
                    {programme.scholarship.description}
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-warning/20 bg-surface p-6 text-center lg:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Total programme fee
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-warning">
                    {programme.scholarship.totalFee}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    Subject to scholarship terms and confirmation
                  </p>
                </div>
              </div>

              {programme.scholarship.instalmentPlan &&
                programme.scholarship.instalmentPlan.length > 0 && (
                  <div className="p-6 sm:p-8 lg:p-10">
                    <h3 className="text-lg font-semibold text-heading">
                      Instalment plan
                    </h3>
                    <div className="mt-5 divide-y divide-border border-y border-border">
                      {programme.scholarship.instalmentPlan.map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
                        >
                          <div>
                            <p className="text-sm font-semibold text-heading">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-muted">
                              {item.when}
                            </p>
                          </div>
                          <p className="text-sm font-bold text-primary sm:text-right">
                            {item.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}

      {faqItems.length > 0 && (
        <section
          aria-labelledby="programme-faqs-heading"
          className="border-y border-border bg-secondary/35 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
                Questions &amp; answers
              </p>
              <h2
                id="programme-faqs-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl"
              >
                Frequently asked questions
              </h2>
            </div>
            <FaqAccordion items={faqItems} allowMultiple={false} />
          </div>
        </section>
      )}

      <section
        aria-labelledby="programme-enquiry-heading"
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
            <BookOpen className="size-6" aria-hidden="true" />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-200 sm:text-sm">
            Programme guidance
          </p>
          <h2
            id="programme-enquiry-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-surface sm:text-4xl"
          >
            Is this programme right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-surface/80 sm:text-base">
            Share your qualifications and study goals. An OM International
            advisor can explain eligibility, available study routes, and the
            next steps for {programme.title}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface sm:w-auto"
            >
              Request programme guidance
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <WhatsappButton
              label="Chat with an advisor"
              className="min-h-12 w-full px-6 py-3 sm:w-auto"
              message={`Hello OM International, I am interested in ${programme.title}. Please share eligibility and admissions information.`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
