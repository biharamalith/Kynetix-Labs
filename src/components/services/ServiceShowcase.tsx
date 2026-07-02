import { serviceStories, serviceStoryCopy } from "@/content/services";
import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";
import { SiteButton } from "@/components/site/SiteButton";

export const ServiceShowcase = () => {
  const copy = serviceStoryCopy.overview;

  return (
    <PageSection eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <FeatureGrid columns="two">
        {serviceStories.map((service, index) => (
          <RevealOnScroll key={service.id} delay={index * 90}>
            <DetailCard
              id={service.id}
              icon={service.icon}
              eyebrow={service.eyebrow}
              meta="Service"
              title={service.title}
              description={service.description}
            >
              <ValueList title="Best fit" items={service.buyerFit} />
              <ValueList title="Business outcomes" items={service.outcomes} columns="two" />
              <ValueList title="Core deliverables" items={service.deliverables} columns="two" />
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60">Common use cases</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {service.detailPath && (
                <SiteButton to={service.detailPath} variant="outline">
                  Explore service detail
                </SiteButton>
              )}
            </DetailCard>
          </RevealOnScroll>
        ))}
      </FeatureGrid>
    </PageSection>
  );
};
