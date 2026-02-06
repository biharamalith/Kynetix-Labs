import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Accelerating Intelligence</span>
          </div>

          {/* Main heading */}
          <h1 className="heading-display mb-6 animate-fade-in-up animation-delay-100">
            Engineering the{" "}
            <span className="gradient-text">Digital Reality</span>
            {" "}of Tomorrow
          </h1>

          {/* Subheading */}
          <p className="body-large max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            We operate at the intersection of product innovation and engineering services. 
            A hybrid technology lab building market-ready platforms while helping visionary 
            founders engineer their digital future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/contact" className="btn-primary group">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">99%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
