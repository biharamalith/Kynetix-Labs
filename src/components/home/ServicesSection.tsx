import { Smartphone, Globe, Code2, Brain, ShoppingCart, Cpu } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Next-Gen Mobile Development",
    description: "End-to-end engineering of high-speed, intuitive mobile applications using Flutter and native technologies for iOS and Android.",
  },
  {
    icon: Globe,
    title: "Web & Cloud Architectures",
    description: "Designing and developing scalable web platforms capable of handling complex business logic and high traffic.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device ecosystems with real-time data processing, sensor integration, and cloud connectivity for smart operations.",
  },
  {
    icon: ShoppingCart,
    title: "Smart POS Solutions",
    description: "Our AI-powered Point-of-Sale platform designed to optimize retail operations and unlock sales intelligence.",
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    description: "Tailor-made software engineering services to solve specific operational challenges with precision.",
  },
  {
    icon: Brain,
    title: "AI / ML Integrated Systems",
    description: "Advanced integration of artificial intelligence and machine learning into real business workflows.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="accent-line mb-6" />
          <h2 className="heading-section mb-4">Services & Solutions</h2>
          <p className="body-large">
            Mobile, web, IoT, POS, custom software, and AI/ML solutions for businesses 
            of all sizes. Professional engineering services delivered with excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors bg-secondary group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="heading-subsection mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
