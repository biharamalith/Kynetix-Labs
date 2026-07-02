import { smartPosBuildPlan, smartPosContent } from "@/content/smartPos";
import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { ValueList } from "@/components/site/ValueList";

export const SmartPosBuildPlan = () => {
  return (
    <>
      <PageSection
        eyebrow={smartPosContent.buildPlan.eyebrow}
        title={smartPosContent.buildPlan.title}
        description={smartPosContent.buildPlan.description}
        className="page-section-muted"
      >
        <FeatureGrid columns="two">
          {smartPosBuildPlan.map((stage, index) => (
            <RevealOnScroll key={stage.label} delay={index * 90}>
              <DetailCard eyebrow={stage.label} meta={String(index + 1).padStart(2, "0")} title={stage.title} description={stage.description}>
                <ValueList title="Buyer receives" items={stage.outputs} columns="two" />
              </DetailCard>
            </RevealOnScroll>
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection eyebrow={smartPosContent.cta.eyebrow} title={smartPosContent.cta.title} description={smartPosContent.cta.description}>
        <RevealOnScroll className="mt-10 flex justify-center">
          <SiteButton to={smartPosContent.cta.action.path}>{smartPosContent.cta.action.label}</SiteButton>
        </RevealOnScroll>
      </PageSection>
    </>
  );
};
