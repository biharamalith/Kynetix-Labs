import { describe, expect, it } from "vitest";
import { motionConfig } from "@/lib/motionConfig";
import { homeCopy, navLinks, products, routes, seo, services } from "@/lib/siteContent";

const hasDuplicates = (values: string[]) => new Set(values).size !== values.length;

describe("site content registry", () => {
  it("keeps public navigation paths unique and mapped to central routes", () => {
    const routeValues = new Set<string>(Object.values(routes));
    const navPaths = navLinks.map((item) => item.path);

    expect(hasDuplicates(navPaths)).toBe(false);
    expect(navPaths.every((path) => routeValues.has(path))).toBe(true);
  });

  it("keeps service and product IDs stable for anchors and links", () => {
    const ids = [...services.map((service) => service.id), ...products.map((product) => product.id)];

    expect(hasDuplicates(ids)).toBe(false);
    expect(ids.every((id) => /^[a-z0-9-]+$/.test(id))).toBe(true);
  });

  it("defines SEO metadata for every public page", () => {
    Object.values(seo).forEach((page) => {
      expect(page.title.length).toBeGreaterThan(20);
      expect(page.description.length).toBeGreaterThan(50);
      expect(page.keywords.length).toBeGreaterThan(20);
    });
  });

  it("keeps motion settings and loading sequence centralized", () => {
    expect(motionConfig.loadingScreen.minVisibleMs).toBeGreaterThan(0);
    expect(motionConfig.hero.wordStepMs).toBeGreaterThan(0);
    expect(homeCopy.hero.loadingSequence.length).toBeGreaterThanOrEqual(3);
  });
});
