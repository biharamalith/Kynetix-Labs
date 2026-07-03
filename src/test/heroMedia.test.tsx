import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { HeroMedia } from "@/components/home/HeroMedia";
import { VideoHero } from "@/components/media/VideoHero";
import { cinematicHeroMedia } from "@/config/media";

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

describe("HeroMedia", () => {
  it("renders the home hero media layer with the cinematic video sequence on desktop", () => {
    setViewportWidth(1280);
    const { container } = render(<HeroMedia />);

    const video = container.querySelector("video");

    expect(container.querySelector(".hero-media-layer")).toBeInTheDocument();
    expect(container.querySelector(".hero-media-signal-strip")).not.toBeInTheDocument();
    expect(video).toBeInTheDocument();
    expect((video as HTMLVideoElement).muted).toBe(true);
    expect((video as HTMLVideoElement).playsInline).toBe(true);
    expect(video).toHaveAttribute("poster", cinematicHeroMedia.poster.src);
    expect(screen.getByText("Video sequence")).toBeInTheDocument();

    for (const source of cinematicHeroMedia.videoSources) {
      expect(container.querySelector(`source[src="${source.src}"]`)).toBeInTheDocument();
    }
  });

  it("falls back to the poster for narrow/mobile contexts", () => {
    setViewportWidth(390);
    const { container } = render(<VideoHero />);

    expect(container.querySelector("video")).not.toBeInTheDocument();
    expect(screen.getByText("Poster fallback")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: cinematicHeroMedia.posterAlt })).toBeInTheDocument();
  });

  it("returns to poster fallback if the video fails after initial selection", () => {
    setViewportWidth(1280);
    const { container } = render(<VideoHero />);
    const video = container.querySelector("video");

    expect(video).toBeInTheDocument();
    fireEvent.error(video as HTMLVideoElement);

    expect(container.querySelector("video")).not.toBeInTheDocument();
    expect(screen.getByText("Poster fallback")).toBeInTheDocument();
  });
});