import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import SmartPos from "@/pages/SmartPos";
import Products from "@/pages/Products";
import { routes } from "@/config/routes";
import { smartPosBuildPlan, smartPosContent, smartPosModules, smartPosWorkflow } from "@/content/smartPos";

const hasLinkWithNameAndHref = (name: string, href: string) =>
  screen.getAllByRole("link", { name }).some((link) => link.getAttribute("href") === href);

const renderSmartPosRoute = () =>
  render(
    <MemoryRouter initialEntries={[routes.smartPos]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path={routes.smartPos} element={<SmartPos />} />
      </Routes>
    </MemoryRouter>,
  );

describe("Smart POS product page", () => {
  it("renders the Smart POS product page from centralized content", () => {
    renderSmartPosRoute();

    expect(screen.getByRole("heading", { name: smartPosContent.hero.title })).toBeInTheDocument();
    expect(screen.getByText(smartPosContent.status)).toBeInTheDocument();
    expect(hasLinkWithNameAndHref(smartPosContent.hero.primaryAction.label, smartPosContent.hero.primaryAction.path)).toBe(true);

    for (const module of smartPosModules) {
      expect(screen.getByRole("heading", { name: module.title })).toBeInTheDocument();
      expect(screen.getByText(module.capabilities[0])).toBeInTheDocument();
    }

    for (const step of smartPosWorkflow) {
      expect(screen.getByRole("heading", { name: step.title })).toBeInTheDocument();
    }

    for (const stage of smartPosBuildPlan) {
      expect(screen.getByRole("heading", { name: stage.title })).toBeInTheDocument();
      expect(screen.getByText(stage.outputs[0])).toBeInTheDocument();
    }
  });

  it("links the product overview Smart POS card to the dedicated product route", () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Products />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "View product page" })).toHaveAttribute("href", routes.smartPos);
  });
});
