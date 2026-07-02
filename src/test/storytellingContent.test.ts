import { describe, expect, it } from "vitest";

import { productPrinciples, productStories } from "@/content/products";
import { serviceDeliverableGroups, serviceProcessSteps, serviceStories } from "@/content/services";
import { products, services } from "@/lib/siteContent";

const hasDuplicates = (values: string[]) => new Set(values).size !== values.length;
const stableIdPattern = /^[a-z0-9-]+$/;

describe("storytelling content contracts", () => {
  it("keeps service stories outcome-led and reusable", () => {
    expect(serviceStories.length).toBeGreaterThanOrEqual(6);
    expect(hasDuplicates(serviceStories.map((service) => service.id))).toBe(false);

    for (const service of serviceStories) {
      expect(service.id).toMatch(stableIdPattern);
      expect(service.summary.length).toBeGreaterThan(50);
      expect(service.buyerFit.length).toBeGreaterThanOrEqual(3);
      expect(service.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(service.deliverables.length).toBeGreaterThanOrEqual(4);
      expect(service.useCases.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("keeps product stories truthful and buyer-specific", () => {
    expect(productStories.length).toBeGreaterThanOrEqual(4);
    expect(productPrinciples.length).toBeGreaterThanOrEqual(3);
    expect(hasDuplicates(productStories.map((product) => product.id))).toBe(false);

    for (const product of productStories) {
      expect(product.id).toMatch(stableIdPattern);
      expect(product.status.toLowerCase()).not.toContain("launched");
      expect(product.idealFor.length).toBeGreaterThanOrEqual(3);
      expect(product.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(product.capabilities.length).toBeGreaterThanOrEqual(4);
      expect(product.launchNote.length).toBeGreaterThan(40);
    }
  });

  it("keeps compatibility exports mapped from the content modules", () => {
    expect(services.map((service) => service.id)).toEqual(serviceStories.map((service) => service.id));
    expect(products.map((product) => product.id)).toEqual(productStories.map((product) => product.id));
  });

  it("defines a complete service delivery model", () => {
    expect(serviceDeliverableGroups.length).toBeGreaterThanOrEqual(4);
    expect(serviceProcessSteps.length).toBeGreaterThanOrEqual(4);

    for (const group of serviceDeliverableGroups) {
      expect(group.items.length).toBeGreaterThanOrEqual(4);
    }
  });
});
