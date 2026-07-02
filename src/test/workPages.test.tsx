import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import CaseStudyDetail from "@/pages/CaseStudyDetail";
import Work from "@/pages/Work";
import { createCaseStudyPath, routes } from "@/config/routes";
import { caseStudies, caseStudyCopy } from "@/content/caseStudies";

const renderRoute = (path: string, element: JSX.Element) =>
  render(
    <MemoryRouter initialEntries={[path]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path={routes.work} element={element} />
        <Route path={routes.caseStudyDetail} element={element} />
      </Routes>
    </MemoryRouter>,
  );

describe("work and case study pages", () => {
  it("renders the work index from centralized case study content", () => {
    renderRoute(routes.work, <Work />);

    expect(screen.getByRole("heading", { name: caseStudyCopy.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: caseStudyCopy.hero.primaryAction.label })).toHaveAttribute(
      "href",
      caseStudyCopy.hero.primaryAction.path,
    );

    for (const study of caseStudies) {
      expect(screen.getByRole("heading", { name: study.title })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: `View case study: ${study.title}` })).toHaveAttribute(
        "href",
        createCaseStudyPath(study.slug),
      );
    }
  });

  it("renders a case study detail route with proof-safe sections", () => {
    const firstStudy = caseStudies[0];

    render(
      <MemoryRouter
        initialEntries={[createCaseStudyPath(firstStudy.slug)]}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Routes>
          <Route path={routes.caseStudyDetail} element={<CaseStudyDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: firstStudy.title })).toBeInTheDocument();
    expect(screen.getByText(firstStudy.challenge)).toBeInTheDocument();
    expect(screen.getByText(firstStudy.solution)).toBeInTheDocument();
    expect(screen.getByText(firstStudy.results[0].description)).toBeInTheDocument();
    expect(screen.getByText(firstStudy.stack[0])).toBeInTheDocument();
    expect(screen.getByText(firstStudy.evidence[0])).toBeInTheDocument();
    expect(screen.queryByText(/fake client/i)).not.toBeInTheDocument();
  });
});
