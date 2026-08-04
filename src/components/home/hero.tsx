"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Rocket,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const heroAssets = {
  dashboard:
    "https://res.cloudinary.com/dqpjyytx5/image/upload/v1785403732/saas_dashborad_ssj0uz.png",
  laptop:
    "https://res.cloudinary.com/dqpjyytx5/image/upload/v1785403670/laptop_iuywdd.png",
  mobile:
    "https://res.cloudinary.com/dqpjyytx5/image/upload/v1785403689/mobile_lmcmzb.png",
  notifications:
    "https://res.cloudinary.com/dqpjyytx5/image/upload/v1785403707/notifications_s0kblx.png",
};

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: Rocket,
    className: "bg-blue-50 text-primary",
  },
  {
    value: "25+",
    label: "Happy Clients",
    icon: Users,
    className: "bg-emerald-50 text-emerald-600",
  },
  {
    value: "3+",
    label: "Years Experience",
    icon: Code2,
    className: "bg-violet-50 text-violet-600",
  },
  {
    value: "99.9%",
    label: "Client Satisfaction",
    icon: Star,
    className: "bg-amber-50 text-amber-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white pt-20 pb-20 sm:pt-28 lg:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#dbeafe_0%,rgba(219,234,254,0.56)_32%,transparent_70%)] blur-3xl" />
        <div className="absolute top-40 right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,#bfdbfe_0%,rgba(191,219,254,0.36)_38%,transparent_72%)] blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,#cffafe_0%,rgba(207,250,254,0.32)_36%,transparent_70%)] blur-3xl" />
      </div>

      <Container className="flex min-h-[calc(100vh-5rem)] max-w-[1440px] flex-col justify-center gap-16 lg:grid lg:grid-cols-[48%_52%] lg:items-center lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="max-w-[620px]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm shadow-primary/5 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(37,99,235,0.65)]" />
            Software partner for growing businesses
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-[680px] text-4xl font-extrabold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building software that{" "}
            <span className="bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
              grows businesses.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-[560px] text-base leading-7 text-gray sm:text-lg sm:leading-8"
          >
            Corner Rock designs and builds websites, SaaS platforms,
            AI-powered software, mobile apps and scalable digital products for
            startups, clinics, restaurants, schools and growing businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="h-16 w-full px-10 text-base shadow-xl shadow-primary/25 sm:w-auto"
              >
                Start a Project
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-16 w-full border-dark/10 bg-white/75 px-10 text-base shadow-sm shadow-dark/5 backdrop-blur-xl hover:bg-white hover:shadow-lg hover:shadow-dark/10 sm:w-auto"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray sm:text-base"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={19} className="text-primary" />
              Fixed-scope quotes
            </span>
            <span className="hidden h-6 w-px bg-dark/10 sm:block" />
            <span className="flex items-center gap-2">
              <Users size={19} className="text-primary" />
              Direct access to your dev team
            </span>
          </motion.div>
        </motion.div>

        <HeroVisual />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45, staggerChildren: 0.08 }}
          className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-4 lg:gap-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto h-[420px] w-full max-w-[720px] sm:h-[520px] lg:h-[640px] lg:max-w-none"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute top-[15%] right-[2%] h-[60%] w-[75%] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[6%] bottom-[5%] h-[45%] w-[65%] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[6%] right-0 left-[2%] z-10 drop-shadow-[0_38px_74px_rgba(15,23,42,0.18)] sm:left-[1%] lg:left-0"
      >
        <Image
          src={heroAssets.dashboard}
          alt="Corner Rock project dashboard"
          width={1040}
          height={690}
          priority
          unoptimized
          sizes="(max-width: 1024px) 92vw, 55vw"
          className="h-auto w-full select-none"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], rotate: [-8, -6, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute right-[-1%] bottom-[1%] z-30 w-[46%] max-w-[370px] origin-center drop-shadow-[0_32px_52px_rgba(15,23,42,0.28)] sm:right-0 sm:bottom-[1%] lg:right-[-4%] lg:bottom-[4%]"
      >
        <Image
          src={heroAssets.laptop}
          alt="Development laptop"
          width={620}
          height={390}
          priority
          unoptimized
          sizes="(max-width: 1024px) 42vw, 24vw"
          className="h-auto w-full select-none"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[10%] left-[5%] z-40 w-[24%] min-w-[100px] max-w-[160px] drop-shadow-[0_28px_48px_rgba(15,23,42,0.3)] sm:left-[7%] lg:left-[2%]"
      >
        <Image
          src={heroAssets.mobile}
          alt="Mobile app preview"
          width={240}
          height={490}
          priority
          unoptimized
          sizes="(max-width: 1024px) 22vw, 10vw"
          className="h-auto w-full select-none"
        />
      </motion.div>

      <FloatingNotification className="top-[3%] right-[4%] z-50 w-[26%] min-w-[120px] max-w-[200px]" />
      <FloatingNotification className="right-[24%] bottom-[8%] z-50 w-[32%] min-w-[155px] max-w-[260px]" delay={0.65} />
      <FloatingNotification className="right-[0%] bottom-[24%] z-20 hidden w-[24%] max-w-[190px] sm:block" delay={1.1} />
    </motion.div>
  );
}

function FloatingNotification({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute drop-shadow-[0_24px_42px_rgba(15,23,42,0.16)] ${className}`}
    >
      <Image
        src={heroAssets.notifications}
        alt="Project notification"
        width={320}
        height={170}
        priority
        unoptimized
        sizes="(max-width: 1024px) 30vw, 16vw"
        className="h-auto w-full select-none"
      />
    </motion.div>
  );
}

function StatCard({
  value,
  label,
  icon: Icon,
  className,
}: {
  value: string;
  label: string;
  icon: typeof Rocket;
  className: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex min-h-[100px] flex-col items-start gap-3 rounded-2xl border border-white/70 bg-white/72 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 sm:min-h-[108px] sm:gap-4 sm:p-5 lg:flex-row lg:items-center"
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${className}`}
      >
        <Icon size={22} strokeWidth={2.2} className="sm:h-[26px] sm:w-[26px]" />
      </span>
      <span className="flex-1">
        <span className="block text-2xl font-extrabold leading-none tracking-normal text-dark sm:text-3xl">
          {value}
        </span>
        <span className="mt-1 block text-xs font-medium leading-4 text-gray sm:mt-2 sm:text-sm sm:leading-5">
          {label}
        </span>
      </span>
    </motion.div>
  );
}
