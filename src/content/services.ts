import {
  BrainCircuit,
  CloudCog,
  MonitorSmartphone,
  Network,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface StoryPoint {
  label: string;
  description: string;
}

export interface ServiceStory {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  buyerFit: string[];
  outcomes: string[];
  deliverables: string[];
  useCases: string[];
}

export interface DeliverableGroup {
  title: string;
  description: string;
  items: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const serviceStoryCopy = {
  overview: {
    eyebrow: "Service systems",
    title: "Services explained around outcomes, deliverables, and real operating needs.",
    description:
      "Each service direction connects business goals with practical engineering outputs so buyers can understand what they get before a project starts.",
  },
  deliverables: {
    eyebrow: "Delivery scope",
    title: "A clearer path from idea to maintainable release.",
    description:
      "Projects should not begin with vague feature lists. Kynetix shapes each engagement around discovery, interface planning, production build quality, and launch support.",
  },
  process: {
    eyebrow: "Project flow",
    title: "A simple delivery model that keeps product decisions visible.",
    description:
      "This flow keeps services practical for startups, SMEs, retail teams, and companies that need custom systems without losing control of scope.",
  },
};

export const serviceStories: ServiceStory[] = [
  {
    id: "mobile-web-platforms",
    icon: MonitorSmartphone,
    eyebrow: "Customer and business interfaces",
    title: "Mobile and web product platforms",
    summary: "Responsive applications, portals, and dashboards shaped around real users and business workflows.",
    description:
      "For teams that need polished customer journeys, admin portals, booking flows, dashboards, or launch-ready product interfaces with maintainable React architecture.",
    buyerFit: ["Startups planning MVPs", "SMEs modernizing client portals", "Teams replacing spreadsheet-based workflows"],
    outcomes: ["Clearer customer journeys", "Reusable interface system", "Mobile-ready product experience"],
    deliverables: ["Application flow map", "Responsive UI screens", "Reusable component structure", "Launch-ready frontend build"],
    useCases: ["Customer portals", "Booking and request flows", "Admin dashboards", "SaaS-style product interfaces"],
  },
  {
    id: "cloud-business-systems",
    icon: CloudCog,
    eyebrow: "Dashboards and control layers",
    title: "Cloud-backed business systems",
    summary: "Operational dashboards and business tools that connect data, people, and daily actions.",
    description:
      "For companies that need status views, reporting screens, workflow controls, user roles, or API-ready frontend structure for cloud-backed operations.",
    buyerFit: ["Operations teams needing visibility", "Companies planning internal tools", "Businesses connecting multiple data sources"],
    outcomes: ["Faster operational decisions", "Cleaner status visibility", "API-ready screen architecture"],
    deliverables: ["Dashboard information model", "Status and action screens", "Role-aware interface flows", "Performance-conscious page structure"],
    useCases: ["Reporting dashboards", "Internal control panels", "Customer account portals", "Workflow monitoring screens"],
  },
  {
    id: "smart-pos-retail-systems",
    icon: ShoppingCart,
    eyebrow: "Retail and sales operations",
    title: "Smart POS and retail systems",
    summary: "Retail software directions for billing, inventory, sales visibility, staff workflows, and owner reporting.",
    description:
      "For shops and retail teams that need clearer checkout flows, inventory awareness, staff activity screens, and decision dashboards without overcomplicated tooling.",
    buyerFit: ["Small retailers", "Multi-location shops", "Teams needing inventory and sales visibility"],
    outcomes: ["Faster retail operations", "Better inventory awareness", "Owner-level reporting clarity"],
    deliverables: ["POS screen flow", "Inventory visibility views", "Sales dashboard structure", "Staff workflow screens"],
    useCases: ["Billing flows", "Stock movement screens", "Daily sales summaries", "Retail owner dashboards"],
  },
  {
    id: "iot-connected-workflows",
    icon: Network,
    eyebrow: "Device to dashboard systems",
    title: "IoT and connected operations workflows",
    summary: "Interfaces for device states, telemetry, alerts, maintenance views, and operator action paths.",
    description:
      "For companies that need to turn connected devices, sensors, or operational signals into clear dashboards that operators can understand and act on.",
    buyerFit: ["Device-enabled businesses", "Maintenance teams", "Operators needing alert visibility"],
    outcomes: ["Clearer device state awareness", "Reduced manual checking", "Structured alert handling"],
    deliverables: ["Device status interface", "Telemetry summary screens", "Alert and maintenance flow", "Operator action states"],
    useCases: ["Device monitoring", "Maintenance dashboards", "Alert queues", "Connected field operations"],
  },
  {
    id: "ai-data-automation",
    icon: BrainCircuit,
    eyebrow: "Decision support and automation",
    title: "AI workflow and data automation",
    summary: "Practical AI and data-assisted workflows for summaries, routing, recommendations, and operator support.",
    description:
      "For teams that want useful AI support inside real workflows, not vague AI features. The focus is structured inputs, safe outputs, review states, and measurable time savings.",
    buyerFit: ["Teams reviewing repeated requests", "Businesses with manual summaries", "Operators needing decision support"],
    outcomes: ["Less repetitive manual review", "Faster summaries and triage", "More consistent workflow decisions"],
    deliverables: ["AI use-case map", "Review and approval screens", "Summary or routing workflow", "Human-in-the-loop interface states"],
    useCases: ["Request classification", "Document or message summaries", "Support triage", "Operational recommendations"],
  },
  {
    id: "custom-automation-tools",
    icon: Workflow,
    eyebrow: "Company-specific systems",
    title: "Custom software and automation tools",
    summary: "Purpose-built internal tools for tasks, approvals, evidence, alerts, and company-specific workflows.",
    description:
      "For organizations where off-the-shelf tools do not match the way the team actually works, and a focused custom system can reduce daily friction.",
    buyerFit: ["Companies with repeated manual steps", "Teams needing approval flows", "Businesses outgrowing disconnected tools"],
    outcomes: ["Fewer manual handoffs", "Clearer task ownership", "More maintainable operating process"],
    deliverables: ["Workflow map", "Forms and validation states", "Task and approval screens", "Operator-ready status views"],
    useCases: ["Approval queues", "Evidence tracking", "Client request handling", "Internal operations tools"],
  },
];

export const serviceDeliverableGroups: DeliverableGroup[] = [
  {
    title: "Discovery and architecture",
    description: "Clarify users, workflow pressure, data needs, route structure, and delivery risks before heavy build work.",
    items: ["Business goal map", "User and role outline", "Screen inventory", "Risk and dependency notes"],
  },
  {
    title: "Experience and interface plan",
    description: "Turn the business goal into clear screens, reusable sections, and a buyer-friendly product story.",
    items: ["Page or app flow", "Core interface states", "Component reuse plan", "Responsive layout direction"],
  },
  {
    title: "Production frontend build",
    description: "Build maintainable React screens with centralized content, clean styling, accessibility, and performance discipline.",
    items: ["Typed content modules", "Reusable UI components", "Route/page implementation", "Build and test gates"],
  },
  {
    title: "Launch and improvement path",
    description: "Prepare the project for release with QA checks, metadata, fallback states, and a clear plan for future iterations.",
    items: ["SEO and metadata review", "Responsive QA", "Form and CTA checks", "Handover improvement notes"],
  },
];

export const serviceProcessSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Shape the business case",
    description: "Define the users, buyer problem, operational gap, and measurable reason the software should exist.",
  },
  {
    step: "02",
    title: "Map the system story",
    description: "Choose the screens, workflows, states, and proof points needed to make the product clear to users and buyers.",
  },
  {
    step: "03",
    title: "Build reusable sections",
    description: "Implement typed content, reusable components, accessible UI, and clean page composition instead of one-off screen code.",
  },
  {
    step: "04",
    title: "Validate the release path",
    description: "Run build, lint, typecheck, tests, audit, responsive review, and link checks before the release is treated as complete.",
  },
];

export const serviceProofSignals: StoryPoint[] = [
  {
    label: "Outcome-led scope",
    description: "Every service card explains the business result, not only the technology used to build it.",
  },
  {
    label: "Visible deliverables",
    description: "Clients can see what artifacts and screens should come from the engagement before development starts.",
  },
  {
    label: "Reusable implementation",
    description: "The code uses shared content modules and components so new services can be added without page rewrites.",
  },
];
