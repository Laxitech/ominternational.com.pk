"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY_MS = 5000;
const SWIPE_THRESHOLD_PX = 40;

type HeroCarouselProps = {
  images: string[];
};

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const slideCount = images.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goTo = useCallback(
    (index: number) => {
      if (slideCount === 0) return;
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goToNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goToPrevious = useCallback(
    () => goTo(activeIndex - 1),
    [activeIndex, goTo],
  );

  const isAutoplaying =
    slideCount > 1 && !prefersReducedMotion && !isPausedByUser && !isInteracting;

  // Auto-advance. Re-arms whenever the slide changes so manual navigation
  // always gets a full interval before the next automatic slide.
  useEffect(() => {
    if (!isAutoplaying) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideCount);
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [isAutoplaying, activeIndex, slideCount]);

  if (slideCount === 0) {
    return (
      <section
        aria-label="OM International highlights"
        className="relative isolate flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 sm:min-h-[420px]"
      >
        <p className="relative max-w-md px-6 text-center text-sm font-medium text-primary-100 sm:text-base">
          {process.env.NODE_ENV === "production" ? (
            "Highlights coming soon."
          ) : (
            <>
              Add images to{" "}
              <span className="font-semibold text-surface">
                public/images/carousel
              </span>{" "}
              to populate this carousel.
            </>
          )}
        </p>
      </section>
    );
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="OM International highlights"
      className="relative isolate overflow-hidden bg-primary-900"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={() => setIsInteracting(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goToPrevious();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          goToNext();
        }
      }}
      onTouchStart={(event) => {
        touchStartXRef.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const startX = touchStartXRef.current;
        touchStartXRef.current = null;
        if (startX === null) return;

        const deltaX = (event.changedTouches[0]?.clientX ?? startX) - startX;
        if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;

        if (deltaX < 0) goToNext();
        else goToPrevious();
      }}
    >
      <h2 className="sr-only">Highlights</h2>

      <div
        aria-live={isAutoplaying ? "off" : "polite"}
        className="flex h-[58svh] min-h-[320px] transition-transform duration-700 ease-out motion-reduce:transition-none sm:h-[62svh] lg:h-[68svh]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slideCount}`}
            aria-hidden={index !== activeIndex}
            className="relative h-full w-full shrink-0 basis-full"
          >
            <Image
              src={src}
              alt=""
              fill
              preload={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Softens the top and bottom edges for the controls. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/45 via-transparent to-primary-900/15"
      />

      {slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="absolute top-1/2 left-3 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-surface/40 bg-primary-900/45 text-surface backdrop-blur-sm transition-colors duration-200 hover:bg-primary-900/70 active:bg-primary-900/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:left-5 sm:size-12"
          >
            <ChevronLeft aria-hidden="true" className="size-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute top-1/2 right-3 z-20 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-surface/40 bg-primary-900/45 text-surface backdrop-blur-sm transition-colors duration-200 hover:bg-primary-900/70 active:bg-primary-900/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none sm:right-5 sm:size-12"
          >
            <ChevronRight aria-hidden="true" className="size-6" />
          </button>
        </>
      )}

      {slideCount > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-3 px-4 sm:bottom-5">
          <div className="flex items-center gap-2 rounded-full bg-primary-900/45 px-3 py-2 backdrop-blur-sm">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none",
                  index === activeIndex
                    ? "w-6 bg-surface"
                    : "w-2 bg-surface/50 hover:bg-surface/80",
                )}
              />
            ))}
          </div>

          {!prefersReducedMotion && (
            <button
              type="button"
              onClick={() => setIsPausedByUser((paused) => !paused)}
              aria-label={isPausedByUser ? "Play slideshow" : "Pause slideshow"}
              className="inline-flex size-9 items-center justify-center rounded-full bg-primary-900/45 text-surface backdrop-blur-sm transition-colors duration-200 hover:bg-primary-900/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none"
            >
              {isPausedByUser ? (
                <Play aria-hidden="true" className="size-4" />
              ) : (
                <Pause aria-hidden="true" className="size-4" />
              )}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
