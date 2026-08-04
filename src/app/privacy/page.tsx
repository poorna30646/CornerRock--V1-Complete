import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Corner Rock, including how we collect, use, protect, and manage information.",
};

const sections = [
  {
    title: "Introduction",
    body: "Corner Rock respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, or work with us on a software project.",
  },
  {
    title: "Information We Collect",
    body: "We may collect contact details, project requirements, company information, messages submitted through forms, and basic technical information such as device, browser, and website usage data.",
  },
  {
    title: "How We Use Information",
    body: "We use information to respond to inquiries, understand project needs, provide services, improve our website, communicate about work, and maintain business records.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies or similar technologies to improve browsing, understand site performance, and support essential website functionality.",
  },
  {
    title: "Third Party Services",
    body: "We may use trusted third party services for hosting, analytics, email, forms, payments, or project operations. These providers process information according to their own policies and applicable law.",
  },
  {
    title: "Data Security",
    body: "We use reasonable technical and organizational measures to protect information. No digital system is completely secure, but we work to reduce risk and safeguard data responsibly.",
  },
  {
    title: "User Rights",
    body: "You may request access, correction, or deletion of personal information where applicable. You may also ask questions about how your information is handled.",
  },
  {
    title: "Contact Information",
    body: `For privacy questions, contact us at ${siteConfig.contactEmail}.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container className="max-w-[900px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Corner Rock
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-dark sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">
            How we collect, use, and protect information across our website and
            client communications.
          </p>
          <p className="mt-4 text-sm font-medium text-dark/50">
            Last Updated: August 1, 2026
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-dark/10 bg-white p-6 shadow-sm shadow-dark/5 sm:p-8"
            >
              <h2 className="text-xl font-bold tracking-normal text-dark">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-8 text-gray">{section.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
