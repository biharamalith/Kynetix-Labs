import { CSSProperties } from "react";
import { scrollStoryConfig, type ScrollStoryRuntimeMode } from "@/config/scrollStory";
import { cn } from "@/lib/utils";

interface StoryRailProps {
  mode: ScrollStoryRuntimeMode;
}

export const StoryRail = ({ mode }: StoryRailProps) => {
  const { steps } = scrollStoryConfig;

  return (
    <div className={cn("story-rail", mode === "fallback" && "story-rail-fallback")} aria-label={scrollStoryConfig.ariaLabel}>
      <div className="story-rail-grid" aria-hidden="true" />
      <div className="story-rail-spine" aria-hidden="true">
        <span />
      </div>
      <div className="story-rail-core" aria-hidden="true">
        <span>Signal</span>
        <strong>Build</strong>
      </div>
      <ol className="story-rail-nodes">
        {steps.map((step, index) => (
          <li key={step.id} style={{ "--story-node-index": index } as CSSProperties}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.label}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};
