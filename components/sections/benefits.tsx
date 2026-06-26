"use client";

import { motion } from "framer-motion";
import {
  Clock,
  TrendingDown,
  Target,
  Zap,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { BENEFITS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  TrendingDown,
  Target,
  Zap,
  TrendingUp,
  Layers,
};

const iconColors = [
  "bg-blue-100 text-primary-600",
  "bg-emerald-100 text-emerald-600",
  "bg-violet-100 text-violet-600",
  "bg-amber-100 text-amber-600",
  "bg-cyan-100 text-cyan-600",
  "bg-rose-100 text-rose-600",
];

export function BenefitsSection() {
  return (
    <Section id="about" className="bg-white">
      <SectionHeader
        eyebrow="Why ScalePilot"
        title="Built for businesses that want results, not experiments."
        description="Every feature exists because a client needed it. We don't build for demos — we build for the real world."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, i) => {
          const BenefitIcon = iconMap[benefit.icon];
          const colorClass = iconColors[i % iconColors.length];

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200"
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colorClass} transition-transform duration-300 group-hover:scale-105`}
              >
                {BenefitIcon && (
                  <BenefitIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {benefit.description}
              </p>

              {/* Metric */}
              {benefit.metric && (
                <div className="mt-4 inline-flex rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                  {benefit.metric}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Social proof banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-500 p-px shadow-xl shadow-primary-600/20"
      >
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-500 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {[
              {
                quote:
                  "Our AI screener now processes 400 resumes overnight. Our recruiters come in every morning to a ranked shortlist.",
                author: "Arjun Mehta",
                role: "Director, TalentFirst Recruitment",
              },
              {
                quote:
                  "Admission inquiries no longer overwhelm my counsellors. The AI handles 90% of questions and books sessions automatically.",
                author: "Priya Sharma",
                role: "Founder, Pinnacle Coaching Academy",
              },
              {
                quote:
                  "We went from calling 50 unqualified leads a day to receiving 15 pre-qualified buyers. The ROI was immediate.",
                author: "Rohit Gupta",
                role: "Head of Sales, CityView Properties",
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col gap-4">
                <blockquote className="text-base leading-relaxed text-white/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
