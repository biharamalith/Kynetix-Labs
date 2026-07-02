import { Gauge, Layers3, ScanLine, Workflow, type LucideIcon } from "lucide-react";
import { routes } from "@/config/routes";

export interface ProductStory {
  id: string;
  icon: LucideIcon;
  status: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  idealFor: string[];
  outcomes: string[];
  capabilities: string[];
  launchNote: string;
  detailPath?: string;
}

export interface ProductPrinciple {
  title: string;
  description: string;
}

export const productStoryCopy = {
  overview: {
    eyebrow: "Product storytelling",
    title: "Product directions described as buyer problems, outcomes, and launch paths.",
    description:
      "These are clear product directions Kynetix can shape with clients. They avoid fake launch claims and explain what each system is meant to solve.",
  },
  principles: {
    eyebrow: "Product discipline",
    title: "No overclaiming, no vague product cards.",
    description:
      "Each product direction stays truthful about readiness while still showing the business value, capability shape, and next step for a serious buyer conversation.",
  },
};

export const productStories: ProductStory[] = [
  {
    id: "smart-pos-suite",
    icon: ScanLine,
    status: "Product direction",
    category: "Retail operations",
    title: "Smart POS Suite",
    summary: "A retail system direction for checkout, inventory, sales summaries, staff workflows, and owner visibility.",
    description:
      "Built for retail teams that need a practical software path from billing screens to inventory control and decision dashboards without pretending the product is already fully packaged for every store.",
    idealFor: ["Small and growing retailers", "Store owners needing sales clarity", "Teams replacing manual inventory sheets"],
    outcomes: ["Faster checkout flow", "Better inventory awareness", "Clearer sales reporting"],
    capabilities: ["Billing and sales screens", "Inventory movement views", "Staff activity states", "Owner dashboard direction"],
    launchNote: "Best handled as a scoped product build or pilot plan around the client's real store workflow.",
    detailPath: routes.smartPos,
  },
  {
    id: "workflow-command-center",
    icon: Workflow,
    status: "System package direction",
    category: "Business automation",
    title: "Workflow Command Center",
    summary: "A control dashboard direction for tasks, approvals, alerts, summaries, and exception handling.",
    description:
      "Designed for teams that need one place to see operational work, prioritize issues, move approvals forward, and reduce repeated status-checking across disconnected tools.",
    idealFor: ["Operations teams", "Service businesses", "Managers handling approvals and exceptions"],
    outcomes: ["Clear task ownership", "Less manual follow-up", "Faster exception response"],
    capabilities: ["Task queues", "Approval paths", "Alert summaries", "Operator action panels"],
    launchNote: "Starts with a workflow map so the dashboard matches how the team actually works.",
  },
  {
    id: "connected-ops-portal",
    icon: Gauge,
    status: "Portal direction",
    category: "IoT and cloud",
    title: "Connected Ops Portal",
    summary: "A dashboard direction for device states, telemetry summaries, maintenance actions, and operational alerts.",
    description:
      "Created for companies that need to convert connected activity into readable screens, safe operator actions, and useful summaries instead of raw technical noise.",
    idealFor: ["Device-enabled teams", "Maintenance operators", "Businesses monitoring field activity"],
    outcomes: ["Better device visibility", "Structured maintenance response", "Cleaner operational monitoring"],
    capabilities: ["Device status cards", "Telemetry summary panels", "Maintenance flows", "Alert and exception views"],
    launchNote: "Requires a data and device review before UI scope is finalized.",
  },
  {
    id: "client-service-portal",
    icon: Layers3,
    status: "Client platform direction",
    category: "Service delivery",
    title: "Client Service Portal",
    summary: "A client-facing platform direction for requests, updates, documents, approvals, and communication history.",
    description:
      "Useful for service companies that want customers to submit structured requests, track progress, review updates, and reduce scattered communication across email or messaging apps.",
    idealFor: ["Service providers", "Consulting teams", "Companies with repeated client requests"],
    outcomes: ["Clearer client communication", "Less scattered follow-up", "Better request visibility"],
    capabilities: ["Request intake forms", "Status timeline views", "Document and note areas", "Approval and response states"],
    launchNote: "Can begin as a lightweight portal and grow into deeper workflow automation.",
  },
];

export const productPrinciples: ProductPrinciple[] = [
  {
    title: "Truthful readiness",
    description: "Cards describe product directions and pilot paths clearly without claiming packaged features that are not ready yet.",
  },
  {
    title: "Buyer-specific value",
    description: "Each product direction names who it helps, what it improves, and what a first build should prove.",
  },
  {
    title: "Reusable product architecture",
    description: "Product cards share one content contract so new directions can be added without duplicating page layouts.",
  },
];
