import Link from "next/link";
import { Zap, Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Resume Screener", href: "#solutions" },
    { label: "Admission Assistant", href: "#solutions" },
    { label: "Lead Qualification", href: "#solutions" },
    { label: "Workflow Automation", href: "#solutions" },
  ],
  Solutions: [
    { label: "Recruitment Agencies", href: "#solutions" },
    { label: "Coaching Institutes", href: "#solutions" },
    { label: "Real Estate", href: "#solutions" },
  ],
  Demos: [
    { label: "Resume Screener", href: "#demos" },
    { label: "Admission Chatbot", href: "#demos" },
    { label: "Lead Qualifier", href: "#demos" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Demo", href: "#contact" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    label: "Email",
    href: "vashuchoudhary1223@gmail.com",
    icon: Mail,
    color: "hover:text-primary-600",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    icon: MessageCircle,
    color: "hover:text-green-500",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-2 gap-8 py-16 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-lg"
              aria-label="ScalePilot AI"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500">
                <Zap className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold">
                ScalePilot <span className="text-gradient">AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              AI automation for Recruitment Agencies, Coaching Institutes, and
              Real Estate Businesses. We build systems that save time and convert
              more leads.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-colors ${s.color} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded`}
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                {category}
              </h3>
              <ul className="mt-4 space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ScalePilot AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
