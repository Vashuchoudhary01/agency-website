"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/constants";

const floatingCards = [
  {
    icon: TrendingUp,
    title: "Conversion Rate",
    value: "+3.2×",
    sub: "average lift",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    delay: 0,
    position: "top-32 -right-4 lg:right-8",
  },
  {
    icon: Zap,
    title: "Response Time",
    value: "<2s",
    sub: "AI reply speed",
    color: "text-primary-600",
    bg: "bg-primary-50",
    delay: 0.3,
    position: "bottom-32 -left-4 lg:left-8",
  },
  {
    icon: Shield,
    title: "Accuracy",
    value: "94%",
    sub: "qualification score",
    color: "text-violet-500",
    bg: "bg-violet-50",
    delay: 0.6,
    position: "top-2/3 -right-4 lg:right-16",
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.08),rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06),transparent_70%)]" />
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08),transparent_70%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-32 lg:px-8 lg:pt-40"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-5 py-2"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-600">
            <Zap className="h-3 w-3 text-white" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold text-primary-700">
            AI Automation Agency
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-primary-300 sm:block" aria-hidden="true" />
          <span className="hidden text-sm text-primary-500 sm:block">
            200+ Automations Deployed
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative text-center"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 lg:text-7xl xl:text-8xl">
            <span className="block">AI Automation That</span>
            <span className="block text-gradient mt-1">Saves Businesses Time</span>
            <span className="block mt-1">and Converts More Leads.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-center text-xl leading-relaxed text-gray-500 lg:text-2xl"
        >
          We help{" "}
          <span className="font-semibold text-gray-800">Recruitment Agencies</span>,{" "}
          <span className="font-semibold text-gray-800">Coaching Institutes</span>, and{" "}
          <span className="font-semibold text-gray-800">Real Estate Businesses</span>{" "}
          automate lead qualification, customer support, and repetitive workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            variant="gradient"
            size="xl"
            className="min-w-48 shadow-xl shadow-primary-600/20"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Book free demo"
          >
            Book Free Demo
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            variant="secondary"
            size="xl"
            className="min-w-48"
            onClick={() =>
              document
                .getElementById("demos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="View solutions and demos"
          >
            <Play className="h-4 w-4 fill-current text-primary-600" aria-hidden="true" />
            View Solutions
          </Button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
        >
          {["No long-term contracts", "Setup in 2 weeks", "Free pilot project"].map(
            (item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                {item}
              </span>
            )
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-extrabold text-gray-900 lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 + card.delay }}
          className={`absolute hidden xl:flex ${card.position} items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-5 py-3.5 shadow-lg backdrop-blur-xl`}
          aria-hidden="true"
          style={{ animation: `float ${6 + card.delay}s ease-in-out infinite ${card.delay * 0.5}s` }}
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.bg}`}>
            <card.icon className={`h-5 w-5 ${card.color}`} />
          </div>
          <div>
            <div className="text-xs font-medium text-gray-400">{card.title}</div>
            <div className="flex items-baseline gap-1">
              <span className={`text-lg font-bold ${card.color}`}>{card.value}</span>
              <span className="text-xs text-gray-400">{card.sub}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
