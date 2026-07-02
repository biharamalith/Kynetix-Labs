import { describe, expect, it } from "vitest";
import { routes, sitemapEntries, staticPublicRoutes } from "@/config/routes";
import { processAssuranceItems, processPhases } from "@/content/process";
import { deliveryBoundaries, qualityPrinciples, securityQualityControls } from "@/content/securityQuality";
import { footerLinks, seo } from "@/lib/siteContent";

const restrictedClaims = [/\bISO\b/i, /\bSOC\s*2\b/i, /\bPCI\b/i, /certified/i, /24\/7/i];
const collectText = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(collectText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(collectText).join(" ");
  return "";
};

describe("process and trust content", () => {
  it("registers process and security-quality routes across public route surfaces", () => {
    expect(staticPublicRoutes).toContain(routes.process);
    expect(staticPublicRoutes).toContain(routes.securityQuality);
    expect(sitemapEntries.map((entry) => entry.path)).toEqual(expect.arrayContaining([routes.process, routes.securityQuality]));
    expect(footerLinks.build.map((link) => link.path)).toEqual(expect.arrayContaining([routes.process, routes.securityQuality]));
    expect(seo.process.title).toContain("Software Delivery Process");
    expect(seo.securityQuality.title).toContain("Security & Quality");
  });

  it("keeps delivery phases reviewable and ordered", () => {
    expect(processPhases.length).toBeGreaterThanOrEqual(5);

    for (const phase of processPhases) {
      expect(phase.step).toMatch(/^\d{2}$/);
      expect(phase.activities.length).toBeGreaterThanOrEqual(3);
      expect(phase.evidence.length).toBeGreaterThanOrEqual(2);
    }

    expect(processAssuranceItems.length).toBe(3);
  });

  it("keeps quality controls practical without fake certification claims", () => {
    expect(qualityPrinciples.length).toBeGreaterThanOrEqual(3);
    expect(securityQualityControls.length).toBeGreaterThanOrEqual(5);
    expect(deliveryBoundaries.length).toBeGreaterThanOrEqual(3);

    const publicText = collectText({ qualityPrinciples, securityQualityControls, deliveryBoundaries });
    for (const restrictedClaim of restrictedClaims) {
      expect(publicText).not.toMatch(restrictedClaim);
    }
  });
});
