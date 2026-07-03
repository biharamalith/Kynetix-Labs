import { ContentCard } from "@/components/site/ContentCard";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { deliveryBoundaries, securityQualityPageContent } from "@/content/securityQuality";
import { routes } from "@/config/routes";

export const TrustBoundaryList = () => {
  return (
    <PageSection
      eyebrow={securityQualityPageContent.boundaries.eyebrow}
      title={securityQualityPageContent.boundaries.title}
      description={securityQualityPageContent.boundaries.description}
    >
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {deliveryBoundaries.map((boundary, index) => (
          <RevealOnScroll key={boundary.title} delay={index * 90}>
            <ContentCard className="h-full p-7" intensity="strong">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">{boundary.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{boundary.description}</p>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll className="mt-12 flex justify-center">
        <SiteButton to={routes.process} variant="outline">Review delivery process</SiteButton>
      </RevealOnScroll>
    </PageSection>
  );
};
