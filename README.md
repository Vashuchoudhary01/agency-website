# ScalePilot AI — Website

Premium AI Automation Agency website for Recruitment Agencies, Coaching Institutes, and Real Estate Businesses.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React Icons**

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
scalepilot-ai/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Home page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Glassmorphism sticky navbar
│   │   └── footer.tsx       # Multi-column footer
│   ├── sections/
│   │   ├── hero.tsx         # Hero with animated gradient + floating cards
│   │   ├── industries.tsx   # 3-column industry cards
│   │   ├── demos.tsx        # Live demo cards with video placeholders
│   │   ├── process.tsx      # Animated timeline (dark bg)
│   │   ├── benefits.tsx     # 6-card benefits grid + testimonials
│   │   └── contact.tsx      # Final CTA banner + booking form
│   └── ui/
│       ├── button.tsx       # Reusable Button component
│       ├── badge.tsx        # Badge component
│       └── section.tsx      # Section wrapper + SectionHeader
├── lib/
│   ├── constants.ts         # All site data (industries, demos, process, benefits)
│   ├── types.ts             # TypeScript interfaces
│   └── utils.ts             # cn() utility helper
└── public/                  # Static assets
```

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Full-viewport hero with gradient bg, floating metric cards, CTA buttons, stats |
| Industries | `#solutions` | Recruitment / Coaching / Real Estate cards with pain points + solutions |
| Demos | `#demos` | 3 demo cards with video placeholders, stats, watch/get CTAs |
| Process | `#process` | 5-step dark timeline: Discovery → Analysis → Dev → Deploy → Support |
| Benefits | `#about` | 6 benefit cards + 3-column testimonial banner |
| Contact | `#contact` | Final CTA banner + multi-field booking form |

## Color Palette

| Token | Value | Usage |
|---|---|---|
| Primary | `#2563EB` | CTAs, links, accents |
| Secondary | `#06B6D4` | Gradient endpoints |
| Dark | `#0F172A` | Dark backgrounds, headings |
| Gray | `#64748B` | Body text |
| Background | `#FFFFFF` | Page background |

## Customisation

All site content lives in `lib/constants.ts` — edit `INDUSTRIES`, `DEMOS`, `PROCESS_STEPS`, `BENEFITS`, and `STATS` to update copy without touching component files.

## Deployment

Deploy to Vercel with one command:

```bash
npx vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.
