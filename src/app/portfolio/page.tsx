import type { Metadata } from "next";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { FinalCta } from "@/components/home/final-cta";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `View ${siteConfig.name}'s portfolio of modern software solutions across web apps, mobile apps, AI, business, healthcare, restaurant, and education projects.`,
};

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <FinalCta />
    </>
  );
}
