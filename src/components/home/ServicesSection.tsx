import { Smartphone, Globe, Code2, Brain, ShoppingCart } from "lucide-react";

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
    icon: Code2,
    title: "Custom Software Solutions",
    description: "Tailor-made software engineering services to solve specific operational challenges with precision.",
  },
  {
    icon: Brain,
    title: "AI / ML Integrated Systems",
    description: "Advanced integration of artificial intelligence and machine learning into real business workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Smart POS Solutions",
    description: "Our AI-powered Point-of-Sale platform designed to optimize retail operations and unlock sales intelligence.",
    featured: true,
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
            From mobile applications to complex AI integrations, we deliver 
            high-performance results for visionary founders and enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-elevated group ${
                service.featured ? "lg:col-span-2 border-primary/30" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                service.featured 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary group-hover:bg-primary group-hover:text-primary-foreground"
              }`}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="heading-subsection mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {service.featured && (
                <div className="mt-6 inline-flex items-center text-primary text-sm font-medium">
                  Flagship Product
                  <span className="ml-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
