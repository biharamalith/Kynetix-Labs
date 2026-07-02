import { productPrinciples, productStories, productStoryCopy } from "@/content/products";
import { DetailCard } from "@/components/site/DetailCard";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { MetricStrip } from "@/components/site/MetricStrip";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { ValueList } from "@/components/site/ValueList";

export const ProductShowcase = () => {
  const copy = productStoryCopy.overview;
  const principleCopy = productStoryCopy.principles;

  return (
    <>
      <PageSection eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
        <FeatureGrid columns="two">
          {productStories.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 105}>
              <DetailCard
                id={product.id}
                icon={product.icon}
                eyebrow={product.status}
                meta={product.category}
                title={product.title}
                description={product.description}
              >
                <ValueList title="Ideal for" items={product.idealFor} />
                <ValueList title="Business outcomes" items={product.outcomes} columns="two" />
                <ValueList title="Capability direction" items={product.capabilities} columns="two" />
                <p className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.055] p-4 text-sm leading-7 text-cyan-50/72">
                  {product.launchNote}
                </p>
              </DetailCard>
            </RevealOnScroll>
          ))}
        </FeatureGrid>
      </PageSection>

      <PageSection
        eyebrow={principleCopy.eyebrow}
        title={principleCopy.title}
        description={principleCopy.description}
        className="page-section-muted"
      >
        <MetricStrip items={productPrinciples.map((principle) => ({ label: principle.title, description: principle.description }))} />
      </PageSection>
    </>
  );
};
