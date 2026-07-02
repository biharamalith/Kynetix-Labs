import { describe, expect, it } from "vitest";

import { cinematicHeroMedia, mediaQualityRules } from "@/config/media";
import { canPlayHeroVideo, getHeroMediaMode, isLowDataConnection, shouldUsePosterFallback } from "@/lib/media";

describe("cinematic hero media foundation", () => {
  it("keeps the first media branch in safe poster mode until video assets are budgeted", () => {
    expect(cinematicHeroMedia.mode).toBe("poster");
    expect(cinematicHeroMedia.videoSources).toHaveLength(0);
    expect(cinematicHeroMedia.budget.maxInitialPosterBytes).toBeLessThanOrEqual(120_000);
    expect(cinematicHeroMedia.budget.maxHeroVideoBytes).toBeLessThanOrEqual(1_800_000);
    expect(cinematicHeroMedia.safetyRules.some((rule) => rule.includes("Hero copy"))).toBe(true);
    expect(mediaQualityRules.some((rule) => rule.includes("poster fallback"))).toBe(true);
  });

  it("chooses poster fallback for reduced motion, low-data, mobile, or missing source contexts", () => {
    expect(shouldUsePosterFallback({ prefersReducedMotion: true, viewportWidth: 1440 })).toBe(true);
    expect(shouldUsePosterFallback({ prefersReducedMotion: false, saveData: true, viewportWidth: 1440 })).toBe(true);
    expect(shouldUsePosterFallback({ prefersReducedMotion: false, effectiveType: "2g", viewportWidth: 1440 })).toBe(true);
    expect(shouldUsePosterFallback({ prefersReducedMotion: false, viewportWidth: 390 })).toBe(true);
    expect(canPlayHeroVideo({ prefersReducedMotion: false, viewportWidth: 1440 }, 0)).toBe(false);
    expect(getHeroMediaMode({ prefersReducedMotion: false, viewportWidth: 1440 }, 0)).toBe("poster");
    expect(isLowDataConnection("slow-2g")).toBe(true);
  });
});
