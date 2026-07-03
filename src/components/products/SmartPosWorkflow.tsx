import { smartPosContent, smartPosWorkflow } from "@/content/smartPos";
import { ContentCard } from "@/components/site/ContentCard";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const SmartPosWorkflow = () => {
  return (
    <PageSection
      eyebrow={smartPosContent.workflow.eyebrow}
      title={smartPosContent.workflow.title}
      description={smartPosContent.workflow.description}
    >
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {smartPosWorkflow.map((step, index) => (
          <RevealOnScroll key={step.step} delay={index * 90}>
            <ContentCard className="h-full p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">{step.step}</p>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </div>
    </PageSection>
  );
};
