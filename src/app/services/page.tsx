import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.name}'s full range of services — websites, mobile apps, AI solutions, automation, cloud, and ongoing support.`,
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <FinalCta />
    </>
  );
}
