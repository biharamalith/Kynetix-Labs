import {
  BrainCircuit,
  CloudCog,
  Cpu,
  Gauge,
  Layers3,
  LineChart,
  LockKeyhole,
  MonitorSmartphone,
  Network,
  Rocket,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Insights", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const heroCapabilities = ["Mobile", "Web", "Cloud", "IoT", "AI", "Smart POS"];

export const capabilityPillars = [
  {
    label: "Digital product engineering",
    value: "Mobile + Web",
    description: "Interfaces, workflows, portals, and admin systems designed for real users.",
    icon: MonitorSmartphone,
  },
  {
    label: "Connected operations",
    value: "IoT + POS",
    description: "Device, retail, and operational software that connects physical work with digital control.",
    icon: Network,
  },
  {
    label: "Intelligent automation",
    value: "AI + Data",
    description: "Smart workflows, dashboards, and decision support built around business outcomes.",
    icon: BrainCircuit,
  },
  {
    label: "Scalable delivery",
    value: "Cloud + Quality",
    description: "Maintainable architecture, performance budgets, deployment discipline, and clean handover.",
    icon: CloudCog,
  },
];

export const serviceCards = [
  {
    eyebrow: "01 / Product systems",
    title: "Mobile and web platforms",
    description:
      "Premium apps, portals, dashboards, booking systems, marketplaces, and SaaS interfaces with clean UX and scalable frontend architecture.",
    icon: Smartphone,
    highlights: ["React / Vite", "Flutter-ready product thinking", "Admin and customer portals"],
  },
  {
    eyebrow: "02 / Automation systems",
    title: "AI, workflow, and data tools",
    description:
      "Business automation, reporting flows, AI-assisted features, internal tools, and decision dashboards that reduce manual work.",
    icon: Workflow,
    highlights: ["AI-assisted workflows", "Operational dashboards", "Data-driven product logic"],
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

export const productShowcase = [
  {
    name: "Smart POS Suite",
    category: "Retail operations",
    summary: "A premium direction for billing, inventory, sales analytics, staff workflows, and owner dashboards.",
    icon: ScanLine,
  },
  {
    name: "AI Workflow Console",
    category: "Business automation",
    summary: "A reusable interface pattern for AI-assisted approvals, task queues, summaries, and exception handling.",
    icon: Cpu,
  },
  {
    name: "Connected Ops Portal",
    category: "IoT and cloud",
    summary: "A control-plane style portal for device states, alerts, telemetry, maintenance, and operator actions.",
    icon: Gauge,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover the business engine",
    description: "Map the real buyer, user journeys, operational bottlenecks, product goals, and success metrics before designing screens.",
  },
  {
    step: "02",
    title: "Design the premium system",
    description: "Build the brand, motion rules, reusable UI components, page rhythm, and conversion path before heavy visuals are added.",
  },
  {
    step: "03",
    title: "Engineer reusable code",
    description: "Ship maintainable React sections, typed content data, shared components, clean CSS layers, and performance-safe animation.",
  },
  {
    step: "04",
    title: "Optimize, test, and launch",
    description: "Validate build, lint, responsiveness, accessibility, SEO metadata, image budgets, analytics readiness, and deployment safety.",
  },
];

export const techSignals = [
  { label: "React architecture", icon: Layers3 },
  { label: "Motion system", icon: Zap },
  { label: "Cloud-ready UX", icon: CloudCog },
  { label: "Performance budgets", icon: LineChart },
  { label: "Security-aware flows", icon: LockKeyhole },
  { label: "Quality gates", icon: ShieldCheck },
  { label: "Scalable delivery", icon: Rocket },
];

export const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Insights", path: "/blog" },
  ],
  services: [
    { name: "Mobile & Web Platforms", path: "/services#mobile" },
    { name: "AI & Workflow Systems", path: "/services#ai" },
    { name: "IoT & Smart POS", path: "/services#iot" },
    { name: "Cloud Product Engineering", path: "/services#cloud" },
  ],
  build: [
    { name: "Start a Project", path: "/contact" },
    { name: "Explore Capabilities", path: "/services" },
    { name: "View Products", path: "/products" },
  ],
};
