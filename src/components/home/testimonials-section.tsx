import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { InitialsAvatar } from "@/components/shared/initials-avatar";
import testimonialsData from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

const testimonials = testimonialsData as Testimonial[];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client feedback"
          title="Trusted by teams who need software that works"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-dark/10 bg-white p-6 shadow-sm shadow-dark/5">
                <Quote className="text-primary/30" size={28} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-dark/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <InitialsAvatar name={t.name} />
                  <div>
                    <p className="text-sm font-semibold text-dark">{t.name}</p>
                    <p className="text-xs text-gray">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
