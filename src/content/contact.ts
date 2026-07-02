import { Mail, ShieldCheck, Timer, Workflow, type LucideIcon } from "lucide-react";
import { company } from "@/lib/siteContent";

export interface ProjectBriefOption {
  id: string;
  label: string;
  description: string;
}

export interface ContactTrustSignal {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const projectBriefCopy = {
  eyebrow: "Project brief",
  title: "Shape the first conversation before development starts.",
  description:
    "Share the business goal, users, timeline, and expected outcome. The form keeps the inquiry structured so we can reply with a clearer next step.",
  privacyNote:
    "We only use this information to understand and reply to your project inquiry. Do not include passwords, private keys, payment details, or sensitive customer data.",
  fallbackLabel: "Email the project brief instead",
  successTitle: "Project brief received",
  successDescription:
    "Thanks for sharing the details. We will review the brief and reply with the most practical next step.",
} as const;

export const projectBriefProjectTypes = [
  {
    id: "mobile-app",
    label: "Mobile app",
    description: "iOS, Android, Flutter, customer apps, internal field tools, or launch-ready MVPs.",
  },
  {
    id: "web-cloud-platform",
    label: "Web or cloud platform",
    description: "Web applications, dashboards, admin portals, SaaS-style platforms, APIs, or integrations.",
  },
  {
    id: "business-automation",
    label: "Business automation",
    description: "Workflow tools, approvals, reporting, operations dashboards, or manual-process replacement.",
  },
  {
    id: "iot-pos-system",
    label: "IoT or POS system",
    description: "Connected devices, smart retail systems, inventory, billing, staff workflows, or analytics.",
  },
  {
    id: "ai-data-workflow",
    label: "AI or data workflow",
    description: "AI-assisted operations, data processing, recommendations, internal copilots, or decision support.",
  },
  {
    id: "website-brand-system",
    label: "Website or brand system",
    description: "Premium marketing websites, product pages, conversion flows, and maintainable content systems.",
  },
] as const satisfies readonly ProjectBriefOption[];

export const projectBriefBudgetRanges = [
  { id: "not-sure", label: "Not sure yet", description: "Useful when the project still needs discovery and scope shaping." },
  { id: "under-1000", label: "Under $1,000", description: "Small improvement, landing page, review, or narrow feature work." },
  { id: "1000-3000", label: "$1,000 - $3,000", description: "Focused MVP, website upgrade, dashboard, or contained business tool." },
  { id: "3000-7500", label: "$3,000 - $7,500", description: "Production product build, multi-page system, integrations, or custom workflow." },
  { id: "7500-plus", label: "$7,500+", description: "Larger platform, multi-role product, productized operations, or phased delivery." },
] as const satisfies readonly ProjectBriefOption[];

export const projectBriefTimelineOptions = [
  { id: "flexible", label: "Flexible", description: "Best when discovery and technical planning should come first." },
  { id: "this-month", label: "This month", description: "Useful for urgent business needs or launch pressure." },
  { id: "one-three-months", label: "1 - 3 months", description: "A practical window for scoped MVPs and production-ready websites." },
  { id: "three-six-months", label: "3 - 6 months", description: "Good for larger platforms, integrations, and phased delivery." },
  { id: "planning-ahead", label: "Planning ahead", description: "Early-stage idea validation, architecture planning, or future product planning." },
] as const satisfies readonly ProjectBriefOption[];

export const projectBriefTrustSignals: ContactTrustSignal[] = [
  {
    icon: Workflow,
    title: "Structured intake",
    description: "Project type, goal, budget, and timeline are captured before technical planning starts.",
  },
  {
    icon: ShieldCheck,
    title: "Safe first step",
    description: "The form asks for business context only. Sensitive credentials and private data should stay out of email.",
  },
  {
    icon: Timer,
    title: "Clear next reply",
    description: "The first response can focus on fit, scope questions, and the most practical path forward.",
  },
  {
    icon: Mail,
    title: "Fallback email",
    description: `If the form has an issue, send the same brief directly to ${company.email}.`,
  },
];

export const projectBriefResponseSteps = [
  "We review the business goal and project fit.",
  "We identify the missing scope or technical questions.",
  "We reply with a practical next step instead of pushing a vague sales call.",
] as const;

export const projectBriefFieldLimits = {
  nameMax: 80,
  companyMax: 120,
  goalMax: 700,
  messageMax: 1400,
  minSubmitAgeMs: 1500,
} as const;
