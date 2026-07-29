import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/shared/fade-in";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl" />
      </div>

      <Container className="text-center">
        <FadeIn>
          <p className="text-sm font-medium text-primary">Our Services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-dark sm:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              grow.
            </span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-gray">
            From websites and mobile apps to AI solutions and long-term support —
            we handle every phase of your software journey.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
