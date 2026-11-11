"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export type EventItem = {
  id: string;
  badge?: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export const EVENTS: EventItem[] = [
  {
    id: "karachi-ceremony",
    badge: "Inauguration Ceremony",
    title: "Opening Ceremony of OM International Karachi Facilitation Center (27-07-19)",
    description:
      "The Malaysian Consul General in Karachi, Mr. Khairul Nazran Abd Rahman, and Prof. Dr. Omar Masood jointly inaugurated the OM International Facilitation Centre in Karachi. The Consul General congratulated Prof. Dr. Omar Masood and his team for their valuable efforts in promoting high-quality Malaysian higher education across Pakistan through the establishment of facilitation centres nationwide.",
    images: [
      {
        src: "/images/eventbook-section1/Picture1.png",
        alt: "Inauguration ribbon cutting at OM International Karachi Facilitation Center",
      },
      {
        src: "/images/eventbook-section1/Picture2.png",
        alt: "Malaysian Consul General Mr. Khairul Nazran Abd Rahman and Prof. Dr. Omar Masood during ceremony",
      },
      {
        src: "/images/eventbook-section1/Picture3.png",
        alt: "Dignitaries and guests at OM International Karachi Facilitation Center opening",
      },
      {
        src: "/images/eventbook-section1/Picture4.png",
        alt: "Group photograph marking the inauguration of the Karachi Facilitation Centre",
      },
    ],
  },
  {
    id: "icmap-session",
    badge: "Professional Engagement",
    title: "OM International Career Pathway Session with ICMAP (27-7-2019)",
    description:
      "OM International Team conducted career pathway session with Institute of Cost and Management Accountants of Pakistan (ICMAP) qualified members in Karachi on July 27, 2019.",
    images: [
      {
        src: "/images/eventbook-section2/Picture5.png",
        alt: "OM International career pathway briefing with ICMAP qualified members in Karachi",
      },
      {
        src: "/images/eventbook-section2/Picture6.png",
        alt: "Presentation and discussion during ICMAP career pathway session",
      },
      {
        src: "/images/eventbook-section2/Picture7.png",
        alt: "Participants and delegates at OM International ICMAP career pathway session",
      },
    ],
  },
  {
    id: "consulate-meeting",
    badge: "Diplomatic Milestone",
    title: "Meeting at the Consulate General of Malaysia, Karachi (26 July 2019)",
    description:
      "OM International CEO, Prof. Dr. Omar Masood, along with his team, met with Mr. Khairul Nazran Abd Rahman, Malaysian Consul General, at the Consulate General of Malaysia in Karachi.",
    images: [
      {
        src: "/images/eventbook-section3/Picture8.png",
        alt: "Prof. Dr. Omar Masood meeting with Malaysian Consul General Mr. Khairul Nazran Abd Rahman at Consulate General of Malaysia, Karachi",
      },
      {
        src: "/images/eventbook-section3/Picture9.png",
        alt: "Delegation meeting at the Consulate General of Malaysia in Karachi",
      },
    ],
  },
  {
    id: "lahore-ceremony",
    badge: "Inauguration Ceremony",
    title: "Opening Ceremony of Lahore Facilitation Centre (22 June 2019)",
    description:
      "Prof. Dr. Omar Masood, Director of OM International, inaugurated the Lahore Facilitation Centre, strengthening OM International’s commitment to bringing quality international education to students' doorsteps across Pakistan.",
    images: [
      {
        src: "/images/eventbook-section4/Picture10.png",
        alt: "Ribbon cutting and inauguration of Lahore Facilitation Centre by Prof. Dr. Omar Masood",
      },
      {
        src: "/images/eventbook-section4/Picture11.png",
        alt: "Official plaque and ceremony at OM International Lahore Facilitation Centre",
      },
      {
        src: "/images/eventbook-section4/Picture12.png",
        alt: "Attendees, academic guests, and staff at the Lahore Facilitation Centre opening ceremony",
      },
    ],
  },
];

type EventBookSectionsProps = {
  showMainHeader?: boolean;
  showViewAllCta?: boolean;
};

export default function EventBookSections({
  showMainHeader = true,
  showViewAllCta = true,
}: EventBookSectionsProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="divide-y divide-border">
      {/* Main Bold Event Section Header */}
      {showMainHeader && (
        <div className="bg-surface py-12 sm:py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent sm:text-sm">
              Milestones &amp; Engagements
            </p>
            <h2 className="mt-3 text-balance font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold tracking-tight text-heading leading-[1.1]">
              OM International Events &amp; Ceremonies
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-body">
              A visual journey of our nationwide facilitation center inaugurations, diplomatic engagements, and professional career pathway sessions.
            </p>
            {showViewAllCta && (
              <div className="mt-6 flex justify-center">
                <Link
                  href="/events-book"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary-subtle px-5 py-2.5 text-xs font-semibold text-primary hover:bg-primary hover:text-surface transition-all"
                >
                  <span>View Full Events Book &amp; Photo Gallery</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {EVENTS.map((event, eventIdx) => (
        <section
          key={event.id}
          aria-labelledby={`${event.id}-heading`}
          className={cn(
            "py-12 sm:py-16 lg:py-20",
            eventIdx % 2 === 0 ? "bg-surface" : "bg-surface-alt",
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header & Description */}
            <div className="max-w-3xl mb-10 sm:mb-12">
              {event.badge && (
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm">
                  {event.badge}
                </p>
              )}
              <h2
                id={`${event.id}-heading`}
                className={cn(
                  "mt-3 text-balance font-display",
                  "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15]",
                  "font-semibold tracking-tight text-heading",
                )}
              >
                {event.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                {event.description}
              </p>
            </div>

            {/* Pictures Grid */}
            <div
              className={cn(
                "grid grid-cols-1 gap-6",
                event.images.length === 2 && "sm:grid-cols-2 max-w-4xl",
                event.images.length === 3 && "sm:grid-cols-2 lg:grid-cols-3",
                event.images.length >= 4 && "sm:grid-cols-2 lg:grid-cols-4",
              )}
            >
              {event.images.map((img, idx) => (
                <figure
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-surface shadow-sm",
                    "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark/5">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-primary-950/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
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
        </section>
      ))}

      {/* Prominent Bottom CTA to View Events Book */}
      {showViewAllCta && (
        <section aria-labelledby="events-cta-heading" className="bg-surface-alt py-12 sm:py-16 border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3
              id="events-cta-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-heading"
            >
              Explore Our Complete Events Book &amp; Visual Archive
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-body max-w-2xl mx-auto">
              Discover our nationwide facilitation center inaugurations, diplomatic engagements, and complete 70+ photo archives.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events-book"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-surface shadow-md hover:bg-primary-hover active:bg-primary-pressed transition-all hover:gap-3"
              >
                <span>Go to Events Book</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-surface p-4 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
              className="absolute right-4 top-4 z-10 rounded-full bg-surface-dark/70 p-2 text-white hover:bg-surface-dark transition-colors"
            >
              <X className="size-5" />
            </button>
            <div className="relative h-[75vh] w-[85vw] max-w-3xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <p className="mt-3 text-center text-xs sm:text-sm font-medium text-heading">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
