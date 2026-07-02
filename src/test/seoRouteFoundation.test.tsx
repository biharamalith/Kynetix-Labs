import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import { createBlogArticlePath, routes, sitemapEntries, staticPublicRoutes } from "@/config/routes";
import { blogArticles } from "@/content/blog";
import { privacyPageContent, termsPageContent } from "@/content/legal";
import { footerLinks, seo } from "@/lib/siteContent";
import { createCanonicalUrl } from "@/lib/seo";

const renderRoute = (path: string, element: ReactNode) =>
  render(
    <MemoryRouter initialEntries={[path]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {element}
    </MemoryRouter>,
  );



describe("SEO and compliance route foundation", () => {
  it("keeps legal routes, footer links, sitemap entries, and SEO metadata aligned", () => {
    expect(staticPublicRoutes).toContain(routes.privacy);
    expect(staticPublicRoutes).toContain(routes.terms);
    expect(footerLinks.legal.map((link) => link.path)).toEqual([routes.privacy, routes.terms]);

    const sitemapPaths = sitemapEntries.map((entry) => entry.path);
    for (const path of staticPublicRoutes) {
      expect(sitemapPaths).toContain(path);
    }

    expect(seo.privacy.title).toContain("Privacy");
    expect(seo.terms.title).toContain("Terms");
  });

  it("renders privacy and terms pages with real centralized policy content", () => {
    const privacyRender = renderRoute(routes.privacy, <Privacy />);
    expect(screen.getByRole("heading", { name: "Privacy policy for website visitors and project inquiries." })).toBeInTheDocument();
    expect(screen.getByText(privacyPageContent.sections[0].body[0])).toBeInTheDocument();
    privacyRender.unmount();

    renderRoute(routes.terms, <Terms />);
    expect(screen.getByRole("heading", { name: "Terms for using the Kynetix Labs website." })).toBeInTheDocument();
    expect(screen.getByText(termsPageContent.sections[0].body[0])).toBeInTheDocument();
  });

  it("renders blog cards and detail pages from centralized article content", () => {
    const firstArticle = blogArticles[0];

    const blogRender = renderRoute(routes.blog, <Blog />);
    expect(screen.getByRole("link", { name: `Read insight: ${firstArticle.title}` })).toHaveAttribute(
      "href",
      createBlogArticlePath(firstArticle.slug),
    );
    blogRender.unmount();

    render(
      <MemoryRouter
        initialEntries={[createBlogArticlePath(firstArticle.slug)]}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Routes>
          <Route path={routes.blogDetail} element={<BlogDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: firstArticle.title })).toBeInTheDocument();
    expect(screen.getByText(firstArticle.takeaways[0])).toBeInTheDocument();
  });

  it("keeps canonical URLs normalized", () => {
    expect(createCanonicalUrl("https://kynetixlabs.com/", "/services/")).toBe("https://kynetixlabs.com/services");
    expect(createCanonicalUrl("https://kynetixlabs.com", "/")).toBe("https://kynetixlabs.com/");
  });

  it("keeps route registries free of placeholder hash links", () => {
    const registeredPaths = [
      ...staticPublicRoutes,
      ...sitemapEntries.map((entry) => entry.path),
      ...footerLinks.company.map((link) => link.path),
      ...footerLinks.services.map((link) => link.path),
      ...footerLinks.build.map((link) => link.path),
      ...footerLinks.legal.map((link) => link.path),
      ...blogArticles.map((article) => createBlogArticlePath(article.slug)),
    ];

    expect(registeredPaths).not.toContain("#");
    expect(registeredPaths.every((path) => path.startsWith("/"))).toBe(true);
  });
});
