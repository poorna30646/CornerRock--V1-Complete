import Link from "next/link";
import {
  Globe,
  Smartphone,
  Sparkles,
  Workflow,
  Cloud,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { services } from "@/constants/site";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Sparkles,
  Workflow,
  Cloud,
  Wrench,
};

export function ServicesGrid() {
  return (
    <section className="bg-dark/[0.02] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to grow, in one place"
          description="From your first website to a full custom platform — we cover the full lifecycle of your software."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-dark/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-dark/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
