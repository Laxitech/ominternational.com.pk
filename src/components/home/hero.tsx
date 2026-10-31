import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(80svh-4rem)] items-center overflow-hidden bg-primary-900 xl:min-h-[calc(80svh-4.5rem)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero1.jpeg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/82 to-primary-900/45 lg:via-primary-900/72 lg:to-primary-900/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-primary-900/20" />
      </div>

      <div className="relative z-10 w-full px-6 py-6 sm:px-8 sm:py-14 lg:py-16 xl:py-[4.5rem]">
        <div className="max-w-[680px]">
          <p className="hero-reveal text-xs font-semibold uppercase tracking-[0.24em] text-primary-200 sm:text-sm">
            Education Without Borders
          </p>

          <h1
            id="hero-heading"
            className="hero-reveal mt-2 text-[clamp(1.875rem,5.5vw,4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-surface [animation-delay:60ms] sm:mt-5"
          >
            Your Ambition. Your Future.{" "}
            <span className="text-primary-200">Your Degree.</span>
          </h1>

          <p className="hero-reveal mt-2 max-w-[620px] text-base leading-[1.4] text-surface/90 [animation-delay:120ms] sm:mt-6 sm:text-lg sm:leading-8">
            Turn your professional qualifications into academic opportunities
            with accelerated degree pathways for ACCA, ICAP, and more through
            Universiti Tun Abdul Razak (UNIRAZAK), Malaysia. Study from
            Pakistan.
          </p>

          <div className="hero-reveal mt-4 flex flex-col gap-3 [animation-delay:180ms] sm:mt-8 sm:flex-row sm:items-center">
            <Link
              href="/programmes"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-lg shadow-primary-900/30 transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:min-h-12 sm:w-auto"
            >
              Explore Programmes
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-surface/40 bg-surface/5 px-6 py-3 text-sm font-semibold text-surface transition-colors duration-200 hover:border-surface/70 hover:bg-surface/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:min-h-12 sm:w-auto"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
