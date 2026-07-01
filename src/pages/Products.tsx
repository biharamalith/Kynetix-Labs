import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ShoppingCart, BarChart3, Brain, Shield, Zap, Globe, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Predictive analytics and intelligent recommendations to optimize your sales strategy.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards with comprehensive metrics on sales, inventory, and customer behavior.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with PCI-DSS standards for secure transactions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second transaction processing with offline capabilities for uninterrupted service.",
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Centralized management for multiple stores with real-time synchronization.",
  },
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    description: "Smart stock tracking with automated reorder alerts and supplier integration.",
  },
];

const capabilities = [
  "Sales tracking and reporting",
  "Customer relationship management",
  "Employee performance analytics",
  "Automated inventory alerts",
  "Multi-payment processing",
  "Receipt customization",
  "Loyalty program integration",
  "API for third-party integrations",
];

const Products = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart POS Platform",
    "applicationCategory": "BusinessApplication",
    "description": "AI-powered Point-of-Sale platform designed to optimize retail operations with real-time analytics, inventory management, and predictive insights",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI-Powered Sales Analytics",
      "Real-Time Inventory Management",
      "Multi-Location Support",
      "Customer Relationship Management",
      "Employee Performance Tracking",
      "PCI-DSS Compliant Security"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Kynetix Labs"
    }
  };

  return (
    <Layout>
      <SEO
        title="Smart POS System - AI-Powered Point of Sale Platform | Kynetix Labs"
        description="AI-powered POS system with real-time analytics, inventory management, and predictive insights. Transform your retail operations with intelligent point of sale software."
        keywords="smart POS system, AI powered point of sale, retail POS software, intelligent POS platform, cloud POS system, retail management software, inventory management POS, AI retail analytics, point of sale system, modern POS solution"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <ShoppingCart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Flagship Product</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 uppercase text-white">
                Smart POS <span className="gradient-text">Platform</span>
              </h1>
              <p className="body-large mb-8">
                An AI-powered Point-of-Sale platform designed to optimize retail 
                operations and unlock sales intelligence. Transform your business 
                with data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary group">
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="btn-outline">
                  View Documentation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-2xl bg-card border border-border flex items-center justify-center glow-soft">
                    <ShoppingCart className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="heading-section mb-4">Key Features</h2>
            <p className="body-large">
              Everything you need to run a modern retail operation, powered by 
              artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-elevated">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="heading-section mb-4">Complete Retail Solution</h2>
              <p className="body-regular mb-8">
                Our Smart POS platform goes beyond basic transactions to provide 
                a comprehensive solution for modern retail businesses.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center">
              <BarChart3 className="w-32 h-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="relative rounded-2xl border border-primary/30 bg-background overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="heading-section mb-4">Ready to Transform Your Retail?</h2>
              <p className="body-large max-w-xl mx-auto mb-8">
                Schedule a personalized demo to see how Smart POS can optimize 
                your operations and boost your bottom line.
              </p>
              <Link to="/contact" className="btn-primary group">
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
