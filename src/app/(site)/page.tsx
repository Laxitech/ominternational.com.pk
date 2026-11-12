import HeroCarousel from "@/components/home/hero-carousel";
import WhoWeAre from "@/components/home/who-we-are";
import FacilitationCenters from "@/components/home/facilitation-centers";
import WeOfferPrograms from "@/components/home/we-offer-programs";
import StatsStrip from "@/components/home/stats-strip";
import AboutPreview from "@/components/home/about-preview";
import PartnerUniversities from "@/components/home/partner-universities";
import WhyChooseUs from "@/components/home/why-choose-us";
import JourneySection from "@/components/home/journey-section";
import TestimonialSection from "@/components/home/testimonial-section";
import { getCarouselImages } from "@/lib/carousel-images";

export default function HomePage() {
  return (
    <main>
      <HeroCarousel images={getCarouselImages()} />
      <WhoWeAre />
      <WeOfferPrograms />

      {/* OM intro video — after Programmes */}
      <section className="bg-surface py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <video
            src="/videos/omintro.mp4"
            controls
            playsInline
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>


      {/* YouTube video — after Who We Are */}
      <section className="bg-surface pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/4KOv8VMrU80"
              title="OM International video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      <FacilitationCenters />


      {/* //comment out the StatsStrip component for now, as it is not needed in the current design */}
      {/* <StatsStrip /> */}

      {/*comment out the following components for now, as they are not needed in the current design */}
      {/* <AboutPreview /> */}
      {/* <PartnerUniversities /> */}
      {/* <WhyChooseUs /> */}
      {/* <JourneySection /> */}
      {/* <TestimonialSection /> */}
    </main>
  );
}

