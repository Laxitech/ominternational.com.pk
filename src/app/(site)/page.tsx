import Hero from "@/components/home/hero";
import StatsStrip from "@/components/home/stats-strip";
import AboutPreview from "@/components/home/about-preview";
import PartnerUniversities from "@/components/home/partner-universities";
import WhyChooseUs from "@/components/home/why-choose-us";
import JourneySection from "@/components/home/journey-section";
import TestimonialSection from "@/components/home/testimonial-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <PartnerUniversities />
      <WhyChooseUs />
      <JourneySection />
      <TestimonialSection />
    </main>
  );
}

