import {
  CloudCog,
  Code2,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Rocket,
  ShieldCheck,
  Timer,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { routes } from "@/config/routes";
import { blogArticles } from "@/content/blog";
import { brandActionMap, brandVoice, ctaCopy, homeHeroSignals } from "@/content/brandLanguage";
import { productStories } from "@/content/products";
import { serviceStories } from "@/content/services";

/**
 * Public website content registry.
 *
 * Developer rule:
 * - Change public copy, navigation, service/product lists, contact details, and SEO here first.
 * - Components should render this data instead of duplicating text in multiple files.
 * - This keeps future changes easy to maintain because one content change affects every mapped section.
 */

type ButtonVariant = "primary" | "outline" | "ghost";

export interface NavItem {
  name: string;
  path: string;
}

export interface SeoContent {
  title: string;
  description: string;
  keywords: string;
}

export interface IconContentItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceContentItem extends IconContentItem {
  id: string;
  summary: string;
  features: string[];
  detailPath?: string;
}

export interface ProductContentItem extends IconContentItem {
  id: string;
  category: string;
  features: string[];
  detailPath?: string;
}

export interface ArticleContentItem {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
}

export interface ActionLink {
  label: string;
  path: string;
  variant?: ButtonVariant;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Company identity used by navbar, footer, metadata, structured data, and contact fallback messages.
 * Changing email/siteUrl/logoPath here affects every shared usage across the app.
 */
export const company = {
  name: "Kynetix Labs",
  shortName: "Kynetix",
  tagline: "Kinetic software systems",
  footerTagline: "Precision-built digital systems",
  email: "biharaanjana2019@gmail.com",
  location: "Colombo, Sri Lanka",
  siteUrl: "https://kynetixlabs.com",
  logoPath: "/logo.png",
};

export { routes } from "@/config/routes";

/** Navigation order used by both desktop and mobile navigation. */
export const navLinks: NavItem[] = [
  { name: "Home", path: routes.home },
  { name: "About", path: routes.about },
  { name: "Services", path: routes.services },
  { name: "Work", path: routes.work },
  { name: "Industries", path: routes.industries },
  { name: "Products", path: routes.products },
  { name: "Insights", path: routes.blog },
  { name: "Contact", path: routes.contact },
];

/** Per-page metadata. SEO.ts reads this and writes document title/meta/canonical/OG tags. */
export const seo = {
  home: {
    title: "Kynetix Labs - Kinetic Software Systems for Modern Businesses",
    description:
      "Kynetix Labs designs precise web, mobile, cloud, IoT, retail POS, and AI-assisted software systems for companies that need speed, control, and trust.",
    keywords:
      "software engineering Sri Lanka, mobile app development, web platform development, IoT software, smart POS system, business automation, cloud product engineering, React development",
  },
  about: {
    title: "About Kynetix Labs - Precision Software Engineering Studio",
    description:
      "Learn how Kynetix Labs shapes premium software systems with clear scope, reusable architecture, strong interfaces, and proof-aware delivery discipline.",
    keywords:
      "about Kynetix Labs, software engineering company, mobile app development, web development, IoT software, POS system development, custom software",
  },
  services: {
    title: "Software Systems Engineering - Mobile, Web, Cloud, IoT & Automation | Kynetix Labs",
    description:
      "Explore Kynetix Labs service systems for mobile products, web and cloud platforms, IoT dashboards, retail tools, AI workflows, and business automation.",
    keywords:
      "software development services, mobile app development, web development, cloud systems, IoT software, POS system development, business automation",
  },
  process: {
    title: "Software Delivery Process - Discovery, Build, QA & Launch | Kynetix Labs",
    description:
      "See how Kynetix Labs turns software ideas into scoped plans, interface flows, maintainable implementation, quality checks, and launch-ready handover.",
    keywords:
      "software delivery process, product discovery, software project planning, UI workflow planning, launch checklist, maintainable software development",
  },
  securityQuality: {
    title: "Security & Quality Approach - Maintainable Software Delivery | Kynetix Labs",
    description:
      "Review the Kynetix Labs approach to truthful software claims, reusable architecture, form data care, accessibility basics, testing gates, and launch quality.",
    keywords:
      "software quality approach, security-aware development, accessibility checks, frontend quality gates, maintainable software architecture, Kynetix Labs quality",
  },
  work: {
    title: "Work & Case Studies - Proof-Safe Software Project Stories | Kynetix Labs",
    description:
      "Explore proof-safe Kynetix Labs work examples covering product directions, project brief systems, frontend architecture, dashboards, and reusable delivery patterns.",
    keywords:
      "Kynetix Labs work, software case studies, product direction examples, frontend architecture examples, project brief system, smart POS case study",
  },
  industries: {
    title: "Industries - Retail, Logistics, Education, Hospitality & SME Software | Kynetix Labs",
    description:
      "Explore how Kynetix Labs maps mobile, web, cloud, IoT, POS, and automation services to retail, logistics, education, hospitality, professional service, and SME workflows.",
    keywords:
      "industry software solutions, retail POS software, logistics dashboard, education portal, hospitality software, SME software, custom business systems",
  },
  products: {
    title: "Product Systems - Smart POS, Workflow Control & Connected Portals | Kynetix Labs",
    description:
      "Explore Kynetix Labs product directions for retail POS, workflow command centers, connected operations portals, and client-facing digital systems.",
    keywords:
      "smart POS software, workflow dashboard, operations portal, IoT dashboard, business software products, Kynetix Labs products",
  },
  smartPos: {
    title: "Smart POS Suite - Retail Checkout, Inventory & Sales Intelligence | Kynetix Labs",
    description:
      "Explore the Kynetix Labs Smart POS Suite product direction for retail checkout, inventory control, staff roles, and owner sales visibility.",
    keywords:
      "smart POS suite, retail POS software, inventory control software, cashier system, sales dashboard, retail operations software",
  },
  blog: {
    title: "Insights - Product Design, Software Engineering & Digital Operations | Kynetix Labs",
    description:
      "Read Kynetix Labs insights on software product planning, maintainable interfaces, connected operations, and business automation.",
    keywords:
      "software engineering insights, product design, business automation, web development, mobile development, IoT operations",
  },
  contact: {
    title: "Contact Kynetix Labs - Start a Software Project",
    description:
      "Contact Kynetix Labs to discuss mobile apps, web platforms, IoT software, smart POS tools, custom software, or business automation projects.",
    keywords:
      "contact Kynetix Labs, software project inquiry, mobile app development inquiry, web development contact, IoT software contact, POS system inquiry",
  },
  privacy: {
    title: "Privacy Policy - Kynetix Labs",
    description:
      "Read how Kynetix Labs handles project inquiry details, website operation data, contact information, and privacy requests from visitors.",
    keywords: "Kynetix Labs privacy policy, project inquiry privacy, website contact data, software company privacy",
  },
  terms: {
    title: "Terms of Use - Kynetix Labs",
    description:
      "Read the Kynetix Labs website terms for public content, project inquiries, service information, product directions, and responsible website use.",
    keywords: "Kynetix Labs terms, website terms, software project inquiry terms, responsible website use",
  },
} satisfies Record<string, SeoContent>;

/**
 * Home page copy map.
 * The animated hero, section headers, CTAs, engine nodes, and visual labels all come from here.
 */
export const homeCopy = {
  hero: {
    loadingSequence: ["Scope", "Design", "Build", "Launch"],
    eyebrow: "Kinetic software engineering",
    title: "Kynetix",
    highlight: "FOR KINETIC PRECISION",
    description: brandVoice.positioning,
    primaryAction: brandActionMap.project,
    secondaryAction: { label: ctaCopy.exploreSystems, path: routes.services },
    visualAriaLabel: "Animated Kynetix system visual",
    statusLabel: "Kinetic system",
    statusValue: "READY",
    centerLabel: "KX",
    nodes: ["Apps", "Cloud", "IoT", "POS", "Data", "Automation"],
    metrics: homeHeroSignals,
  },
  services: {
    eyebrow: "Engineered systems",
    title: "Interfaces, workflows, and platforms shaped for operational control.",
    description:
      "Kynetix turns business pressure into precise software systems: clear screens, connected workflows, reusable architecture, and launch checks that keep the build maintainable.",
  },
  products: {
    eyebrow: "Product systems",
    title: "Product directions that feel specific before they become software.",
    description:
      "Each product direction names the buyer problem, operating workflow, readiness boundary, and build path before asking for a project conversation.",
    action: { label: "Explore product systems", path: routes.products, variant: "outline" as const },
  },
  process: {
    eyebrow: "Delivery rhythm",
    title: "Cinematic presentation backed by controlled engineering.",
    description:
      "Premium software experiences should feel sharp without becoming fragile. Kynetix keeps motion, content, routes, and reusable components disciplined before adding heavier media.",
  },
  engineering: {
    eyebrow: "Build discipline",
    title: "Premium polish only works when the codebase can carry it.",
    description:
      "Content modules, shared sections, route metadata, motion helpers, and tests stay separated so every new visual layer can be improved without rewriting the site.",
  },
  cta: {
    eyebrow: "Start the build",
    title: "Turn the next digital system into something precise, visible, and trusted.",
    description:
      "Bring the business problem, workflow, or product direction. Kynetix can shape it into a scoped build plan with the interface, architecture, and release path to match.",
    primaryAction: brandActionMap.buildPlan,
    secondaryAction: { label: "See how we work", path: routes.process, variant: "outline" as const },
  },
};

/** Page-level hero and CTA copy. Pages import this instead of hardcoding headline text. */
export const pageCopy = {
  about: {
    hero: {
      eyebrow: "The studio",
      title: "A software studio for systems that need clarity, motion, and control.",
      description:
        "Kynetix Labs builds digital systems with sharp interfaces, reusable architecture, and a proof-aware delivery style for teams that cannot afford messy software.",
      primaryAction: brandActionMap.project,
      secondaryAction: brandActionMap.systems,
    },
    work: {
      eyebrow: "Operating model",
      title: "Precision before production.",
      description:
        "Every build starts by narrowing the goal, the user flow, the proof boundary, and the release path so the finished system feels intentional instead of assembled.",
    },
    values: {
      eyebrow: "Engineering values",
      title: "The standard is visible before the code is explained.",
      description:
        "Strong digital products should communicate control, speed, and trust through the copy, interface, motion, and architecture behind every screen.",
    },
    cta: {
      eyebrow: `Work with ${company.shortName}`,
      title: "Have a system that needs to feel sharper and work harder?",
      description:
        "Share the business pressure, buyer journey, or workflow that needs control. We can turn it into a scoped plan before development expands.",
      action: brandActionMap.buildPlan,
    },
  },
  services: {
    hero: {
      eyebrow: "Service systems",
      title: "Software services shaped around the pressure inside the business.",
      description:
        "Kynetix designs mobile products, web platforms, cloud dashboards, IoT workflows, AI-assisted tools, and automation systems with outcome, interface, and delivery clarity.",
      primaryAction: brandActionMap.project,
      secondaryAction: { label: "View product systems", path: routes.products, variant: "outline" as const },
    },
    fit: {
      eyebrow: "Project fit",
      title: "Need a system that matches the way your team actually operates?",
      description:
        "Every serious build has different users, data, constraints, and risk. The first step is not a random quote; it is a controlled project brief.",
      action: brandActionMap.buildPlan,
    },
  },
  products: {
    hero: {
      eyebrow: "Product systems",
      title: "Product directions for operations that need a command surface.",
      description:
        "Explore retail tools, workflow command centers, connected operations portals, and client platforms described through buyer pressure, modules, and readiness boundaries.",
      primaryAction: { label: "Request a product plan", path: routes.contact },
      secondaryAction: brandActionMap.systems,
    },
    planning: {
      eyebrow: "Custom system planning",
      title: "The strongest product direction starts with the operating model.",
      description:
        "Customers, staff workflows, data, payments, devices, and reporting needs decide the product shape. We define that shape before the first build expands.",
      action: brandActionMap.buildPlan,
    },
  },
  work: {
    hero: {
      eyebrow: "Work proof",
      title: "System stories with the proof boundary visible.",
      description:
        "Explore internal product directions, reusable website systems, and delivery examples that show how Kynetix plans, builds, tests, and presents work without inventing client proof.",
      primaryAction: brandActionMap.project,
      secondaryAction: brandActionMap.process,
    },
  },
  industries: {
    hero: {
      eyebrow: "Buyer sectors",
      title: "Industry pages for teams with operational pressure, not generic markets.",
      description:
        "See how Kynetix maps mobile, web, cloud, IoT, POS, and automation thinking to real workflows while keeping experience claims proof-safe.",
      primaryAction: brandActionMap.buildPlan,
      secondaryAction: brandActionMap.systems,
    },
  },
  blog: {
    hero: {
      eyebrow: "Engineering notes",
      title: "Sharp notes on planning, interfaces, and operational software.",
      description:
        "Practical writing on product planning, reusable interfaces, dashboards, and the decisions behind maintainable digital systems.",
      action: brandActionMap.project,
    },
  },
  contact: {
    hero: {
      eyebrow: "Project brief",
      title: "Start the build with a controlled brief.",
      description:
        "Tell us the system, business goal, timeline, and operating pressure. A structured first message lets Kynetix reply with a practical next move instead of vague sales talk.",
    },
    discussion: {
      title: "Turn the signal into a scoped conversation.",
      description:
        "The best first inquiry explains users, current workflow pressure, expected outcome, and the budget or timeline boundaries already known.",
    },
  },
  privacy: {
    hero: {
      eyebrow: "Privacy",
      title: "Privacy policy for website visitors and project inquiries.",
      description:
        "This page explains what information the public website receives, why project brief details are collected, and how to contact Kynetix Labs about privacy questions.",
    },
  },
  terms: {
    hero: {
      eyebrow: "Terms",
      title: "Terms for using the Kynetix Labs website.",
      description:
        "These terms explain how visitors should use the public website, project inquiry form, articles, service information, and product direction pages.",
    },
  },
};

export const heroCapabilities = ["Mobile systems", "Cloud platforms", "Retail POS", "IoT control", "AI workflows", "Automation"];

export const capabilityPillars: Array<IconContentItem & { label: string; value: string }> = [
  {
    label: "Digital product engineering",
    value: "Mobile + Web",
    title: "Digital product systems",
    description: "Apps, portals, dashboards, and workflows shaped around real users, decisive screens, and measurable operating goals.",
    icon: MonitorSmartphone,
  },
  {
    label: "Connected business operations",
    value: "IoT + POS",
    title: "Connected operating control",
    description: "Retail, device, and operational software that turns physical work into readable digital control surfaces.",
    icon: Network,
  },
  {
    label: "Workflow automation",
    value: "Data + Logic",
    title: "Workflow command layers",
    description: "Dashboards, alerts, approvals, and business tools that reduce repeated work and make decisions easier to review.",
    icon: Workflow,
  },
  {
    label: "Reliable delivery model",
    value: "Cloud + Quality",
    title: "Controlled delivery model",
    description: "Clean architecture, responsive interfaces, performance discipline, and maintainable handover before launch.",
    icon: CloudCog,
  },
];

export const homeServices = serviceStories.slice(0, 3).map((service, index) => ({
  eyebrow: `${String(index + 1).padStart(2, "0")} / ${service.eyebrow}`,
  title: service.title,
  description: service.summary,
  icon: service.icon,
  highlights: service.outcomes,
}));

export const homeProducts = productStories.slice(0, 3).map((product) => ({
  name: product.title,
  category: product.category,
  summary: product.summary,
  icon: product.icon,
}));

export const processSteps = [
  {
    step: "01",
    title: "Decode the operating pressure",
    description: "Map the buyer, user journeys, bottlenecks, product goals, and success signals before the interface is designed.",
  },
  {
    step: "02",
    title: "Shape the product surface",
    description: "Define visual direction, page structure, motion rules, reusable components, and conversion path before deeper features expand.",
  },
  {
    step: "03",
    title: "Build the system layer",
    description: "Ship reusable React sections, typed content, shared components, clean CSS layers, and performance-safe motion.",
  },
  {
    step: "04",
    title: "Prove launch readiness",
    description: "Validate build, lint, responsiveness, accessibility, SEO metadata, image budgets, forms, and deployment safety.",
  },
];

export const engineeringSignals = [
  { label: "React architecture", icon: Layers3 },
  { label: "Motion rules", icon: Zap },
  { label: "Cloud-ready UX", icon: CloudCog },
  { label: "Performance budgets", icon: LineChart },
  { label: "Security-aware flows", icon: LockKeyhole },
  { label: "Quality gates", icon: ShieldCheck },
  { label: "Scalable delivery", icon: Rocket },
];

export const aboutValues: IconContentItem[] = [
  {
    icon: ShieldCheck,
    title: "Controlled delivery",
    description: "Scope, communication, and technical decisions stay visible so clients understand what is being built and why.",
  },
  {
    icon: Code2,
    title: "Maintainable systems",
    description: "Reusable components, centralized content, simple file names, and typed contracts make each future improvement safer.",
  },
  {
    icon: Rocket,
    title: "Useful innovation",
    description: "Modern effects, AI ideas, and visual systems are used only when they improve speed, clarity, conversion, or business usefulness.",
  },
];

export const approachSteps = [
  {
    title: "Signal",
    description: "Clarify the business pressure, buyer, users, scope, risks, and launch goal before shaping the surface.",
  },
  {
    title: "System",
    description: "Convert the idea into flows, content contracts, interface patterns, route structure, and delivery checkpoints.",
  },
  {
    title: "Launch",
    description: "Implement clear interfaces, responsive layouts, maintainable code, and release checks that can be proven.",
  },
];

export const founders = [
  {
    name: "Bihara Malith",
    role: "Co-Founder",
    imageKey: "bihara" as const,
  },
  {
    name: "Kushad Disanayake",
    role: "Co-Founder",
    imageKey: "kushad" as const,
  },
];

export const services: ServiceContentItem[] = serviceStories.map((service) => ({
  id: service.id,
  icon: service.icon,
  title: service.title,
  summary: service.summary,
  description: service.description,
  features: service.deliverables.slice(0, 4),
  detailPath: service.detailPath,
}));

export const products: ProductContentItem[] = productStories.map((product) => ({
  id: product.id,
  icon: product.icon,
  title: product.title,
  category: product.category,
  description: product.description,
  features: product.capabilities.slice(0, 4),
  detailPath: product.detailPath,
}));

export const articles: ArticleContentItem[] = blogArticles.map((article) => ({
  title: article.title,
  excerpt: article.excerpt,
  author: article.author,
  readTime: article.readTime,
  category: article.category,
  slug: article.slug,
}));

export const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: company.location,
  },
  {
    icon: Timer,
    title: "Response time",
    value: "Reviewed before reply",
  },
];

export const footerLinks = {
  company: [
    { name: "About", path: routes.about },
    { name: "Services", path: routes.services },
    { name: "Process", path: routes.process },
    { name: "Work", path: routes.work },
    { name: "Industries", path: routes.industries },
    { name: "Products", path: routes.products },
    { name: "Insights", path: routes.blog },
  ],
  services: [
    { name: "Mobile App Development", path: `${routes.services}/mobile-app-development` },
    { name: "Web & Cloud Platforms", path: `${routes.services}/web-cloud-platforms` },
    { name: "AI & ML Systems", path: `${routes.services}/ai-ml-systems` },
    { name: "IoT Systems", path: `${routes.services}/iot-systems` },
  ],
  build: [
    { name: "Start a Project", path: routes.contact },
    { name: "Delivery Process", path: routes.process },
    { name: "Security & Quality", path: routes.securityQuality },
    { name: "Selected Work", path: routes.work },
    { name: "Industry Fit", path: routes.industries },
    { name: "View Products", path: routes.products },
  ],
  legal: [
    { name: "Privacy", path: routes.privacy },
    { name: "Terms", path: routes.terms },
  ],
};

/** JSON-LD helpers stay close to content so SEO data cannot drift from visible page data. */
export const createOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.siteUrl,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
});

export const createServiceStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      url: `${company.siteUrl}${service.detailPath ?? `${routes.services}#${service.id}`}`,
      description: service.summary,
      provider: {
        "@type": "Organization",
        name: company.name,
      },
    },
  })),
});

export const createContactStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: createOrganizationStructuredData(),
});
