import type { ServiceDetailContent } from "@/content/services";
import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";

interface ServiceArchitectureProps {
  service: ServiceDetailContent;
}

export const ServiceArchitecture = ({ service }: ServiceArchitectureProps) => (
  <PageSection
    eyebrow="Architecture approach"
    title="The service is shaped as a maintainable system, not a loose collection of screens."
    description="The same reusable architecture rules used across the website apply to buyer project planning: central content, thin pages, clear routes, accessible UI, and quality gates."
  >
    <FeatureGrid columns="two">
      {service.architecture.map((section, index) => (
        <RevealOnScroll key={section.title} delay={index * 100}>
          <DetailCard title={section.title} description={section.description} meta="Build rule">
            <ValueList items={section.items} columns="two" />
          </DetailCard>
        </RevealOnScroll>
      ))}
    </FeatureGrid>
  </PageSection>
);
