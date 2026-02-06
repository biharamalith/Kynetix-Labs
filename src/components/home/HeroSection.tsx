import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-border">
      {/* Background with subtle radial glow */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 70%)'
        }}
      />

      <div className="container-main relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content - strict left alignment */}
          <div className="lg:col-span-7">
            {/* Eyebrow - bolder and white */}
            <p className="text-xs uppercase tracking-[0.25em] text-foreground font-medium mb-4">
              Technology Lab & Engineering Partner
            </p>

            {/* Main heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5">
              <span className="text-foreground">Accelerating</span>
              <br />
              <span className="text-primary">Intelligence.</span>
            </h1>

            {/* Description - shortened, with 24px (mb-6) spacing to CTAs */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed">
              Building market-ready platforms for visionary founders through expert product innovation and engineering.
            </p>

            {/* CTAs - primary solid + ghost */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link to="/contact" className="btn-primary group">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-foreground/30 text-foreground font-medium rounded-lg transition-all duration-300 hover:border-foreground hover:bg-foreground/5"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right side - Subtle stats block (reduced scale) */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="border border-border/60 bg-secondary/30 p-5 lg:p-6 w-full max-w-[280px]">
              {/* Stats - reduced scale */}
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">50+</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Projects Delivered</div>
                </div>
                <div className="border-l-2 border-border/60 pl-4 hover:border-primary transition-colors">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">15+</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Enterprise Clients</div>
                </div>
                <div className="border-l-2 border-border/60 pl-4 hover:border-primary transition-colors">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">99%</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Client Retention</div>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
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