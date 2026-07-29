import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  service: z
    .string()
    .min(1, "Please select a service")
    .max(50, "Service name must be less than 50 characters"),
  budget: z
    .string()
    .min(1, "Please select a budget range")
    .max(50, "Budget must be less than 50 characters"),
  timeline: z
    .string()
    .min(1, "Please select a timeline")
    .max(50, "Timeline must be less than 50 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
