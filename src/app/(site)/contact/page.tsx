import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import FaqAccordion from "@/components/shared/faq-accordion";
import PageHeader from "@/components/shared/page-header";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us | OM International",
  description:
    "Connect with OM International. Reach out to our admissions team for academic programme inquiries, entry requirements, ACCA/ICAP pathway conversions, and learning center access.",
};

export default function ContactPage() {
  const googleMapsQuery = encodeURIComponent(siteConfig.contact.address);
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${googleMapsQuery}&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`;

  return (
    <main className="min-h-full bg-surface">
      {/* 1. Reusable Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Connect with Us — Let’s Hear from You"
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt="UNIRAZAK campus and OM International educational pathway"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* 2. Contact Form & Visual Advisory Section */}
      <section
        aria-labelledby="contact-form-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Form Heading & Form */}
          <div className="lg:col-span-7">
            <div className="mb-8">


              <h2
                id="contact-form-heading"
                className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                Send Us a Message
              </h2>

              <p className="mt-2.5 text-balance text-sm leading-relaxed text-body sm:text-base">
                Have questions about our university degree pathways, entry
                criteria, or tuition fees? Fill out the form below and an OM
                International advisor will respond to you promptly.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs">
              <ContactForm />
            </div>
          </div>

          {/* Right Column: Visual Image Composition & Advisory Support */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 self-start">
            {/* Image Card Frame */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/images/cntactUs.jpeg"
                alt="OM International student advisor and academic consultation"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/25 to-transparent"
              />

              {/* Floating Badges on the Image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">

                <span className="inline-flex items-center gap-1 rounded-xl bg-surface-dark/85 px-3 py-1.5 text-xs font-medium text-surface backdrop-blur-md">
                  <Clock className="size-3 text-gold" aria-hidden="true" />
                  <span>24h Response</span>
                </span>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* 3. Get in Touch Section (Beneath the Form) */}
      <section
        aria-labelledby="get-in-touch-heading"
        className="border-y border-border bg-secondary/40 py-14 sm:py-18 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Side: Eyebrow, Heading, Description */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Get in Touch
                </p>

                <h2
                  id="get-in-touch-heading"
                  className="mt-2 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
                >
                  Reach Out to Us Today
                </h2>

                <p className="mt-3.5 text-base leading-relaxed text-body sm:text-lg">
                  We’re eager to hear your thoughts, feedback, and questions.
                  Reach out today!
                </p>


              </div>
            </div>

            {/* Right Side: Contact Details with Lucide Icons */}
            <div className="space-y-4 sm:space-y-5 lg:col-span-7">
              {/* Location Card */}
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors sm:p-6 hover:border-primary-200">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary-200 bg-primary-subtle text-primary"
                >
                  <MapPin className="size-5" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-heading">
                    Head Office Pakistan
                  </h3>
                  <p className="text-sm font-medium text-heading">
                    {siteConfig.contact.address}
                  </p>


                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors sm:p-6 hover:border-primary-200">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary-200 bg-primary-subtle text-primary"
                >
                  <Mail className="size-5" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-heading">
                    Email Inquiries
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-block text-sm font-medium text-accent transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                  >
                    {siteConfig.contact.email}
                  </a>

                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors sm:p-6 hover:border-primary-200">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary-200 bg-primary-subtle text-primary"
                >
                  <Phone className="size-5" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-heading">
                    Phone Number
                  </h3>
                  <p className="text-sm font-medium text-heading">
                    {siteConfig.contact.phoneDisplay}
                  </p>

                </div>
              </div>

              {/* WhatsApp Quick Advisory */}
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors sm:p-6 hover:border-primary-200">
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary-200 bg-primary-subtle text-primary"
                >
                  <MessageSquare className="size-5" />
                </span>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Office Location Map */}
      <section
        aria-labelledby="office-location-heading"
        className="border-b border-border py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Location
            </p>
            <h2
              id="office-location-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              Visit Our Islamabad Office
            </h2>
            <p className="mt-4 text-sm leading-7 text-body sm:text-base">
              Meet our academic advisory team for programme guidance,
              qualification reviews, and application support.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/35 p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-surface text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Head Office Pakistan
                  </p>
                  <address className="mt-1 text-sm font-medium not-italic leading-6 text-heading">
                    {siteConfig.contact.address}
                  </address>
                  <p className="mt-2 text-xs text-muted">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Open in Google Maps
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg lg:col-span-8">
            <iframe
              title="Google Maps location of OM International Islamabad office"
              src={googleMapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full sm:h-[440px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions Section */}
      <section
        aria-labelledby="faq-section-heading"
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="text-center">


          <h2
            id="faq-section-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-2.5 text-balance text-sm leading-relaxed text-body sm:text-base">
            Detailed information about our academic programmes, credit transfer
            pathways, admission procedures, and university recognition.
          </p>
        </div>

        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>

        {/* Support reassurance box */}
        <div className="mt-12 rounded-xl border border-border bg-secondary/30 p-6 text-center sm:p-8">
          <h3 className="text-base font-semibold text-heading sm:text-lg">
            Have a question that isn&apos;t answered here?
          </h3>
          <p className="mt-1.5 text-sm text-body">
            Our admissions counsellors are available to provide tailored advice
            based on your specific academic background.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact-form-heading"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              <span>Submit Your Question</span>
            </a>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              <span>Explore Programmes</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
