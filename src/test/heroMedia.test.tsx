import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroMedia } from "@/components/home/HeroMedia";
import { VideoHero } from "@/components/media/VideoHero";
import { cinematicHeroMedia } from "@/config/media";

describe("HeroMedia", () => {
  it("renders the home hero media layer in poster fallback mode without video sources", () => {
    const { container } = render(<HeroMedia />);

    expect(container.querySelector(".hero-media-layer")).toBeInTheDocument();
    expect(container.querySelector("video")).not.toBeInTheDocument();
    expect(screen.getByText("Poster fallback")).toBeInTheDocument();

    for (const signal of cinematicHeroMedia.posterSignals) {
      expect(screen.getByText(signal.label, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(signal.value)).toBeInTheDocument();
    }
  });

  it("keeps the generated poster accessible when it is not decorative", () => {
    render(<VideoHero />);

    expect(screen.getByRole("img", { name: cinematicHeroMedia.posterAlt })).toBeInTheDocument();
    expect(screen.queryByRole("video")).not.toBeInTheDocument();
  });
});
