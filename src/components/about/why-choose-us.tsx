import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "No retainer model — fixed-scope quotes mean you know exactly what you're paying",
  "Direct access to your engineering team — no layers of management or account handlers",
  "Tech that's proven, not trendy — we use stable, battle-tested stacks",
  "Maintenance included — every project ships with 6 months of free updates",
  "Senior engineers, not juniors — your project is handled by people with 8-15+ years of experience",
  "Code ownership — you own every line of code. No vendor lock-in, ever.",
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why teams choose Corner Rock"
          title="Clear commitment. Senior engineering. Transparent pricing."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-primary mt-0.5" />
                  <p className="text-sm leading-relaxed text-dark">{reason}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
