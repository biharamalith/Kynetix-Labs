export const motionConfig = {
  loadingScreen: {
    storageKey: "kynetix-loading-screen-seen",
    minVisibleMs: 1450,
    exitDurationMs: 650,
  },
  hero: {
    introDelayMs: 180,
    visualDelayMs: 320,
    mediaDelayMs: 240,
    wordStepMs: 46,
    chipBaseDelayMs: 700,
    chipStepMs: 70,
  },
  reveal: {
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px",
  },
} as const;

export type MotionConfig = typeof motionConfig;
