import { IndustryCard } from "@/components/industries/IndustryCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { industriesCopy, industryProfiles } from "@/content/industries";

export const IndustryGrid = () => {
  return (
    <PageSection
      eyebrow={industriesCopy.grid.eyebrow}
      title={industriesCopy.grid.title}
      description={industriesCopy.grid.description}
    >
      <FeatureGrid columns="two">
        {industryProfiles.map((industry, index) => (
          <RevealOnScroll key={industry.slug} delay={index * 55}>
            <IndustryCard industry={industry} />
          </RevealOnScroll>
        ))}
      </FeatureGrid>
    </PageSection>
  );
};
