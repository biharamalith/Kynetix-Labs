import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createBlogArticlePath } from "@/config/routes";
import { blogArticleCopy, type BlogArticle } from "@/content/blog";
import { ContentCard } from "@/components/site/ContentCard";

interface BlogArticleCardProps {
  article: BlogArticle;
}

export const BlogArticleCard = ({ article }: BlogArticleCardProps) => (
  <ContentCard className="h-full p-7">
    <Link to={createBlogArticlePath(article.slug)} className="group block h-full" aria-label={`${blogArticleCopy.listCta}: ${article.title}`}>
      <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">{article.category}</span>
      <h2 className="mt-5 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-white">
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
);
