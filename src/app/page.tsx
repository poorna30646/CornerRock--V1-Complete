import { Hero } from "@/components/home/hero";
import { TrustSection } from "@/components/home/trust-section";
import { ServicesGrid } from "@/components/home/services-grid";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
