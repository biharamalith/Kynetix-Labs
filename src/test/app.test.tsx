import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import App from "@/App";
import { company, homeCopy, navLinks } from "@/lib/siteContent";
import { motionConfig } from "@/lib/motionConfig";

const hasLinkWithNameAndHref = (name: string, href: string) =>
  screen.getAllByRole("link", { name }).some((link) => link.getAttribute("href") === href);

describe("App", () => {
  beforeEach(() => {
    sessionStorage.setItem(motionConfig.loadingScreen.storageKey, "true");
  });

  it("renders shared layout and centralized home content", async () => {
    render(<App />);

    const primaryNavigation = await screen.findByRole("navigation", { name: "Primary navigation" });

    expect(screen.getAllByRole("link", { name: `${company.name} home` }).length).toBeGreaterThan(0);

    for (const item of navLinks) {
      expect(within(primaryNavigation).getByRole("link", { name: item.name })).toHaveAttribute("href", item.path);
    }

    expect(
      screen.getByRole("heading", {
        name: `${homeCopy.hero.title} ${homeCopy.hero.highlight}`,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(homeCopy.hero.description)).toBeInTheDocument();

    expect(hasLinkWithNameAndHref(homeCopy.hero.primaryAction.label, homeCopy.hero.primaryAction.path)).toBe(true);
    expect(hasLinkWithNameAndHref(homeCopy.hero.secondaryAction.label, homeCopy.hero.secondaryAction.path)).toBe(true);
  });
});
