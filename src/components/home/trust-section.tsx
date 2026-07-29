import { ShieldCheck, Rocket, MessagesSquare, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const features = [
  {
    icon: Rocket,
    title: "Modern technology",
    description:
      "We build on the same stack used by leading tech companies — fast, scalable, and easy to maintain.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent communication",
    description:
      "Regular updates and direct access to your team — no black-box agencies, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Clean, tested, well-documented code so your software stays reliable as you grow.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    description:
      "We don't disappear after launch — every project includes maintenance and support.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Corner Rock"
          title="A software partner, not just a vendor"
          description="We combine senior engineering with a genuine focus on your business outcomes."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm shadow-dark/5 transition-shadow hover:shadow-md">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold text-dark">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
