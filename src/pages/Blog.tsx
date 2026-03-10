import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Building Scalable AI Systems in Production",
    excerpt: "Key architectural patterns for deploying machine learning models at scale while maintaining performance and reliability.",
    author: "Bihara Malith",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "AI Engineering",
    slug: "scalable-ai-systems",
  },
  {
    title: "The Future of Mobile Development with Flutter",
    excerpt: "How cross-platform frameworks are reshaping mobile engineering and what it means for enterprise applications.",
    author: "Pasindu Pabasara",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "Mobile",
    slug: "future-of-flutter",
  },
  {
    title: "Edge Computing: A New Paradigm for Web Applications",
    excerpt: "Exploring how edge runtime environments are transforming the way we build and deploy web applications.",
    author: "Kushad Disanayake",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    category: "Architecture",
    slug: "edge-computing-paradigm",
  },
  {
    title: "Designing Secure APIs: Best Practices for 2026",
    excerpt: "A comprehensive guide to building secure, performant APIs that scale with your business needs.",
    author: "Bihara Malith",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "Security",
    slug: "secure-apis-2026",
  },
  {
    title: "State Management in Modern React Applications",
    excerpt: "Comparing different state management approaches and when to use each in complex React applications.",
    author: "Pasindu Pabasara",
    date: "Dec 20, 2025",
    readTime: "9 min read",
    category: "Frontend",
    slug: "react-state-management",
  },
  {
    title: "Building Real-Time Features with WebSockets",
    excerpt: "Practical implementation patterns for adding real-time capabilities to your web applications.",
    author: "Kushad Disanayake",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    category: "Backend",
    slug: "websocket-patterns",
  },
];

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Kynetix Labs Engineering Blog",
    "description": "Engineering insights on AI/ML, mobile development, cloud architecture, and modern software engineering practices",
    "url": "https://kynetixlabs.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Kynetix Labs"
    }
  };

  return (
    <Layout>
      <SEO
        title="Tech Blog - Engineering Insights on AI, Flutter & Cloud | Kynetix Labs"
        description="Engineering blog featuring insights on AI/ML integration, Flutter mobile development, cloud architecture, React development, and modern software engineering practices."
        keywords="software engineering blog, AI ML tutorials, flutter development guide, cloud architecture patterns, React best practices, tech insights, software development articles, programming tutorials, engineering practices"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl">
            <div className="accent-line mb-6" />
            <h1 className="heading-display mb-6">
              Engineering <span className="gradient-text">Insights</span>
            </h1>
            <p className="body-large max-w-2xl">
              Thoughts on technology, architecture, and building products that scale. 
              Written by engineers, for engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="container-main">
          <Link
            to={`/blog/${articles[0].slug}`}
            className="block rounded-2xl border border-border bg-card p-8 md:p-12 hover:border-primary/30 transition-colors group"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-4">
                  Featured · {articles[0].category}
                </span>
                <h2 className="heading-section mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="body-regular mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{articles[0].author}</span>
                  <span>·</span>
                  <span>{articles[0].date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {articles[0].readTime}
                  </span>
                </div>
              </div>
              <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-6xl font-display font-bold text-primary/20">01</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <h2 className="heading-subsection mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="card-elevated group"
              >
                <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-4">
                  {article.category}
                </span>
                <h3 className="heading-subsection mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border">
                  <span>{article.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="heading-section mb-4">Stay Updated</h2>
          <p className="body-large max-w-xl mx-auto mb-8">
            Get the latest insights on technology and engineering delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
