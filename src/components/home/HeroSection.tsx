import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WebGLWave } from "./WebGLWave";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] -mt-14 md:-mt-16 pt-14 md:pt-16">

      {/* WebGL Fluid Wave Background */}
      <WebGLWave />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center min-h-[calc(100vh-8rem)] py-12">

        {/* Massive Centered Headline */}
        <div className="text-center w-full mb-16 md:mb-24 animate-fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wide leading-[1.1] text-white">
            Transform Your Vision Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Breakthrough Solutions.
            </span>
          </h1>
        </div>

        {/* Split Content Area below headline */}
        <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto items-start w-full">

          {/* Left Side: Tech Pillars / Acronym style list */}
          <div className="space-y-8 md:pr-12 md:border-r border-white/10 hidden sm:block">
            <div className="flex items-start gap-6">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-500 font-display uppercase tracking-widest leading-none">B</span>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/90">Build.</span>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Architectural integrity.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-500 font-display uppercase tracking-widest leading-none">S</span>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/90">Scale.</span>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">High-velocity systems.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-500 font-display uppercase tracking-widest leading-none">I</span>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/90">Impact.</span>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Breakthrough solutions.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Paragraph and CTA */}
          <div className="space-y-8 flex flex-col justify-center h-full">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
              Kynetix Labs accelerates your business with high-velocity mobile, web, and AI/ML solutions built for scale and impact. We engineer kinetic systems that outlast the trend.
            </p>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm group"
              >
                Start a Project
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};