import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background with subtle radial glow */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern for professional texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Large centered radial glow for visual depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Centered content container */}
      <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-foreground font-medium mb-6">
          Technology Lab & Engineering Partner
        </p>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight mb-6">
          <span className="text-foreground">Accelerating</span>
          <br />
          <span className="text-primary">Intelligence.</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-[650px] mx-auto">
          Expert mobile, web, IoT, POS, and AI/ML solutions for businesses of all sizes. From startups to enterprises.
        </p>

        {/* CTAs - centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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

        {/* Stats - horizontal pills below CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <div className="text-left">
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">50+</div>
              <div className="text-xs text-muted-foreground/70">Projects</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-primary/60 rounded-full" />
            <div className="text-left">
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">15+</div>
              <div className="text-xs text-muted-foreground/70">Clients</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-primary/60 rounded-full" />
            <div className="text-left">
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">99%</div>
              <div className="text-xs text-muted-foreground/70">Retention</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10" />
    </section>
  );
};