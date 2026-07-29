import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const values = [
  {
    title: "Shipping matters",
    description:
      "We ship fast because speed compounds. Better to iterate with real users than perfect in a vacuum.",
  },
  {
    title: "Your goals are ours",
    description:
      "We don't treat projects as billable hours. We succeed when your business succeeds.",
  },
  {
    title: "Clean code is a feature",
    description:
      "Maintainable code is an asset. We write for the person who maintains it, not just for ourselves.",
  },
  {
    title: "Communication wins",
    description:
      "You get direct access to your dev team. No account managers, no black boxes — just clarity.",
  },
];

export function MissionSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div>
              <SectionHeading
                eyebrow="Our mission"
                title="Empower every business with world-class software"
                description="We believe great software shouldn't be a luxury. That's why we focus on honest pricing, transparent timelines, and code that lasts."
                align="left"
                className="mx-0"
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="rounded-xl border border-dark/10 bg-white p-5">
                  <h3 className="font-semibold text-dark">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
