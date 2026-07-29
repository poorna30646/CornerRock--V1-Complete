import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import type { ProcessStep } from "@/types";

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, and users to scope the right solution.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and UI design so you can see and approve the product before we build it.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build in focused sprints with regular check-ins, so you always know where things stand.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Cross-device testing and bug fixes before anything reaches your users.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "We deploy your product and stay on for ongoing maintenance and improvements.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-dark/[0.02] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A clear process from idea to launch"
          description="No guesswork — you'll always know what's happening and what's next."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.08} className="relative">
              <div className="rounded-2xl border border-dark/10 bg-white p-6">
                <span className="text-sm font-semibold text-primary">
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
