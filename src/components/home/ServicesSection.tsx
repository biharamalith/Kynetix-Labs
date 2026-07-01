import { Smartphone, Globe, Code2, Brain, ShoppingCart, Cpu } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Next-Gen Mobile Development",
    description: "End-to-end engineering of high-speed, intuitive mobile applications using Flutter and native technologies for iOS and Android. Built for flawless performance.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Globe,
    title: "Web & Cloud",
    description: "Scalable web platforms built for high traffic and complex logic.",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    description: "Connected device ecosystems with real-time data processing.",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: ShoppingCart,
    title: "Smart POS Solutions",
    description: "Our AI-powered Point-of-Sale platform designed to optimize retail operations and unlock deep sales intelligence across your entire fleet.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Code2,
    title: "Custom Engineering",
    description: "Tailor-made software to solve highly specific operational challenges with surgical precision and speed.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Brain,
    title: "AI / ML Integration",
    description: "Embedding advanced machine learning into real workflows.",
    className: "md:col-span-1 lg:col-span-1",
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative section-padding bg-[#030712] overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="container-main relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-6">
            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">& Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Mobile, web, IoT, POS, custom software, and AI/ML solutions for businesses 
            of all sizes. We engineer premium digital infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-primary/30 p-8 md:p-10 ${service.className}`}
            >
              {/* Subtle inner gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Minimalist Wireframe Icon */}
                <div className="mb-8">
                  <service.icon 
                    className="w-10 h-10 text-indigo-300/80 group-hover:text-primary transition-colors duration-500 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                    strokeWidth={1} 
                  />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mt-auto">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
