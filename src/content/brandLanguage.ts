import { routes } from "@/config/routes";

export interface BrandTonePrinciple {
  title: string;
  description: string;
}

export interface BrandSignal {
  label: string;
  value: string;
}

export interface CtaCopy {
  startProject: string;
  planBuild: string;
  exploreSystems: string;
  viewProcess: string;
  reviewProof: string;
  briefSmartPos: string;
}

export const brandVoice = {
  promise: "Kinetic software systems for companies that need speed, control, and trust.",
  positioning: "Premium software engineering for web, mobile, cloud, retail operations, IoT workflows, and AI-assisted business systems.",
  tone: "precise, engineered, confident, concise, and proof-aware",
} as const;

export const brandTonePrinciples: BrandTonePrinciple[] = [
  {
    title: "Short, engineered statements",
    description: "Headlines should feel selected, not filled. Every sentence should explain what becomes faster, clearer, safer, or easier to control.",
  },
  {
    title: "Premium without pretending",
    description: "The site can feel cinematic and high-end while staying honest about proof, product readiness, certifications, and delivery boundaries.",
  },
  {
    title: "Business outcome before feature list",
    description: "Copy should connect each interface, workflow, and product direction to a buyer problem before naming the technology behind it.",
  },
  {
    title: "One CTA language system",
    description: "Calls to action should guide buyers through planning, systems, proof, and contact instead of using random labels on every page.",
  },
];

export const ctaCopy: CtaCopy = {
  startProject: "Start a Project",
  planBuild: "Plan Your Build",
  exploreSystems: "Explore Systems",
  viewProcess: "View the Process",
  reviewProof: "Review Proof",
  briefSmartPos: "Brief Smart POS",
};

export const pageHeroSignals: BrandSignal[] = [
  { label: "Signal", value: "Scope first" },
  { label: "System", value: "Built to last" },
  { label: "Launch", value: "Checked before release" },
];

export const homeHeroSignals: BrandSignal[] = [
  { label: "Interfaces", value: "Sharp" },
  { label: "Systems", value: "Controlled" },
  { label: "Delivery", value: "Proof-aware" },
];

export const brandActionMap = {
  project: { label: ctaCopy.startProject, path: routes.contact },
  buildPlan: { label: ctaCopy.planBuild, path: routes.contact },
  systems: { label: ctaCopy.exploreSystems, path: routes.services, variant: "outline" as const },
  process: { label: ctaCopy.viewProcess, path: routes.process, variant: "outline" as const },
  proof: { label: ctaCopy.reviewProof, path: routes.work, variant: "outline" as const },
  smartPos: { label: ctaCopy.briefSmartPos, path: routes.contact },
} as const;

export const weakCopyPatterns = [
  "businesses of all sizes",
  "professional engineering services delivered with excellence",
  "software solutions for businesses",
  "we do mobile, web, iot, pos, custom software, and ai",
] as const;
