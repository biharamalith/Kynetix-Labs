import { serviceDeliverableGroups, serviceStoryCopy } from "@/content/services";
import { ContentCard } from "@/components/site/ContentCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";

export const DeliverablesMatrix = () => {
  const copy = serviceStoryCopy.deliverables;

  return (
    <PageSection eyebrow={copy.eyebrow} title={copy.title} description={copy.description} className="page-section-muted">
      <FeatureGrid columns="two">
        {serviceDeliverableGroups.map((group, index) => (
          <RevealOnScroll key={group.title} delay={index * 110}>
            <ContentCard className="h-full p-7" intensity="strong">
              <div className="relative z-10">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-bold text-cyan-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{group.description}</p>
                <ValueList className="mt-7" items={group.items} columns="two" />
              </div>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </FeatureGrid>
    </PageSection>
  );
};
