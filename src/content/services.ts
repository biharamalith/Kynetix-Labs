import {
  BrainCircuit,
  CloudCog,
  MonitorSmartphone,
  Network,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { createProductPath, createServicePath, routes } from "@/config/routes";

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
  detailPath?: string;
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

export interface ServiceDetailSection {
  title: string;
  description: string;
  items: string[];
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailContent {
  slug: string;
  serviceStoryId: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  primaryAction: {
    label: string;
    path: string;
  };
  secondaryAction: {
    label: string;
    path: string;
  };
  buyerProblems: StoryPoint[];
  outcomes: StoryPoint[];
  deliverables: ServiceDetailSection[];
  architecture: ServiceDetailSection[];
  fitSignals: string[];
  faq: ServiceFaqItem[];
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
    detailPath: createServicePath("mobile-app-development"),
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
    detailPath: createServicePath("web-cloud-platforms"),
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
    detailPath: createProductPath("smart-pos"),
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
    detailPath: createServicePath("iot-systems"),
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
    detailPath: createServicePath("ai-ml-systems"),
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

export const serviceDetailCopy = {
  related: {
    eyebrow: "Service fit",
    title: "Built for teams that need a clear software path before committing to a build.",
    description:
      "Each dedicated service page explains the business pressure, delivery approach, and reviewable outputs so buyers can compare the right direction before starting a project brief.",
  },
  notFound: {
    title: "Service page not found",
    description: "This service route does not match an active Kynetix Labs service detail page.",
  },
};

export const serviceDetails: ServiceDetailContent[] = [
  {
    slug: "mobile-app-development",
    serviceStoryId: "mobile-web-platforms",
    icon: MonitorSmartphone,
    eyebrow: "Mobile app development",
    title: "Mobile app experiences planned around users, screens, and release quality.",
    summary:
      "For founders and businesses that need a practical mobile app plan, a polished interface, and a build path that can support real users after launch.",
    description:
      "Kynetix Labs shapes mobile applications from product goal to screen flow, reusable interface system, release-safe frontend structure, and project brief clarity. The focus is not only the app screen, but the business workflow around it.",
    seoTitle: "Mobile App Development Services - Product Planning & App Interfaces | Kynetix Labs",
    seoDescription:
      "Plan and build mobile app experiences with Kynetix Labs, from user flows and responsive interfaces to reusable frontend architecture and release-ready project scope.",
    keywords:
      "mobile app development, app interface design, Flutter app planning, React frontend, mobile product planning, Kynetix Labs services",
    primaryAction: { label: "Plan a mobile app", path: routes.contact },
    secondaryAction: { label: "View work examples", path: routes.work },
    buyerProblems: [
      {
        label: "Unclear first version",
        description: "The idea has many feature directions, but the first useful release needs tighter user flows and priorities.",
      },
      {
        label: "Disconnected screens",
        description: "The app needs consistent navigation, role states, empty states, and handoff rules instead of isolated mockups.",
      },
      {
        label: "Launch confidence",
        description: "Stakeholders need a testable app flow, maintainable frontend structure, and a realistic improvement path after release.",
      },
    ],
    outcomes: [
      {
        label: "Sharper product scope",
        description: "Convert the app idea into user journeys, core flows, screen states, and release priorities.",
      },
      {
        label: "Consistent app experience",
        description: "Use reusable interface patterns so forms, lists, dashboards, and profile screens feel connected.",
      },
      {
        label: "Release-ready direction",
        description: "Prepare the app for QA, metadata, responsive behavior, accessibility basics, and future feature expansion.",
      },
    ],
    deliverables: [
      {
        title: "Product discovery",
        description: "Clarify target users, app goals, roles, and the minimum version that makes business sense.",
        items: ["App goal map", "User journey outline", "MVP feature boundary", "Risk and dependency list"],
      },
      {
        title: "Interface planning",
        description: "Turn the product goal into practical screens with reusable states and navigation decisions.",
        items: ["Screen inventory", "Navigation model", "Form and validation states", "Responsive layout direction"],
      },
      {
        title: "Frontend build path",
        description: "Create a maintainable implementation structure that can grow with new screens and product needs.",
        items: ["Reusable UI sections", "Typed content/config model", "Route structure", "Build/test handover checklist"],
      },
    ],
    architecture: [
      {
        title: "Screen system before feature sprawl",
        description: "The app is planned around repeatable screens and state patterns before adding optional features.",
        items: ["Shared page shells", "Reusable form sections", "Error and empty states", "CTA and navigation consistency"],
      },
      {
        title: "Release discipline",
        description: "The app direction is validated through build, lint, typecheck, tests, and browser review gates.",
        items: ["Responsive checks", "Accessibility basics", "Performance-safe UI", "Versioned improvement path"],
      },
    ],
    fitSignals: ["You need a first app version", "You need clearer app scope", "You need a maintainable app interface", "You need a product brief before build"],
    faq: [
      {
        question: "Can this start before the backend is complete?",
        answer:
          "Yes. A frontend/product planning phase can define screen flows, data assumptions, and API expectations before the backend is final.",
      },
      {
        question: "Do you promise a fixed app launch date from the first inquiry?",
        answer:
          "No. Launch timing depends on scope, backend readiness, review speed, and testing needs. The first step is a practical brief and delivery plan.",
      },
      {
        question: "Can the same service support web and mobile interfaces?",
        answer:
          "Yes. Many projects need both mobile and web/admin screens, so shared content and component thinking helps keep the experience consistent.",
      },
    ],
  },
  {
    slug: "web-cloud-platforms",
    serviceStoryId: "cloud-business-systems",
    icon: CloudCog,
    eyebrow: "Web and cloud platforms",
    title: "Web platforms and dashboards that make business operations visible.",
    summary:
      "For teams that need portals, dashboards, workflow screens, and cloud-backed interfaces that help people understand status and take action.",
    description:
      "Kynetix Labs designs web and cloud platform interfaces around business visibility, role-aware workflows, status clarity, and maintainable route/page architecture.",
    seoTitle: "Web & Cloud Platform Development - Dashboards and Portals | Kynetix Labs",
    seoDescription:
      "Build web platforms, dashboards, portals, and cloud-backed business interfaces with Kynetix Labs using reusable frontend architecture and clear operational workflows.",
    keywords:
      "web platform development, cloud dashboard, business portal, internal tool frontend, SaaS interface, operations dashboard",
    primaryAction: { label: "Plan a web platform", path: routes.contact },
    secondaryAction: { label: "View delivery process", path: routes.process },
    buyerProblems: [
      {
        label: "Low operational visibility",
        description: "Teams cannot easily see status, ownership, next actions, or problems from the current tool stack.",
      },
      {
        label: "Manual reporting pressure",
        description: "Important updates live in spreadsheets, chats, or disconnected tools instead of clear dashboards.",
      },
      {
        label: "Complex workflows",
        description: "The platform needs role-aware screens, filters, queues, approvals, and action paths without becoming confusing.",
      },
    ],
    outcomes: [
      {
        label: "Operational clarity",
        description: "Create dashboards and screen flows that surface the right status, data, and actions for each user group.",
      },
      {
        label: "Reusable platform structure",
        description: "Keep pages, cards, lists, filters, and detail views consistent so new modules can be added cleanly.",
      },
      {
        label: "Cloud-ready interface plan",
        description: "Shape frontend behavior around API boundaries, loading states, permission states, and data freshness expectations.",
      },
    ],
    deliverables: [
      {
        title: "Platform information model",
        description: "Define the pages, data views, roles, and status concepts that make the platform useful.",
        items: ["Route map", "Entity/status model", "Role and action outline", "Dashboard card inventory"],
      },
      {
        title: "Operational UI system",
        description: "Design reusable interface patterns for dashboards, tables, queues, detail pages, and action panels.",
        items: ["Summary cards", "List and detail views", "Filter/search direction", "Operator action states"],
      },
      {
        title: "Delivery handoff discipline",
        description: "Prepare the interface for API integration, QA, and future module growth.",
        items: ["Loading and error states", "Access-state screens", "Performance-aware structure", "Route smoke tests"],
      },
    ],
    architecture: [
      {
        title: "Thin pages, reusable sections",
        description: "Route pages compose reusable platform sections instead of storing large hardcoded layouts.",
        items: ["Shared grid/card components", "Centralized content contracts", "Typed route helpers", "Consistent CTA paths"],
      },
      {
        title: "API-aware frontend planning",
        description: "Screen states are designed around realistic data loading, empty results, permission boundaries, and fallback behavior.",
        items: ["Loading states", "Empty states", "Permission states", "Error recovery paths"],
      },
    ],
    fitSignals: ["You need an admin portal", "You need a dashboard", "You need workflow visibility", "You need API-ready interface planning"],
    faq: [
      {
        question: "Can this support internal staff and external customers?",
        answer:
          "Yes. The platform should separate user roles, navigation, status visibility, and action permissions from the first planning stage.",
      },
      {
        question: "Is this only frontend design?",
        answer:
          "No. The frontend work includes interface architecture, route structure, content models, loading/error states, and API-ready expectations.",
      },
      {
        question: "Can dashboards be added gradually?",
        answer:
          "Yes. A reusable dashboard structure lets summary cards, tables, and detail views grow without rewriting the whole platform.",
      },
    ],
  },
  {
    slug: "ai-ml-systems",
    serviceStoryId: "ai-data-automation",
    icon: BrainCircuit,
    eyebrow: "AI and ML systems",
    title: "AI-assisted workflows that stay reviewable, practical, and safe to operate.",
    summary:
      "For teams that want AI help inside real business workflows, with structured inputs, human review states, and clear output boundaries.",
    description:
      "Kynetix Labs focuses AI and data automation around useful workflow support: summaries, triage, routing, recommendations, review queues, and operator decision aids.",
    seoTitle: "AI & ML Workflow Systems - Automation and Decision Support | Kynetix Labs",
    seoDescription:
      "Plan AI-assisted workflow systems with Kynetix Labs, including summaries, triage, routing, review states, and human-in-the-loop interface design.",
    keywords:
      "AI workflow systems, machine learning interfaces, workflow automation, AI triage, human in the loop, decision support software",
    primaryAction: { label: "Plan an AI workflow", path: routes.contact },
    secondaryAction: { label: "Review security approach", path: routes.securityQuality },
    buyerProblems: [
      {
        label: "Repeated manual review",
        description: "Teams spend too much time reading, classifying, summarizing, or routing similar information.",
      },
      {
        label: "Unclear AI boundaries",
        description: "The business wants AI support but needs clear review states and safe output handling before using it in operations.",
      },
      {
        label: "Messy inputs",
        description: "Data, messages, or documents need structure before automation can produce useful workflow support.",
      },
    ],
    outcomes: [
      {
        label: "Practical automation map",
        description: "Identify where AI can reduce repetition without pretending it should replace every decision.",
      },
      {
        label: "Human review built in",
        description: "Design review, approval, correction, and fallback states so outputs remain accountable.",
      },
      {
        label: "Workflow-ready interface",
        description: "Turn AI output into screens people can understand, filter, approve, and act on.",
      },
    ],
    deliverables: [
      {
        title: "AI use-case framing",
        description: "Define where AI fits, what it should not do, and what data or inputs it needs.",
        items: ["Use-case map", "Input/output boundary", "Review responsibility", "Fallback behavior notes"],
      },
      {
        title: "Operator interface states",
        description: "Create screens for reviewing summaries, routing suggestions, confidence indicators, and exceptions.",
        items: ["Review queue", "Approval states", "Correction flow", "Audit-friendly notes"],
      },
      {
        title: "Automation delivery plan",
        description: "Prepare a build direction that can integrate with selected AI services without overclaiming capability.",
        items: ["Workflow screens", "Integration assumptions", "Error/edge states", "Validation checklist"],
      },
    ],
    architecture: [
      {
        title: "Human-in-the-loop first",
        description: "AI output is treated as workflow support that should be reviewed, corrected, and traced where needed.",
        items: ["Review queues", "Approval actions", "Exception states", "Operator notes"],
      },
      {
        title: "Bounded automation",
        description: "The system explains what is automated, what remains manual, and what requires human confirmation.",
        items: ["Clear labels", "Fallback paths", "No hidden decisions", "Safe error messaging"],
      },
    ],
    fitSignals: ["You have repetitive review work", "You need summaries or triage", "You need safe AI boundaries", "You need operator decision support"],
    faq: [
      {
        question: "Do you claim AI will fully automate the business process?",
        answer:
          "No. The safe starting point is decision support, summaries, routing, and review workflows with human responsibility preserved.",
      },
      {
        question: "Can AI be added later to an existing dashboard?",
        answer:
          "Yes. The dashboard can first define inputs, outputs, review states, and actions, then add AI assistance where it is useful.",
      },
      {
        question: "How do you avoid vague AI features?",
        answer:
          "Each feature is tied to a concrete workflow: what enters, what the system suggests, who reviews it, and what action happens next.",
      },
    ],
  },
  {
    slug: "iot-systems",
    serviceStoryId: "iot-connected-workflows",
    icon: Network,
    eyebrow: "IoT systems",
    title: "Connected operations interfaces for devices, alerts, and field workflows.",
    summary:
      "For businesses that need device status, telemetry, alerts, maintenance steps, and operator dashboards without losing clarity.",
    description:
      "Kynetix Labs shapes IoT and connected operations interfaces around device status, alert handling, maintenance visibility, and action-ready dashboards.",
    seoTitle: "IoT Systems and Connected Operations Dashboards | Kynetix Labs",
    seoDescription:
      "Plan IoT system interfaces with Kynetix Labs for device status, telemetry, alerts, maintenance dashboards, and connected operations workflows.",
    keywords:
      "IoT system development, device dashboard, telemetry interface, maintenance dashboard, connected operations software, sensor dashboard",
    primaryAction: { label: "Plan an IoT system", path: routes.contact },
    secondaryAction: { label: "View case studies", path: routes.work },
    buyerProblems: [
      {
        label: "Device data is hard to act on",
        description: "Signals exist, but operators still need a clear dashboard, alert priority, and next action path.",
      },
      {
        label: "Maintenance is reactive",
        description: "Teams need better visibility into device state, service windows, and repeated failure patterns.",
      },
      {
        label: "Field workflows are disconnected",
        description: "Device data, staff tasks, and manager reporting need a shared operating view.",
      },
    ],
    outcomes: [
      {
        label: "Clear device visibility",
        description: "Turn device status and telemetry into readable screens for operators and managers.",
      },
      {
        label: "Actionable alert flow",
        description: "Shape alert queues, severity states, acknowledgement paths, and maintenance follow-up screens.",
      },
      {
        label: "Connected workflow model",
        description: "Connect device events with people, tasks, locations, and reviewable operational history.",
      },
    ],
    deliverables: [
      {
        title: "Connected system map",
        description: "Define devices, data points, roles, locations, and key status states before building screens.",
        items: ["Device inventory model", "Telemetry summary", "Role and location map", "Alert severity outline"],
      },
      {
        title: "Operator dashboard plan",
        description: "Create screens that help users see status, investigate alerts, and know what to do next.",
        items: ["Device list view", "Status cards", "Alert queue", "Maintenance action panel"],
      },
      {
        title: "Operational handoff",
        description: "Prepare the interface direction for backend integration, testing, and future device growth.",
        items: ["Loading/empty states", "Offline or stale data states", "Historical activity view", "Integration assumptions"],
      },
    ],
    architecture: [
      {
        title: "Status-first interface",
        description: "Device dashboards prioritize status, freshness, severity, and next action before decorative visuals.",
        items: ["Status badges", "Freshness labels", "Severity order", "Operator actions"],
      },
      {
        title: "Scalable operations model",
        description: "The content and route structure can support more devices, locations, and reporting screens later.",
        items: ["Reusable status cards", "List/detail pattern", "Alert workflow states", "Report-ready summaries"],
      },
    ],
    fitSignals: ["You have device data", "You need alert handling", "You need maintenance visibility", "You need operator dashboards"],
    faq: [
      {
        question: "Do IoT dashboards need real devices before UI planning starts?",
        answer:
          "Not always. Planning can start with expected device states, data shape, roles, and operational workflows before final hardware integration.",
      },
      {
        question: "Can this include mobile operator screens?",
        answer:
          "Yes. Many IoT workflows need both desktop dashboards and mobile-friendly screens for field staff or managers.",
      },
      {
        question: "Do you add heavy 3D device visuals here?",
        answer:
          "Not by default. Operational dashboards should first be fast, clear, and reliable. Rich visuals can be added later when they support the workflow.",
      },
    ],
  },
];

export const serviceDetailRoutes = serviceDetails.map((service) => createServicePath(service.slug));

export const findServiceDetailBySlug = (slug: string | undefined) => serviceDetails.find((service) => service.slug === slug);
