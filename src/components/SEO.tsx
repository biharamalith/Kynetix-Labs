import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

export const SEO = ({
  title = "Kynetix Labs - Mobile, Web, IoT, POS & AI/ML Development Services",
  description = "Expert mobile app development (Flutter, iOS, Android), web platforms, IoT systems, smart POS solutions, custom software, and AI/ML integration for businesses of all sizes.",
  keywords = "mobile app development, flutter development, web development, IoT solutions, POS system development, custom software development, AI ML integration, iOS Android development, cloud architecture, react nextjs development, smart point of sale, machine learning services",
  ogImage = "https://kynetixlabs.com/og-image.jpg",
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = `https://kynetixlabs.com${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update structured data if provided
    if (structuredData) {
      let script = document.querySelector('script#page-structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', 'page-structured-data');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, noindex, structuredData]);

  return null;
};
