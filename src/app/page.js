import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhoWeHelp from "@/components/WhoWeHelp";
import ProcessTimeline from "@/components/ProcessTimeline";
import WorkCarousel from "@/components/WorkCarousel";
import HowWeUseAI from "@/components/HowWeUseAI";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="relative w-full bg-[#fafbfe]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Grid ("What We do") */}
      <ServicesGrid />

      {/* 3. Who We Help */}
      <WhoWeHelp />

      {/* 4. How We Use AI */}
      <HowWeUseAI />

      {/* 5. Work Carousel ("Check our Work") */}
      <WorkCarousel />

      {/* 6. Onboarding Process Roadmap */}
      <ProcessTimeline />

      {/* 7. FAQs (Frequently Asked Questions in two-column grid) */}
      <FaqAccordion />

      {/* 8. Contact Form */}
      <ContactForm />
    </div>
  );
}
