import { createBlogArticlePath } from "@/config/routes";

const articleAuthor = "Kynetix Labs";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogArticle {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
  publishedDate: string;
  updatedDate: string;
  seoTitle: string;
  seoDescription: string;
  takeaways: string[];
  sections: BlogSection[];
}

export const blogArticleCopy = {
  listCta: "Read insight",
  backToInsights: "Back to insights",
  relatedCta: "Discuss this with Kynetix",
};

export const blogArticles: BlogArticle[] = [
  {
    title: "How to plan a software project before writing code",
    excerpt:
      "A clear project starts with the business problem, users, workflows, risks, and launch scope before screens and code are created.",
    author: articleAuthor,
    readTime: "6 min read",
    category: "Planning",
    slug: "software-project-planning",
    publishedDate: "2026-07-01",
    updatedDate: "2026-07-01",
    seoTitle: "How to Plan a Software Project Before Writing Code | Kynetix Labs",
    seoDescription:
      "Learn how to plan a software project by defining the business goal, users, scope, risks, launch path, and success measures before development starts.",
    takeaways: [
      "Start with the business problem, not the screen design.",
      "Map users, workflows, constraints, and launch risks before estimating build effort.",
      "A small scoped plan helps teams avoid expensive rebuilds later.",
    ],
    sections: [
      {
        heading: "Start with the business outcome",
        body:
          "The first project conversation should explain what the business needs to improve: faster checkout, fewer manual updates, better customer communication, safer approvals, or clearer reporting. When the outcome is specific, the technical plan becomes easier to control.",
      },
      {
        heading: "Shape the first useful release",
        body:
          "A strong first release should be small enough to launch, but complete enough to prove value. That means choosing the most important users, workflows, data views, and integrations before adding secondary features.",
      },
      {
        heading: "Keep risks visible",
        body:
          "Unknown integrations, unclear permissions, sensitive data, payment flows, and device constraints should be named early. A good plan does not hide complexity; it turns it into clear decisions and phased delivery.",
      },
    ],
  },
  {
    title: "Why reusable UI components matter for business websites",
    excerpt:
      "Reusable sections reduce design drift, speed up future pages, and make animated websites easier to maintain without rewriting every screen.",
    author: articleAuthor,
    readTime: "5 min read",
    category: "Frontend",
    slug: "reusable-ui-components",
    publishedDate: "2026-07-01",
    updatedDate: "2026-07-01",
    seoTitle: "Why Reusable UI Components Matter for Business Websites | Kynetix Labs",
    seoDescription:
      "Reusable UI components help business websites stay consistent, easier to update, and safer to grow as new pages, sections, and conversion flows are added.",
    takeaways: [
      "Shared components keep pages visually consistent.",
      "Centralized content makes future copy updates safer.",
      "Reusable sections reduce duplicated code and styling drift.",
    ],
    sections: [
      {
        heading: "Consistency is a business signal",
        body:
          "Visitors notice when pages feel disconnected. Shared section shells, cards, buttons, and content modules help the site feel like one designed product instead of a collection of one-off screens.",
      },
      {
        heading: "Reusable code improves speed",
        body:
          "When a service card, product card, CTA, or list pattern is reusable, new pages can be created faster and tested more reliably. The development team spends less time copying layout code and more time improving the message.",
      },
      {
        heading: "Maintenance becomes safer",
        body:
          "Centralized content and typed contracts reduce the chance that an old page shows outdated claims. This matters when the website grows into service pages, product pages, case studies, and policy routes.",
      },
    ],
  },
  {
    title: "Turning operations into dashboards clients can understand",
    excerpt:
      "Good dashboards organize statuses, actions, metrics, and exceptions so teams can make faster decisions with less confusion.",
    author: articleAuthor,
    readTime: "7 min read",
    category: "Operations",
    slug: "operations-dashboard-design",
    publishedDate: "2026-07-01",
    updatedDate: "2026-07-01",
    seoTitle: "Turning Operations Into Dashboards Clients Can Understand | Kynetix Labs",
    seoDescription:
      "A practical guide to designing operational dashboards that organize statuses, actions, metrics, exceptions, and decision points for business teams.",
    takeaways: [
      "Dashboards should show current state, priority, and next action.",
      "Raw data must be grouped into useful operational decisions.",
      "Good dashboard design includes permissions, empty states, and exception handling.",
    ],
    sections: [
      {
        heading: "Show the work state first",
        body:
          "A useful dashboard starts by answering what is happening now. Open tasks, delayed items, failed checks, sales movement, stock risk, and customer requests should be visible without forcing users to search through raw tables.",
      },
      {
        heading: "Connect metrics to action",
        body:
          "Metrics are only useful when they help a team decide what to do next. A dashboard should pair summaries with clear routes to review, approve, retry, update, or contact the right person.",
      },
      {
        heading: "Design for exceptions",
        body:
          "Real operations include missing data, failed syncs, user mistakes, and urgent exceptions. A production dashboard needs empty states, warnings, role-based actions, and safe recovery paths from the start.",
      },
    ],
  },
];

export const blogArticlePaths = blogArticles.map((article) => createBlogArticlePath(article.slug));

export const findBlogArticleBySlug = (slug: string | undefined) =>
  blogArticles.find((article) => article.slug === slug);
