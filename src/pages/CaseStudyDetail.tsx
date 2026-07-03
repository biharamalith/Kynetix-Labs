import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHero } from "@/components/site/PageHero";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { ValueList } from "@/components/site/ValueList";
import { CaseStudyImpact } from "@/components/work/CaseStudyImpact";
import { CaseStudyStack } from "@/components/work/CaseStudyStack";
import { CaseStudyTimeline } from "@/components/work/CaseStudyTimeline";
import { createCaseStudyPath, routes } from "@/config/routes";
import { caseStudyCopy, findCaseStudyBySlug } from "@/content/caseStudies";
import { company } from "@/lib/siteContent";
import { createCaseStudyStructuredData } from "@/lib/seo";
import NotFound from "./NotFound";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = findCaseStudyBySlug(slug);

  if (!study) {
    return <NotFound />;
  }

  const studyPath = createCaseStudyPath(study.slug);

  return (
    <Layout>
      <SEO
        title={study.seoTitle}
        description={study.seoDescription}
        keywords={`${study.category}, case study, work example, ${company.name}, ${study.title}`}
        structuredData={createCaseStudyStructuredData({
          siteUrl: company.siteUrl,
          path: studyPath,
          name: study.title,
          description: study.seoDescription,
          publisherName: company.name,
          category: study.category,
          status: study.status,
        })}
      />

      <PageHero
        eyebrow={`${study.eyebrow} / ${study.category}`}
        title={study.title}
        description={study.description}
        actions={
          <Link to={routes.work} className="site-button site-button-outline group">
            <ArrowLeft className="h-4 w-4" />
            <span>{caseStudyCopy.backToWork}</span>
          </Link>
        }
      />

      <PageSection eyebrow="Case shape" title="The problem and the system response." description={study.summary} className="pt-4">
        <RevealOnScroll>
          <div className="grid gap-5 lg:grid-cols-2">
            <ContentCard className="p-7" intensity="strong">
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Challenge</p>
                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">{study.challenge}</p>
              </div>
            </ContentCard>
            <ContentCard className="p-7" intensity="strong">
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Solution</p>
                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">{study.solution}</p>
              </div>
            </ContentCard>
          </div>
        </RevealOnScroll>
      </PageSection>

      <PageSection eyebrow="Impact" title="Practical outcomes this work demonstrates." description="These outcomes are described without invented client numbers, testimonials, or private deployment claims.">
        <RevealOnScroll>
          <CaseStudyImpact results={study.results} />
        </RevealOnScroll>
      </PageSection>

      <PageSection eyebrow="Architecture" title="How the story is shaped into maintainable work." className="page-section-muted">
        <RevealOnScroll>
          <CaseStudyStack study={study} />
        </RevealOnScroll>
      </PageSection>

      <PageSection eyebrow="Delivery path" title="The build story stays reviewable." description="Each example is broken into stages and evidence so future client-approved work can be added with the same structure.">
        <RevealOnScroll>
          <CaseStudyTimeline stages={study.stages} />
        </RevealOnScroll>
        <RevealOnScroll className="mt-10">
          <ContentCard className="mx-auto max-w-4xl p-7" intensity="strong">
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <ValueList title="Reviewable evidence" items={study.evidence} columns="two" />
              <SiteButton to={routes.contact}>{caseStudyCopy.detailCta}</SiteButton>
            </div>
          </ContentCard>
        </RevealOnScroll>
      </PageSection>
    </Layout>
  );
};

export default CaseStudyDetail;
