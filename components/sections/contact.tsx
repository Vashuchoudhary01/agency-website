"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  business: string;
  industry: string;
  message: string;
}

const industries = [
  "Recruitment Agency",
  "Coaching Institute",
  "Real Estate Business",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    business: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:border-primary-600/50 focus:outline-none focus:ring-2 focus:ring-primary-600/20 hover:border-gray-300";

  return (
    <Section id="contact" className="bg-gray-50">
      {/* Final CTA banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 overflow-hidden rounded-3xl bg-gray-900 p-12 text-center lg:p-20"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.3),rgba(255,255,255,0))]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary-600/30 bg-primary-600/10 px-4 py-1.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary-400" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary-400">
              Currently accepting new clients
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Ready to Automate
            <br />
            <span className="text-gradient">Your Business?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Book a free 60-minute discovery call. We&apos;ll map your workflow, identify
            automation opportunities, and give you a concrete ROI projection — no
            commitment required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="gradient"
              size="xl"
              onClick={() => {
                const formEl = document.getElementById("booking-form");
                formEl?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Free Demo
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {["No credit card", "60-min call", "Free audit"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Grid */}
      <div id="booking-form" className="grid gap-12 lg:grid-cols-5">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-100 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-600" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Let&apos;s talk about your workflow.
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500">
            Tell us about your business and we&apos;ll show you exactly which automations
            will have the biggest impact — within the first call.
          </p>

          {/* Contact details */}
          <div className="mt-8 space-y-4">
            {[
              {
                icon: Mail,
                label: "Email us",
                value: "Vashuchoudhary1223@gmail.com",
                href: "mailto:Vashuchoudhary1223@gmail.com",
              },
              {
                icon: Phone,
                label: "Call us",
                value: "+91 9068744303",
                href: "tel:+919068744303",
              },
              // {
              //   icon: MessageCircle,
              //   label: "WhatsApp",
              //   value: "Chat on WhatsApp",
              //   href: "https://wa.me/",
              // },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/company/scalepilotai",
                href: "https://linkedin.com",
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-primary-600/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                  <contact.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400">{contact.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  We&apos;ll be in touch within 4 hours.
                </h3>
                <p className="mt-3 text-gray-500">
                  Thanks for reaching out. Our team will review your submission and
                  send calendar invite for the discovery call.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Book a demo form" noValidate>
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Full Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Arjun Mehta"
                        className={inputClass}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Work Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="arjun@company.com"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Business Name
                    </label>
                    <input
                      id="business"
                      type="text"
                      placeholder="Your company name"
                      className={inputClass}
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Industry <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="industry"
                      required
                      className={`${inputClass} cursor-pointer`}
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      aria-required="true"
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      What&apos;s your biggest workflow challenge?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe the repetitive task that costs your team the most time..."
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Booking your demo...
                      </>
                    ) : (
                      <>
                        Book Free Discovery Call
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    No spam. No hard sell. Just a focused 60-minute conversation about
                    your business.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
