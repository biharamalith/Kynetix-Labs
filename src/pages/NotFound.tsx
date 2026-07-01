import { Home } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SiteButton } from "@/components/site/SiteButton";

const NotFound = () => {
  return (
    <Layout>
      <section className="grid min-h-[60vh] place-items-center px-6 py-20 text-center">
        <div className="max-w-xl">
          <div className="mb-4 font-display text-8xl font-bold text-primary/20 md:text-9xl">404</div>
          <h1 className="heading-section mb-4 text-white">Page not found</h1>
          <p className="body-large mx-auto mb-8 max-w-md">The page you are looking for does not exist or has been moved.</p>
          <SiteButton to="/" showArrow={false}>
            <Home className="h-4 w-4" />
            Back to home
          </SiteButton>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
