import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company, seo } from "@/lib/siteContent";
import { createCanonicalUrl } from "@/lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

const upsertElement = <T extends HTMLElement>(selector: string, createElement: () => T) => {
  const existing = document.querySelector<T>(selector);
  if (existing) {
    return existing;
  }

  const element = createElement();
  document.head.appendChild(element);
  return element;
};

export const SEO = ({
  title = seo.home.title,
  description = seo.home.description,
  keywords = seo.home.keywords,
  ogImage = `${company.siteUrl}/og-image.jpg`,
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = createCanonicalUrl(company.siteUrl, location.pathname);

  useEffect(() => {
    document.title = title;

    // Single-page app SEO updater. Keeps one canonical/meta/script element per page instead of appending duplicates on navigation.
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      const element = upsertElement(`meta[${attribute}="${name}"]`, () => {
        const meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        return meta;
      });
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    const canonical = upsertElement('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.setAttribute("href", canonicalUrl);

    const script = upsertElement("script#page-structured-data", () => {
      const structuredDataScript = document.createElement("script");
      structuredDataScript.setAttribute("type", "application/ld+json");
      structuredDataScript.setAttribute("id", "page-structured-data");
      return structuredDataScript;
    });
    script.textContent = structuredData ? JSON.stringify(structuredData) : "";
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, noindex, structuredData]);

  return null;
};
