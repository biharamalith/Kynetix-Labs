import { ArrowLeft, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHero } from "@/components/site/PageHero";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { createBlogArticlePath, routes } from "@/config/routes";
import { blogArticleCopy, findBlogArticleBySlug } from "@/content/blog";
import { company } from "@/lib/siteContent";
import { createArticleStructuredData } from "@/lib/seo";
import NotFound from "./NotFound";

const BlogDetail = () => {
  const { slug } = useParams();
  const article = findBlogArticleBySlug(slug);

  if (!article) {
    return <NotFound />;
  }

  const articlePath = createBlogArticlePath(article.slug);

  return (
    <Layout>
      <SEO
        title={article.seoTitle}
        description={article.seoDescription}
        keywords={`${article.category}, software engineering, ${company.name}, ${article.title}`}
        ogType="article"
        structuredData={createArticleStructuredData({
          siteUrl: company.siteUrl,
          path: articlePath,
          title: article.title,
          description: article.seoDescription,
          authorName: article.author,
          publishedDate: article.publishedDate,
          updatedDate: article.updatedDate,
        })}
      />

      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        actions={
          <Link to={routes.blog} className="site-button site-button-outline group">
            <ArrowLeft className="h-4 w-4" />
            <span>{blogArticleCopy.backToInsights}</span>
          </Link>
        }
      />

      <article className="page-section pt-4">
        <div className="container-main">
          <RevealOnScroll>
            <ContentCard className="mx-auto max-w-4xl p-7 md:p-10" intensity="strong">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                <span>{article.author}</span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
                <span>Updated {article.updatedDate}</span>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <h2 className="font-display text-xl font-semibold text-white">Key takeaways</h2>
                <ul className="mt-5 space-y-3">
                  {article.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-sm leading-7 text-white/65">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-2xl font-semibold text-white">{section.heading}</h2>
                    <p className="mt-4 text-sm leading-7 text-white/60">{section.body}</p>
                  </section>
                ))}
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <SiteButton to={routes.contact}>{blogArticleCopy.relatedCta}</SiteButton>
              </div>
            </ContentCard>
          </RevealOnScroll>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;
