export interface NavItem {
  label: string;
  href: string;
}

export interface IndustryCard {
  id: string;
  icon: string;
  industry: string;
  tagline: string;
  problems: string[];
  solution: string;
  solutionIcon: string;
  accentColor: string;
  gradient: string;
}

export interface DemoCard {
  id: string;
  title: string;
  description: string;
  industry: string;
  icon: string;
  color: string;
  stats: { label: string; value: string }[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}
