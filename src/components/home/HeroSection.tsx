import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-black animate-gradient" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left: Content */}
          <div className="space-y-8 text-white lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Transform Your Vision Into
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Breakthrough Solutions
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Kynetix Labs delivers proven mobile, web, IoT, POS, and AI/ML solutions to businesses of all sizes.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">99%</div>
                <div className="text-sm text-gray-400">Retention Rate</div>
              </div>
            </div>
          </div>

          {/* Right: Animated 3D Shape */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Animated morphing blob */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main animated blob */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-[40%] animate-morph"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(34, 211, 238, 0.6) 100%)',
                    filter: 'blur(40px)',
                  }}
                />
              </div>

              {/* Secondary blob for depth */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-[45%] animate-morph-reverse"
                  style={{
                    background: 'linear-gradient(225deg, rgba(34, 211, 238, 0.5) 0%, rgba(168, 85, 247, 0.3) 100%)',
                    filter: 'blur(30px)',
                    animationDelay: '1s',
                  }}
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full animate-pulse-slow"
                  style={{
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <style>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
            transform: rotate(90deg) scale(1.05);
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
            transform: rotate(180deg) scale(0.95);
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
            transform: rotate(270deg) scale(1.02);
          }
        }

        @keyframes morphReverse {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(360deg) scale(1);
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(270deg) scale(1.05);
          }
          50% {
            border-radius: 55% 45% 45% 55% / 55% 55% 45% 45%;
            transform: rotate(180deg) scale(0.95);
          }
          75% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: rotate(90deg) scale(1.02);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-morph {
          animation: morph 20s ease-in-out infinite;
        }

        .animate-morph-reverse {
          animation: morphReverse 15s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};