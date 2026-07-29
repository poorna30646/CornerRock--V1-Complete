import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { MissionSection } from "@/components/about/mission-section";
import { TeamSection } from "@/components/about/team-section";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our mission, team, and the values that guide how we build software.`,
};

export default function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <WhyChooseUs />
      <FinalCta />
    </>
  );
}
