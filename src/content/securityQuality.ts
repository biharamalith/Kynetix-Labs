import { Accessibility, Eye, FileCheck2, Gauge, LockKeyhole, ShieldCheck, TestTube2, Workflow, type LucideIcon } from "lucide-react";
import { routes } from "@/config/routes";

export interface QualityPrinciple {
  icon: LucideIcon;
  title: string;
  description: string;
  checks: string[];
}

export interface SecurityQualityControl {
  icon: LucideIcon;
  title: string;
  description: string;
  practices: string[];
}

export interface DeliveryBoundary {
  title: string;
  description: string;
}

export const securityQualityPageContent = {
  hero: {
    eyebrow: "Security and quality",
    title: "Quality discipline that protects the product story and the codebase.",
    description:
      "Kynetix Labs keeps public websites and software builds understandable, testable, accessible, and easier to maintain while staying honest about what has and has not been certified.",
    primaryAction: { label: "Start a Project", path: routes.contact },
    secondaryAction: { label: "View the Process", path: routes.process, variant: "outline" as const },
  },
  principles: {
    eyebrow: "Quality principles",
    title: "Trust comes from repeatable checks, not louder claims.",
    description:
      "The goal is not to add heavy process for its own sake. The goal is to reduce avoidable risk through clear code structure, truthful content, validation, testing, and launch discipline.",
  },
  controls: {
    eyebrow: "Build controls",
    title: "Checks that protect buyers, users, and maintainers.",
    description:
      "These controls guide how public pages, contact forms, product claims, and frontend implementation are reviewed before merge or launch.",
  },
  boundaries: {
    eyebrow: "Truth boundaries",
    title: "What this website should never overclaim.",
    description:
      "A premium technology website loses trust when it claims certifications, customer proof, integrations, or live product status before they are real and verifiable.",
  },
};

export const qualityPrinciples: QualityPrinciple[] = [
  {
    icon: FileCheck2,
    title: "Truthful product and service claims",
    description: "Public copy should explain capability and readiness clearly without pretending every idea is already a finished platform.",
    checks: ["No fake customer logos", "No fake launch status", "No copied policy language", "No placeholder links"],
  },
  {
    icon: Workflow,
    title: "Reusable frontend architecture",
    description: "Pages should compose content modules and shared components instead of spreading hardcoded arrays and one-off layout code everywhere.",
    checks: ["Typed content modules", "Thin route pages", "Shared card/grid/list components", "Central routes and SEO metadata"],
  },
  {
    icon: TestTube2,
    title: "Quality gates before merge",
    description: "Every branch should prove that the build still works, types are valid, tests pass, and dependencies stay clean.",
    checks: ["lint", "typecheck", "test", "build", "audit"],
  },
];

export const securityQualityControls: SecurityQualityControl[] = [
  {
    icon: LockKeyhole,
    title: "Form and data care",
    description: "Project inquiry data should be collected only when useful, validated before submission, and supported by a clear fallback contact path.",
    practices: ["Central validation helpers", "Honeypot anti-spam field", "Minimum submit-time check", "Visible privacy note"],
  },
  {
    icon: Accessibility,
    title: "Accessible interaction basics",
    description: "Premium motion and layout should still preserve keyboard access, labels, readable contrast, and reduced-motion behavior.",
    practices: ["Skip link", "Visible focus states", "Reduced-motion fallback", "Accessible loading states"],
  },
  {
    icon: Gauge,
    title: "Performance discipline",
    description: "Visual polish should not become a slow first load. Heavy media and advanced effects must be added only when there is a loading strategy.",
    practices: ["Route-level splitting", "Optimized images", "No heavy 3D in core bundle", "Build output review"],
  },
  {
    icon: Eye,
    title: "Reviewable public routes",
    description: "Navigation, footer links, sitemap entries, and page metadata should stay aligned so visitors and search engines do not hit broken paths.",
    practices: ["Central route registry", "Sitemap coverage", "Blog detail routing", "Footer legal links"],
  },
  {
    icon: ShieldCheck,
    title: "Security-aware wording",
    description: "Security content should describe responsible practices without claiming formal audits or certifications before they exist.",
    practices: ["No unverified compliance badge", "No unsupported security promise", "No fake service-level promise", "No audit claim without proof"],
  },
];

export const deliveryBoundaries: DeliveryBoundary[] = [
  {
    title: "No certification claim without proof",
    description: "The site can explain security-aware engineering habits, but it must not claim formal compliance, external audits, or security badges unless that evidence exists.",
  },
  {
    title: "No live-product claim before launch",
    description: "Product pages should say whether something is a product direction, scoped build, pilot path, or launched product so buyers are not misled.",
  },
  {
    title: "No hidden dependency on one-off code",
    description: "New pages should reuse route config, content modules, SEO helpers, shared sections, and tests so future branches stay predictable.",
  },
];
