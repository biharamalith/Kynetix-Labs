import { ContactInfoPanel } from "@/components/contact/ContactInfoPanel";
import { ContactTrustPanel } from "@/components/contact/ContactTrustPanel";
import { ProjectContactForm } from "@/components/contact/ProjectContactForm";
import { ProjectBriefSummary } from "@/components/contact/ProjectBriefSummary";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/site/PageHero";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { createContactStructuredData, pageCopy, seo } from "@/lib/siteContent";

const copy = pageCopy.contact;

const Contact = () => {
  return (
    <Layout>
      <SEO {...seo.contact} structuredData={createContactStructuredData()} />

      <PageHero eyebrow={copy.hero.eyebrow} title={copy.hero.title} description={copy.hero.description} />

      <section className="page-section pt-4">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <RevealOnScroll>
              <div className="space-y-7">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{copy.discussion.title}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{copy.discussion.description}</p>
                </div>

                <ContactTrustPanel />
                <ProjectBriefSummary />
                <ContactInfoPanel />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <ProjectContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
