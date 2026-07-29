import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { WhatsAppContactSection } from "@/components/contact/whatsapp-widget";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/shared/fade-in";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Tell us about your project and our team will review your inquiry within 24 hours.`,
};

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="py-20 sm:py-28">
        <Container className="max-w-2xl">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.1}>
            <WhatsAppContactSection />
          </FadeIn>
        </Container>
      </section>

      {/* Alternative contact methods */}
      <section className="bg-dark/[0.02] py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Other ways to reach us
            </h2>
            <p className="mt-4 text-gray">
              Prefer email or want to know more before reaching out?
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <div className="rounded-2xl border border-dark/10 bg-white p-6 text-center">
                <h3 className="font-semibold text-dark">Email</h3>
                <p className="mt-2 text-sm text-gray">
                  {siteConfig.contactEmail}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-dark/10 bg-white p-6 text-center">
                <h3 className="font-semibold text-dark">Response Time</h3>
                <p className="mt-2 text-sm text-gray">
                  We typically reply within 24 hours
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="rounded-2xl border border-dark/10 bg-white p-6 text-center">
                <h3 className="font-semibold text-dark">WhatsApp</h3>
                <p className="mt-2 text-sm text-gray">
                  +91 6302902781 for instant chat
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
