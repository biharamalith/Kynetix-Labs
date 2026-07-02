import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Products from "@/pages/Products";
import Services from "@/pages/Services";
import { productStories } from "@/content/products";
import { serviceStories } from "@/content/services";

describe("storytelling pages", () => {
  it("renders service story cards from centralized content", () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Services />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Software services built around real business workflows." })).toBeInTheDocument();

    for (const service of serviceStories) {
      expect(screen.getByRole("heading", { name: service.title })).toBeInTheDocument();
      expect(screen.getByText(service.outcomes[0])).toBeInTheDocument();
      expect(screen.getByText(service.deliverables[0])).toBeInTheDocument();
    }
  });

  it("renders product story cards without overclaiming readiness", () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Products />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Clear software packages for common business operations." })).toBeInTheDocument();

    for (const product of productStories) {
      expect(screen.getByRole("heading", { name: product.title })).toBeInTheDocument();
      expect(screen.getByText(product.status)).toBeInTheDocument();
      expect(screen.getByText(product.launchNote)).toBeInTheDocument();
    }
  });
});
