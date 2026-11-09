"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EventPhoto } from "@/data/event-book-images";

type EventGalleryProps = {
  photos: EventPhoto[];
};

export default function EventGallery({ photos }: EventGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current > 0 ? current - 1 : photos.length - 1;
    });
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current < photos.length - 1 ? current + 1 : 0;
    });
  }, [photos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const activePhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
              Visual Archive
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              Moments &amp; Milestone Memories
            </h2>
            <p className="mt-1 text-sm text-body sm:text-base">
              Explore photo highlights from our ceremonies, diplomatic meetings, and facilitation center events.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center rounded-full bg-primary-subtle border border-primary-200 px-3.5 py-1 text-xs font-semibold text-primary">
              {photos.length} Photographs
            </span>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {photos.map((photo, index) => (
            <figure
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View photo ${index + 1} of ${photos.length} in full screen`}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-xs",
                "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-primary-950/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-heading shadow">
                    <ZoomIn className="size-3.5 text-primary" /> View Photo
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full view of photo ${selectedIndex + 1}`}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md transition-opacity duration-200"
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-h-[94vh] max-w-5xl w-full"
          >
            {/* Top Bar with Counter & Close */}
            <div className="flex w-full items-center justify-between pb-3 text-white">
              <span className="text-xs sm:text-sm font-medium tracking-wide bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                Photo {selectedIndex + 1} of {photos.length}
              </span>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close photo modal"
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative h-[70vh] sm:h-[78vh] w-full overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-2xl flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                sizes="95vw"
                className="object-contain"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 sm:p-3 text-white hover:bg-black/90 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 sm:p-3 text-white hover:bg-black/90 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
            </div>

            {/* Bottom Keyboard Hint */}
            <div className="mt-3 flex items-center gap-4 text-xs text-white/60">
              <span className="hidden sm:inline">Use Arrow keys ← / → to navigate</span>
              <span className="hidden sm:inline">•</span>
              <span>Press Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
