import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import ServiceDetail from "@/pages/ServiceDetail";
import Services from "@/pages/Services";
import { createServicePath, routes } from "@/config/routes";
import { serviceDetails } from "@/content/services";

const renderServiceDetail = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[createServicePath(slug)]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path={routes.serviceDetail} element={<ServiceDetail />} />
      </Routes>
    </MemoryRouter>,
  );

describe("service detail pages", () => {
  it("renders every dedicated service page from centralized content", () => {
    for (const service of serviceDetails) {
      const page = renderServiceDetail(service.slug);

      expect(screen.getByRole("heading", { name: service.title })).toBeInTheDocument();
      expect(screen.getByText(service.summary)).toBeInTheDocument();
      expect(screen.getByText(service.buyerProblems[0].description)).toBeInTheDocument();
      expect(screen.getByText(service.outcomes[0].description)).toBeInTheDocument();
      expect(screen.getByText(service.deliverables[0].items[0])).toBeInTheDocument();
      expect(screen.getByText(service.architecture[0].items[0])).toBeInTheDocument();
      expect(screen.getByText(service.faq[0].answer)).toBeInTheDocument();
      expect(
        screen
          .getAllByRole("link", { name: service.primaryAction.label })
          .some((link) => link.getAttribute("href") === service.primaryAction.path),
      ).toBe(true);

      page.unmount();
    }
  });

  it("links service overview cards to available service detail routes", () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Services />
      </MemoryRouter>,
    );

    for (const service of serviceDetails) {
      expect(screen.getAllByRole("link", { name: "Explore service detail" }).some((link) => link.getAttribute("href") === createServicePath(service.slug))).toBe(true);
    }
  });
});
