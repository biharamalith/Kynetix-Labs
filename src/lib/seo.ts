export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
}

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const createCanonicalUrl = (siteUrl: string, path: string) => {
  const cleanSiteUrl = trimTrailingSlash(siteUrl);
  const cleanPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${cleanSiteUrl}${cleanPath}`;
};

export const createArticleStructuredData = ({
  siteUrl,
  path,
  title,
  description,
  authorName,
  publishedDate,
  updatedDate,
}: {
  siteUrl: string;
  path: string;
  title: string;
  description: string;
  authorName: string;
  publishedDate: string;
  updatedDate: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: {
    "@type": "Organization",
    name: authorName,
  },
  publisher: {
    "@type": "Organization",
    name: authorName,
  },
  datePublished: publishedDate,
  dateModified: updatedDate,
  mainEntityOfPage: createCanonicalUrl(siteUrl, path),
});
