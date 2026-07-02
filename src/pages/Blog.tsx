import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/site/PageHero";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { blogArticles } from "@/content/blog";
import { pageCopy, seo } from "@/lib/siteContent";

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
            {blogArticles.map((article, index) => (
              <RevealOnScroll key={article.slug} delay={index * 110}>
                <BlogArticleCard article={article} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;