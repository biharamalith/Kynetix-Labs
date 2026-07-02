import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { MetricStrip } from "@/components/site/MetricStrip";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { industriesCopy, industryProofPrinciples, industryUseCasePatterns } from "@/content/industries";

export const IndustryUseCases = () => {
  return (
    <PageSection
      eyebrow={industriesCopy.useCases.eyebrow}
      title={industriesCopy.useCases.title}
      description={industriesCopy.useCases.description}
    >
      <FeatureGrid columns="two">
        {industryUseCasePatterns.map((pattern, index) => (
          <RevealOnScroll key={pattern.label} delay={index * 60}>
            <DetailCard title={pattern.label} description={pattern.description} />
          </RevealOnScroll>
        ))}
      </FeatureGrid>

      <RevealOnScroll delay={140}>
        <MetricStrip items={industryProofPrinciples} />
      </RevealOnScroll>
    </PageSection>
  );
};
