import { describe, expect, it } from "vitest";

import { routes, sitemapEntries, staticPublicRoutes } from "@/config/routes";
import {
  smartPosBuildPlan,
  smartPosContent,
  smartPosModules,
  smartPosOutcomes,
  smartPosRoute,
  smartPosWorkflow,
} from "@/content/smartPos";
import { productStories } from "@/content/products";
import { products, seo } from "@/lib/siteContent";

const hasDuplicates = (values: string[]) => new Set(values).size !== values.length;
const stableIdPattern = /^[a-z0-9-]+$/;

const bannedOverclaims = ["launched", "live customer", "proven revenue", "guaranteed", "ready-made for every store"];

describe("Smart POS product content", () => {
  it("keeps the Smart POS route, sitemap, SEO, and product registry aligned", () => {
    expect(smartPosRoute).toBe(routes.smartPos);
    expect(staticPublicRoutes).toContain(routes.smartPos);
    expect(sitemapEntries.map((entry) => entry.path)).toContain(routes.smartPos);
    expect(seo.smartPos.title).toContain("Smart POS");

    const smartPosStory = productStories.find((product) => product.id === "smart-pos-suite");
    expect(smartPosStory?.detailPath).toBe(routes.smartPos);

    const mappedProduct = products.find((product) => product.id === "smart-pos-suite");
    expect(mappedProduct?.detailPath).toBe(routes.smartPos);
  });

  it("keeps product copy truthful without fake launch claims", () => {
    const copyToCheck = [
      smartPosContent.status,
      smartPosContent.hero.description,
      smartPosContent.buildPlan.description,
      ...smartPosModules.flatMap((module) => [module.title, module.summary, ...module.capabilities]),
      ...smartPosWorkflow.flatMap((step) => [step.title, step.description]),
    ]
      .join(" ")
      .toLowerCase();

    for (const bannedClaim of bannedOverclaims) {
      expect(copyToCheck).not.toContain(bannedClaim);
    }

    expect(smartPosContent.status.toLowerCase()).toContain("pilot");
  });

  it("defines complete reusable Smart POS sections", () => {
    expect(smartPosModules.length).toBeGreaterThanOrEqual(4);
    expect(smartPosWorkflow.length).toBeGreaterThanOrEqual(4);
    expect(smartPosBuildPlan.length).toBeGreaterThanOrEqual(4);
    expect(smartPosOutcomes.length).toBeGreaterThanOrEqual(4);
    expect(hasDuplicates(smartPosModules.map((module) => module.id))).toBe(false);

    for (const module of smartPosModules) {
      expect(module.id).toMatch(stableIdPattern);
      expect(module.summary.length).toBeGreaterThan(70);
      expect(module.capabilities.length).toBeGreaterThanOrEqual(4);
    }

    for (const stage of smartPosBuildPlan) {
      expect(stage.outputs.length).toBeGreaterThanOrEqual(4);
    }
  });
});
