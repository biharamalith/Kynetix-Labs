import { smartPosContent, smartPosModules } from "@/content/smartPos";
import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";

export const SmartPosModuleGrid = () => {
  return (
    <PageSection
      eyebrow={smartPosContent.modules.eyebrow}
      title={smartPosContent.modules.title}
      description={smartPosContent.modules.description}
      className="page-section-muted"
    >
      <FeatureGrid columns="two">
        {smartPosModules.map((module, index) => (
          <RevealOnScroll key={module.id} delay={index * 95}>
            <DetailCard
              id={module.id}
              icon={module.icon}
              eyebrow="Core module"
              meta={String(index + 1).padStart(2, "0")}
              title={module.title}
              description={module.summary}
            >
              <ValueList title="Capability scope" items={module.capabilities} columns="two" />
            </DetailCard>
          </RevealOnScroll>
        ))}
      </FeatureGrid>
    </PageSection>
  );
};
