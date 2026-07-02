import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Process from "@/pages/Process";
import SecurityQuality from "@/pages/SecurityQuality";
import { routes } from "@/config/routes";
import { processPageContent, processPhases } from "@/content/process";
import { qualityPrinciples, securityQualityControls, securityQualityPageContent } from "@/content/securityQuality";

const hasLinkWithNameAndHref = (name: string, href: string) =>
  screen.getAllByRole("link", { name }).some((link) => link.getAttribute("href") === href);

const renderRoute = (path: string, element: JSX.Element) =>
  render(
    <MemoryRouter initialEntries={[path]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    </MemoryRouter>,
  );

describe("process and trust pages", () => {
  it("renders the delivery process page from centralized content", () => {
    renderRoute(routes.process, <Process />);

    expect(screen.getByRole("heading", { name: processPageContent.hero.title })).toBeInTheDocument();
    expect(hasLinkWithNameAndHref(processPageContent.hero.primaryAction.label, processPageContent.hero.primaryAction.path)).toBe(true);

    for (const phase of processPhases) {
      expect(screen.getByRole("heading", { name: phase.title })).toBeInTheDocument();
      expect(screen.getByText(phase.activities[0])).toBeInTheDocument();
      expect(screen.getByText(phase.evidence[0])).toBeInTheDocument();
    }
  });

  it("renders the security and quality page without fake compliance claims", () => {
    renderRoute(routes.securityQuality, <SecurityQuality />);

    expect(screen.getByRole("heading", { name: securityQualityPageContent.hero.title })).toBeInTheDocument();
    expect(hasLinkWithNameAndHref(securityQualityPageContent.hero.secondaryAction.label, securityQualityPageContent.hero.secondaryAction.path)).toBe(true);

    for (const principle of qualityPrinciples) {
      expect(screen.getByRole("heading", { name: principle.title })).toBeInTheDocument();
      expect(screen.getByText(principle.checks[0])).toBeInTheDocument();
    }

    for (const control of securityQualityControls) {
      expect(screen.getByRole("heading", { name: control.title })).toBeInTheDocument();
      expect(screen.getByText(control.practices[0])).toBeInTheDocument();
    }

    expect(screen.queryByText(/SOC\s*2 certified/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ISO certified/i)).not.toBeInTheDocument();
  });
});
