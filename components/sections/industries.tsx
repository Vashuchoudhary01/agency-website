"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Building2,
  FileSearch,
  MessageSquare,
  Target,
  XCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  Building2,
  FileSearch,
  MessageSquare,
  Target,
};

const colorMap: Record<
  string,
  { badge: string; icon: string; solution: string; border: string; glow: string }
> = {
  "#2563EB": {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    icon: "bg-blue-100 text-primary-600",
    solution: "bg-primary-600 text-white",
    border: "border-blue-100 hover:border-blue-200",
    glow: "hover:shadow-blue-100",
  },
  "#7C3AED": {
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    icon: "bg-violet-100 text-violet-600",
    solution: "bg-violet-600 text-white",
    border: "border-violet-100 hover:border-violet-200",
    glow: "hover:shadow-violet-100",
  },
  "#059669": {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: "bg-emerald-100 text-emerald-600",
    solution: "bg-emerald-600 text-white",
    border: "border-emerald-100 hover:border-emerald-200",
    glow: "hover:shadow-emerald-100",
  },
};

export function IndustriesSection() {
  return (
    <Section id="solutions" className="bg-gray-50">
      <SectionHeader
        eyebrow="Industries We Serve"
        title="We know your problems because we've solved them."
        description="Every ScalePilot system is built for one industry vertical. Not a generic chatbot — a purpose-built AI that understands your specific workflow."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {INDUSTRIES.map((industry, i) => {
          const IndustryIcon = iconMap[industry.icon];
          const SolutionIcon = iconMap[industry.solutionIcon];
          const colors = colorMap[industry.accentColor];

          return (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${colors.border} ${colors.glow}`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-30`}
                aria-hidden="true"
              />

              <div className="relative">
                {/* Icon + Industry label */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.icon}`}
                  >
                    {IndustryIcon && (
                      <IndustryIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${colors.badge}`}
                  >
                    {industry.industry}
                  </span>
                </div>

                {/* Tagline */}
                <h3 className="mt-5 text-xl font-bold leading-snug text-gray-900">
                  {industry.tagline}
                </h3>

                {/* Problems */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Common Pain Points
                  </p>
                  <ul className="space-y-2.5" role="list">
                    {industry.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-2.5">
                        <XCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-snug text-gray-600">
                          {problem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" aria-hidden="true" />

                {/* Solution */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Our Solution
                  </p>
                  <div
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 ${colors.solution}`}
                  >
                    {SolutionIcon && (
                      <SolutionIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    )}
                    <span className="font-semibold">{industry.solution}</span>
                    <ArrowRight
                      className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
