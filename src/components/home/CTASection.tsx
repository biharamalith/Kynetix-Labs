import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative p-12 md:p-16 lg:p-20 text-center">
            <h2 className="heading-section mb-4">Ready to Build Something Great?</h2>
            <p className="body-large max-w-2xl mx-auto mb-8">
              Whether you need a full-scale mobile application, a complex AI integration, 
              or a dedicated development team, we're here to help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
