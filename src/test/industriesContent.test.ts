import { describe, expect, it } from "vitest";

import { routes, sitemapEntries, staticPublicRoutes } from "@/config/routes";
import { industriesCopy, industryProfiles, industryProofPrinciples, industryUseCasePatterns } from "@/content/industries";
import { footerLinks, navLinks, seo } from "@/lib/siteContent";

const unsupportedClaims = ["ISO", "SOC 2", "HIPAA compliant", "guaranteed results", "client logo", "testimonial"];

describe("industry buyer content", () => {
  it("keeps the industries route registered across navigation, footer, sitemap, and SEO", () => {
    expect(routes.industries).toBe("/industries");
    expect(staticPublicRoutes).toContain(routes.industries);
    expect(sitemapEntries.map((entry) => entry.path)).toContain(routes.industries);
    expect(navLinks.map((link) => link.path)).toContain(routes.industries);
    expect(footerLinks.company.map((link) => link.path)).toContain(routes.industries);
    expect(seo.industries.title).toContain("Industries");
  });

  it("defines proof-safe industry profiles with usable project paths", () => {
    const slugs = new Set(industryProfiles.map((industry) => industry.slug));

    expect(industryProfiles.length).toBeGreaterThanOrEqual(6);
    expect(slugs.size).toBe(industryProfiles.length);

    for (const industry of industryProfiles) {
      expect(industry.title).toBeTruthy();
      expect(industry.summary.length).toBeGreaterThan(40);
      expect(industry.buyerPains.length).toBeGreaterThanOrEqual(3);
      expect(industry.systemFit.length).toBeGreaterThanOrEqual(2);
      expect(industry.useCases.length).toBeGreaterThanOrEqual(4);
      expect(industry.projectFit.length).toBeGreaterThanOrEqual(4);
      expect(industry.proofBoundary).toMatch(/not|does not|require|without/i);
      expect(industry.systemFit.every((fit) => fit.path.startsWith("/"))).toBe(true);
    }
  });

  it("keeps industry copy free from unsupported proof and compliance claims", () => {
    const combined = JSON.stringify({ industriesCopy, industryProfiles, industryProofPrinciples, industryUseCasePatterns });

    for (const claim of unsupportedClaims) {
      expect(combined).not.toContain(claim);
    }
  });
});
