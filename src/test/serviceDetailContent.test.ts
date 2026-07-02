import { describe, expect, it } from "vitest";

import { createServicePath, sitemapEntries, staticPublicRoutes } from "@/config/routes";
import { serviceDetails, serviceStories } from "@/content/services";
import { footerLinks, services } from "@/lib/siteContent";

const stableSlugPattern = /^[a-z0-9-]+$/;
const hasDuplicates = (values: string[]) => new Set(values).size !== values.length;

const bannedClaimPattern = /\b(iso|soc\s?2|certified|guaranteed|guarantee|24\/7|enterprise customer|fortune 500)\b/i;

describe("service detail content contracts", () => {
  it("defines dedicated buyer-facing service routes from centralized content", () => {
    expect(serviceDetails).toHaveLength(4);
    expect(hasDuplicates(serviceDetails.map((service) => service.slug))).toBe(false);

    for (const service of serviceDetails) {
      expect(service.slug).toMatch(stableSlugPattern);
      expect(staticPublicRoutes).toContain(createServicePath(service.slug));
      expect(sitemapEntries.map((entry) => entry.path)).toContain(createServicePath(service.slug));
      expect(service.seoTitle.length).toBeGreaterThan(45);
      expect(service.seoDescription.length).toBeGreaterThan(100);
      expect(service.buyerProblems.length).toBeGreaterThanOrEqual(3);
      expect(service.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(service.deliverables.length).toBeGreaterThanOrEqual(3);
      expect(service.architecture.length).toBeGreaterThanOrEqual(2);
      expect(service.fitSignals.length).toBeGreaterThanOrEqual(4);
      expect(service.faq.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("links overview service cards and footer links to valid service detail pages", () => {
    const detailPaths = serviceDetails.map((service) => createServicePath(service.slug));
    const overviewDetailPaths = serviceStories.map((service) => service.detailPath).filter(Boolean);

    for (const path of detailPaths) {
      expect(overviewDetailPaths).toContain(path);
      expect(footerLinks.services.map((link) => link.path)).toContain(path);
    }

    for (const service of services.filter((item) => item.detailPath?.startsWith("/services/"))) {
      expect(detailPaths).toContain(service.detailPath);
    }
  });

  it("keeps dedicated service content proof-safe", () => {
    const combinedCopy = serviceDetails
      .map((service) =>
        [
          service.title,
          service.summary,
          service.description,
          service.seoTitle,
          service.seoDescription,
          ...service.fitSignals,
          ...service.buyerProblems.flatMap((item) => [item.label, item.description]),
          ...service.outcomes.flatMap((item) => [item.label, item.description]),
          ...service.deliverables.flatMap((group) => [group.title, group.description, ...group.items]),
          ...service.architecture.flatMap((group) => [group.title, group.description, ...group.items]),
          ...service.faq.flatMap((item) => [item.question, item.answer]),
        ].join(" "),
      )
      .join(" ");

    expect(combinedCopy).not.toMatch(bannedClaimPattern);
  });
});
