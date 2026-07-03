export type HeroMediaMode = "poster" | "video";

export interface HeroVideoSource {
  src: string;
  type: "video/mp4" | "video/webm";
  label: string;
  maxBytes: number;
}

export interface HeroPosterAsset {
  src: string;
  type: "image/webp";
  width: number;
  height: number;
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
  poster: HeroPosterAsset;
  videoDurationSeconds: number;
  videoSources: readonly HeroVideoSource[];
  posterSignals: readonly HeroPosterSignal[];
  budget: HeroMediaBudget;
  safetyRules: readonly string[];
}

export const cinematicHeroMedia: CinematicHeroMediaConfig = {
  id: "kynetix-home-cinematic-hero",
  mode: "video",
  eyebrow: "Cinematic systems sequence",
  title: "Kinetic software infrastructure in motion",
  description:
    "A short abstract hero loop gives the landing page a premium industrial rhythm while preserving poster-first loading, silent playback, and safe fallback behavior.",
  ariaLabel: "Abstract cinematic Kynetix Labs hero sequence with cyan industrial systems in motion",
  posterAlt: "Abstract cyan industrial software system poster for the Kynetix Labs home hero",
  posterTone: "industrial-cyan",
  poster: {
    src: "/media/hero/kynetix-cinematic-poster.webp",
    type: "image/webp",
    width: 960,
    height: 540,
    maxBytes: 120_000,
  },
  videoDurationSeconds: 3,
  videoSources: [
    {
      src: "/media/hero/kynetix-cinematic-loop.webm",
      type: "video/webm",
      label: "WebM primary loop",
      maxBytes: 450_000,
    },
    {
      src: "/media/hero/kynetix-cinematic-loop.mp4",
      type: "video/mp4",
      label: "MP4 fallback loop",
      maxBytes: 300_000,
    },
  ],
  posterSignals: [
    { label: "Mode", value: "Sequence" },
    { label: "Motion", value: "Silent" },
    { label: "Load", value: "Poster first" },
  ],
  budget: {
    maxInitialPosterBytes: 120_000,
    maxHeroVideoBytes: 900_000,
    mobileVideoMinWidthPx: 768,
    lowDataEffectiveTypes: ["slow-2g", "2g"],
  },
  safetyRules: [
    "Hero copy and primary actions must render before media enhancement.",
    "Video playback is disabled for reduced-motion, data-saver, and narrow mobile contexts.",
    "Hero video must be muted, inline, loop-safe, and replaceable with the poster layer.",
    "Poster-first loading keeps the hero readable while the cinematic sequence becomes available.",
  ],
} as const;

export const mediaQualityRules = [
  "Cinematic media must support a poster fallback before video sources are enabled.",
  "Large visual assets must be lazy or non-blocking and must not delay the hero heading.",
  "Reduced-motion users receive the still poster experience instead of video or aggressive animation.",
  "Hero video assets must remain short, silent, compressed, local, and budget-checked before handover.",
] as const;
