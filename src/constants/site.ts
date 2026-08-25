export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/138464137",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/CornerRock-Tech",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cornerrock.tech?igsh=MWU2NmZ5anJuMXVrbg==",
    icon: "instagram",
  },
] as const;

// Keep local development valid without claiming a custom production domain.
// Configure the active Amplify URL (and later the custom domain) at build time.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Corner Rock",
  tagline: "Building Software That Grows Businesses.",
  description:
    "Corner Rock helps startups, businesses, and enterprises grow using modern software solutions — websites, mobile apps, automation, and AI.",
  url: siteUrl,
  ogImage: "/og-image.png",
  links: {
    social: socialLinks,
  },
  contactEmail: "cornerrock.tech@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  primary: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    ...socialLinks.map(({ label, href }) => ({ label, href })),
    { label: "Email", href: `mailto:${siteConfig.contactEmail}` },
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
