import { render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { KineticCore } from "@/components/visual/KineticCore";
import { KineticCoreSection } from "@/components/visual/KineticCoreSection";
import { kineticCoreConfig } from "@/config/kineticCore";

const setViewportWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
};

afterEach(() => {
  setViewportWidth(1024);
});

describe("KineticCoreSection", () => {
  it("renders the below-hero kinetic core section from centralized configuration", () => {
    setViewportWidth(1280);
    const { container } = render(
      <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <KineticCoreSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: kineticCoreConfig.section.title })).toBeInTheDocument();
    expect(screen.getByText(kineticCoreConfig.section.description)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: kineticCoreConfig.section.primaryAction.label })).toHaveAttribute(
      "href",
      kineticCoreConfig.section.primaryAction.path,
    );
    expect(container.querySelector(".home-hero .kinetic-core-shell")).not.toBeInTheDocument();

    const visual = screen.getByRole("img", { name: kineticCoreConfig.ariaLabel });
    expect(visual).toHaveAttribute("data-kinetic-mode", "css-3d");

    const layerRegion = screen.getByLabelText("Kinetic core layers");
    for (const layer of kineticCoreConfig.layers) {
      expect(within(layerRegion).getByRole("heading", { name: layer.label })).toBeInTheDocument();
    }
  });

  it("renders the static fallback for narrow/mobile contexts", () => {
    setViewportWidth(390);
    const { container } = render(<KineticCore />);

    expect(screen.getByRole("img", { name: kineticCoreConfig.ariaLabel })).toHaveAttribute("data-kinetic-mode", "fallback");
    expect(container.querySelector(".kinetic-core-orbit")).not.toBeInTheDocument();
  });
});
