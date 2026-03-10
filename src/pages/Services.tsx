import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Smartphone, Globe, Code2, Brain, ShoppingCart, Cpu, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smartphone,
    title: "Next-Gen Mobile Development",
    description: "End-to-end engineering of high-speed, intuitive mobile applications using Flutter and native technologies for iOS and Android.",
    features: [
      "Cross-platform Flutter development",
      "Native iOS & Android applications",
      "Performance optimization",
      "App Store deployment & maintenance",
    ],
    id: "mobile",
  },
  {
    icon: Globe,
    title: "Web & Cloud Architectures",
    description: "Designing and developing scalable web platforms capable of handling complex business logic and high traffic.",
    features: [
      "React / Next.js applications",
      "Serverless & edge computing",
      "Cloud infrastructure (AWS, GCP)",
      "Database design & optimization",
    ],
    id: "web",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device ecosystems with real-time data processing, sensor integration, and cloud connectivity.",
    features: [
      "IoT device integration & management",
      "Real-time sensor data processing",
      "Edge computing solutions",
      "MQTT, CoAP protocols",
    ],
    id: "iot",
  },
  {
    icon: ShoppingCart,
    title: "Smart POS Solutions",
    description: "AI-powered Point-of-Sale platforms designed to optimize retail operations and unlock actionable sales intelligence.",
    features: [
      "Cloud-based POS systems",
      "Inventory management integration",
      "Real-time analytics & reporting",
      "Payment gateway integration",
    ],
    id: "pos",
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    description: "Tailor-made software engineering services to solve specific operational challenges with precision.",
    features: [
      "Enterprise software development",
      "API design & integration",
      "Legacy system modernization",
      "DevOps & CI/CD pipelines",
    ],
    id: "custom",
  },
  {
    icon: Brain,
    title: "AI / ML Integrated Systems",
    description: "Advanced integration of artificial intelligence and machine learning into real business workflows.",
    features: [
      "ML model development & training",
      "Natural language processing",
      "Computer vision solutions",
      "AI-powered automation",
    ],
    id: "ai",
  },
];

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Flutter Mobile App Development",
        "url": "https://kynetixlabs.com/services#mobile",
        "description": "Cross-platform Flutter development, native iOS & Android applications, performance optimization, and App Store deployment",
        "provider": {
          "@type": "Organization",
          "name": "Kynetix Labs"
        }
      },
      {
        "@type": "Service",
        "name": "Web & Cloud Architecture",
        "url": "https://kynetixlabs.com/services#web",
        "description": "React/Next.js applications, serverless computing, cloud infrastructure on AWS/GCP, and database optimization",
        "provider": {
          "@type": "Organization",
          "name": "Kynetix Labs"
        }
      },
      {
        "@type": "Service",
        "name": "IoT Solutions",
        "url": "https://kynetixlabs.com/services#iot",
        "description": "Connected device ecosystems with real-time data processing, sensor integration, and cloud connectivity",
        "provider": {
          "@type": "Organization",
          "name": "Kynetix Labs"
        }
      },
      {
        "@type": "Service",
        "name": "Smart POS Solutions",
        "url": "https://kynetixlabs.com/services#pos",
        "description": "AI-powered Point-of-Sale platforms for retail optimization and sales intelligence",
        "provider": {
          "@type": "Organization",
          "name": "Kynetix Labs"
        }
      },
      {
        "@type": "Service",
        "name": "Custom Software Development",
        "url": "https://kynetixlabs.com/services#custom",
        "description": "Enterprise software development, API integration, legacy system modernization, and DevOps solutions",
        "provider": {
          "@type": "Organization",
          "name": "Kynetix Labs"
        }
      },
      {
        "@type": "Service",
        "name": "AI & Machine Learning Integration",
        "url": "https://kynetixlabs.com/services#ai",
        "description": "ML model development, natural language processing, computer vision, and AI-powered automation",
        "provider": {
          "@type": "Organization",
          "name": "Kynetix Labs"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Software Development Services - Mobile, Web, IoT, POS, AI/ML | Kynetix Labs"
        description="Professional mobile app development, web platforms, IoT solutions, smart POS systems, custom software, and AI/ML integration services for businesses of all sizes."
        keywords="mobile app development, flutter development, web development, IoT solutions, POS system development, custom software development, AI ML integration, iOS Android development, cloud architecture, react nextjs development, smart point of sale, IoT software, machine learning services"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl">
            <div className="accent-line mb-6" />
            <h1 className="heading-display mb-6">
              Services & <span className="gradient-text">Solutions</span>
            </h1>
            <p className="body-large max-w-2xl">
              Comprehensive mobile, web, IoT, POS, custom software, and AI/ML solutions 
              for businesses of all sizes. Professional engineering services you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="container-main">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="heading-section mb-4">{service.title}</h2>
                  <p className="body-regular mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart POS Feature */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <ShoppingCart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Flagship Product</span>
              </div>
              <h2 className="heading-section mb-4">Smart POS Solutions</h2>
              <p className="body-regular mb-8">
                Our AI-powered Point-of-Sale platform designed to optimize retail 
                operations and unlock sales intelligence. Built for modern businesses 
                that demand more than just transactions.
              </p>
              <Link to="/products" className="btn-primary group">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="aspect-video rounded-2xl bg-background border border-border flex items-center justify-center glow-soft">
              <ShoppingCart className="w-32 h-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="heading-section mb-4">Need Something Custom?</h2>
          <p className="body-large max-w-xl mx-auto mb-8">
            Every project is unique. Let's discuss your specific requirements and 
            craft a solution tailored to your needs.
          </p>
          <Link to="/contact" className="btn-primary group">
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
