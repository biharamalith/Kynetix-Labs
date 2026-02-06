import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const insights = [
  {
    title: "Building Scalable AI Systems in Production",
    excerpt: "Key architectural patterns for deploying machine learning models at scale while maintaining performance and reliability.",
    author: "Bihara Malith",
    readTime: "8 min read",
    category: "AI Engineering",
    slug: "scalable-ai-systems",
  },
  {
    title: "The Future of Mobile Development with Flutter",
    excerpt: "How cross-platform frameworks are reshaping mobile engineering and what it means for enterprise applications.",
    author: "Pasindu Pabasara",
    readTime: "6 min read",
    category: "Mobile",
    slug: "future-of-flutter",
  },
  {
    title: "Edge Computing: A New Paradigm for Web Applications",
    excerpt: "Exploring how edge runtime environments are transforming the way we build and deploy web applications.",
    author: "Kushad Disanayake",
    readTime: "7 min read",
    category: "Architecture",
    slug: "edge-computing-paradigm",
  },
];

export const InsightsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="accent-line mb-6" />
            <h2 className="heading-section mb-4">Engineering Insights</h2>
            <p className="body-large max-w-xl">
              Thoughts on technology, architecture, and building products that scale.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-6 md:mt-0 group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((article, index) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="card-elevated group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category */}
              <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-4">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="heading-subsection mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta */}
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
  );
};
