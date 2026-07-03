import { routes } from "@/config/routes";

export type ScrollStoryRuntimeMode = "cinematic" | "fallback";

export interface ScrollStoryAction {
  label: string;
  path: string;
}

export interface ScrollStorySectionContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ScrollStoryAction;
  secondaryAction: ScrollStoryAction;
}

export interface ScrollStoryStep {
  id: string;
  label: string;
  title: string;
  description: string;
  signal: string;
  outcome: string;
}

export interface ScrollStoryBudget {
  minEnhancedWidthPx: number;
  maxStorySteps: number;
  maxAnimatedRails: number;
  revealDelayStepMs: number;
  lowDataEffectiveTypes: readonly string[];
}

export interface ScrollStoryConfig {
  id: string;
  preferredMode: ScrollStoryRuntimeMode;
  ariaLabel: string;
  section: ScrollStorySectionContent;
  steps: readonly ScrollStoryStep[];
  budget: ScrollStoryBudget;
  safetyRules: readonly string[];
}

export const scrollStoryConfig: ScrollStoryConfig = {
  id: "kynetix-scroll-storytelling-system",
  preferredMode: "cinematic",
  ariaLabel: "Cinematic scroll story showing how Kynetix Labs moves from signal to launch-ready software",
  section: {
    eyebrow: "Scroll story",
    title: "A build journey that reveals itself in controlled stages.",
    description:
      "The home page now has a reusable storytelling layer: short stages, sticky visual rhythm, and reduced-motion-safe fallbacks that make the site feel more cinematic without hiding the business message.",
    primaryAction: {
      label: "View the Process",
      path: routes.process,
    },
    secondaryAction: {
      label: "Start a Project",
      path: routes.contact,
    },
  },
  steps: [
    {
      id: "signal-capture",
      label: "Signal capture",
      title: "Decode the pressure before the screen is designed.",
      description:
        "Buyer goals, user journeys, constraints, and launch signals are mapped first so the interface has a clear reason to exist.",
      signal: "Brief / workflow / user pressure",
      outcome: "A scoped product direction",
    },
    {
      id: "interface-path",
      label: "Interface path",
      title: "Shape the decision surface with fewer, sharper moves.",
      description:
        "Page flow, controls, cards, forms, and CTAs are arranged into a readable surface before deeper system behavior expands.",
      signal: "UX structure / content hierarchy",
      outcome: "A controlled visual system",
    },
    {
      id: "system-assembly",
      label: "System assembly",
      title: "Connect reusable components into a maintainable layer.",
      description:
        "Typed content, shared components, route contracts, media safety, and quality checks keep the website ready for future product storytelling.",
      signal: "Components / routes / safety rules",
      outcome: "A scalable frontend foundation",
    },
    {
      id: "launch-readiness",
      label: "Launch readiness",
      title: "Prove the experience before it goes live.",
      description:
        "Lint, typecheck, test, build, audit, responsive behavior, SEO metadata, and fallback paths stay visible as release evidence.",
      signal: "Validation / SEO / accessibility",
      outcome: "A release-ready digital presence",
    },
  ],
  budget: {
    minEnhancedWidthPx: 960,
    maxStorySteps: 4,
    maxAnimatedRails: 3,
    revealDelayStepMs: 110,
    lowDataEffectiveTypes: ["slow-2g", "2g"],
  },
  safetyRules: [
    "Scroll storytelling must stay below the hero and must not interfere with the cinematic hero video.",
    "Reduced-motion, data-saver, low-network, and narrow-screen contexts keep the story readable without sticky motion pressure.",
    "The section uses CSS and existing reveal primitives only; no heavy scroll library is introduced.",
    "The story must explain real delivery discipline and must not invent client proof, dashboards, or metrics.",
  ],
} as const;

export const scrollStoryQualityRules = [
  "Story stages must come from the centralized config so future homepage edits do not duplicate copy.",
  "Motion is decorative; content, links, and headings remain visible without scroll enhancement.",
  "Sticky visuals belong in reusable storytelling components, not one-off page markup.",
  "The scroll story must never re-add labels or panels on top of the hero video layer.",
] as const;
