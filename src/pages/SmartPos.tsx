import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { SmartPosBuildPlan } from "@/components/products/SmartPosBuildPlan";
import { SmartPosModuleGrid } from "@/components/products/SmartPosModuleGrid";
import { SmartPosSystemVisual } from "@/components/products/SmartPosSystemVisual";
import { SmartPosWorkflow } from "@/components/products/SmartPosWorkflow";
import { PageHero } from "@/components/site/PageHero";
import { SiteButton } from "@/components/site/SiteButton";
import { smartPosContent, smartPosRoute } from "@/content/smartPos";
import { createSoftwareProductPageStructuredData } from "@/lib/seo";
import { company, seo } from "@/lib/siteContent";

const SmartPos = () => {
  return (
    <Layout>
      <SEO
        {...seo.smartPos}
        structuredData={createSoftwareProductPageStructuredData({
          siteUrl: company.siteUrl,
          path: smartPosRoute,
          name: "Smart POS Suite",
          description: smartPosContent.hero.description,
          category: smartPosContent.category,
          brandName: company.name,
        })}
      />

      <PageHero
        eyebrow={smartPosContent.hero.eyebrow}
        title={smartPosContent.hero.title}
        description={smartPosContent.hero.description}
        actions={
          <>
            <SiteButton to={smartPosContent.hero.primaryAction.path}>{smartPosContent.hero.primaryAction.label}</SiteButton>
            <SiteButton to={smartPosContent.hero.secondaryAction.path} variant={smartPosContent.hero.secondaryAction.variant}>
              {smartPosContent.hero.secondaryAction.label}
            </SiteButton>
          </>
        }
      />

      <SmartPosSystemVisual />
      <SmartPosModuleGrid />
      <SmartPosWorkflow />
      <SmartPosBuildPlan />
    </Layout>
  );
};

export default SmartPos;
