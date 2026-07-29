import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioItem } from "@/types";

const projects = portfolioData as PortfolioItem[];

export function PortfolioGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dark/10 bg-white shadow-sm shadow-dark/5 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-dark/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-dark">
                    {project.title}
                  </h3>
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
                  <div className="mt-6 flex gap-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <Link href={project.demoUrl} target="_blank">
                        <Button variant="primary" size="sm">
                          View Live Demo
                          <ArrowUpRight size={14} />
                        </Button>
                      </Link>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Link href={project.githubUrl} target="_blank">
                        <Button variant="outline" size="sm">
                          View Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
