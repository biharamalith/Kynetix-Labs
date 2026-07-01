import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ContentCard } from "@/components/site/ContentCard";
import { PageHero } from "@/components/site/PageHero";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { articles, pageCopy, seo } from "@/lib/siteContent";

const copy = pageCopy.blog;

const Blog = () => {
  return (
    <Layout>
      <SEO {...seo.blog} />

      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description}
        actions={<SiteButton to={copy.hero.action.path}>{copy.hero.action.label}</SiteButton>}
      />

      <section className="page-section pt-4">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <RevealOnScroll key={article.slug} delay={index * 110}>
                <ContentCard className="h-full p-7">
                  <Link to={`/blog/${article.slug}`} className="group block h-full">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/70">{article.category}</span>
                    <h2 className="mt-5 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">
                      {article.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/60">{article.excerpt}</p>
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/45">
                      <span>{article.author}</span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </Link>
                </ContentCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
