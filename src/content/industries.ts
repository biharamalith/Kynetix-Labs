import {
  Building2,
  GraduationCap,
  Hotel,
  Rocket,
  Store,
  Stethoscope,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { routes } from "@/config/routes";

export interface IndustryStoryPoint {
  label: string;
  description: string;
}

export interface IndustrySystemFit {
  title: string;
  path: string;
  description: string;
}

export interface IndustryProfile {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  buyerPains: IndustryStoryPoint[];
  systemFit: IndustrySystemFit[];
  useCases: string[];
  projectFit: string[];
  proofBoundary: string;
}

export const industriesCopy = {
  hero: {
    eyebrow: "Industries",
    title: "Software direction for buyers with real operating pressure.",
    description:
      "Kynetix Labs maps mobile, web, cloud, IoT, POS, and automation services to practical industry workflows without pretending to have client proof that has not been approved yet.",
    primaryAction: { label: "Start an industry project brief", path: routes.contact },
    secondaryAction: { label: "Explore services", path: routes.services, variant: "outline" as const },
  },
  grid: {
    eyebrow: "Buyer segments",
    title: "Common business types we can plan systems around.",
    description:
      "Each industry card connects real operating pain with the Kynetix service directions that can support a scoped project conversation.",
  },
  fit: {
    eyebrow: "Fit matrix",
    title: "Match the industry pressure to the right build direction.",
    description:
      "The purpose of this page is not to claim every industry outcome. It helps buyers choose the correct starting point before the project brief stage.",
  },
  useCases: {
    eyebrow: "Reusable patterns",
    title: "Software patterns that repeat across many industries.",
    description:
      "Most serious business systems share a few patterns: intake, dashboards, roles, approvals, reporting, and operational visibility. Kynetix designs those patterns so they can be reused cleanly.",
  },
  cta: {
    eyebrow: "Project fit",
    title: "Need a system for your industry workflow?",
    description:
      "Share the business type, the current workflow problem, and the result you want. We can help translate it into a clear software plan before development starts.",
    action: { label: "Start a project brief", path: routes.contact },
  },
};

export const industryUseCasePatterns: IndustryStoryPoint[] = [
  {
    label: "Structured intake",
    description: "Replace scattered messages with forms, request flows, validation, and next-step clarity.",
  },
  {
    label: "Operational dashboards",
    description: "Show status, work queues, alerts, summaries, and owner-level visibility from one interface.",
  },
  {
    label: "Role-aware workflows",
    description: "Separate owner, manager, staff, customer, and operator actions so screens stay understandable.",
  },
  {
    label: "Reporting and decision support",
    description: "Turn repeated activity into summaries, trends, and review screens that help teams act faster.",
  },
];

export const industryProofPrinciples: IndustryStoryPoint[] = [
  {
    label: "No fake clients",
    description: "Industry pages describe fit and possible systems, not invented logos, customer quotes, or customer metrics.",
  },
  {
    label: "No unsupported compliance claims",
    description: "Regulated industries require separate scope, legal review, hosting decisions, and data-handling agreements.",
  },
  {
    label: "Scoped before build",
    description: "Each industry direction starts with a project brief that confirms users, data, risks, and launch boundaries.",
  },
];

export const industryProfiles: IndustryProfile[] = [
  {
    slug: "retail-pos-operations",
    icon: Store,
    eyebrow: "Retail and shops",
    title: "Retail operations and POS visibility",
    summary: "Checkout, inventory, staff roles, owner dashboards, and sales visibility for retail teams.",
    description:
      "Retail teams often need faster billing, cleaner stock awareness, and better owner visibility. Kynetix can shape retail software around POS flow, inventory updates, reporting, and staff access without claiming a packaged deployment before store workflow is scoped.",
    buyerPains: [
      { label: "Stock uncertainty", description: "Owners need clearer views of stock movement, low inventory, and item activity." },
      { label: "Manual sales review", description: "Daily sales and cashier activity can be hard to review when data is scattered." },
      { label: "Staff workflow gaps", description: "Cashier, manager, and owner actions need different screens and access boundaries." },
    ],
    systemFit: [
      { title: "Smart POS Suite", path: routes.smartPos, description: "Product direction for checkout, inventory, staff roles, and sales intelligence." },
      { title: "Web and cloud platforms", path: `${routes.services}/web-cloud-platforms`, description: "Dashboards and cloud-backed status views for owner visibility." },
    ],
    useCases: ["Billing and checkout flow", "Inventory dashboard", "Sales summary views", "Staff role screens"],
    projectFit: ["Retail shop workflow", "POS product planning", "Inventory visibility", "Owner reporting"],
    proofBoundary: "Retail content is positioned as product direction and project-fit planning, not a claim of existing client deployments.",
  },
  {
    slug: "logistics-field-operations",
    icon: Truck,
    eyebrow: "Logistics and field work",
    title: "Logistics, dispatch, and field operations",
    summary: "Status dashboards, delivery visibility, dispatch workflows, and exception handling for field teams.",
    description:
      "Logistics and field operations need simple status views, clear task ownership, and exception handling. Kynetix can plan dashboards and workflows for teams that need better visibility across people, locations, and operational steps.",
    buyerPains: [
      { label: "Low status visibility", description: "Managers need to see what is pending, delayed, completed, or blocked." },
      { label: "Manual coordination", description: "Field updates often happen through calls or chat instead of structured workflow screens." },
      { label: "Exception handling", description: "Teams need clear escalation paths when tasks, deliveries, or service visits go wrong." },
    ],
    systemFit: [
      { title: "Web and cloud platforms", path: `${routes.services}/web-cloud-platforms`, description: "Operational dashboards and role-aware views for dispatch and management." },
      { title: "IoT systems", path: `${routes.services}/iot-systems`, description: "Device, vehicle, location, or field-status interfaces where connected data is available." },
    ],
    useCases: ["Dispatch dashboard", "Task status board", "Delivery exception queue", "Field activity timeline"],
    projectFit: ["Dispatch planning", "Field task tracking", "Status dashboards", "Exception workflows"],
    proofBoundary: "Logistics content describes workflow fit only; device tracking, maps, or route optimization require separate technical scoping.",
  },
  {
    slug: "health-wellness-service-teams",
    icon: Stethoscope,
    eyebrow: "Health and wellness services",
    title: "Health and wellness service coordination",
    summary: "Appointment intake, admin dashboards, request handling, and staff workflow screens for service teams.",
    description:
      "Health and wellness teams can benefit from structured intake, admin visibility, and service coordination tools. This industry direction stays focused on general workflow software and avoids medical, diagnostic, or regulated compliance claims.",
    buyerPains: [
      { label: "Unstructured inquiries", description: "Service requests and appointment context can arrive through scattered channels." },
      { label: "Admin follow-up pressure", description: "Teams need clearer queues, notes, and next-step visibility for non-clinical operations." },
      { label: "Sensitive data care", description: "Any personal information requires careful scope, wording, access controls, and policy review." },
    ],
    systemFit: [
      { title: "Mobile app development", path: `${routes.services}/mobile-app-development`, description: "Client-facing appointment or request experiences with careful data minimization." },
      { title: "Security & quality approach", path: routes.securityQuality, description: "Quality and safety principles for forms, privacy notes, and reviewable workflows." },
    ],
    useCases: ["Service request intake", "Appointment context forms", "Admin queue dashboard", "Follow-up status views"],
    projectFit: ["Appointment workflows", "Admin coordination", "Request intake", "Privacy-aware forms"],
    proofBoundary: "This page does not claim medical compliance, clinical software, or diagnostic capability. Regulated requirements need specialist review.",
  },
  {
    slug: "education-training-platforms",
    icon: GraduationCap,
    eyebrow: "Education and training",
    title: "Education, training, and learning operations",
    summary: "Course portals, student/service dashboards, submission flows, and training administration tools.",
    description:
      "Education and training teams often need clear portals, course visibility, submissions, announcements, and admin workflows. Kynetix can shape learning and training platforms around roles, content, tasks, and progress visibility.",
    buyerPains: [
      { label: "Scattered learning updates", description: "Students, instructors, or trainees need one place to see tasks, content, and next steps." },
      { label: "Manual administration", description: "Attendance, submissions, feedback, and requests can become hard to manage manually." },
      { label: "Role clarity", description: "Admins, learners, instructors, and reviewers need different access and interface views." },
    ],
    systemFit: [
      { title: "Web and cloud platforms", path: `${routes.services}/web-cloud-platforms`, description: "Portal and dashboard systems for learning administration and visibility." },
      { title: "Custom software and automation", path: routes.services, description: "Workflow automation for repeated training or education administration tasks." },
    ],
    useCases: ["Learning portal", "Submission tracking", "Training request intake", "Progress dashboard"],
    projectFit: ["Course portal", "Training dashboard", "Student or learner workflow", "Admin automation"],
    proofBoundary: "Education content describes platform patterns only and does not claim integration with any specific institution system unless scoped.",
  },
  {
    slug: "hospitality-service-operations",
    icon: Hotel,
    eyebrow: "Hospitality and services",
    title: "Hospitality and service operations",
    summary: "Booking flows, service requests, staff tasks, guest communication, and owner visibility.",
    description:
      "Hospitality and service businesses need clear customer-facing flows and internal coordination. Kynetix can plan software for booking, requests, staff tasks, status views, and service follow-up without overcomplicating daily operations.",
    buyerPains: [
      { label: "Customer requests are scattered", description: "Bookings, inquiries, and follow-ups can sit across calls, chat, email, or paper notes." },
      { label: "Staff tasks lack visibility", description: "Managers need to see task ownership, status, and unresolved service issues." },
      { label: "Guest experience depends on timing", description: "Fast response and clear status can improve customer trust before and after service." },
    ],
    systemFit: [
      { title: "Mobile app development", path: `${routes.services}/mobile-app-development`, description: "Guest or customer-facing request and booking interfaces." },
      { title: "Workflow command patterns", path: routes.products, description: "Product directions for task visibility, approvals, and operational dashboards." },
    ],
    useCases: ["Booking request flow", "Service task board", "Customer request portal", "Owner activity dashboard"],
    projectFit: ["Booking workflows", "Service request handling", "Staff task tracking", "Customer portals"],
    proofBoundary: "Hospitality content is project-fit guidance, not a claim of live hotel or restaurant customer deployments.",
  },
  {
    slug: "sme-startup-product-teams",
    icon: Rocket,
    eyebrow: "SMEs and startups",
    title: "SME and startup product systems",
    summary: "MVP planning, customer portals, internal tools, dashboards, and automation paths for growing teams.",
    description:
      "Small companies and startups often need a clear first version, practical scope, and a system that can evolve. Kynetix can help turn ideas, manual workflows, or product directions into reviewable software plans and maintainable builds.",
    buyerPains: [
      { label: "Too many feature ideas", description: "The first version needs a clear user journey, core workflow, and realistic delivery boundary." },
      { label: "Manual work is slowing growth", description: "Repeated tasks, approvals, and reporting can become a drag on small teams." },
      { label: "Weak technical handover", description: "A project must stay understandable and maintainable after launch, not only look good on day one." },
    ],
    systemFit: [
      { title: "Delivery process", path: routes.process, description: "Discovery, architecture, build, quality, launch, and improvement planning." },
      { title: "Work examples", path: routes.work, description: "Proof-safe examples of systems, product directions, and delivery patterns." },
    ],
    useCases: ["MVP product plan", "Customer portal", "Internal operations tool", "Automation dashboard"],
    projectFit: ["MVP scope", "Custom business system", "Workflow automation", "Product planning"],
    proofBoundary: "Startup and SME content is a project planning direction, not a promise of funding, growth metrics, or guaranteed product success.",
  },
  {
    slug: "professional-service-firms",
    icon: Building2,
    eyebrow: "Professional services",
    title: "Professional service firm workflows",
    summary: "Client intake, document requests, approvals, status timelines, and internal review systems.",
    description:
      "Professional service teams often need better request intake, document visibility, client updates, and approval workflows. Kynetix can shape portal and dashboard systems that keep communication clear and reviewable.",
    buyerPains: [
      { label: "Client updates are repetitive", description: "Teams need structured request status and response history instead of repeated follow-up messages." },
      { label: "Documents and approvals need order", description: "Files, notes, decisions, and approvals should be easier to track across a service workflow." },
      { label: "Managers need delivery visibility", description: "Service leaders need to see progress, pending items, and blocked work without manual reports." },
    ],
    systemFit: [
      { title: "Client service portal direction", path: routes.products, description: "Product direction for client requests, updates, documents, and approvals." },
      { title: "Web and cloud platforms", path: `${routes.services}/web-cloud-platforms`, description: "Dashboards and portals for service delivery operations." },
    ],
    useCases: ["Client request portal", "Document checklist", "Approval workflow", "Service progress timeline"],
    projectFit: ["Client portals", "Approval workflows", "Document tracking", "Service dashboards"],
    proofBoundary: "Professional-service content describes reusable workflow patterns and does not claim regulated or client-specific delivery proof.",
  },
];

export const getIndustryBySlug = (slug: string | undefined) => industryProfiles.find((industry) => industry.slug === slug);
