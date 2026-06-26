import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ScalePilot AI — AI Automation for Recruitment, Coaching & Real Estate",
    template: "%s | ScalePilot AI",
  },
  description:
    "ScalePilot AI helps Recruitment Agencies, Coaching Institutes, and Real Estate Businesses automate lead qualification, customer support, and repetitive workflows with AI.",
  keywords: [
    "AI automation",
    "recruitment automation",
    "coaching institute AI",
    "real estate lead qualification",
    "AI chatbot",
    "business automation",
    "lead generation AI",
    "ScalePilot",
  ],
  authors: [{ name: "Vashu Choudhary" }],
  creator: "Vashu Choudhary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scalepilot.ai",
    title: "ScalePilot AI — AI Automation That Converts More Leads",
    description:
      "We help Recruitment Agencies, Coaching Institutes, and Real Estate Businesses automate lead qualification, customer support, and repetitive workflows.",
    siteName: "ScalePilot AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalePilot AI — AI Automation That Converts More Leads",
    description:
      "Automate lead qualification, customer support, and repetitive workflows with AI.",
    creator: "@scalepilotai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
