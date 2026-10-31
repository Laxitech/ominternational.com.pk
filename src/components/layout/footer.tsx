"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const PROGRAMME_LINKS = [
  { label: "Master of Business Administration (MBA)", href: "/programmes/master-of-business-administration" },
  { label: "BS Accounting & Finance", href: "/programmes/bs-accounting-and-finance" },
  { label: "PhD Programme", href: "/programmes/doctor-of-philosophy" },
  { label: "Executive Master's Pathways", href: "/programmes?level=masters" },
  { label: "Bachelor's Degree Pathways", href: "/programmes?level=bachelors" },
  { label: "ICAP & ACCA Route", href: "/programmes/bs-accounting-and-finance" },
  { label: "Malaysian Dual Awards", href: "/universities" },
];

const COMPANY_LINKS = [
  { label: "About OM International", href: "/about" },
  { label: "What's New", href: "/scholarships" },
  { label: "Partner Universities", href: "/universities" },
  { label: "Student Stories", href: "/about#leadership-governance-heading" },
  { label: "Learning Centers", href: "/centers" },
  { label: "Contact Us", href: "/contact" },
];

const RESOURCE_LINKS = [
  { label: "Degree Eligibility Checker", href: "/apply" },
  { label: "Programme Prospectus", href: "/programmes" },
  { label: "Admissions & Fees Guide", href: "/contact" },
  { label: "HEC Attestation Support", href: "/study-in-malaysia" },
  { label: "Help & FAQs", href: "/contact#faq-section-heading" },
  { label: "Student Portal Login", href: "https://portal.aeu.edu.my" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="relative isolate overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[3rem] border-t border-white/10 bg-surface-dark text-slate-200"
    >




      {/* Ambient luminous glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary-600/10 blur-[140px] -z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        {/* 4-Column Grid: Brand/Socials + 3 Nav Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Brand & Socials & Recognition */}
          <div className="lg:col-span-5 xl:col-span-4">
            <Link
              href="/"
              className="inline-block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div className="inline-flex items-center rounded-xl bg-white px-3.5 py-2 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/om-logo.png"
                  alt={siteConfig.name}
                  width={132}
                  height={48}
                  className="h-8 w-auto sm:h-9"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300/90 sm:text-[15px]">
              OM International facilitates accelerated academic degree pathways with premier
              Malaysian universities, connecting professional qualifications with accredited global
              degrees.
            </p>

            {/* 5 Circular Solid White Social Buttons */}
            <div className="mt-6 flex items-center gap-2.5">


              {/* WordPress / Web */}
              <a
                href={siteConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit OM International Official Portal"
                className="group inline-flex size-9 sm:size-10 items-center justify-center rounded-full bg-white text-surface-dark shadow-sm transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <svg
                  className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 2.478.9 4.743 2.392 6.495l4.89-13.407C10.057 5.034 10.99 5 12 5c.441 0 .866.028 1.284.073L7.755 18.064A9.957 9.957 0 0012 22c2.046 0 3.939-.62 5.518-1.683L12 2zm7.14 4.887c.54.945.86 2.036.86 3.201 0 1.947-.84 3.702-2.185 4.93L19.14 6.887zM4.148 9.387c-.097.518-.148 1.056-.148 1.603 0 2.062.83 3.93 2.186 5.289L4.148 9.387zM12 20.315c-.416 0-.822-.041-1.218-.112l3.411-9.907 3.336 9.176A8.324 8.324 0 0112 20.315z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit OM International on Instagram"
                className="group inline-flex size-9 sm:size-10 items-center justify-center rounded-full bg-white text-surface-dark shadow-sm transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <svg
                  className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit OM International on YouTube"
                className="group inline-flex size-9 sm:size-10 items-center justify-center rounded-full bg-white text-surface-dark shadow-sm transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <svg
                  className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit OM International on LinkedIn"
                className="group inline-flex size-9 sm:size-10 items-center justify-center rounded-full bg-white text-surface-dark shadow-sm transition-all duration-300 hover:scale-110 hover:bg-slate-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <svg
                  className="size-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>

            {/* Recognition & Accreditation Badges (paralleling G2 & Capterra in Astra) */}
            <div className="mt-8 pt-5">
              <p className="text-xs font-normal text-slate-400">
                Accredited &amp; recognised by
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="inline-flex items-center gap-2 text-white/90">
                  <ShieldCheck className="size-5 text-primary-300" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    MQA Malaysia
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-white/90">
                  <Award className="size-5 text-accent" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    UNIRAZAK &bull; AeU
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Programmes (corresponds to Pentest in Astra) */}
          <div className="lg:col-span-2 xl:col-span-3 lg:pl-4">
            <h3 className="text-sm font-medium text-slate-400">Programmes</h3>
            <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {PROGRAMME_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="text-sm font-medium text-slate-400">Company</h3>
            <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="lg:col-span-3 xl:col-span-3">
            <h3 className="text-sm font-medium text-slate-400">Resources</h3>
            <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Chevron (matching the centered chevron in the image) */}
        <div className="mt-12 mb-6 flex justify-center sm:mt-16 sm:mb-8">

        </div>

        {/* Elevated Bottom Capsule Card matching Astra's rounded bar */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.04] px-6 py-5 sm:px-8 sm:py-6 backdrop-blur-md">
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 sm:flex-row">
            <p className="text-center sm:text-left">
              Copyright &copy; {currentYear} OM International (Pvt) Ltd. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <Link
                href="/privacy-policy"
                className="text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                Report an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
