import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { PageHero } from "@/components/site/PageHero";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { pageCopy, seo } from "@/lib/siteContent";

const copy = pageCopy.products;

const Products = () => {
  return (
    <Layout>
      <SEO {...seo.products} />

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

      <ProductShowcase />

      <PageSection
        eyebrow={copy.planning.eyebrow}
        title={copy.planning.title}
        description={copy.planning.description}
      >
        <RevealOnScroll className="mt-10 flex justify-center">
          <SiteButton to={copy.planning.action.path}>{copy.planning.action.label}</SiteButton>
        </RevealOnScroll>
      </PageSection>
    </Layout>
  );
};

export default Products;