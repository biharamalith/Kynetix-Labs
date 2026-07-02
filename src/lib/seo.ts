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


export const createSoftwareProductPageStructuredData = ({
  siteUrl,
  path,
  name,
  description,
  category,
  brandName,
}: {
  siteUrl: string;
  path: string;
  name: string;
  description: string;
  category: string;
  brandName: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url: createCanonicalUrl(siteUrl, path),
  about: {
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: category,
    creator: {
      "@type": "Organization",
      name: brandName,
    },
  },
});

export const createWebPageStructuredData = ({
  siteUrl,
  path,
  name,
  description,
  publisherName,
}: {
  siteUrl: string;
  path: string;
  name: string;
  description: string;
  publisherName: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url: createCanonicalUrl(siteUrl, path),
  publisher: {
    "@type": "Organization",
    name: publisherName,
  },
});

export const createCaseStudyStructuredData = ({
  siteUrl,
  path,
  name,
  description,
  publisherName,
  category,
  status,
}: {
  siteUrl: string;
  path: string;
  name: string;
  description: string;
  publisherName: string;
  category: string;
  status: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url: createCanonicalUrl(siteUrl, path),
  publisher: {
    "@type": "Organization",
    name: publisherName,
  },
  about: {
    "@type": "CreativeWork",
    name,
    description,
    genre: category,
    creativeWorkStatus: status,
  },
});
