import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/shared/fade-in";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#dbeafe_0%,rgba(219,234,254,0.52)_36%,transparent_72%)] blur-3xl" />
        <div className="absolute top-24 right-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,#cffafe_0%,rgba(207,250,254,0.35)_38%,transparent_74%)] blur-3xl" />
      </div>

      <Container className="text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-normal text-dark sm:text-6xl">
            Our Work
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-gray">
            A selection of modern software solutions designed and developed by
            Corner Rock.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
