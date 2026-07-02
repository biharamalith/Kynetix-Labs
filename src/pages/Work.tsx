import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/site/PageHero";
import { SiteButton } from "@/components/site/SiteButton";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { caseStudyCopy } from "@/content/caseStudies";
import { createWebPageStructuredData } from "@/lib/seo";
import { company, routes, seo } from "@/lib/siteContent";

const Work = () => {
  return (
    <Layout>
      <SEO
        {...seo.work}
        structuredData={createWebPageStructuredData({
          siteUrl: company.siteUrl,
          path: routes.work,
          name: caseStudyCopy.hero.title,
          description: caseStudyCopy.hero.description,
          publisherName: company.name,
        })}
      />

      <PageHero
        eyebrow={caseStudyCopy.hero.eyebrow}
        title={caseStudyCopy.hero.title}
        description={caseStudyCopy.hero.description}
        actions={
          <>
            <SiteButton to={caseStudyCopy.hero.primaryAction.path}>{caseStudyCopy.hero.primaryAction.label}</SiteButton>
            <SiteButton to={caseStudyCopy.hero.secondaryAction.path} variant={caseStudyCopy.hero.secondaryAction.variant}>
              {caseStudyCopy.hero.secondaryAction.label}
            </SiteButton>
          </>
        }
      />

      <CaseStudyGrid />
    </Layout>
  );
};

export default Work;
