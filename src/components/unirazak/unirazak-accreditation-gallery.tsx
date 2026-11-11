"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export type DegreeSampleItem = {
  src: string;
  title: string;
  width: number;
  height: number;
};

export const ACCREDITATION_DOCS: DegreeSampleItem[] = [
  {
    src: "/images/degree-samples/attestation-1-1024x720.jpg",
    title: "UAE Official Attestation",
    width: 1024,
    height: 720,
  },
  {
    src: "/images/degree-samples/att1-1-724x1024.jpg",
    title: "UAE Ministry Attestation Endorsement",
    width: 724,
    height: 1024,
  },
  {
    src: "/images/degree-samples/ffffg-724x1024.jpg",
    title: "UAE Verification Seal & Stamps",
    width: 724,
    height: 1024,
  },
  {
    src: "/images/degree-samples/gfgf-724x1024.jpg",
    title: "Consular & Embassy Attestation",
    width: 724,
    height: 1024,
  },
  {
    src: "/images/degree-samples/BACHELOR-OF-ACCOUNTING-HONOURS-CERTIFICATE_1-720x1024.jpg",
    title: "Bachelor of Accounting (Honours)",
    width: 720,
    height: 1024,
  },
  {
    src: "/images/degree-samples/DOCTOR-OF-PHILOSOPHY-CERTIFICATE_1-1024x720.jpg",
    title: "Doctor of Philosophy (PhD)",
    width: 1024,
    height: 720,
  },
  {
    src: "/images/degree-samples/MASTER-OF-EDUCATION-CERTIFICATE_1-1-1024x720.jpg",
    title: "Master of Education",
    width: 1024,
    height: 720,
  },
];

export default function UnirazakAccreditationGallery() {
  const [selectedImage, setSelectedImage] = useState<DegreeSampleItem | null>(null);

  return (
    <section aria-label="UniRazak Accreditation Pictures" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pictures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ACCREDITATION_DOCS.map((sample, idx) => (
            <figure
              key={idx}
              onClick={() => setSelectedImage(sample)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(sample);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${sample.title}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-alt">
                <Image
                  src={sample.src}
                  alt={sample.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-heading shadow">
                    <ZoomIn className="size-3.5 text-primary" /> View
                  </span>
                </div>
              </div>

              <figcaption className="p-4 border-t border-border">
                <p className="font-display text-sm font-bold text-heading group-hover:text-primary transition-colors line-clamp-1">
                  {sample.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl bg-surface p-4 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-full bg-surface-dark/70 p-2 text-white hover:bg-surface-dark transition-colors"
              >
                <X className="size-5" />
              </button>
              <div className="relative h-[72vh] w-[85vw] max-w-3xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="mt-3 border-t border-border pt-2 text-center">
                <h3 className="text-sm sm:text-base font-bold text-heading">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
