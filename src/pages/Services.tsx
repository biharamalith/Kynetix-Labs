import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Smartphone, Globe, Code2, Brain, ShoppingCart, Cpu, Check, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Next-Gen Mobile",
    description: "End-to-end engineering of high-speed, intuitive mobile applications using Flutter and native technologies for iOS and Android.",
    features: [
      "Cross-platform Flutter development",
      "Native iOS & Android applications",
      "Performance & rendering optimization",
      "App Store deployment & maintenance",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web & Cloud",
    description: "Designing and developing highly scalable web platforms capable of handling complex business logic and massive traffic spikes.",
    features: [
      "React / Next.js modern architectures",
      "Serverless & edge computing deployment",
      "Cloud infrastructure (AWS, GCP)",
      "Database design & query optimization",
    ],
  },
  {
    id: "iot",
    icon: Cpu,
    title: "IoT Systems",
    description: "Connected device ecosystems engineered with real-time data processing, secure sensor integration, and instant cloud connectivity.",
    features: [
      "IoT device integration & fleet management",
      "Real-time edge sensor data processing",
      "Custom firmware & edge computing",
      "MQTT, CoAP low-latency protocols",
    ],
  },
  {
    id: "pos",
    icon: ShoppingCart,
    title: "Smart POS",
    description: "AI-powered Point-of-Sale platforms designed to optimize retail operations and unlock actionable sales intelligence across your entire fleet.",
    features: [
      "Cloud-based synchronized POS systems",
      "Complex inventory management integration",
      "Real-time analytics & intelligence reporting",
      "Secure multi-gateway payment integration",
    ],
  },
  {
    id: "custom",
    icon: Code2,
    title: "Custom Engineering",
    description: "Tailor-made software engineering services to solve highly specific, mission-critical operational challenges with surgical precision.",
    features: [
      "Scalable enterprise software development",
      "Custom API design & third-party integration",
      "Legacy system modernization & migration",
      "DevOps automation & CI/CD pipelines",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI / ML Integration",
    description: "Embedding advanced artificial intelligence and machine learning models directly into your real business workflows.",
    features: [
      "Custom ML model development & training",
      "Natural language processing systems",
      "Computer vision & image analysis solutions",
      "AI-powered workflow automation",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((s) => ({
      "@type": "Service",
      "name": s.title,
      "url": `https://kynetixlabs.com/services#${s.id}`,
      "description": s.description,
      "provider": {
        "@type": "Organization",
        "name": "Kynetix Labs"
      }
    }))
  };

  return (
    <Layout>
      <SEO
        title="Software Development Services - Mobile, Web, IoT, POS, AI/ML | Kynetix Labs"
        description="Professional mobile app development, web platforms, IoT solutions, smart POS systems, custom software, and AI/ML integration services for businesses of all sizes."
        keywords="mobile app development, flutter development, web development, IoT solutions, POS system development, custom software development, AI ML integration, iOS Android development, cloud architecture, react nextjs development, smart point of sale, IoT software, machine learning services"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#030712] text-white">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
        
        <div className="container-main relative z-10">
          <div className="max-w-4xl">
            <div className="w-12 h-1 bg-primary mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Comprehensive mobile, web, IoT, POS, custom software, and AI/ML solutions 
              engineered for businesses that demand performance and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="pb-24 relative overflow-hidden bg-[#030712]">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Sidebar Command Menu */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`flex items-center justify-between w-full p-4 md:p-5 rounded-xl border transition-all duration-300 text-left group ${
                    activeService.id === service.id
                      ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(37,99,235,0.15)] text-white"
                      : "bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.03] hover:border-white/10 hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <service.icon className={`w-6 h-6 transition-colors duration-300 ${
                      activeService.id === service.id ? "text-primary" : "text-gray-500 group-hover:text-primary/70"
                    }`} />
                    <span className="font-bold uppercase tracking-wide text-sm md:text-base">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeService.id === service.id ? "text-primary opacity-100 translate-x-1" : "text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`} />
                </button>
              ))}
            </div>

            {/* Main Terminal Display */}
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-12 h-full min-h-[500px] flex flex-col">
                
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-all duration-700" key={activeService.id} />
                
                <div className="relative z-10 flex flex-col h-full animate-fade-in-up" key={`content-${activeService.id}`}>
                  {/* Glowing Icon Header */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                    <activeService.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
                    {activeService.title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 font-light leading-relaxed mb-12 max-w-2xl">
                    {activeService.description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="mt-auto grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {activeService.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                          <Check className="w-3.5 h-3.5 text-primary opacity-70 group-hover:opacity-100" />
                        </div>
                        <span className="text-gray-400 font-light text-sm md:text-base leading-snug group-hover:text-gray-200 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Smart POS Feature Section */}
      <section className="py-24 bg-[#030712] relative overflow-hidden border-t border-white/5">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                <ShoppingCart className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Flagship Product</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white mb-6">
                Smart POS Solutions
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                Our AI-powered Point-of-Sale platform is designed to deeply optimize retail 
                operations and unlock high-level sales intelligence. Built for modern businesses 
                that demand significantly more than just transactions.
              </p>
              <Link to="/products" className="btn-primary group w-fit">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Glowing Graphic Display */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-700" />
              <ShoppingCart className="w-32 h-32 text-white/20 relative z-10 group-hover:scale-110 group-hover:text-white/40 transition-all duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#030712] border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <div className="container-main text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white mb-6">
            Need Something Custom?
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto mb-10">
            Every project is unique. Let's discuss your specific engineering requirements and 
            craft a solution precision-tailored to your scale.
          </p>
          <Link to="/contact" className="btn-primary group inline-flex">
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
