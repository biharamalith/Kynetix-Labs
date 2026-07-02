import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHero } from "@/components/site/PageHero";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import type { LegalPageContent } from "@/content/legal";
import type { SeoContent } from "@/lib/siteContent";

interface LegalPageLayoutProps {
  content: LegalPageContent;
  seo: SeoContent;
}

export const LegalPageLayout = ({ content, seo }: LegalPageLayoutProps) => (
  <Layout>
    <SEO {...seo} />

    <PageHero eyebrow={content.eyebrow} title={content.title} description={content.description} />

    <section className="page-section pt-4">
      <div className="container-main">
        <RevealOnScroll>
          <ContentCard className="mx-auto max-w-4xl p-7 md:p-10" intensity="strong">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">
              Effective {content.effectiveDate}
            </p>
            <div className="mt-8 space-y-9">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-2xl font-semibold text-white">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-white/60">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </ContentCard>
        </RevealOnScroll>
      </div>
    </section>
  </Layout>
);
