import type { NavItem, IndustryCard, DemoCard, ProcessStep, BenefitCard } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#solutions" },
  { label: "Demos", href: "#demos" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const INDUSTRIES: IndustryCard[] = [
  {
    id: "recruitment",
    icon: "Users",
    industry: "Recruitment Agencies",
    tagline: "Screen 100 resumes in the time it takes to read 5",
    problems: [
      "Manual resume screening eats 60% of recruiter time",
      "Candidates wait days for responses and move on",
      "Recruiters burn out on repetitive qualification calls",
    ],
    solution: "AI Resume Screener",
    solutionIcon: "FileSearch",
    accentColor: "#2563EB",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "coaching",
    icon: "GraduationCap",
    industry: "Coaching Institutes",
    tagline: "Turn every inquiry into an enrolled student",
    problems: [
      "Admission inquiry overload overwhelms your team",
      "Missed follow-ups mean lost admissions revenue",
      "Generic responses drive prospective students away",
    ],
    solution: "AI Admission Assistant",
    solutionIcon: "MessageSquare",
    accentColor: "#7C3AED",
    gradient: "from-violet-50 to-purple-50",
  },
  {
    id: "realestate",
    icon: "Building2",
    industry: "Real Estate Businesses",
    tagline: "Only talk to buyers who are ready to buy",
    problems: [
      "Poor lead quality wastes agents' selling time",
      "Slow response time loses hot leads to competitors",
      "Manual qualification can't scale with your listings",
    ],
    solution: "AI Lead Qualification System",
    solutionIcon: "Target",
    accentColor: "#059669",
    gradient: "from-emerald-50 to-teal-50",
  },
];

export const DEMOS: DemoCard[] = [
  {
    id: "resume-screener",
    title: "Resume Screener Demo",
    description:
      "Watch our AI parse, evaluate, and rank 50 resumes against a job description in under 30 seconds — with detailed reasoning for each score.",
    industry: "Recruitment",
    icon: "FileSearch",
    color: "#2563EB",
    stats: [
      { label: "Resumes/hour", value: "500+" },
      { label: "Time saved", value: "87%" },
      { label: "Accuracy", value: "94%" },
    ],
  },
  {
    id: "admission-chatbot",
    title: "Admission Chatbot Demo",
    description:
      "See how our AI handles 200+ concurrent student inquiries, qualifies intent, books counselling sessions, and sends personalised course recommendations.",
    industry: "Coaching",
    icon: "MessageSquare",
    color: "#7C3AED",
    stats: [
      { label: "Response time", value: "<2s" },
      { label: "Conversion lift", value: "3.2×" },
      { label: "Availability", value: "24/7" },
    ],
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification Demo",
    description:
      "Experience how our AI chats with property enquiries, scores intent and budget, and hands off only sales-ready leads to your agents.",
    industry: "Real Estate",
    icon: "Target",
    color: "#059669",
    stats: [
      { label: "Lead quality", value: "+68%" },
      { label: "Agent time saved", value: "12h/wk" },
      { label: "Response SLA", value: "90 sec" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We spend 60 minutes mapping your current workflows, bottlenecks, and growth targets. No generic proposals — we diagnose before prescribing.",
    icon: "Search",
    duration: "Day 1",
  },
  {
    step: 2,
    title: "Workflow Analysis",
    description:
      "Our engineers audit your existing tools, data flows, and team processes. You receive a detailed automation opportunity report with ROI projections.",
    icon: "BarChart3",
    duration: "Days 2–4",
  },
  {
    step: 3,
    title: "Custom Development",
    description:
      "We build to your specifications — trained on your data, branded to your identity, integrated with your existing CRM and communication stack.",
    icon: "Code2",
    duration: "Weeks 1–3",
  },
  {
    step: 4,
    title: "Deployment & QA",
    description:
      "We deploy with a live shadow-testing phase. Your team runs in parallel with the AI, validating accuracy before we cut over fully.",
    icon: "Rocket",
    duration: "Week 4",
  },
  {
    step: 5,
    title: "Ongoing Support",
    description:
      "Dedicated Slack channel, monthly performance reviews, and proactive model updates. We treat your automation like a living product.",
    icon: "HeadphonesIcon",
    duration: "Ongoing",
  },
];

export const BENEFITS: BenefitCard[] = [
  {
    title: "Save Time",
    description:
      "Eliminate hours of manual data entry, screening, and follow-up. Your team focuses on what only humans can do.",
    icon: "Clock",
    metric: "15+ hrs/week",
  },
  {
    title: "Reduce Costs",
    description:
      "One AI system handles the workload of multiple junior team members — without salaries, sick days, or training overhead.",
    icon: "TrendingDown",
    metric: "40% cost reduction",
  },
  {
    title: "Better Lead Quality",
    description:
      "AI qualifies against your exact criteria before a human ever engages. Every conversation starts further down the funnel.",
    icon: "Target",
    metric: "68% higher quality",
  },
  {
    title: "24/7 Availability",
    description:
      "Never miss a lead because it arrived at 11 PM on a Sunday. Your AI works every hour, every day, without overtime.",
    icon: "Zap",
    metric: "Always on",
  },
  {
    title: "Higher Conversions",
    description:
      "Instant responses and personalised engagement dramatically lift conversion rates from first touch to signed deal.",
    icon: "TrendingUp",
    metric: "3.2× lift average",
  },
  {
    title: "Scalable Systems",
    description:
      "Handle a 10× spike in leads without hiring. Your AI infrastructure scales elastically with your growth.",
    icon: "Layers",
    metric: "Infinite scale",
  },
];

export const STATS = [
  { value: "200+", label: "Automations Deployed" },
  { value: "94%", label: "Average Accuracy" },
  { value: "3.2×", label: "Avg Conversion Lift" },
  { value: "$2.4M", label: "Client Revenue Generated" },
];
