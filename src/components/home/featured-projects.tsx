import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioItem } from "@/types";

const featured = (portfolioData as PortfolioItem[]).slice(0, 4);

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title="Concept projects across every industry we serve"
            description="Placeholder projects showing the kind of software we build — real client work will replace these as it ships."
            align="left"
            className="mx-0"
          />
          <Link href="/portfolio" className="hidden shrink-0 sm:block">
            <Button variant="outline" size="md">
              View all projects
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-sm shadow-dark/5 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-dark">
                    Concept Project
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-dark">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-dark/5 px-2.5 py-1 text-xs font-medium text-dark/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/portfolio"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    View details
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/portfolio">
            <Button variant="outline" size="md">
              View all projects
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
