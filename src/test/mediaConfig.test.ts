import { describe, expect, it } from "vitest";

import { cinematicHeroMedia, mediaQualityRules } from "@/config/media";
import {
  canPlayHeroVideo,
  getHeroMediaMode,
  getHeroVideoBudgetTotal,
  isHeroVideoWithinBudget,
  isLowDataConnection,
  shouldUsePosterFallback,
} from "@/lib/media";

describe("cinematic hero video sequence", () => {
  it("enables a compressed local video sequence with poster-first budget discipline", () => {
    expect(cinematicHeroMedia.mode).toBe("video");
    expect(cinematicHeroMedia.poster.src).toBe("/media/hero/kynetix-cinematic-poster.webp");
    expect(cinematicHeroMedia.videoSources).toHaveLength(2);
    expect(cinematicHeroMedia.videoSources[0].type).toBe("video/webm");
    expect(cinematicHeroMedia.videoSources[1].type).toBe("video/mp4");
    expect(cinematicHeroMedia.videoDurationSeconds).toBeLessThanOrEqual(4);
    expect(cinematicHeroMedia.budget.maxInitialPosterBytes).toBeLessThanOrEqual(120_000);
    expect(cinematicHeroMedia.budget.maxHeroVideoBytes).toBeLessThanOrEqual(900_000);
    expect(getHeroVideoBudgetTotal(cinematicHeroMedia.videoSources)).toBeLessThanOrEqual(cinematicHeroMedia.budget.maxHeroVideoBytes);
    expect(isHeroVideoWithinBudget(cinematicHeroMedia.videoSources)).toBe(true);
    expect(cinematicHeroMedia.safetyRules.some((rule) => rule.includes("Hero copy"))).toBe(true);
    expect(mediaQualityRules.some((rule) => rule.includes("compressed"))).toBe(true);
  });


  it("chooses poster fallback for reduced motion, low-data, mobile, or missing source contexts", () => {
    expect(shouldUsePosterFallback({ prefersReducedMotion: true, viewportWidth: 1440 })).toBe(true);
    expect(shouldUsePosterFallback({ prefersReducedMotion: false, saveData: true, viewportWidth: 1440 })).toBe(true);
    expect(shouldUsePosterFallback({ prefersReducedMotion: false, effectiveType: "2g", viewportWidth: 1440 })).toBe(true);
    expect(shouldUsePosterFallback({ prefersReducedMotion: false, viewportWidth: 390 })).toBe(true);
    expect(canPlayHeroVideo({ prefersReducedMotion: false, viewportWidth: 1440 }, cinematicHeroMedia.videoSources.length)).toBe(true);
    expect(canPlayHeroVideo({ prefersReducedMotion: false, viewportWidth: 1440 }, 0)).toBe(false);
    expect(getHeroMediaMode({ prefersReducedMotion: false, viewportWidth: 1440 }, cinematicHeroMedia.videoSources.length)).toBe("video");
    expect(getHeroMediaMode({ prefersReducedMotion: false, viewportWidth: 390 }, cinematicHeroMedia.videoSources.length)).toBe("poster");
    expect(isLowDataConnection("slow-2g")).toBe(true);
  });
});
