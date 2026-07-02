import { BarChart3, Layers3, type LucideIcon, MonitorSmartphone, ScanLine } from "lucide-react";
import { createCaseStudyPath, routes } from "@/config/routes";

export interface CaseStudyStage {
  label: string;
  description: string;
}

export interface CaseStudyResult {
  label: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  status: string;
  category: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  architecture: string[];
  stages: CaseStudyStage[];
  evidence: string[];
  results: CaseStudyResult[];
  seoTitle: string;
  seoDescription: string;
}

export const caseStudyCopy = {
  hero: {
    eyebrow: "Work proof",
    title: "Project stories with the proof boundary visible.",
    description:
      "A reusable work section for selected builds, internal product directions, and delivery examples. Each story explains the problem, system shape, decisions, and proof that can be shown truthfully.",
    primaryAction: { label: "Start a Project", path: routes.contact },
    secondaryAction: { label: "View the Process", path: routes.process, variant: "outline" as const },
  },
  grid: {
    eyebrow: "Selected systems",
    title: "Work examples described by challenge, system shape, and reviewable evidence.",
    description:
      "Until client-approved public case studies are available, Kynetix uses transparent internal builds and product directions to show capability without inventing customers, numbers, or testimonials.",
  },
  proofModel: {
    eyebrow: "Proof discipline",
    title: "A case study should build trust, not exaggerate it.",
    description:
      "The content model separates internal demos, product directions, and client-approved work so future stories can be published safely when real proof is available.",
  },
  backToWork: "Back to work",
  detailCta: "Plan a similar build",
};

export const caseStudyProofPrinciples: CaseStudyResult[] = [
  {
    label: "Truthful source",
    description: "Each story names whether it is an internal build, product direction, service example, or client-approved public project.",
  },
  {
    label: "Reviewable evidence",
    description: "Stories focus on visible outputs such as content contracts, routes, forms, workflows, tests, and launch checks.",
  },
  {
    label: "No invented numbers",
    description: "Impact is described through practical outcomes unless a real approved metric exists and can be shown responsibly.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-pos-retail-operations-pilot",
    icon: ScanLine,
    title: "Smart POS retail operations pilot",
    eyebrow: "Internal product direction",
    status: "Pilot-ready concept",
    category: "Retail software",
    summary:
      "A product direction for retail checkout, inventory movement, staff access, and owner sales visibility without claiming a packaged public launch.",
    description:
      "The Smart POS story shows how Kynetix can shape a retail operations system from buyer problem to product modules, workflow, and build plan while keeping claims pilot-safe.",
    challenge:
      "Small retailers often need clearer billing, stock movement, staff roles, and sales visibility, but a generic POS promise can overclaim readiness before the real store workflow is known.",
    solution:
      "The product page separates checkout, inventory, role control, reporting, and build phases into centralized content so a client can review the product direction before a scoped implementation starts.",
    outcomes: [
      "Clearer retail buyer story for checkout, inventory, and reporting needs",
      "Pilot-safe wording that avoids fake launch, pricing, or live demo claims",
      "Reusable product content that can grow into future UI mockups or demo flows",
    ],
    stack: ["React", "TypeScript", "Route-level page split", "Typed content module", "SEO structured data"],
    architecture: [
      "Dedicated /products/smart-pos route linked from the product overview",
      "Central Smart POS content module for modules, workflow, outcomes, and build plan",
      "Reusable product sections instead of one large hardcoded page",
    ],
    stages: [
      { label: "Position", description: "Define the retail buyer problem and pilot-safe readiness language." },
      { label: "Model", description: "Create module, workflow, outcome, and build-plan content contracts." },
      { label: "Publish", description: "Connect routing, SEO, sitemap, product overview CTA, and route tests." },
    ],
    evidence: ["Dedicated Smart POS route", "Centralized product content", "Smart POS page tests", "Sitemap and SEO entry"],
    results: [
      { label: "Buyer clarity", description: "The page explains what the product direction solves before asking for a project discussion." },
      { label: "Claim safety", description: "The story does not claim live deployment, client numbers, pricing, or public demo availability." },
      { label: "Maintainability", description: "Future product modules can be edited from one content contract." },
    ],
    seoTitle: "Smart POS Retail Operations Pilot Case Study | Kynetix Labs",
    seoDescription:
      "Review how Kynetix Labs shaped a Smart POS retail operations product direction with pilot-safe claims, centralized content, workflow storytelling, and SEO-ready routing.",
  },
  {
    slug: "project-brief-conversion-system",
    icon: MonitorSmartphone,
    title: "Project brief conversion system",
    eyebrow: "Own website system",
    status: "Live website feature",
    category: "Lead conversion",
    summary:
      "A structured contact flow that turns vague inquiries into project briefs with system type, business goal, budget range, timeline, validation, and fallback email path.",
    description:
      "The contact system shows how a marketing site can qualify leads without pretending a CRM or automated sales pipeline exists behind the form.",
    challenge:
      "A basic contact form can produce unclear messages, missed context, and weak first replies when visitors do not explain the business goal, system type, budget range, or timeline.",
    solution:
      "Kynetix uses centralized contact content and validation helpers to render a structured project brief form with honeypot protection, minimum submit timing, success state, and synced Netlify fields.",
    outcomes: [
      "More useful first project inquiries",
      "Validation rules kept outside the visual component",
      "Clear fallback email path if form submission fails",
    ],
    stack: ["React", "TypeScript", "Central validation helper", "Netlify form compatibility", "Vitest component tests"],
    architecture: [
      "Project brief choices and support copy live in a contact content module",
      "Validation and form encoding are centralized in a library helper",
      "The contact page composes form, trust panel, and summary sections",
    ],
    stages: [
      { label: "Qualify", description: "Capture project type, goal, budget range, timeline, and context." },
      { label: "Protect", description: "Use honeypot and minimum-time checks without adding fake security claims." },
      { label: "Guide", description: "Show next-step success copy and a visible fallback email route." },
    ],
    evidence: ["Project brief tests", "Central validation helper", "Synced hidden Netlify form", "Success and fallback states"],
    results: [
      { label: "Better context", description: "The form asks for the project details needed to prepare a useful first reply." },
      { label: "Operational safety", description: "The system names what it really does and avoids fake CRM or analytics claims." },
      { label: "Reusable pattern", description: "The form model can be extended without rewriting the contact page." },
    ],
    seoTitle: "Project Brief Conversion System Case Study | Kynetix Labs",
    seoDescription:
      "See how Kynetix Labs designed a structured project brief form with centralized validation, anti-spam basics, success state, and fallback contact path.",
  },
  {
    slug: "trust-centered-website-architecture",
    icon: Layers3,
    title: "Trust-centered website architecture",
    eyebrow: "Service delivery example",
    status: "Reusable architecture",
    category: "Frontend platform",
    summary:
      "A reusable website architecture with route registry, SEO helpers, content modules, policy pages, process pages, quality pages, tests, and clean handover rules.",
    description:
      "This story demonstrates how the public website is being built as a maintainable product instead of a collection of one-off marketing sections.",
    challenge:
      "Premium websites often become difficult to maintain when content, animation, SEO, legal links, product cards, and tests are scattered across unrelated components.",
    solution:
      "The codebase uses centralized route and content modules, reusable page sections, route-level pages, SEO helpers, focused tests, and production-safe comments so each branch can extend the site without creating drift.",
    outcomes: [
      "Reusable sections for services, products, trust pages, and future case studies",
      "Centralized SEO, route, sitemap, and content surfaces",
      "Quality gates that include lint, typecheck, tests, build, and audit",
    ],
    stack: ["Vite", "React", "TypeScript", "Tailwind", "React Router", "Vitest"],
    architecture: [
      "Pages compose sections while typed content modules own public copy",
      "Route registry drives navigation, SEO paths, and sitemap checks",
      "Tests verify content contracts and route rendering instead of only snapshots",
    ],
    stages: [
      { label: "Foundation", description: "Clean project setup, reusable layout, content registry, and motion-safe primitives." },
      { label: "Trust", description: "Add service/product clarity, contact conversion, compliance routes, process, and quality pages." },
      { label: "Proof", description: "Add work routes and a case study model that can grow with real client-approved stories." },
    ],
    evidence: ["Central route registry", "Reusable site components", "Content contract tests", "Route smoke tests"],
    results: [
      { label: "Lower drift", description: "New sections can share components and content contracts instead of duplicating layout logic." },
      { label: "Launch safety", description: "Legal routes, blog detail routes, sitemap entries, and route tests reduce broken public paths." },
      { label: "Future proof", description: "The site can add industries, media, and richer case studies without a structural rewrite." },
    ],
    seoTitle: "Trust-Centered Website Architecture Case Study | Kynetix Labs",
    seoDescription:
      "Explore how Kynetix Labs structures its website with reusable components, centralized content, route registry, SEO helpers, tests, and proof-safe work pages.",
  },
  {
    slug: "operations-dashboard-design-example",
    icon: BarChart3,
    title: "Operations dashboard design example",
    eyebrow: "Demo build pattern",
    status: "Architecture example",
    category: "Business operations",
    summary:
      "A dashboard design pattern for turning operational states, exceptions, task queues, and decision points into clearer business screens.",
    description:
      "This example keeps the focus on dashboard architecture and product thinking rather than pretending a client deployment or private data result exists.",
    challenge:
      "Operational teams can lose time when tasks, statuses, exceptions, and decisions live across spreadsheets, messages, and disconnected tools.",
    solution:
      "The design pattern organizes current state, priority signals, action paths, role-aware views, and exception handling into a dashboard model that can be scoped for a real business workflow.",
    outcomes: [
      "Clearer status and exception visibility",
      "Better action paths for operators and managers",
      "A reusable planning model for future workflow dashboards",
    ],
    stack: ["Product discovery", "Dashboard UX", "Role-based interface planning", "Data-state modeling"],
    architecture: [
      "Status cards summarize the current operational state",
      "Action panels keep next steps close to the issue being reviewed",
      "Empty, warning, and exception states are planned before launch",
    ],
    stages: [
      { label: "Map", description: "Identify work states, user roles, decisions, and exceptions." },
      { label: "Design", description: "Group statuses, queues, summaries, and actions into usable screens." },
      { label: "Validate", description: "Review with the actual workflow before committing to deeper implementation." },
    ],
    evidence: ["Dashboard planning model", "Role and state breakdown", "Exception-handling checklist", "Service storytelling alignment"],
    results: [
      { label: "Decision focus", description: "The dashboard story starts from the decisions users need to make, not from raw tables." },
      { label: "Scope clarity", description: "Teams can decide what belongs in the first build and what should wait." },
      { label: "Build readiness", description: "The model can move into a scoped dashboard project once real data sources are known." },
    ],
    seoTitle: "Operations Dashboard Design Example | Kynetix Labs",
    seoDescription:
      "Learn how Kynetix Labs frames operations dashboard projects around states, exceptions, action paths, role-aware screens, and build readiness.",
  },
];

export const caseStudyPaths = caseStudies.map((study) => createCaseStudyPath(study.slug));

export const findCaseStudyBySlug = (slug: string | undefined) => caseStudies.find((study) => study.slug === slug);
