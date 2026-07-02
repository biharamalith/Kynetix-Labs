export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  products: "/products",
  smartPos: "/products/smart-pos",
  blog: "/blog",
  blogDetail: "/blog/:slug",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof routes;

export interface SitemapEntry {
  path: string;
  changefreq: "weekly" | "monthly";
  priority: string;
}

export const createBlogArticlePath = (slug: string) => `${routes.blog}/${slug}`;
export const createProductPath = (slug: string) => `${routes.products}/${slug}`;

export const staticPublicRoutes = [
  routes.home,
  routes.about,
  routes.services,
  routes.products,
  routes.smartPos,
  routes.blog,
  routes.contact,
  routes.privacy,
  routes.terms,
] as const;

export const sitemapEntries: SitemapEntry[] = [
  { path: routes.home, changefreq: "weekly", priority: "1.0" },
  { path: routes.about, changefreq: "monthly", priority: "0.8" },
  { path: routes.services, changefreq: "monthly", priority: "0.9" },
  { path: routes.products, changefreq: "monthly", priority: "0.8" },
  { path: routes.smartPos, changefreq: "monthly", priority: "0.7" },
  { path: routes.blog, changefreq: "weekly", priority: "0.7" },
  { path: routes.contact, changefreq: "monthly", priority: "0.7" },
  { path: routes.privacy, changefreq: "monthly", priority: "0.4" },
  { path: routes.terms, changefreq: "monthly", priority: "0.4" },
];
