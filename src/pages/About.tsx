import { FoundersSection } from "@/components/about/FoundersSection";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHero } from "@/components/site/PageHero";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { aboutValues, approachSteps, createOrganizationStructuredData, pageCopy, seo } from "@/lib/siteContent";

const copy = pageCopy.about;

const About = () => {
  return (
    <Layout>
      <SEO {...seo.about} structuredData={createOrganizationStructuredData()} />

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

      <PageSection
        eyebrow={copy.work.eyebrow}
        title={copy.work.title}
        description={copy.work.description}
        className="page-section-muted"
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {approachSteps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 120}>
              <ContentCard className="h-full p-7">
                <span className="process-number">0{index + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{step.description}</p>
              </ContentCard>
            </RevealOnScroll>
          ))}
        </div>
      </PageSection>

      <FoundersSection />

      <PageSection
        eyebrow={copy.values.eyebrow}
        title={copy.values.title}
        description={copy.values.description}
        className="page-section-muted"
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {aboutValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <RevealOnScroll key={value.title} delay={index * 120}>
                <ContentCard className="h-full p-7 text-center">
                  <div className="feature-icon-box feature-icon-box-lg mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{value.description}</p>
                </ContentCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </PageSection>

      <section className="page-section pb-24">
        <div className="container-main text-center">
          <RevealOnScroll>
            <p className="section-eyebrow justify-center">
              <span className="section-eyebrow-dot" />
              {copy.cta.eyebrow}
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              {copy.cta.description}
            </p>
            <div className="mt-9 flex justify-center">
              <SiteButton to={copy.cta.action.path}>{copy.cta.action.label}</SiteButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default About;
