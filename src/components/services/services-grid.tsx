import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "website-dev",
    slug: "website-development",
    title: "Website Development",
    description:
      "Fast, responsive, SEO-optimized websites that convert visitors into customers. Built on modern frameworks for performance and maintainability.",
    features: [
      "Responsive design for all devices",
      "SEO optimization & Core Web Vitals",
      "Fast page load times",
      "CMS integration & content management",
    ],
    benefits: [
      "Attract more organic traffic through Google",
      "Better user experience = higher conversions",
      "Easy to update your own content",
      "Stands out against competitor sites",
    ],
  },
  {
    id: "mobile-app",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native-feeling iOS and Android apps built on a single, maintainable codebase. From concept to app store, we handle the full pipeline.",
    features: [
      "iOS & Android from one codebase",
      "Offline functionality & sync",
      "Push notifications & real-time updates",
      "App store optimization & submission",
    ],
    benefits: [
      "Reach customers on their phones",
      "Lower development cost than native separately",
      "Works seamlessly online or offline",
      "Direct user engagement channel",
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "Practical AI features integrated into your product — chatbots, predictive analytics, automation, and intelligent workflows.",
    features: [
      "AI chatbots for customer support",
      "Predictive analytics & insights",
      "Document & image processing",
      "Custom model training on your data",
    ],
    benefits: [
      "Reduce support team workload by 40%+",
      "Make smarter business decisions",
      "Automate manual, repetitive work",
      "Competitive edge through intelligence",
    ],
  },
  {
    id: "automation",
    slug: "automation",
    title: "Automation",
    description:
      "Automate repetitive workflows and business processes so your team can focus on high-value work. Integrations with tools you already use.",
    features: [
      "Workflow automation without code",
      "API integrations with existing tools",
      "Data sync & reporting automation",
      "Scheduled tasks & triggers",
    ],
    benefits: [
      "Save hundreds of hours per year",
      "Eliminate manual data entry errors",
      "Increase team productivity",
      "Scale without hiring more staff",
    ],
  },
  {
    id: "cloud",
    slug: "cloud",
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud architecture that grows with your business. AWS, Google Cloud, or Azure — deployed and managed by experts.",
    features: [
      "Auto-scaling for traffic spikes",
      "99.9%+ uptime SLA",
      "Automated backups & disaster recovery",
      "Security & compliance (GDPR, SOC 2)",
    ],
    benefits: [
      "Never worry about server capacity",
      "Stay compliant without headaches",
      "Predictable, transparent costs",
      "Enterprise-grade reliability",
    ],
  },
  {
    id: "maintenance",
    slug: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing support, monitoring, updates, and improvements so your software stays fast, secure, and ahead of the curve.",
    features: [
      "24/7 uptime monitoring",
      "Security patches & updates",
      "Performance optimization",
      "Feature updates & improvements",
    ],
    benefits: [
      "Sleep knowing your app is watched",
      "Stay secure against new threats",
      "Faster response times for users",
      "Continuous improvement & growth",
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {serviceDetails.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <div
                id={service.slug}
                className="scroll-mt-32 rounded-2xl border border-dark/10 bg-white p-8 shadow-sm shadow-dark/5"
              >
                <h3 className="text-2xl font-semibold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray">
                  {service.description}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-dark">
                      Features
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-primary mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-dark">
                      Benefits
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-sm text-gray"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-accent mt-0.5"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link href="/contact" className="mt-6 block">
                  <Button variant="primary" className="w-full">
                    Get started
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
