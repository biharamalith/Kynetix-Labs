import { describe, expect, it } from "vitest";

import { scrollStoryConfig, scrollStoryQualityRules } from "@/config/scrollStory";
import { getScrollStoryRuntimeMode, getScrollStoryStepDelay, isScrollStoryWithinBudget } from "@/lib/scrollRuntime";

describe("scroll storytelling config", () => {
  it("keeps the scroll story centralized and within the animation budget", () => {
    expect(scrollStoryConfig.id).toBe("kynetix-scroll-storytelling-system");
    expect(scrollStoryConfig.steps).toHaveLength(4);
    expect(isScrollStoryWithinBudget()).toBe(true);
    expect(scrollStoryConfig.safetyRules.join(" ").toLowerCase()).toContain("hero video");
    expect(scrollStoryQualityRules.join(" ").toLowerCase()).toContain("centralized config");
  });

  it("uses deterministic reveal delays from the configured rhythm", () => {
    expect(getScrollStoryStepDelay(0)).toBe(0);
    expect(getScrollStoryStepDelay(3)).toBe(scrollStoryConfig.budget.revealDelayStepMs * 3);
  });

  it("falls back for reduced motion, low data, and narrow viewport contexts", () => {
    expect(
      getScrollStoryRuntimeMode({
        prefersReducedMotion: false,
        viewportWidth: 1280,
        saveData: false,
        effectiveType: null,
      }),
    ).toBe("cinematic");

    expect(
      getScrollStoryRuntimeMode({
        prefersReducedMotion: true,
        viewportWidth: 1280,
        saveData: false,
        effectiveType: null,
      }),
    ).toBe("fallback");

    expect(
      getScrollStoryRuntimeMode({
        prefersReducedMotion: false,
        viewportWidth: 420,
        saveData: false,
        effectiveType: null,
      }),
    ).toBe("fallback");

    expect(
      getScrollStoryRuntimeMode({
        prefersReducedMotion: false,
        viewportWidth: 1280,
        saveData: true,
        effectiveType: null,
      }),
    ).toBe("fallback");
  });
});
