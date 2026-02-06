import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-main relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Technology Lab & Engineering Partner
            </p>

            {/* Main heading - editorial style */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              <span className="text-foreground">Accelerating</span>
              <br />
              <span className="text-primary">Intelligence.</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              We operate at the intersection of product innovation and engineering services—building market-ready platforms while helping visionary founders engineer their digital future.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/contact" className="btn-primary group">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right side - Clean stats block */}
          <div className="lg:col-span-5">
            <div className="border border-border bg-card/30 p-8 lg:p-10">
              {/* Stats */}
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <div className="font-display text-4xl md:text-5xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
                </div>
                <div className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
                  <div className="font-display text-4xl md:text-5xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Enterprise Clients</div>
                </div>
                <div className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
                  <div className="font-display text-4xl md:text-5xl font-bold text-foreground">99%</div>
                  <div className="text-sm text-muted-foreground mt-1">Client Retention</div>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Hybrid Technology Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
