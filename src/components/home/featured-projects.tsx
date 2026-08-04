import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            title="Premium concepts for ambitious digital brands"
            description="Four luxury website concepts crafted with refined interfaces, real screenshots, modern stacks, and conversion-focused product thinking."
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
              <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-sm shadow-dark/5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-dark/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark shadow-sm backdrop-blur-xl">
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-xl">
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-normal text-dark">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technology.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <Link href={project.caseStudyUrl || `/portfolio#${project.id}`}>
                      <Button variant="primary" size="sm" className="w-full">
                        View Details
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled
                      className="w-full border-dark/10 bg-dark/[0.02] text-dark/45"
                    >
                      Coming Soon
                    </Button>
                  </div>
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
