import { homeCopy, homeProducts } from "@/lib/siteContent";
import { ContentCard } from "@/components/site/ContentCard";
import { SiteButton } from "@/components/site/SiteButton";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { PageSection } from "@/components/site/PageSection";

const copy = homeCopy.products;

export const ProductHighlightsSection = () => {
  return (
    <PageSection
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="page-section-muted"
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {homeProducts.map((product, index) => {
          const Icon = product.icon;
          return (
            <RevealOnScroll key={product.name} delay={index * 120}>
              <ContentCard className="relative h-full overflow-hidden p-7">
                <div className="product-orbit" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="feature-icon-box feature-icon-box-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-semibold text-white">{product.name}</h3>
                  <p className="text-sm leading-7 text-white/60">{product.summary}</p>
                </div>
              </ContentCard>
            </RevealOnScroll>
          );
        })}
      </div>

      <RevealOnScroll className="mt-10 flex justify-center">
        <SiteButton to={copy.action.path} variant={copy.action.variant}>
          {copy.action.label}
        </SiteButton>
      </RevealOnScroll>
    </PageSection>
  );
};
