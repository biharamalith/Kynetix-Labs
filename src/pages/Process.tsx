import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { DeliveryAssurance } from "@/components/trust/DeliveryAssurance";
import { ProcessTimeline } from "@/components/trust/ProcessTimeline";
import { PageHero } from "@/components/site/PageHero";
import { SiteButton } from "@/components/site/SiteButton";
import { processPageContent } from "@/content/process";
import { createWebPageStructuredData } from "@/lib/seo";
import { company, routes, seo } from "@/lib/siteContent";

const Process = () => {
  return (
    <Layout>
      <SEO
        {...seo.process}
        structuredData={createWebPageStructuredData({
          siteUrl: company.siteUrl,
          path: routes.process,
          name: processPageContent.hero.title,
          description: processPageContent.hero.description,
          publisherName: company.name,
        })}
      />

      <PageHero
        eyebrow={processPageContent.hero.eyebrow}
        title={processPageContent.hero.title}
        description={processPageContent.hero.description}
        actions={
          <>
            <SiteButton to={processPageContent.hero.primaryAction.path}>{processPageContent.hero.primaryAction.label}</SiteButton>
            <SiteButton to={processPageContent.hero.secondaryAction.path} variant={processPageContent.hero.secondaryAction.variant}>
              {processPageContent.hero.secondaryAction.label}
            </SiteButton>
          </>
        }
      />

      <ProcessTimeline />
      <DeliveryAssurance />
    </Layout>
  );
};

export default Process;
