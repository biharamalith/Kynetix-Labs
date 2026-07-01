import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";
import { company, homeCopy } from "@/lib/siteContent";

describe("App", () => {
  it("renders the home page with shared layout and centralized hero copy", async () => {
    render(<App />);

    expect((await screen.findAllByRole("link", { name: `${company.name} home` })).length).toBeGreaterThan(0);
    expect(await screen.findByText(homeCopy.hero.highlight)).toBeInTheDocument();
  });
});
