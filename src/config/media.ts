export type HeroMediaMode = "poster" | "video";

export interface HeroVideoSource {
  src: string;
  type: "video/mp4" | "video/webm";
  maxBytes: number;
}

export interface HeroPosterSignal {
  label: string;
  value: string;
}

export interface HeroMediaBudget {
  maxInitialPosterBytes: number;
  maxHeroVideoBytes: number;
  mobileVideoMinWidthPx: number;
  lowDataEffectiveTypes: readonly string[];
}

export interface CinematicHeroMediaConfig {
  id: string;
  mode: HeroMediaMode;
  title: string;
  eyebrow: string;
  description: string;
  ariaLabel: string;
  posterAlt: string;
  posterTone: "industrial-cyan";
  videoSources: readonly HeroVideoSource[];
  posterSignals: readonly HeroPosterSignal[];
  budget: HeroMediaBudget;
  safetyRules: readonly string[];
}

export const cinematicHeroMedia: CinematicHeroMediaConfig = {
  id: "kynetix-home-cinematic-hero",
  mode: "poster",
  eyebrow: "Cinematic media foundation",
  title: "Media-ready hero stage",
  description:
    "A generated poster layer is used now so the hero can feel cinematic without shipping heavy video before the loading, motion, and data-safety rules are ready.",
  ariaLabel: "Cinematic Kynetix Labs hero media stage",
  posterAlt: "Abstract cyan industrial software system poster for the Kynetix Labs home hero",
  posterTone: "industrial-cyan",
  videoSources: [],
  posterSignals: [
    { label: "Mode", value: "Poster" },
    { label: "Motion", value: "Safe" },
    { label: "Load", value: "Instant" },
  ],
  budget: {
    maxInitialPosterBytes: 120_000,
    maxHeroVideoBytes: 1_800_000,
    mobileVideoMinWidthPx: 768,
    lowDataEffectiveTypes: ["slow-2g", "2g"],
  },
  safetyRules: [
    "Hero copy and primary actions must render before media enhancement.",
    "Video playback is disabled for reduced-motion, data-saver, and narrow mobile contexts.",
    "Hero video must be muted, inline, loop-safe, and replaceable with the poster layer.",
    "Poster mode remains the default until a compressed, budget-checked hero loop is added.",
  ],
} as const;

export const mediaQualityRules = [
  "Cinematic media must support a poster fallback before video sources are enabled.",
  "Large visual assets must be lazy or non-blocking and must not delay the hero heading.",
  "Reduced-motion users receive the still poster experience instead of video or aggressive animation.",
  "The first media branch should create architecture only; production video and 3D arrive in separate budgeted branches.",
] as const;
