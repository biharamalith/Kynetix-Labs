import { render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { ScrollStorySection } from "@/components/storytelling/ScrollStorySection";
import { scrollStoryConfig } from "@/config/scrollStory";

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

describe("ScrollStorySection", () => {
  it("renders the centralized scroll story content and actions", () => {
    setViewportWidth(1280);
    const { container } = render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollStorySection />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: scrollStoryConfig.section.title, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(scrollStoryConfig.section.description)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: new RegExp(scrollStoryConfig.section.primaryAction.label) })).toHaveAttribute(
      "href",
      scrollStoryConfig.section.primaryAction.path,
    );
    expect(screen.getByRole("link", { name: new RegExp(scrollStoryConfig.section.secondaryAction.label) })).toHaveAttribute(
      "href",
      scrollStoryConfig.section.secondaryAction.path,
    );
    expect(container.querySelector(".scroll-story-section")).toHaveAttribute("data-scroll-story-mode", "cinematic");
  });

  it("renders every story step with signal and outcome metadata", () => {
    setViewportWidth(1280);
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollStorySection />
      </MemoryRouter>,
    );

    const storyList = screen.getByRole("list", { name: "Kynetix Labs build story stages" });

    for (const step of scrollStoryConfig.steps) {
      expect(within(storyList).getByText(step.label)).toBeInTheDocument();
      expect(within(storyList).getByRole("heading", { name: step.title, level: 3 })).toBeInTheDocument();
      expect(within(storyList).getByText(step.signal)).toBeInTheDocument();
      expect(within(storyList).getByText(step.outcome)).toBeInTheDocument();
    }
  });

  it("uses fallback mode on narrow viewports without hiding the story", () => {
    setViewportWidth(390);
    const { container } = render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollStorySection />
      </MemoryRouter>,
    );

    expect(container.querySelector(".scroll-story-section")).toHaveAttribute("data-scroll-story-mode", "fallback");
    expect(screen.getByRole("heading", { name: scrollStoryConfig.section.title, level: 2 })).toBeInTheDocument();
    expect(screen.getByLabelText(scrollStoryConfig.ariaLabel)).toBeInTheDocument();
  });
});
