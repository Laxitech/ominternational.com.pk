import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ChevronRight,
  HelpCircle,
  Laptop,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import UniversityCard from "@/components/universities/university-card";
import { universities } from "@/data/universities";
import { programmes } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Partner Universities in Malaysia | OM International",
  description:
    "Explore accredited Malaysian partner universities through OM International. Discover degree pathways from Universiti Tun Abdul Razak (UNIRAZAK) with conventional, ODL, and online options.",
};

const PATHWAY_BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Official Representation",
    description:
      "Direct institutional partnership with authorized credential verification, admissions processing, and enrollment facilitation across Pakistan.",
  },
  {
    icon: Award,
    title: "Full MQA Accreditation",
    description:
      "Degrees awarded are fully accredited by the Malaysian Qualifications Agency (MQA) and approved by the Ministry of Higher Education Malaysia.",
  },
  {
    icon: TrendingUp,
    title: "Credit Exemptions",
    description:
      "Maximum credit exemptions for students and affiliates of ACCA, ICAP, PIPFA, CA, and recognized diploma programs.",
  },
  {
    icon: Laptop,
    title: "Flexible Study Modes",
    description:
      "Complete your degree on campus in Kuala Lumpur, via Open Distance Learning (ODL), or 100% online from anywhere in Pakistan.",
  },
];

const WHY_MALAYSIA_POINTS = [
  {
    title: "Global Academic Recognition",
    description:
      "Malaysia is an international education hub with degrees modeled on the British Commonwealth academic system and recognized worldwide.",
    badge: "International Standard",
  },
  {
    title: "Cost-Effective Excellence",
    description:
      "Obtain an internationally accredited university qualification at a fraction of the tuition and living expenses required in the UK, Australia, or USA.",
    badge: "High ROI",
  },
  {
    title: "100% English-Medium Instruction",
    description:
      "All lectures, coursework, examinations, and dissertations are conducted entirely in English, fostering global career competitiveness.",
    badge: "English Delivery",
  },
  {
    title: "Dedicated Pakistan Learning Centers",
    description:
      "Benefit from physical guidance, computer labs, library access, and proctored examination facilities at our 12 learning centers across Pakistan.",
    badge: "Local Support",
  },
];

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Transcript & Credential Evaluation",
    description:
      "Submit your educational certificates and professional examination transcripts for free preliminary credit assessment.",
  },
  {
    step: "02",
    title: "Pathway & University Selection",
    description:
      "Our senior advisors match your background with optimal degree programs at UNIRAZAK or Asia e University.",
  },
  {
    step: "03",
    title: "Offer Letter & Registration",
    description:
      "We coordinate directly with university admissions to secure your official Letter of Offer and manage enrollment formalities.",
  },
  {
    step: "04",
    title: "Orientation & Commencement",
    description:
      "Begin your studies with full LMS orientation for distance learning or visa processing for on-campus education in Kuala Lumpur.",
  },
];

const UNIVERSITY_FAQS = [
  {
    question: "Are degrees from UNIRAZAK in Pakistan?",
    answer:
      "Yes. Universiti Tun Abdul Razak (UNIRAZAK) recognized by the Ministry of Higher Education Malaysia and accredited by the Malaysian Qualifications Agency (MQA). Graduates are eligible to apply for degree equivalence with the Higher Education Commission (HEC) of Pakistan in accordance with prevailing HEC regulations.",
  },
  {
    question: "Can ACCA or ICAP students obtain credit exemptions?",
    answer:
      "Yes. Qualified ACCA and ICAP students, affiliates, and members can receive substantial module exemptions toward undergraduate and postgraduate degrees. For instance, completed professional papers can be converted into credits toward a Bachelor of Accounting (Honours) or an MBA.",
  },
  {
    question: "Do I have to travel to Malaysia, or can I study from Pakistan?",
    answer:
      "You have complete flexibility. Both partner universities offer Open Distance Learning (ODL) and 100% online modes that allow you to complete your entire degree from Pakistan with localized exam center support. Alternatively, you can choose conventional on-campus study in Kuala Lumpur with full student visa assistance.",
  },
  {
    question: "What English language proficiency is required?",
    answer:
      "Applicants typically present IELTS (6.0), TOEFL, or equivalent tests. However, candidates whose prior degree was taught entirely in English may qualify for an exemption with a valid Medium of Instruction (MOI) letter from their previous institution.",
  },
];

export default function UniversitiesPage() {
  return (
    <main className="min-h-full bg-surface">
      {/* 1. Page Header */}
      <PageHeader
        title="Partner Universities"
        subtitle="Premier Malaysian Higher Education Pathways for Pakistani Students &amp; Professionals"
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="Modern university campus architecture in Malaysia"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Universities" },
        ]}
      >
        <a
          href="#institutions"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          <span>Explore Institutions</span>
          <ChevronRight className="size-4" aria-hidden="true" />
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-surface/40 bg-surface/10 px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:border-surface hover:bg-surface/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
        >
          <span>Apply for Evaluation</span>
        </Link>
      </PageHeader>

      {/* 2. Value Proposition Strip */}
      <section
        aria-labelledby="pathway-benefits-heading"
        className="border-b border-border bg-secondary/40 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PATHWAY_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col rounded-2xl border border-border/80 bg-surface p-6 shadow-2xs transition-all duration-200 hover:border-primary-200 hover:shadow-sm"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                  <benefit.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Partner Universities Directory Showcase */}
      <section
        id="institutions"
        aria-labelledby="universities-list-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">

            <h2
              id="universities-list-heading"
              className="mt-4 text-balance font-serif text-[clamp(1.875rem,4.5vw,2.75rem)] font-semibold tracking-tight text-heading sm:text-[3rem] leading-[1.12]"
            >
              Choose Your Degree Institution
            </h2>
            <p className="mt-4 text-balance text-sm leading-relaxed text-body sm:text-base sm:leading-7">
              OM International officially represents leading Malaysian universities, connecting you with recognized qualifications, credit transfer exemptions, and personalized local academic mentorship.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {universities.map((university, index) => (
              <UniversityCard
                key={university.slug}
                university={university}
                programmes={programmes}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Study with Malaysian Universities */}
      <section
        aria-labelledby="why-malaysia-heading"
        className="border-y border-border bg-surface-alt/40 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
                Destination Malaysia
              </p>
              <h2
                id="why-malaysia-heading"
                className="mt-3 text-balance font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-heading sm:text-[3rem] leading-[1.15]"
              >
                Why Choose Malaysian Higher Education?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                Malaysia has emerged as a premier global education destination, renowned for academic excellence, state-of-the-art digital infrastructure, and British-patterned degree structures.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-7">
              {WHY_MALAYSIA_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-2xs transition-all duration-200 hover:border-primary-200"
                >
                  <div>
                    <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      {point.badge}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-heading sm:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 6. Admission & Credit Transfer Timeline */}
      <section
        aria-labelledby="pathway-process-heading"
        className="py-16 sm:py-20 lg:py-24 bg-surface"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Your Application Pathway
            </p>
            <h2
              id="pathway-process-heading"
              className="mt-3 text-balance font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-heading sm:text-[3rem] leading-[1.15]"
            >
              How Enrolment Works
            </h2>
            <p className="mt-4 text-balance text-sm leading-relaxed text-body sm:text-base sm:leading-7">
              From your initial document evaluation in Pakistan to official university matriculation in Malaysia, our advisors provide seamless support at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-2xs hover:border-primary-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-primary/30">
                    {step.step}
                  </span>
                  <div className="size-2.5 rounded-full bg-accent" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-heading sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section
        aria-labelledby="universities-faq-heading"
        className="border-t border-border bg-secondary/30 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Got Questions?
            </p>
            <h2
              id="universities-faq-heading"
              className="mt-3 text-balance font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-heading sm:text-[3rem] leading-[1.15]"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {UNIVERSITY_FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-2xs"
              >
                <h3 className="text-base font-semibold text-heading sm:text-lg flex items-start gap-3">
                  <HelpCircle
                    className="size-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-body sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA Section */}
      <section
        aria-labelledby="universities-cta-heading"
        className="relative isolate overflow-hidden m-10 rounded-3xl bg-surface-dark py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 text-primary-900 opacity-15"
          style={{
            backgroundImage: "radial-gradient(currentColor 15px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <h2
              id="universities-cta-heading"
              className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-surface sm:text-[3.25rem] leading-[1.12]"
            >
              Ready to Accelerate Your Degree?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-surface/85 sm:text-lg">
              Get in touch with an OM International academic advisor today for a comprehensive qualification audit and free guidance on enrolling at UNIRAZAK or Asia e University.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
              >
                <span>Apply for Degree Assessment</span>
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
