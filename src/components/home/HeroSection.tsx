import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-border">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container-main relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Technology Lab & Engineering Partner
            </p>

            {/* Main heading - editorial style */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-foreground">Accelerating</span>
              <br />
              <span className="text-primary">Intelligence.</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              We operate at the intersection of product innovation and engineering services—building market-ready platforms while helping visionary founders engineer their digital future.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
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
            <div className="border border-border bg-card/50 p-6 lg:p-8">
              {/* Stats */}
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-5">
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects Delivered</div>
                </div>
                <div className="border-l-2 border-border pl-5 hover:border-primary transition-colors">
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground mt-1">Enterprise Clients</div>
                </div>
                <div className="border-l-2 border-border pl-5 hover:border-primary transition-colors">
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground">99%</div>
                  <div className="text-xs text-muted-foreground mt-1">Client Retention</div>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
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