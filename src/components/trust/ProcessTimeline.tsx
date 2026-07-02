import { processPageContent, processPhases } from "@/content/process";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";

export const ProcessTimeline = () => {
  return (
    <PageSection
      eyebrow={processPageContent.timeline.eyebrow}
      title={processPageContent.timeline.title}
      description={processPageContent.timeline.description}
    >
      <div className="process-timeline mt-12">
        {processPhases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <RevealOnScroll key={phase.step} delay={index * 80}>
              <article className="process-step">
                <div className="flex items-start gap-4 md:block">
                  <span className="process-number">{phase.step}</span>
                  <div className="feature-icon-box mt-0 md:mt-6">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.summary}</p>
                  <div className="mt-7 grid gap-6 lg:grid-cols-2">
                    <ValueList title="Activities" items={phase.activities} />
                    <ValueList title="Reviewable output" items={phase.evidence} />
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </PageSection>
  );
};
