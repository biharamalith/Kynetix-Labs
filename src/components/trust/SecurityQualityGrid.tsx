import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { ValueList } from "@/components/site/ValueList";
import { securityQualityControls, securityQualityPageContent } from "@/content/securityQuality";

export const SecurityQualityGrid = () => {
  return (
    <PageSection
      eyebrow={securityQualityPageContent.controls.eyebrow}
      title={securityQualityPageContent.controls.title}
      description={securityQualityPageContent.controls.description}
      className="page-section-muted"
    >
      <FeatureGrid columns="two">
        {securityQualityControls.map((control) => (
          <DetailCard key={control.title} icon={control.icon} title={control.title} description={control.description} meta="Control">
            <ValueList title="Practices" items={control.practices} columns="two" />
          </DetailCard>
        ))}
      </FeatureGrid>
    </PageSection>
  );
};
