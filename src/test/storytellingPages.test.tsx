import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Products from "@/pages/Products";
import Services from "@/pages/Services";
import { productStories, productStoryCopy } from "@/content/products";
import { serviceStories, serviceStoryCopy } from "@/content/services";

describe("storytelling pages", () => {
  it("renders service story cards from centralized content", () => {
    render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Services />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: serviceStoryCopy.overview.title })).toBeInTheDocument();

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

    expect(screen.getByRole("heading", { name: productStoryCopy.overview.title })).toBeInTheDocument();

    for (const product of productStories) {
      expect(screen.getByRole("heading", { name: product.title })).toBeInTheDocument();
      expect(screen.getByText(product.status)).toBeInTheDocument();
      expect(screen.getByText(product.launchNote)).toBeInTheDocument();
    }
  });
});
