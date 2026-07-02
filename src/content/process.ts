import { ClipboardCheck, GitBranch, LayoutDashboard, Rocket, SearchCheck, ShieldCheck, type LucideIcon } from "lucide-react";
import { routes } from "@/config/routes";

export interface ProcessPhase {
  step: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  activities: string[];
  evidence: string[];
}

export interface ProcessAssuranceItem {
  label: string;
  description: string;
}

export const processPageContent = {
  hero: {
    eyebrow: "Delivery process",
    title: "A software delivery process clients can understand before build starts.",
    description:
      "Kynetix Labs turns early ideas into practical software plans, clear interface flows, maintainable implementation, and launch checks without hiding risk behind vague development language.",
    primaryAction: { label: "Start a Project", path: routes.contact },
    secondaryAction: { label: "Explore Systems", path: routes.services, variant: "outline" as const },
  },
  timeline: {
    eyebrow: "Project flow",
    title: "From first signal to launch-ready handover.",
    description:
      "Each phase has a purpose, visible outputs, and a decision point so the project moves with control instead of guesswork.",
  },
  assurance: {
    eyebrow: "Delivery assurance",
    title: "Every phase leaves something reviewable.",
    description:
      "A strong delivery process should give clients visibility into scope, design decisions, technical direction, and launch readiness before more time or budget is spent.",
  },
  cta: {
    eyebrow: "Plan before build",
    title: "Share the project context and we can shape the next step.",
    description:
      "A short project brief helps us understand the users, business goal, timeline, constraints, and first version that should be delivered.",
    action: { label: "Plan Your Build", path: routes.contact },
  },
};

export const processPhases: ProcessPhase[] = [
  {
    step: "01",
    icon: SearchCheck,
    title: "Discovery and business fit",
    summary: "Clarify who the system serves, what problem it solves, and which outcomes matter before UI or code decisions are made.",
    activities: ["Define user groups and workflows", "Identify the business goal and constraints", "Separate must-have scope from later improvements"],
    evidence: ["Project brief", "Workflow notes", "First-version scope"],
  },
  {
    step: "02",
    icon: LayoutDashboard,
    title: "Experience and system shape",
    summary: "Convert the business goal into screens, sections, data states, and user actions that can be reviewed before implementation.",
    activities: ["Map key screens and user journeys", "Define reusable interface patterns", "Check mobile and desktop behavior early"],
    evidence: ["Page or screen map", "Component direction", "CTA and flow decisions"],
  },
  {
    step: "03",
    icon: GitBranch,
    title: "Architecture and build plan",
    summary: "Choose a maintainable implementation path with clear content ownership, reusable components, validation rules, and quality gates.",
    activities: ["Define data/content modules", "Plan reusable sections and components", "Keep validation and business rules centralized"],
    evidence: ["Technical file map", "Content contract", "Quality checklist"],
  },
  {
    step: "04",
    icon: ClipboardCheck,
    title: "Implementation and review",
    summary: "Build in controlled increments so each feature can be tested, reviewed, and improved without creating one-off page logic.",
    activities: ["Ship feature branches", "Run lint, typecheck, tests, and build", "Review accessibility, responsiveness, and content truth"],
    evidence: ["Working branch", "Passing checks", "Review notes"],
  },
  {
    step: "05",
    icon: ShieldCheck,
    title: "Launch readiness checks",
    summary: "Validate routes, SEO metadata, forms, legal pages, performance, and fallback behavior before a public release.",
    activities: ["Check public routes and links", "Verify forms and fallback contact paths", "Review sitemap, metadata, and no-placeholder content"],
    evidence: ["Launch checklist", "Build output", "Route smoke proof"],
  },
  {
    step: "06",
    icon: Rocket,
    title: "Handover and improvement path",
    summary: "Document what was built, where content lives, how to change it safely, and which improvements should come next.",
    activities: ["Keep content changes centralized", "Preserve reusable components", "Plan the next measurable improvement"],
    evidence: ["Maintainable source structure", "Next-step backlog", "Deployment-ready package"],
  },
];

export const processAssuranceItems: ProcessAssuranceItem[] = [
  {
    label: "Scope control",
    description: "Work starts from a defined first version so the project can move without uncontrolled feature expansion.",
  },
  {
    label: "Reviewable outputs",
    description: "Each phase should produce something the client can understand: a brief, flow, component direction, branch, or launch checklist.",
  },
  {
    label: "Maintainable handover",
    description: "Content, routes, forms, SEO, and reusable UI stay organized so future branches can improve the site without rewrites.",
  },
];
