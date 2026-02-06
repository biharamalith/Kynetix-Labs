import { Layout } from "@/components/layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <div className="container-main text-center">
          <div className="font-display text-8xl md:text-9xl font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="heading-section mb-4">Page Not Found</h1>
          <p className="body-large max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
