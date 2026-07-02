import { describe, expect, it } from "vitest";
import { createCaseStudyPath, routes, sitemapEntries, staticPublicRoutes } from "@/config/routes";
import { caseStudies, caseStudyPaths, caseStudyProofPrinciples } from "@/content/caseStudies";
import { footerLinks, navLinks, seo } from "@/lib/siteContent";

const restrictedClaims = [/testimonial/i, /client logo/i, /revenue/i, /guaranteed/i, /certified/i, /Fortune\s*500/i];

const collectText = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(collectText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(collectText).join(" ");
  return "";
};

describe("case study content", () => {
  it("registers work routes across navigation, footer, sitemap, and SEO", () => {
    expect(staticPublicRoutes).toContain(routes.work);
    expect(sitemapEntries.map((entry) => entry.path)).toContain(routes.work);
    expect(navLinks.map((link) => link.path)).toContain(routes.work);
    expect(footerLinks.company.map((link) => link.path)).toContain(routes.work);
    expect(footerLinks.build.map((link) => link.path)).toContain(routes.work);
    expect(seo.work.title).toContain("Work");
  });

  it("keeps work examples proof-safe and routable", () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(4);
    expect(new Set(caseStudies.map((study) => study.slug)).size).toBe(caseStudies.length);

    for (const study of caseStudies) {
      expect(study.title).toBeTruthy();
      expect(study.challenge.length).toBeGreaterThan(80);
      expect(study.solution.length).toBeGreaterThan(80);
      expect(study.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(study.stack.length).toBeGreaterThanOrEqual(3);
      expect(study.architecture.length).toBeGreaterThanOrEqual(3);
      expect(study.stages.length).toBeGreaterThanOrEqual(3);
      expect(study.evidence.length).toBeGreaterThanOrEqual(3);
      expect(createCaseStudyPath(study.slug)).toBe(`/work/${study.slug}`);
    }

    expect(caseStudyPaths).toEqual(caseStudies.map((study) => createCaseStudyPath(study.slug)));
  });

  it("avoids fake proof and keeps proof principles explicit", () => {
    expect(caseStudyProofPrinciples.length).toBe(3);

    const publicText = collectText({ caseStudies, caseStudyProofPrinciples });
    for (const restrictedClaim of restrictedClaims) {
      expect(publicText).not.toMatch(restrictedClaim);
    }
  });
});
