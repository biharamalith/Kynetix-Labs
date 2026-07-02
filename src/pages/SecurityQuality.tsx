import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/site/PageHero";
import { SiteButton } from "@/components/site/SiteButton";
import { QualityPrinciples } from "@/components/trust/QualityPrinciples";
import { SecurityQualityGrid } from "@/components/trust/SecurityQualityGrid";
import { TrustBoundaryList } from "@/components/trust/TrustBoundaryList";
import { securityQualityPageContent } from "@/content/securityQuality";
import { createWebPageStructuredData } from "@/lib/seo";
import { company, routes, seo } from "@/lib/siteContent";

const SecurityQuality = () => {
  return (
    <Layout>
      <SEO
        {...seo.securityQuality}
        structuredData={createWebPageStructuredData({
          siteUrl: company.siteUrl,
          path: routes.securityQuality,
          name: securityQualityPageContent.hero.title,
          description: securityQualityPageContent.hero.description,
          publisherName: company.name,
        })}
      />

      <PageHero
        eyebrow={securityQualityPageContent.hero.eyebrow}
        title={securityQualityPageContent.hero.title}
        description={securityQualityPageContent.hero.description}
        actions={
          <>
            <SiteButton to={securityQualityPageContent.hero.primaryAction.path}>{securityQualityPageContent.hero.primaryAction.label}</SiteButton>
            <SiteButton to={securityQualityPageContent.hero.secondaryAction.path} variant={securityQualityPageContent.hero.secondaryAction.variant}>
              {securityQualityPageContent.hero.secondaryAction.label}
            </SiteButton>
          </>
        }
      />

      <QualityPrinciples />
      <SecurityQualityGrid />
      <TrustBoundaryList />
    </Layout>
  );
};

export default SecurityQuality;
