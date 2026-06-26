"use client";

import { motion } from "framer-motion";
import {
  FileSearch,
  MessageSquare,
  Target,
  Play,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { DEMOS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  FileSearch,
  MessageSquare,
  Target,
};

const colorMap: Record<string, { bg: string; text: string; light: string; badge: string }> = {
  "#2563EB": {
    bg: "bg-primary-600",
    text: "text-primary-600",
    light: "bg-primary-50",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  "#7C3AED": {
    bg: "bg-violet-600",
    text: "text-violet-600",
    light: "bg-violet-50",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
  },
  "#059669": {
    bg: "bg-emerald-600",
    text: "text-emerald-600",
    light: "bg-emerald-50",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
};

export function DemosSection() {
  return (
    <Section id="demos">
      <SectionHeader
        eyebrow="Live Demos"
        title="See the AI in action."
        description="Real demos built on actual client workflows. No smoke and mirrors — just working AI systems you can test right now."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {DEMOS.map((demo, i) => {
          const DemoIcon = iconMap[demo.icon];
          const colors = colorMap[demo.color];

          return (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Video Placeholder */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-gray-900"
                aria-label={`${demo.title} demo video placeholder`}
              >
                {/* Simulated video screen */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Dark background with grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(37,99,235,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                    aria-hidden="true"
                  />

                  {/* Center content */}
                  <div className="relative flex flex-col items-center gap-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colors.bg} shadow-lg`}
                    >
                      {DemoIcon && (
                        <DemoIcon className="h-8 w-8 text-white" aria-hidden="true" />
                      )}
                    </div>
                    <button
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-200 hover:bg-white/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Play ${demo.title}`}
                    >
                      <Play className="h-6 w-6 fill-white" aria-hidden="true" />
                    </button>
                    <span className="text-xs font-medium text-white/60">
                      Click to play demo
                    </span>
                  </div>
                </div>

                {/* Industry badge overlay */}
                <div className="absolute left-4 top-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${colors.badge}`}
                  >
                    {demo.industry}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{demo.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {demo.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-3 rounded-xl bg-gray-50 p-4">
                  {demo.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`text-lg font-bold ${colors.text}`}>
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-400 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5 flex gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Play className="h-4 w-4" aria-hidden="true" />
                    Watch Demo
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    aria-label="Get this system built for your business"
                  >
                    Get This
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
