import { useMemo } from "react";
import { SiteButton } from "@/components/site/SiteButton";
import { useReducedMotion } from "@/components/site/useReducedMotion";
import { ScrollReveal } from "@/components/storytelling/ScrollReveal";
import { StoryRail } from "@/components/storytelling/StoryRail";
import { StoryStep } from "@/components/storytelling/StoryStep";
import { scrollStoryConfig } from "@/config/scrollStory";
import { getScrollRuntimeSnapshot, getScrollStoryRuntimeMode, getScrollStoryStepDelay } from "@/lib/scrollRuntime";

export const ScrollStorySection = () => {
  const prefersReducedMotion = useReducedMotion();
  const runtimeSnapshot = useMemo(() => getScrollRuntimeSnapshot(prefersReducedMotion), [prefersReducedMotion]);
  const runtimeMode = getScrollStoryRuntimeMode(runtimeSnapshot);
  const { section, steps, safetyRules } = scrollStoryConfig;

  return (
    <section className="scroll-story-section" aria-labelledby="scroll-story-title" data-scroll-story-mode={runtimeMode}>
      <div className="container-main">
        <ScrollReveal className="scroll-story-header">
          <div className="section-eyebrow justify-center">
            <span className="section-eyebrow-dot" />
            {section.eyebrow}
          </div>
          <h2 id="scroll-story-title" className="page-section-title">
            {section.title}
          </h2>
          <p className="page-section-description">{section.description}</p>
          <div className="scroll-story-actions">
            <SiteButton to={section.primaryAction.path} size="lg">
              {section.primaryAction.label}
            </SiteButton>
            <SiteButton to={section.secondaryAction.path} size="lg" variant="outline">
              {section.secondaryAction.label}
            </SiteButton>
          </div>
        </ScrollReveal>

        <div className="scroll-story-layout">
          <aside className="scroll-story-rail-column">
            <div className="scroll-story-sticky">
              <StoryRail mode={runtimeMode} />
              <div className="scroll-story-safety" aria-label="Scroll story safety rules">
                {safetyRules.slice(0, 3).map((rule) => (
                  <span key={rule}>{rule}</span>
                ))}
              </div>
            </div>
          </aside>

          <ol className="scroll-story-steps" aria-label="Kynetix Labs build story stages">
            {steps.map((step, index) => (
              <ScrollReveal key={step.id} as="li" delay={getScrollStoryStepDelay(index)}>
                <StoryStep step={step} index={index} />
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
