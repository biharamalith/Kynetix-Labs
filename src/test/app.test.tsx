import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "@/App";
import { company, homeCopy } from "@/lib/siteContent";

beforeEach(() => {
  window.sessionStorage.clear();
});

describe("App", () => {
  it("renders the home page with shared layout and centralized hero copy", async () => {
    render(<App />);

    expect((await screen.findAllByRole("link", { name: `${company.name} home` })).length).toBeGreaterThan(0);
    expect(
      await screen.findByRole("heading", { level: 1, name: `${homeCopy.hero.title} ${homeCopy.hero.highlight}` }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status", { name: `Loading ${company.name}` })).toBeInTheDocument();
  });
});
