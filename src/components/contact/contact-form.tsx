"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { siteConfig } from "@/constants/site";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      setSubmitStatus("success");
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-dark"
            >
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark placeholder-gray/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark"
            >
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="you@company.com"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark placeholder-gray/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-dark"
            >
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark placeholder-gray/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-dark"
            >
              Company Name *
            </label>
            <input
              {...register("company")}
              type="text"
              id="company"
              placeholder="Your company"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark placeholder-gray/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
            {errors.company && (
              <p className="mt-1 text-xs text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-dark"
            >
              Service Interested *
            </label>
            <select
              {...register("service")}
              id="service"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            >
              <option value="">Select a service</option>
              <option value="Website Development">Website Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="AI Solutions">AI Solutions</option>
              <option value="Automation">Automation</option>
              <option value="Cloud">Cloud Infrastructure</option>
              <option value="Maintenance">Maintenance & Support</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-500">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-dark"
            >
              Budget Range *
            </label>
            <select
              {...register("budget")}
              id="budget"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            >
              <option value="">Select budget</option>
              <option value="Under $5,000">Under $5,000</option>
              <option value="$5,000 - $15,000">$5,000 - $15,000</option>
              <option value="$15,000 - $50,000">$15,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="$100,000+">$100,000+</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-xs text-red-500">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-dark"
            >
              Timeline *
            </label>
            <select
              {...register("timeline")}
              id="timeline"
              className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            >
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Flexible">Flexible</option>
            </select>
            {errors.timeline && (
              <p className="mt-1 text-xs text-red-500">
                {errors.timeline.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-dark"
          >
            Project Details *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            placeholder="Tell us about your project, goals, and any specific requirements..."
            className="mt-2 w-full rounded-lg border border-dark/10 px-4 py-2.5 text-sm text-dark placeholder-gray/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 rounded-lg bg-green-50 p-4"
          >
            <CheckCircle2 size={20} className="shrink-0 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-green-900">
                Thank you! We received your inquiry.
              </p>
              <p className="text-sm text-green-800">
                Our team will contact you soon with next steps.
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 rounded-lg bg-red-50 p-4"
          >
            <AlertCircle size={20} className="shrink-0 text-red-600 mt-0.5" />
            <div>
              <p className="font-medium text-red-900">
                Something went wrong
              </p>
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-xs text-gray text-center">
          By submitting this form, you agree to be contacted by{" "}
          {siteConfig.name} regarding your inquiry.
        </p>
      </form>
    </Container>
  );
}
