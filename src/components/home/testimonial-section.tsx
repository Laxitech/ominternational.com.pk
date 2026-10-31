"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,

  Quote,


} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });
  const active = prefersReducedMotion || inView;

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  }, []);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if section is in viewport
      if (!inView) return;
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inView, goToPrev, goToNext]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-heading"
      className={cn(
        "relative isolate overflow-hidden bg-surface",
        "py-12 sm:py-16 lg:py-24",
      )}
    >
      {/* Subtle ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-20 size-[420px] rounded-full bg-primary-100/40 blur-[130px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 size-[420px] rounded-full bg-primary-200/30 blur-[130px] -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Quote
          aria-hidden="true"
          className="absolute -top-4 -left-60 size-36 sm:size-60 text-primary-200/50 pointer-events-none select-none -z-0"
        />

        {/* Section header */}
        <div className="max-w-[720px] mx-auto text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Student Stories & Outcomes
          </p>

          <h2
            id="testimonials-heading"
            className={cn(
              "mt-3 text-balance",
              "text-[clamp(1.75rem,5vw,2.5rem)] leading-[1.15]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.25rem]",
            )}
          >
            Real Journeys. Meaningful Outcomes.
          </h2>

          <p className="mt-4 max-w-[580px] mx-auto text-sm leading-relaxed text-body sm:text-base sm:leading-7">
            Hear from students who pursued their ambitions with OM International.
          </p>
        </div>


        {/* Main featured testimonial showcase card */}
        <div
          id={`panel-${testimonial.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${testimonial.id}`}
          aria-roledescription="carousel"
          aria-label="Student testimonial details"
          className={cn(
            "relative max-w-4xl mx-auto rounded-tl-3xl rounded-br-3xl border  border-primary-200 bg-surface p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden",
            active ? "stat-rise" : "opacity-0 motion-reduce:opacity-100",
          )}
        >
          {/* Top accent line */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
          />

          <Quote
            aria-hidden="true"
            className="absolute -top-1 rotate-180 -left-1 size-30 sm:size-30 text-primary-100/40 pointer-events-none select-none -z-0"
          />

          {/* Large decorative quotation watermark */}
          <Quote
            aria-hidden="true"
            className="absolute -bottom-1  -right-1 size-30 sm:size-30 text-primary-100/40 pointer-events-none select-none -z-0"
          />

          {/* Animated card body on index change */}
          <div key={testimonial.id} className="relative z-10 testimonial-fade">
            {/* Top row: Star rating + badges */}


            {/* Testimonial quote */}
            <blockquote className="relative">
              <p className="text-base sm:text-xl lg:text-2xl leading-relaxed text-heading font-medium italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>



            {/* Card footer: Student profile & carousel navigation controls */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              {/* Student avatar & title */}
              <div className="flex items-center gap-4">
                <div
                  className="size-12 sm:size-14 rounded-full bg-gradient-to-br from-primary to-accent text-surface flex items-center justify-center text-lg sm:text-xl font-bold shadow-xs flex-shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-heading leading-snug">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-primary">
                    {testimonial.program}
                  </p>

                </div>
              </div>

              {/* Controls: Prev, Step count, Next */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={goToPrev}
                  aria-label="Previous student story"
                  className={cn(
                    "size-10 sm:size-11 rounded-full border border-border-strong bg-surface flex items-center justify-center text-heading shadow-xs",
                    "transition-all duration-200",
                    "hover:border-primary hover:text-primary hover:bg-primary-50 active:scale-95",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                    "motion-reduce:transition-none motion-reduce:active:scale-100",
                  )}
                >
                  <ArrowLeft className="size-4 sm:size-5" aria-hidden="true" />
                </button>

                <span
                  aria-live="polite"
                  className="text-xs font-semibold text-muted tabular-nums min-w-[3rem] text-center"
                >
                  {activeIndex + 1} / {testimonials.length}
                </span>

                <button
                  onClick={goToNext}
                  aria-label="Next student story"
                  className={cn(
                    "size-10 sm:size-11 rounded-full border border-border-strong bg-surface flex items-center justify-center text-heading shadow-xs",
                    "transition-all duration-200",
                    "hover:border-primary hover:text-primary hover:bg-primary-50 active:scale-95",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                    "motion-reduce:transition-none motion-reduce:active:scale-100",
                  )}
                >
                  <ArrowRight className="size-4 sm:size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>


        </div>

        {/* Carousel indicator dots */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}: ${t.name}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                "motion-reduce:transition-none",
                i === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-border-strong hover:bg-primary-300",
              )}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
