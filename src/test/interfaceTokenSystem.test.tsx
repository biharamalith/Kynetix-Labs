import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContentCard } from "@/components/site/ContentCard";
import { PageSection } from "@/components/site/PageSection";
import { SiteButton } from "@/components/site/SiteButton";
import { interfaceQualityRules, interfaceRhythm, interactionTokens, interfaceSurfaces } from "@/content/interfaceTokens";

describe("premium interface token system", () => {
  it("defines reusable surfaces, interactions, and rhythm rules", () => {
    expect(interfaceSurfaces).toHaveLength(3);
    expect(interfaceSurfaces.map((surface) => surface.className)).toEqual(
      expect.arrayContaining(["content-card", "content-card-elevated", "content-card-strong"]),
    );
    expect(interactionTokens.map((token) => token.value)).toEqual(
      expect.arrayContaining(["site-button-primary", "site-button-outline", "site-button-ghost"]),
    );
    expect(interfaceRhythm.every((token) => token.desktop && token.mobile && token.rule)).toBe(true);
    expect(interfaceQualityRules.some((rule) => rule.includes("focus-visible"))).toBe(true);
  });

  it("renders shared visual primitives with premium hierarchy classes", () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div>
          <SiteButton to="/contact" size="lg">Plan the build</SiteButton>
          <SiteButton to="/work" variant="outline" size="sm">Review proof</SiteButton>
          <ContentCard surface="elevated" intensity="strong">Elevated surface</ContentCard>
          <PageSection eyebrow="Signal" title="Premium rhythm" spacing="wide">
            <p>Section body</p>
          </PageSection>
        </div>
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /Plan the build/i })).toHaveClass("site-button-lg");
    expect(screen.getByRole("link", { name: /Review proof/i })).toHaveClass("site-button-outline", "site-button-sm");
    expect(screen.getByText("Elevated surface")).toHaveClass("content-card", "content-card-elevated", "content-card-strong");
    expect(screen.getByText("Premium rhythm").closest("section")).toHaveClass("page-section-wide");
  });
});
