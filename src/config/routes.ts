export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  serviceDetail: "/services/:slug",
  process: "/process",
  securityQuality: "/security-quality",
  work: "/work",
  caseStudyDetail: "/work/:slug",
  industries: "/industries",
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
export const createCaseStudyPath = (slug: string) => `${routes.work}/${slug}`;
export const createProductPath = (slug: string) => `${routes.products}/${slug}`;
export const createServicePath = (slug: string) => `${routes.services}/${slug}`;

export const serviceDetailSlugs = ["mobile-app-development", "web-cloud-platforms", "ai-ml-systems", "iot-systems"] as const;

export const staticPublicRoutes = [
  routes.home,
  routes.about,
  routes.services,
  ...serviceDetailSlugs.map(createServicePath),
  routes.process,
  routes.securityQuality,
  routes.work,
  routes.industries,
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
  { path: createServicePath("mobile-app-development"), changefreq: "monthly", priority: "0.8" },
  { path: createServicePath("web-cloud-platforms"), changefreq: "monthly", priority: "0.8" },
  { path: createServicePath("ai-ml-systems"), changefreq: "monthly", priority: "0.8" },
  { path: createServicePath("iot-systems"), changefreq: "monthly", priority: "0.8" },
  { path: routes.process, changefreq: "monthly", priority: "0.7" },
  { path: routes.securityQuality, changefreq: "monthly", priority: "0.7" },
  { path: routes.work, changefreq: "monthly", priority: "0.8" },
  { path: routes.industries, changefreq: "monthly", priority: "0.7" },
  { path: routes.products, changefreq: "monthly", priority: "0.8" },
  { path: routes.smartPos, changefreq: "monthly", priority: "0.7" },
  { path: routes.blog, changefreq: "weekly", priority: "0.7" },
  { path: routes.contact, changefreq: "monthly", priority: "0.7" },
  { path: routes.privacy, changefreq: "monthly", priority: "0.4" },
  { path: routes.terms, changefreq: "monthly", priority: "0.4" },
];
