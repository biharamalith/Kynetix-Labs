import { routes } from "@/config/routes";

export type KineticCoreRuntimeMode = "css-3d" | "fallback";

export interface KineticCoreLayer {
  id: string;
  label: string;
  description: string;
  depth: number;
}

export interface KineticCoreNode {
  id: string;
  label: string;
  orbit: 1 | 2 | 3;
  angle: number;
}

export interface KineticCoreRuntimeBudget {
  mobileMinWidthPx: number;
  maxAnimatedNodes: number;
  maxDepthLayers: number;
  lowDataEffectiveTypes: readonly string[];
}

export interface KineticCoreSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  proofNote: string;
  primaryAction: {
    label: string;
    path: string;
  };
}

export interface KineticCoreConfig {
  id: string;
  preferredMode: KineticCoreRuntimeMode;
  ariaLabel: string;
  section: KineticCoreSectionContent;
  layers: readonly KineticCoreLayer[];
  nodes: readonly KineticCoreNode[];
  budget: KineticCoreRuntimeBudget;
  safetyRules: readonly string[];
}

export const kineticCoreConfig: KineticCoreConfig = {
  id: "kynetix-kinetic-core-foundation",
  preferredMode: "css-3d",
  ariaLabel: "Abstract layered kinetic core visual showing software systems, interfaces, data, and delivery control",
  section: {
    eyebrow: "Kinetic core",
    title: "A controlled visual system for the next cinematic layer.",
    description:
      "The site now has a lightweight 3D-style foundation that can support future motion and product storytelling without disturbing the hero video, mobile performance, or reduced-motion users.",
    proofNote:
      "This is a visual architecture foundation only. It avoids heavy model files and keeps the home hero video clean.",
    primaryAction: {
      label: "Plan Your Build",
      path: routes.contact,
    },
  },
  layers: [
    {
      id: "interface-layer",
      label: "Interface layer",
      description: "Screens, controls, and customer-facing surfaces stay sharp and readable.",
      depth: 1,
    },
    {
      id: "logic-layer",
      label: "Workflow layer",
      description: "Business logic, automation, and approvals are shaped before visual polish.",
      depth: 2,
    },
    {
      id: "data-layer",
      label: "Data layer",
      description: "Operational data paths are represented as controlled signals instead of fake dashboards.",
      depth: 3,
    },
    {
      id: "delivery-layer",
      label: "Delivery layer",
      description: "Build stages, handoff, and quality gates remain visible in the product story.",
      depth: 4,
    },
  ],
  nodes: [
    { id: "mobile", label: "Mobile", orbit: 1, angle: 20 },
    { id: "cloud", label: "Cloud", orbit: 2, angle: 105 },
    { id: "pos", label: "POS", orbit: 1, angle: 195 },
    { id: "iot", label: "IoT", orbit: 3, angle: 280 },
  ],
  budget: {
    mobileMinWidthPx: 900,
    maxAnimatedNodes: 4,
    maxDepthLayers: 4,
    lowDataEffectiveTypes: ["slow-2g", "2g"],
  },
  safetyRules: [
    "The kinetic core must render below the hero and must never place labels over the hero video.",
    "Reduced-motion, data-saver, low-network, and narrow-screen contexts receive a static fallback.",
    "The first implementation uses CSS depth only and does not ship heavy model files or WebGL dependencies.",
    "Future 3D upgrades must keep the text, CTA, and page layout independent from visual loading.",
  ],
} as const;

export const kineticCoreQualityRules = [
  "Visual depth belongs in reusable components, not duplicated page-specific markup.",
  "The home hero video remains clean and separate from kinetic core overlays.",
  "Any future model or canvas layer must have a static fallback and a clear asset budget.",
  "Motion must remain decorative, silent, and disabled when the user or device asks for less motion.",
] as const;
