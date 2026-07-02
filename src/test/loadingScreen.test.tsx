import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { LoadingScreen } from "@/components/site/LoadingScreen";
import { company, homeCopy } from "@/lib/siteContent";
import { motionConfig } from "@/lib/motionConfig";

describe("LoadingScreen", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    sessionStorage.clear();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    sessionStorage.clear();
  });

  it("runs once, uses centralized copy, and stores the completion flag", () => {
    render(<LoadingScreen />);

    const loadingStatus = screen.getByRole("status", { name: `Loading ${company.name}` });
    expect(loadingStatus).toBeInTheDocument();
    expect(screen.getByText(company.name)).toBeInTheDocument();

    for (const step of homeCopy.hero.loadingSequence) {
      expect(screen.getByText(step)).toBeInTheDocument();
    }

    expect(sessionStorage.getItem(motionConfig.loadingScreen.storageKey)).toBeNull();

    act(() => {
      vi.advanceTimersByTime(motionConfig.loadingScreen.minVisibleMs);
    });

    expect(sessionStorage.getItem(motionConfig.loadingScreen.storageKey)).toBe("true");
    expect(loadingStatus).toHaveClass("loading-screen-exit");

    act(() => {
      vi.advanceTimersByTime(motionConfig.loadingScreen.exitDurationMs);
    });

    expect(screen.queryByRole("status", { name: `Loading ${company.name}` })).not.toBeInTheDocument();
  });
});
