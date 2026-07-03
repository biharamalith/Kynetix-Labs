import type { ServiceDetailContent } from "@/content/services";
import { ContentCard } from "@/components/site/ContentCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

interface ServiceOutcomeGridProps {
  service: ServiceDetailContent;
}

export const ServiceOutcomeGrid = ({ service }: ServiceOutcomeGridProps) => (
  <PageSection eyebrow="Buyer pressure" title="Start with the business problem before choosing features." description={service.summary}>
    <FeatureGrid columns="three">
      {service.buyerProblems.map((problem, index) => (
        <RevealOnScroll key={problem.label} delay={index * 90}>
          <ContentCard className="h-full p-6" intensity="strong">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">Problem</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{problem.label}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{problem.description}</p>
            </div>
          </ContentCard>
        </RevealOnScroll>
      ))}
    </FeatureGrid>
    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      {service.outcomes.map((outcome, index) => (
        <RevealOnScroll key={outcome.label} delay={index * 90}>
          <ContentCard className="h-full p-6">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">Outcome</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{outcome.label}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{outcome.description}</p>
            </div>
          </ContentCard>
        </RevealOnScroll>
      ))}
    </div>
  </PageSection>
);
