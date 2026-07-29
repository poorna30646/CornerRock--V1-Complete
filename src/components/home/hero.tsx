"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Decorative background gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Software partner for growing businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-dark sm:text-5xl lg:text-6xl"
          >
            Building software that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              grows businesses.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-gray"
          >
            Corner Rock designs and builds websites, mobile apps, and AI-powered
            software for startups, clinics, restaurants, schools, and growing
            teams — from first line of code to long-term support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link href="/contact">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                Start a project
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View our work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-primary" /> Fixed-scope
              quotes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-primary" /> Direct access
              to your dev team
            </span>
          </motion.div>
        </div>

        <HeroIllustration />
      </Container>
    </section>
  );
}

/**
 * A lightweight, hand-built "product dashboard" illustration.
 * Kept as inline SVG/HTML (no external image assets) and animated
 * with Framer Motion for a subtle floating, premium feel.
 */
function HeroIllustration() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-3xl border border-dark/10 bg-white shadow-xl shadow-dark/10"
      >
        <div className="flex items-center gap-1.5 border-b border-dark/5 px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="space-y-4 p-6">
          <div className="h-24 w-full rounded-xl bg-gradient-to-br from-primary/15 to-accent/15" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-16 rounded-lg bg-dark/5" />
            <div className="h-16 rounded-lg bg-dark/5" />
          </div>
          <div className="h-3 w-3/4 rounded-full bg-dark/10" />
          <div className="h-3 w-1/2 rounded-full bg-dark/10" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl border border-dark/10 bg-white px-5 py-4 shadow-lg shadow-dark/10"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={18} />
        </span>
        <div>
          <p className="text-sm font-semibold text-dark">Project launched</p>
          <p className="text-xs text-gray">On time, on budget</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute -top-6 -right-6 rounded-2xl border border-dark/10 bg-white px-4 py-3 shadow-lg shadow-dark/10"
      >
        <p className="text-xs font-medium text-gray">Uptime</p>
        <p className="text-lg font-semibold text-primary">99.9%</p>
      </motion.div>
    </div>
  );
}
