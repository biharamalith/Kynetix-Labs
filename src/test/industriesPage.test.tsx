import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Industries from "@/pages/Industries";
import { routes } from "@/config/routes";
import { industriesCopy, industryProfiles, industryUseCasePatterns } from "@/content/industries";

const renderIndustries = () =>
  render(
    <MemoryRouter initialEntries={[routes.industries]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Industries />
    </MemoryRouter>,
  );

describe("industries buyer page", () => {
  it("renders industry buyer content from the centralized industry registry", () => {
    renderIndustries();

    expect(screen.getByRole("heading", { name: industriesCopy.hero.title })).toBeInTheDocument();
    expect(screen.getByText(industriesCopy.hero.description)).toBeInTheDocument();

    for (const industry of industryProfiles) {
      expect(screen.getAllByText(industry.title).length).toBeGreaterThan(0);
      expect(screen.getByText(industry.summary)).toBeInTheDocument();
      expect(screen.getByText(industry.buyerPains[0].description)).toBeInTheDocument();
      expect(screen.getByText(industry.proofBoundary)).toBeInTheDocument();
    }
  });

  it("renders industry CTA and reusable pattern sections", () => {
    renderIndustries();

    expect(screen.getAllByRole("link", { name: industriesCopy.cta.action.label }).some((link) => link.getAttribute("href") === routes.contact)).toBe(true);

    for (const pattern of industryUseCasePatterns) {
      expect(screen.getByText(pattern.label)).toBeInTheDocument();
      expect(screen.getByText(pattern.description)).toBeInTheDocument();
    }
  });
});
