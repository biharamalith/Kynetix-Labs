import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { caseStudies, caseStudyCopy, caseStudyProofPrinciples } from "@/content/caseStudies";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { MetricStrip } from "@/components/site/MetricStrip";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const CaseStudyGrid = () => {
  return (
    <>
      <PageSection
        eyebrow={caseStudyCopy.grid.eyebrow}
        title={caseStudyCopy.grid.title}
        description={caseStudyCopy.grid.description}
      >
        <FeatureGrid columns="two">
          {caseStudies.map((study, index) => (
            <RevealOnScroll key={study.slug} delay={index * 90}>
              <CaseStudyCard study={study} />
            </RevealOnScroll>
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow={caseStudyCopy.proofModel.eyebrow}
        title={caseStudyCopy.proofModel.title}
        description={caseStudyCopy.proofModel.description}
        className="page-section-muted"
      >
        <MetricStrip items={caseStudyProofPrinciples} />
      </PageSection>
    </>
  );
};
