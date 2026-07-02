import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { DeliverablesMatrix } from "@/components/services/DeliverablesMatrix";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceShowcase } from "@/components/services/ServiceShowcase";
import { PageHero } from "@/components/site/PageHero";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { pageCopy, seo } from "@/lib/siteContent";

const copy = pageCopy.services;

const Services = () => {
  return (
    <Layout>
      <SEO {...seo.services} />

      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description}
        actions={
          <>
            <SiteButton to={copy.hero.primaryAction.path}>{copy.hero.primaryAction.label}</SiteButton>
            <SiteButton to={copy.hero.secondaryAction.path} variant={copy.hero.secondaryAction.variant}>
              {copy.hero.secondaryAction.label}
            </SiteButton>
          </>
        }
      />

      <ServiceShowcase />
      <DeliverablesMatrix />
      <ServiceProcess />

      <PageSection
        eyebrow={copy.fit.eyebrow}
        title={copy.fit.title}
        description={copy.fit.description}
        className="page-section-muted"
      >
        <RevealOnScroll className="mt-10 flex justify-center">
          <SiteButton to={copy.fit.action.path}>{copy.fit.action.label}</SiteButton>
        </RevealOnScroll>
      </PageSection>
    </Layout>
  );
};

export default Services;
