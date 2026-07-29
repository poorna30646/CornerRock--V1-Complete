import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Accordion } from "@/components/shared/accordion";
import faqData from "@/data/faq.json";
import type { FaqItem } from "@/types";

const faqs = faqData as FaqItem[];

export function FaqSection() {
  return (
    <section className="bg-dark/[0.02] py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear a lot"
        />
        <FadeIn className="mt-12">
          <Accordion items={faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
