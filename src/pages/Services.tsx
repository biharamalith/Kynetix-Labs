import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHero } from "@/components/site/PageHero";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { createServiceStructuredData, pageCopy, services, seo } from "@/lib/siteContent";

const copy = pageCopy.services;

const Services = () => {
  return (
    <Layout>
      <SEO {...seo.services} structuredData={createServiceStructuredData()} />

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

      <section className="page-section pt-4">
        <div className="container-main">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <RevealOnScroll key={service.id} delay={index * 100}>
                  <ContentCard className="h-full p-7" intensity="strong">
                    <article id={service.id} className="scroll-mt-28">
                      <div className="mb-7 flex items-start justify-between gap-5">
                        <div className="feature-icon-box feature-icon-box-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
                          Service
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{service.title}</h2>
                      <p className="mt-4 text-base leading-7 text-white/62">{service.description}</p>
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-200" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </ContentCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

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
