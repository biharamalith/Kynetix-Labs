# Kynetix Labs Website

Official React/Vite website for Kynetix Labs.

The codebase is intentionally small, reusable, and content-driven. Public copy, navigation, services, products, contact details, SEO metadata, and route paths are centralized so a developer can update common business information from one place instead of editing many components.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Zod validation
- Netlify Forms

## Local setup

```powershell
npm install
npm run dev
```

Open the URL shown by Vite, usually `http://localhost:8080/`.

## Quality commands

Run these before committing changes:

```powershell
npm run build
npm run lint
npm run test
npm run typecheck
npm audit --audit-level=low
```

## Important folders

```text
src/lib/siteContent.ts        Central company data, routes, copy, SEO, services, products, articles, contact details
src/components/site/          Shared UI and motion helpers used across pages
src/components/home/          Homepage section composition
src/components/layout/        Navbar, footer, and global layout shell
src/components/contact/       Contact form and contact information panel
src/components/about/         About-page specific sections
src/pages/                    Route-level page composition
src/index.css                 Theme tokens, global UI classes, animation styles, reduced-motion rules
```

## Editing rule

Before changing public text, URLs, navigation, services, products, footer links, SEO, or contact details, check:

```text
src/lib/siteContent.ts
```

Only edit components when changing layout, rendering behavior, form behavior, or animation structure.

## Deployment notes

The project is ready for Netlify deployment. The contact form uses Netlify Forms and requires form notifications to be configured in the Netlify dashboard after deployment.
