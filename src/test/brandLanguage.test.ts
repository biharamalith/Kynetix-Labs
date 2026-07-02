import { describe, expect, it } from "vitest";

import { brandTonePrinciples, brandVoice, ctaCopy, pageHeroSignals, weakCopyPatterns } from "@/content/brandLanguage";
import { caseStudyCopy } from "@/content/caseStudies";
import { projectBriefCopy } from "@/content/contact";
import { industriesCopy } from "@/content/industries";
import { productStoryCopy } from "@/content/products";
import { processPageContent } from "@/content/process";
import { securityQualityPageContent } from "@/content/securityQuality";
import { serviceStoryCopy } from "@/content/services";
import { smartPosContent } from "@/content/smartPos";
import { homeCopy, pageCopy } from "@/lib/siteContent";

const collectText = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(collectText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(collectText).join(" ");
  return "";
};

describe("premium brand language system", () => {
  it("defines a concise premium technology voice and shared CTA language", () => {
    expect(brandVoice.promise).toContain("speed, control, and trust");
    expect(brandTonePrinciples).toHaveLength(4);
    expect(new Set(Object.values(ctaCopy)).size).toBe(Object.values(ctaCopy).length);
    expect(pageHeroSignals).toHaveLength(3);
  });

  it("keeps public page copy away from weak generic agency language", () => {
    const publicCopy = collectText({
      caseStudyCopy,
      homeCopy,
      industriesCopy,
      pageCopy,
      productStoryCopy,
      processPageContent,
      projectBriefCopy,
      securityQualityPageContent,
      serviceStoryCopy,
      smartPosContent,
    }).toLowerCase();

    for (const pattern of weakCopyPatterns) {
      expect(publicCopy).not.toContain(pattern);
    }
  });

  it("uses premium action language for primary buyer paths", () => {
    const actions = [
      homeCopy.hero.primaryAction.label,
      homeCopy.cta.primaryAction.label,
      pageCopy.services.hero.primaryAction.label,
      pageCopy.products.hero.primaryAction.label,
      smartPosContent.hero.primaryAction.label,
      projectBriefCopy.fallbackLabel,
    ];

    expect(actions).toEqual(expect.arrayContaining([ctaCopy.startProject, ctaCopy.planBuild, ctaCopy.briefSmartPos]));
    expect(actions.every((label) => label.length >= 12)).toBe(true);
  });
});
