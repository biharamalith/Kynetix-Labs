export interface InterfaceSurfaceToken {
  name: string;
  className: string;
  purpose: string;
}

export interface InteractionToken {
  name: string;
  value: string;
  rule: string;
}

export interface InterfaceRhythmToken {
  name: string;
  desktop: string;
  mobile: string;
  rule: string;
}

export const interfaceSurfaces: InterfaceSurfaceToken[] = [
  {
    name: "Quiet glass",
    className: "content-card",
    purpose: "Default card surface for readable content, light proof cards, and repeated grids.",
  },
  {
    name: "Elevated glass",
    className: "content-card-elevated",
    purpose: "Higher-emphasis panels that need more depth without becoming noisy or fake-3D.",
  },
  {
    name: "Strong glass",
    className: "content-card-strong",
    purpose: "Hero-adjacent cards, service-detail cards, and premium feature panels with stronger contrast.",
  },
];

export const interactionTokens: InteractionToken[] = [
  {
    name: "Primary CTA",
    value: "site-button-primary",
    rule: "Use once or twice per view for the highest-value action only.",
  },
  {
    name: "Secondary CTA",
    value: "site-button-outline",
    rule: "Use for exploration paths, proof, process, or detail routes.",
  },
  {
    name: "Quiet CTA",
    value: "site-button-ghost",
    rule: "Use for lower-emphasis links where a button shape is still helpful.",
  },
  {
    name: "Focus ring",
    value: "focus-visible:ring-white",
    rule: "Every interactive primitive must keep a clear keyboard focus state.",
  },
];

export const interfaceRhythm: InterfaceRhythmToken[] = [
  {
    name: "Page section",
    desktop: "7rem to 9rem vertical rhythm",
    mobile: "4.5rem to 5.5rem vertical rhythm",
    rule: "Use wide spacing for story transitions and compact spacing only for support sections.",
  },
  {
    name: "Card grid",
    desktop: "1.5rem to 2rem grid gap",
    mobile: "1rem to 1.25rem grid gap",
    rule: "Keep grid density readable before adding motion or media layers.",
  },
  {
    name: "Hero actions",
    desktop: "inline action stack with primary/secondary hierarchy",
    mobile: "vertical action stack with full hit targets",
    rule: "Primary action stays first, secondary action stays visually quieter.",
  },
];

export const interfaceQualityRules = [
  "Shared surfaces must use the card primitives instead of one-off panels.",
  "Buttons must keep focus-visible states and a clear primary/secondary hierarchy.",
  "Premium glow is a support layer, not the main content container.",
  "Spacing should create silence around important copy before adding cinematic media.",
] as const;
