import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#030712] py-32 md:py-48 min-h-[70vh] flex flex-col justify-center items-center border-t border-white/5">
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
        <h2 className="text-[18vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter text-white">
          KYNETIX LABS
        </h2>
      </div>

      <div className="container-main relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[1.1]">
            Ready to Build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Something Great?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you need a full-scale mobile application, a complex AI integration, 
            or a dedicated development team, we engineer systems that outlast the trend.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all rounded-sm shadow-2xl group">
              Start a Project
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
