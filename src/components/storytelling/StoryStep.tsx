import { CSSProperties } from "react";
import { scrollStoryConfig, type ScrollStoryStep as ScrollStoryStepContent } from "@/config/scrollStory";

interface StoryStepProps {
  step: ScrollStoryStepContent;
  index: number;
}

export const StoryStep = ({ step, index }: StoryStepProps) => {
  const sequence = String(index + 1).padStart(2, "0");

  return (
    <article className="scroll-story-step" data-story-step={step.id}>
      <div className="scroll-story-step-index" aria-hidden="true">
        {sequence}
      </div>
      <div className="scroll-story-step-copy">
        <span>{step.label}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      <div className="scroll-story-step-meta" aria-label={`${step.label} signal and outcome`}>
        <div>
          <span>Input signal</span>
          <strong>{step.signal}</strong>
        </div>
        <div>
          <span>Outcome</span>
          <strong>{step.outcome}</strong>
        </div>
      </div>
      <div className="scroll-story-step-progress" aria-hidden="true">
        <span style={{ "--story-step-count": scrollStoryConfig.steps.length, "--story-step-index": index + 1 } as CSSProperties} />
      </div>
    </article>
  );
};
