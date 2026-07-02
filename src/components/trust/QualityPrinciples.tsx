import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { ValueList } from "@/components/site/ValueList";
import { qualityPrinciples, securityQualityPageContent } from "@/content/securityQuality";

export const QualityPrinciples = () => {
  return (
    <PageSection
      eyebrow={securityQualityPageContent.principles.eyebrow}
      title={securityQualityPageContent.principles.title}
      description={securityQualityPageContent.principles.description}
    >
      <FeatureGrid>
        {qualityPrinciples.map((principle) => (
          <DetailCard
            key={principle.title}
            icon={principle.icon}
            title={principle.title}
            description={principle.description}
            meta="Principle"
          >
            <ValueList title="Review checks" items={principle.checks} />
          </DetailCard>
        ))}
      </FeatureGrid>
    </PageSection>
  );
};
