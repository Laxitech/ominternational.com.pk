import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Testimonials | OM International",
  description:
    "Hear from students and professionals who advanced their careers and academic pathways with OM International.",
};

const EMBEDDED_REELS = [
  {
    id: "fb-1",
    title: "OM International student testimonial",
    src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      "https://www.facebook.com/ominternational.com.pk/videos/945597478403002/",
    )}&show_text=false&t=0`,
  },
  {
    id: "ig-1",
    title: "OM International student reel testimonial 1",
    src: "https://www.instagram.com/reel/Dc00OugjGEc/embed",
  },
  {
    id: "ig-2",
    title: "OM International student reel testimonial 2",
    src: "https://www.instagram.com/reel/DbYLBjSj-0r/embed",
  },
];

const LOCAL_TESTIMONIAL_VIDEOS = [
  {
    id: "local-1",
    title: "Student Experience & Pathway",
    src: "/videos/testimonials/WhatsApp Video 2026-11-08 at 16.08.16.mp4",
  },
  {
    id: "local-2",
    title: "Graduate Success Story",
    src: "/videos/testimonials/WhatsApp Video 2026-11-08 at 16.08.18.mp4",
  },
  {
    id: "local-3",
    title: "Academic Journey & Support",
    src: "/videos/testimonials/WhatsApp Video 2026-11-08 at 16.08.19.mp4",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-full bg-surface">
      <PageHeader
        title="Testimonials"
        subtitle="Hear what our students and graduates have to say about their journey with OM International."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section: Ashfaq Tola Testimonial */}
          <div className="rounded-3xl border border-border bg-surface-alt p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full   py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Featured Endorsement
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-heading">
                ASHFAQ TOLA TESTIMONIAL
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-body">
                <span className="inline-flex items-center rounded-lg bg-surface px-3 py-1.5 border border-border shadow-2xs">
                  Former Minister of State of the Islamic Republic of Pakistan
                </span>
                <span className="inline-flex items-center rounded-lg bg-surface px-3 py-1.5 border border-border shadow-2xs">
                  Former President ICAP for the term 2022-2023
                </span>
                <span className="inline-flex items-center rounded-lg bg-surface px-3 py-1.5 border border-border shadow-2xs">
                  Member of the ICAP&apos;s Council since 2017
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 items-start">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
                <div className="relative w-full overflow-hidden bg-secondary">
                  <Image
                    src="/images/testimonials/AshfaqTola1.jpeg"
                    alt="Ashfaq Tola Testimonial"
                    width={1200}
                    height={901}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
                <div className="relative w-full overflow-hidden bg-secondary">
                  <Image
                    src="/images/testimonials/AshfaqTola2.jpeg"
                    alt="Ashfaq Tola Testimonial"
                    width={1080}
                    height={1350}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Video Testimonials from Students */}
          <div>
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-heading">
                Video Testimonials
              </h2>
              <p className="mt-1 text-sm text-body">
                Watch our students share their firsthand experiences studying with OM International.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-sm sm:max-w-none mx-auto">
              {LOCAL_TESTIMONIAL_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <div
                    className="relative w-full overflow-hidden bg-black"
                    style={{ aspectRatio: "1080 / 1350" }}
                  >
                    <video
                      src={video.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-surface border-t border-border">
                    <p className="text-sm font-semibold text-heading line-clamp-1">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Social Media Reels & Highlights */}
          <div className="pt-8 border-t border-border">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-heading">
                Social Media Reels &amp; Highlights
              </h2>
              <p className="mt-1 text-sm text-body">
                Highlights and reels from our official Facebook and Instagram channels.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-sm sm:max-w-none mx-auto">
              {EMBEDDED_REELS.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-lg"
                >
                  <div
                    className="relative w-full overflow-hidden bg-black"
                    style={{ aspectRatio: "1080 / 1920" }}
                  >
                    <iframe
                      src={item.src}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
