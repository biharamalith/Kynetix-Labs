import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#030712]">
      
      {/* Kinetic Energy Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Core ambient glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

        {/* 3D Kinetic Data Streams (Floor) */}
        <div 
          className="absolute bottom-0 left-[-50%] w-[200%] h-[100vh]" 
          style={{ perspective: '800px' }}
        >
          {/* The Data Stream Plane */}
          <div 
            className="absolute inset-0 kinetic-streams"
            style={{
              transform: 'rotateX(75deg)',
              transformOrigin: 'bottom center',
            }}
          ></div>
        </div>
        
        {/* Top mask to blend the streams seamlessly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent"></div>
        
        {/* Vertical floating energy lines (Kinetic Packets) */}
        <div className="absolute inset-0">
            <div className="kinetic-particle p1"></div>
            <div className="kinetic-particle p2"></div>
            <div className="kinetic-particle p3"></div>
            <div className="kinetic-particle p4"></div>
            <div className="kinetic-particle p5"></div>
            <div className="kinetic-particle p6"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)] py-12">
          
          {/* Left: Content */}
          <div className="space-y-8 text-white lg:pr-8 relative z-20">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-2 backdrop-blur-sm">
              <Activity className="w-4 h-4 animate-pulse" />
              Kinetic Innovation
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Engineering <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  Digital Motion
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                Kynetix Labs accelerates your business with high-velocity mobile, web, and AI/ML solutions built for scale and impact.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group"
              >
                Ignite Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/10 text-white font-semibold rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                Our Capabilities
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-black text-white">50<span className="text-cyan-500">+</span></div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">Projects Launched</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white">15<span className="text-cyan-500">+</span></div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">Industry Partners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white">99<span className="text-cyan-500">%</span></div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Right: Empty space to let kinetic background shine through */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        /* The kinetic stream floor */
        .kinetic-streams {
          background-image: linear-gradient(90deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px);
          background-size: 50px 100%;
          position: relative;
        }
        
        /* The moving light pulses on the floor */
        .kinetic-streams::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(180deg, transparent 40%, rgba(34, 211, 238, 0.5) 50%, transparent 60%);
          background-size: 100% 150px;
          animation: stream-flow 1.5s linear infinite;
        }

        @keyframes stream-flow {
          0% { background-position: 0 -150px; }
          100% { background-position: 0 100vh; }
        }

        /* Kinetic particles (glowing data packets shooting up) */
        .kinetic-particle {
          position: absolute;
          bottom: -150px;
          width: 2px;
          height: 120px;
          background: linear-gradient(to top, transparent, rgba(34, 211, 238, 0.8), #fff);
          border-radius: 2px;
          filter: blur(1px);
          animation: shoot-up linear infinite;
          opacity: 0;
        }

        /* Randomize positions and speeds */
        .p1 { left: 15%; animation-duration: 2.5s; animation-delay: 0s; }
        .p2 { left: 35%; animation-duration: 3.2s; animation-delay: 1.2s; }
        .p3 { left: 60%; animation-duration: 2.8s; animation-delay: 0.5s; }
        .p4 { left: 75%; animation-duration: 3.5s; animation-delay: 2.1s; }
        .p5 { left: 85%; animation-duration: 2.2s; animation-delay: 0.8s; }
        .p6 { left: 95%; animation-duration: 2.9s; animation-delay: 1.7s; }

        @keyframes shoot-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};