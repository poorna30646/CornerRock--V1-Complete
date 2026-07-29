export const siteConfig = {
  name: "Corner Rock",
  tagline: "Building Software That Grows Businesses.",
  description:
    "Corner Rock helps startups, businesses, and enterprises grow using modern software solutions — websites, mobile apps, automation, and AI.",
  url: "https://cornerrock.com", // TODO: replace with the real production domain
  ogImage: "/og-image.png",
  links: {
    // TODO: add real social links when available
  },
  contactEmail: "hello@cornerrock.com", // TODO: replace with real inbox
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Fast, responsive, SEO-ready websites built to convert visitors into customers.",
    icon: "Globe",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native-feeling iOS and Android apps built on a single, maintainable codebase.",
    icon: "Smartphone",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "Practical AI features — chatbots, automation, and insights — built into your product.",
    icon: "Sparkles",
  },
  {
    slug: "automation",
    title: "Automation",
    description:
      "Automate repetitive workflows so your team can focus on higher-value work.",
    icon: "Workflow",
  },
  {
    slug: "cloud",
    title: "Cloud",
    description:
      "Scalable, secure cloud infrastructure that grows with your business.",
    icon: "Cloud",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    description:
      "Ongoing support, monitoring, and updates so your software stays reliable.",
    icon: "Wrench",
  },
] as const;
