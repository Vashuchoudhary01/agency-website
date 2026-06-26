"use client";

import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Search,
  BarChart3,
  Code2,
  Rocket,
  HeadphonesIcon: Headphones,
};

export function ProcessSection() {
  return (
    <Section id="process" className="bg-gray-900 text-white overflow-hidden">
      <SectionHeader
        eyebrow="How We Work"
        title="From discovery to deployment in 4 weeks."
        description="A proven process that eliminates risk and delivers working systems — not slide decks and promises."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line */}
        <div
          className="absolute left-8 top-12 hidden h-[calc(100%-6rem)] w-px bg-gradient-to-b from-primary-600/50 via-secondary-500/50 to-transparent lg:block"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {PROCESS_STEPS.map((step, i) => {
            const StepIcon = iconMap[step.icon] || Search;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex gap-6 lg:gap-10"
              >
                {/* Step indicator */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                    className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 shadow-lg shadow-primary-600/30 transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <StepIcon className="h-7 w-7 text-white" />
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 border-2 border-gray-800 text-xs font-bold text-primary-400">
                      {step.step}
                    </div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="flex-1 overflow-hidden rounded-2xl border border-gray-800 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/80 mb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {step.description}
                      </p>
                    </div>
                    <div className="shrink-0 rounded-lg bg-gray-900/60 px-3 py-1.5 text-xs font-semibold text-gray-400 border border-gray-700">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 rounded-2xl border border-primary-600/30 bg-gradient-to-br from-primary-600/10 to-secondary-500/10 p-8 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
          Typical Timeline
        </p>
        <h3 className="mt-3 text-2xl font-bold text-white lg:text-3xl">
          Your AI system is live in under 30 days.
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          We&apos;ve streamlined every step. Most clients see their first automated
          leads or screened resumes within the first week of deployment.
        </p>
      </motion.div>
    </Section>
  );
}
