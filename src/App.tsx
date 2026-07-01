import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "@/components/site/ErrorBoundary";

const Home = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="grid min-h-screen place-items-center bg-background text-foreground">
    <div className="text-center">
      <div className="mx-auto mb-5 h-12 w-12 animate-pulse rounded-2xl border border-cyan-200/30 bg-cyan-200/10" />
      <p className="text-sm uppercase tracking-[0.24em] text-white/50">Loading Kynetix Labs</p>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
