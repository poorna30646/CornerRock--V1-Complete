"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioItem } from "@/types";

const projects = portfolioData as PortfolioItem[];

export function PortfolioGrid() {
  return (
    <section className="bg-white py-18 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioItem;
  index: number;
}) {
  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-sm shadow-dark/5 transition-all duration-300 hover:-translate-y-3 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/12"
    >
      <div className="relative aspect-video overflow-hidden rounded-t-3xl bg-dark/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 20vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-dark/50 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-dark shadow-sm backdrop-blur-xl sm:left-4 sm:top-4">
          {project.category}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-xl sm:bottom-4 sm:left-4">
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="text-lg font-bold tracking-tight text-dark sm:text-xl">
          {project.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray sm:mt-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary sm:px-3"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 sm:mt-7">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="primary" size="md" className="w-full">
                View Demo
                <ExternalLink size={16} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
