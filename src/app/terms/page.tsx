import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using Corner Rock services and working with Corner Rock on software projects.",
};

const sections = [
  {
    title: "Acceptance",
    body: "By accessing our website, contacting Corner Rock, or engaging our services, you agree to these Terms & Conditions.",
  },
  {
    title: "Services",
    body: "Corner Rock provides website development, mobile app interfaces, AI solutions, automation, cloud support, maintenance, and related software services.",
  },
  {
    title: "Payments",
    body: "Project pricing, payment schedules, deposits, and milestones are agreed before work begins. Late or incomplete payments may delay delivery or pause work.",
  },
  {
    title: "Intellectual Property",
    body: "Unless otherwise agreed, final client-specific deliverables transfer to the client after full payment. Corner Rock may retain rights to reusable tools, frameworks, internal processes, and general know-how.",
  },
  {
    title: "Project Delivery",
    body: "Delivery timelines depend on project scope, timely client feedback, asset availability, approvals, and technical requirements. Material scope changes may affect timelines and pricing.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients are responsible for providing accurate information, required assets, timely feedback, approvals, access credentials, and legal rights to content supplied for the project.",
  },
  {
    title: "Limitation of Liability",
    body: "Corner Rock is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount paid for the specific service giving rise to the claim, where permitted by law.",
  },
  {
    title: "Termination",
    body: "Either party may terminate a project according to the agreed scope or contract terms. Work completed before termination may remain billable.",
  },
  {
    title: "Changes",
    body: "We may update these terms from time to time. Updates will be reflected on this page with the latest revision date.",
  },
  {
    title: "Contact Information",
    body: `For questions about these terms, contact us at ${siteConfig.contactEmail}.`,
  },
];

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">
            The terms that guide website use, project delivery, payments, and
            client collaboration.
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
