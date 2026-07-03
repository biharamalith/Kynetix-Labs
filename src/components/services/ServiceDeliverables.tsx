import type { ServiceDetailContent } from "@/content/services";
import { ContentCard } from "@/components/site/ContentCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";

interface ServiceDeliverablesProps {
  service: ServiceDetailContent;
}

export const ServiceDeliverables = ({ service }: ServiceDeliverablesProps) => (
  <PageSection
    eyebrow="Deliverables"
    title="Clear outputs keep the project practical and reviewable."
    description="Each service detail page explains what can be produced without promising fake results, fixed timelines, or unsupported technical claims."
    className="page-section-muted"
  >
    <FeatureGrid columns="three">
      {service.deliverables.map((group, index) => (
        <RevealOnScroll key={group.title} delay={index * 95}>
          <ContentCard className="h-full p-7" intensity="strong">
            <div className="relative z-10">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{group.description}</p>
              <ValueList className="mt-7" items={group.items} />
            </div>
          </ContentCard>
        </RevealOnScroll>
      ))}
    </FeatureGrid>
  </PageSection>
);
