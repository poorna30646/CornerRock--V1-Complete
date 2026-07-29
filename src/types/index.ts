export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technology: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export type ContactStatus = "new" | "contacted" | "in-progress" | "closed";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
