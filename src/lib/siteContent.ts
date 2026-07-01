import {
  BarChart3,
  CheckCircle2,
  CloudCog,
  Code2,
  Cpu,
  Gauge,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Rocket,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Timer,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Public website content registry.
 *
 * Developer rule:
 * - Change public copy, navigation, service/product lists, contact details, and SEO here first.
 * - Components should render this data instead of duplicating text in multiple files.
 * - This keeps future branches easy to maintain because one content change affects every mapped section.
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
}

export interface ProductContentItem extends IconContentItem {
  id: string;
  category: string;
  features: string[];
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
  tagline: "Software engineering studio",
  footerTagline: "Kinetic digital engineering",
  email: "biharaanjana2019@gmail.com",
  location: "Colombo, Sri Lanka",
  siteUrl: "https://kynetixlabs.com",
  logoPath: "/logo.png",
};

/** Navigation order used by both desktop and mobile navigation. */
export const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Insights", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

/** Per-page metadata. SEO.ts reads this and writes document title/meta/canonical/OG tags. */
export const seo = {
  home: {
    title: "Kynetix Labs - Mobile, Web, Cloud, IoT & Business Software Engineering",
    description:
      "Kynetix Labs designs and builds mobile apps, web platforms, cloud software, IoT systems, smart POS solutions, and business automation tools for modern companies.",
    keywords:
      "software engineering Sri Lanka, mobile app development, web platform development, IoT software, smart POS system, business automation, cloud product engineering, React development",
  },
  about: {
    title: "About Kynetix Labs - Software Engineering Partner",
    description:
      "Learn about Kynetix Labs, a software engineering studio building mobile apps, web platforms, IoT systems, POS tools, and custom business software.",
    keywords:
      "about Kynetix Labs, software engineering company, mobile app development, web development, IoT software, POS system development, custom software",
  },
  services: {
    title: "Software Development Services - Mobile, Web, IoT, POS & Automation | Kynetix Labs",
    description:
      "Professional software development services for mobile apps, web platforms, cloud systems, IoT dashboards, smart POS tools, and business automation workflows.",
    keywords:
      "software development services, mobile app development, web development, cloud systems, IoT software, POS system development, business automation",
  },
  products: {
    title: "Software Product Concepts - Smart POS, Workflow Tools & Connected Portals | Kynetix Labs",
    description:
      "Explore Kynetix Labs software product directions for retail POS, workflow command centers, connected operations portals, and client-facing digital systems.",
    keywords:
      "smart POS software, workflow dashboard, operations portal, IoT dashboard, business software products, Kynetix Labs products",
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
} satisfies Record<string, SeoContent>;

/**
 * Home page copy map.
 * The animated hero, section headers, CTAs, engine nodes, and visual labels all come from here.
 */
export const homeCopy = {
  hero: {
    loaderLabel: company.name,
    eyebrow: "Software engineering for modern businesses",
    title: "Engineering intelligent digital systems with",
    highlight: "kinetic precision.",
    description:
      "Kynetix Labs designs and builds mobile apps, web platforms, cloud software, IoT systems, smart POS solutions, and business automation tools for companies that need reliable digital execution.",
    primaryAction: { label: "Start a Project", path: "/contact" },
    secondaryAction: { label: "Explore capabilities", path: "/services" },
    visualAriaLabel: "Animated Kynetix system visual",
    statusLabel: "System architecture",
    statusValue: "LIVE",
    centerLabel: "KX",
    nodes: ["Apps", "Cloud", "IoT", "POS", "Data", "Automation"],
    metrics: [
      { label: "Interfaces", value: "Responsive" },
      { label: "Architecture", value: "Scalable" },
      { label: "Experience", value: "Animated" },
    ],
  },
  services: {
    eyebrow: "What we build",
    title: "Software systems for companies that need clarity and control.",
    description:
      "Kynetix focuses on practical business software: strong interfaces, connected workflows, and maintainable systems that can keep improving after launch.",
  },
  products: {
    eyebrow: "Product direction",
    title: "Clear software packages clients can understand.",
    description:
      "Clear product directions help buyers understand the systems Kynetix can deliver for real business operations.",
    action: { label: "View all product directions", path: "/products", variant: "outline" as const },
  },
  process: {
    eyebrow: "How we deliver",
    title: "Strong design backed by clean engineering.",
    description:
      "A high-end website must stay fast, responsive, maintainable, and easy to improve. This process keeps the visual experience impressive without making the codebase messy.",
  },
  engineering: {
    eyebrow: "Engineering discipline",
    title: "Built to look sharp and stay maintainable.",
    description:
      "Content, layout, animation helpers, and reusable UI building blocks are separated so each new section can be improved without rewriting the full page.",
  },
  cta: {
    eyebrow: "Start your software project",
    title: "Build a stronger digital presence with a system clients can trust.",
    description:
      "Share your idea, business problem, or product direction. Kynetix Labs can help shape it into a clear plan, a strong interface, and a maintainable software build.",
    primaryAction: { label: "Plan a project", path: "/contact" },
    secondaryAction: { label: "Learn about Kynetix", path: "/about", variant: "outline" as const },
  },
};

/** Page-level hero and CTA copy. Pages import this instead of hardcoding headline text. */
export const pageCopy = {
  about: {
    hero: {
      eyebrow: "About Kynetix Labs",
      title: "We build digital systems that are clear, useful, and ready to grow.",
      description:
        "Kynetix Labs is a software engineering studio focused on mobile apps, web platforms, connected operations, smart POS tools, and custom business software.",
      primaryAction: { label: "Start a project", path: "/contact" },
      secondaryAction: { label: "Explore services", path: "/services", variant: "outline" as const },
    },
    work: {
      eyebrow: "How we work",
      title: "A practical process before heavy development.",
      description:
        "Strong software starts with clear business context, simple architecture choices, and a delivery path that can be maintained after launch.",
    },
    values: {
      eyebrow: "Values",
      title: "The standards we want clients to feel.",
      description:
        "The website and the codebase should communicate the same thing: careful thinking, reliable execution, and clean improvement paths.",
    },
    cta: {
      eyebrow: `Work with ${company.shortName}`,
      title: "Have a product, website, or business system to build?",
      description:
        "Share the idea, the business problem, or the workflow that needs improvement. We can help turn it into a clear development plan.",
      action: { label: "Talk to us", path: "/contact" },
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Software services built around real business workflows.",
      description:
        "Kynetix Labs helps companies design and build mobile apps, web platforms, cloud-backed dashboards, connected operations tools, and custom automation workflows.",
      primaryAction: { label: "Discuss a project", path: "/contact" },
      secondaryAction: { label: "View product directions", path: "/products", variant: "outline" as const },
    },
    fit: {
      eyebrow: "Delivery fit",
      title: "Need something specific to your company?",
      description:
        "Every project has different users, data, workflows, and constraints. We start by understanding the business goal, then shape a practical build plan.",
      action: { label: "Start a conversation", path: "/contact" },
    },
  },
  products: {
    hero: {
      eyebrow: "Product directions",
      title: "Clear software packages for common business operations.",
      description:
        "These product directions show the kinds of complete systems Kynetix Labs can shape for clients: retail tools, workflow dashboards, connected operations portals, and client-facing platforms.",
      primaryAction: { label: "Request a product plan", path: "/contact" },
      secondaryAction: { label: "Explore services", path: "/services", variant: "outline" as const },
    },
    planning: {
      eyebrow: "Custom product planning",
      title: "Your company may need a different system.",
      description:
        "The best product package depends on your customers, staff workflows, data, payments, devices, and reporting needs. We can define a practical build plan before development starts.",
      action: { label: "Plan a product", path: "/contact" },
    },
  },
  blog: {
    hero: {
      eyebrow: "Insights",
      title: "Ideas for better software planning and delivery.",
      description:
        "Practical notes on product planning, reusable interfaces, operations dashboards, and the thinking behind maintainable digital systems.",
      action: { label: "Discuss your project", path: "/contact" },
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Tell us what you want to build.",
      description:
        "Share the project idea, business problem, workflow, or website goal. We will help you shape the next practical step.",
    },
    discussion: {
      title: "Project discussion",
      description:
        "A good first message includes what you want to build, who will use it, the current problem, and any launch timeline you already have in mind.",
    },
  },
};

export const heroCapabilities = ["Mobile", "Web", "Cloud", "IoT", "Automation", "Smart POS"];

export const capabilityPillars: Array<IconContentItem & { label: string; value: string }> = [
  {
    label: "Digital product engineering",
    value: "Mobile + Web",
    title: "Digital product engineering",
    description: "Apps, portals, dashboards, and workflows designed around real users and measurable business goals.",
    icon: MonitorSmartphone,
  },
  {
    label: "Connected business operations",
    value: "IoT + POS",
    title: "Connected business operations",
    description: "Retail, device, and operational software that connects physical work with digital control.",
    icon: Network,
  },
  {
    label: "Workflow automation",
    value: "Data + Logic",
    title: "Workflow automation",
    description: "Dashboards, alerts, approvals, and business tools that reduce manual work and improve decisions.",
    icon: Workflow,
  },
  {
    label: "Reliable delivery model",
    value: "Cloud + Quality",
    title: "Reliable delivery model",
    description: "Clean architecture, responsive interfaces, performance discipline, and maintainable handover.",
    icon: CloudCog,
  },
];

export const homeServices = [
  {
    eyebrow: "01 / Product systems",
    title: "Mobile and web platforms",
    description:
      "Customer apps, business portals, dashboards, booking systems, marketplaces, and SaaS interfaces with clean UX and scalable frontend structure.",
    icon: Smartphone,
    highlights: ["React / Vite interfaces", "Mobile-ready product thinking", "Admin and customer portals"],
  },
  {
    eyebrow: "02 / Business automation",
    title: "Workflow and data tools",
    description:
      "Internal tools, reporting flows, approval screens, smart summaries, and decision dashboards that help teams move faster with fewer manual steps.",
    icon: Workflow,
    highlights: ["Workflow dashboards", "Operational reports", "Data-driven product logic"],
  },
  {
    eyebrow: "03 / Connected systems",
    title: "IoT, POS, and cloud operations",
    description:
      "Smart retail, POS, device-connected apps, inventory/control flows, and cloud-backed operational systems for modern businesses.",
    icon: ShoppingCart,
    highlights: ["Smart POS interfaces", "Cloud integration", "Device-to-dashboard workflows"],
  },
];

export const homeProducts = [
  {
    name: "Smart POS Suite",
    category: "Retail operations",
    summary: "Billing, inventory, sales analytics, staff workflows, and owner dashboards for growing retail businesses.",
    icon: ScanLine,
  },
  {
    name: "Workflow Command Center",
    category: "Business automation",
    summary: "Task queues, approvals, summaries, alerts, and exception handling for teams that need operational control.",
    icon: Cpu,
  },
  {
    name: "Connected Ops Portal",
    category: "IoT and cloud",
    summary: "Device states, telemetry, alerts, maintenance views, and operator actions in one clear control portal.",
    icon: Gauge,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand the business goal",
    description: "Map the buyer, user journeys, operational bottlenecks, product goals, and success metrics before designing screens.",
  },
  {
    step: "02",
    title: "Design the product experience",
    description: "Create the visual direction, page structure, motion rules, reusable components, and conversion path before building deep features.",
  },
  {
    step: "03",
    title: "Build maintainable code",
    description: "Ship reusable React sections, typed content data, shared components, clean CSS layers, and performance-safe animation.",
  },
  {
    step: "04",
    title: "Test, optimize, and launch",
    description: "Validate build, lint, responsiveness, accessibility, SEO metadata, image budgets, analytics readiness, and deployment safety.",
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
    title: "Reliable delivery",
    description: "We keep scope, communication, and technical decisions clear so clients understand what is being built and why.",
  },
  {
    icon: Code2,
    title: "Maintainable engineering",
    description: "Reusable components, centralized content, and simple file names make the website easier to improve over time.",
  },
  {
    icon: Rocket,
    title: "Practical innovation",
    description: "We use modern ideas only when they improve speed, clarity, conversion, or business usefulness.",
  },
];

export const approachSteps = [
  {
    title: "Discover",
    description: "Clarify the business problem, target users, scope, priorities, risks, and launch goals.",
  },
  {
    title: "Plan",
    description: "Convert ideas into page flows, data needs, reusable UI patterns, and delivery milestones.",
  },
  {
    title: "Build",
    description: "Implement clear interfaces, responsive layouts, maintainable code, and testable release steps.",
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

export const services: ServiceContentItem[] = [
  {
    id: "mobile-web",
    icon: MonitorSmartphone,
    title: "Mobile and web applications",
    summary: "Customer-facing apps and web platforms designed for speed, clarity, and real business use.",
    description:
      "We build responsive product interfaces, admin portals, booking flows, dashboards, and client-facing systems with reusable React architecture and mobile-first thinking.",
    features: ["Responsive web applications", "Mobile app product flows", "Admin and customer portals", "Reusable component systems"],
  },
  {
    id: "cloud-business-systems",
    icon: CloudCog,
    title: "Cloud-backed business systems",
    summary: "Operational software that connects teams, data, workflows, and customer actions.",
    description:
      "We design dashboards, workflow tools, API-ready screens, reporting views, and business systems that can grow from launch to long-term operation.",
    features: ["Business dashboards", "Workflow and approval flows", "API-ready frontend structure", "Performance-aware architecture"],
  },
  {
    id: "iot-pos",
    icon: ShoppingCart,
    title: "IoT and smart POS tools",
    summary: "Retail, device, and operations interfaces that turn daily activity into clear control screens.",
    description:
      "We help businesses design connected dashboards for sales, inventory, device states, alerts, staff activity, and owner-level decision views.",
    features: ["Smart POS interfaces", "Inventory and sales views", "Device status dashboards", "Operational alerts and summaries"],
  },
  {
    id: "custom-automation",
    icon: Workflow,
    title: "Custom software and automation",
    summary: "Purpose-built tools for companies that need fewer manual steps and clearer decisions.",
    description:
      "We turn repeated manual tasks into structured workflows with clear forms, status states, operator actions, evidence views, and maintainable screen logic.",
    features: ["Internal tools", "Task and approval queues", "Status and evidence views", "Business process automation"],
  },
];

export const products: ProductContentItem[] = [
  {
    id: "smart-pos-suite",
    icon: ScanLine,
    title: "Smart POS Suite",
    category: "Retail operations",
    description:
      "A software direction for billing, inventory, sales analytics, staff workflows, and owner dashboards built around small and growing retailers.",
    features: ["Billing and sales screens", "Inventory visibility", "Staff workflow support", "Owner reporting dashboard"],
  },
  {
    id: "workflow-command-center",
    icon: Workflow,
    title: "Workflow Command Center",
    category: "Business operations",
    description:
      "A dashboard direction for teams that need task queues, approvals, exception handling, summaries, and clear operator actions.",
    features: ["Task queues", "Approval flows", "Exception handling", "Team activity summaries"],
  },
  {
    id: "connected-ops-portal",
    icon: Gauge,
    title: "Connected Ops Portal",
    category: "IoT and cloud",
    description:
      "A control portal direction for device states, telemetry views, alerts, maintenance workflows, and operational visibility.",
    features: ["Device state views", "Telemetry summaries", "Alert workflows", "Maintenance actions"],
  },
];

export const articles: ArticleContentItem[] = [
  {
    title: "How to plan a software project before writing code",
    excerpt:
      "A clear project starts with the business problem, users, workflows, risks, and launch scope before screens and code are created.",
    author: "Kynetix Labs",
    readTime: "6 min read",
    category: "Planning",
    slug: "software-project-planning",
  },
  {
    title: "Why reusable UI components matter for business websites",
    excerpt:
      "Reusable sections reduce design drift, speed up future pages, and make animated websites easier to maintain without rewriting every screen.",
    author: "Kynetix Labs",
    readTime: "5 min read",
    category: "Frontend",
    slug: "reusable-ui-components",
  },
  {
    title: "Turning operations into dashboards clients can understand",
    excerpt:
      "Good dashboards organize statuses, actions, metrics, and exceptions so teams can make faster decisions with less confusion.",
    author: "Kynetix Labs",
    readTime: "7 min read",
    category: "Operations",
    slug: "operations-dashboard-design",
  },
];

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
    value: "Usually within 24 hours",
  },
];

export const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Insights", path: "/blog" },
  ],
  services: [
    { name: "Mobile & Web Applications", path: "/services#mobile-web" },
    { name: "Cloud-backed Business Systems", path: "/services#cloud-business-systems" },
    { name: "IoT & Smart POS Tools", path: "/services#iot-pos" },
    { name: "Custom Software & Automation", path: "/services#custom-automation" },
  ],
  build: [
    { name: "Start a Project", path: "/contact" },
    { name: "Explore Services", path: "/services" },
    { name: "View Products", path: "/products" },
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
      url: `${company.siteUrl}/services#${service.id}`,
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
