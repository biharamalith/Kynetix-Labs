import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "@/components/site/ErrorBoundary";
import { company, routes } from "@/lib/siteContent";

const Home = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div
    className="grid min-h-screen place-items-center bg-background text-foreground"
    role="status"
    aria-label={`Loading page content for ${company.name}`}
  >
    <div className="text-center">
      <div className="mx-auto mb-5 h-12 w-12 animate-pulse rounded-2xl border border-cyan-200/30 bg-cyan-200/10" />
      <p className="text-sm uppercase tracking-[0.24em] text-white/50">Loading {company.name}</p>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <ErrorBoundary>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.services} element={<Services />} />
          <Route path={routes.products} element={<Products />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.contact} element={<Contact />} />
          {/* Add new public routes above the catch-all route so unknown URLs still render NotFound. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;