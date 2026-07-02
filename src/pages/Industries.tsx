import { IndustryFitMatrix } from "@/components/industries/IndustryFitMatrix";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { IndustryUseCases } from "@/components/industries/IndustryUseCases";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/site/PageHero";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { industriesCopy } from "@/content/industries";
import { createWebPageStructuredData } from "@/lib/seo";
import { company, routes, seo } from "@/lib/siteContent";

const Industries = () => {
  return (
    <Layout>
      <SEO
        {...seo.industries}
        structuredData={createWebPageStructuredData({
          siteUrl: company.siteUrl,
          path: routes.industries,
          name: industriesCopy.hero.title,
          description: industriesCopy.hero.description,
          publisherName: company.name,
        })}
      />

      <PageHero
        eyebrow={industriesCopy.hero.eyebrow}
        title={industriesCopy.hero.title}
        description={industriesCopy.hero.description}
        actions={
          <>
            <SiteButton to={industriesCopy.hero.primaryAction.path}>{industriesCopy.hero.primaryAction.label}</SiteButton>
            <SiteButton to={industriesCopy.hero.secondaryAction.path} variant={industriesCopy.hero.secondaryAction.variant}>
              {industriesCopy.hero.secondaryAction.label}
            </SiteButton>
          </>
        }
      />

      <IndustryGrid />
      <IndustryFitMatrix />
      <IndustryUseCases />

      <PageSection
        eyebrow={industriesCopy.cta.eyebrow}
        title={industriesCopy.cta.title}
        description={industriesCopy.cta.description}
        className="page-section-muted"
      >
        <RevealOnScroll className="mt-10 flex justify-center">
          <SiteButton to={industriesCopy.cta.action.path}>{industriesCopy.cta.action.label}</SiteButton>
        </RevealOnScroll>
      </PageSection>
    </Layout>
  );
};

export default Industries;
