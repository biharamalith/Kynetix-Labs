import { describe, expect, it } from "vitest";

import { kineticCoreConfig, kineticCoreQualityRules } from "@/config/kineticCore";
import {
  getKineticCoreRuntimeMode,
  isKineticCoreWithinBudget,
  shouldUseKineticCoreFallback,
} from "@/lib/visualRuntime";

describe("kinetic core configuration", () => {
  it("keeps the kinetic core within the first foundation budget", () => {
    expect(kineticCoreConfig.preferredMode).toBe("css-3d");
    expect(isKineticCoreWithinBudget()).toBe(true);
    expect(kineticCoreConfig.nodes.length).toBeLessThanOrEqual(kineticCoreConfig.budget.maxAnimatedNodes);
    expect(kineticCoreConfig.layers.length).toBeLessThanOrEqual(kineticCoreConfig.budget.maxDepthLayers);
  });

  it("defines safety rules that keep the 3D-style layer separate from the hero video", () => {
    expect(kineticCoreConfig.safetyRules.some((rule) => rule.includes("below the hero"))).toBe(true);
    expect(kineticCoreConfig.safetyRules.some((rule) => rule.includes("heavy model files"))).toBe(true);
    expect(kineticCoreQualityRules.some((rule) => rule.includes("home hero video remains clean"))).toBe(true);
  });

  it("falls back for reduced motion, narrow screens, data saver, and low-network contexts", () => {
    expect(
      shouldUseKineticCoreFallback({
        prefersReducedMotion: true,
        viewportWidth: 1280,
        saveData: false,
        effectiveType: null,
      }),
    ).toBe(true);

    expect(
      shouldUseKineticCoreFallback({
        prefersReducedMotion: false,
        viewportWidth: 390,
        saveData: false,
        effectiveType: null,
      }),
    ).toBe(true);

    expect(
      shouldUseKineticCoreFallback({
        prefersReducedMotion: false,
        viewportWidth: 1280,
        saveData: true,
        effectiveType: null,
      }),
    ).toBe(true);

    expect(
      shouldUseKineticCoreFallback({
        prefersReducedMotion: false,
        viewportWidth: 1280,
        saveData: false,
        effectiveType: "2g",
      }),
    ).toBe(true);

    expect(
      getKineticCoreRuntimeMode({
        prefersReducedMotion: false,
        viewportWidth: 1280,
        saveData: false,
        effectiveType: "4g",
      }),
    ).toBe("css-3d");
  });
});
