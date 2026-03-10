import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { FoundersSection } from "@/components/home/FoundersSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Kynetix Labs",
      "description": "Premier technology partner and innovation engine dedicated to accelerating intelligence through expert product innovation and engineering services",
      "foundingDate": "2025",
      "slogan": "Accelerating Intelligence"
    }
  };

  return (
    <Layout>
      <SEO
        title="About Kynetix Labs - Technology Innovation & Engineering Partner"
        description="Kynetix Labs provides expert mobile app development, web solutions, IoT systems, POS platforms, custom software, and AI/ML integration services for businesses of all sizes."
        keywords="about kynetix labs, mobile app development, web development, IoT solutions, POS system development, custom software, AI ML integration, flutter development, technology innovation company, software engineering partner"
        structuredData={structuredData}
      />
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl">
            <div className="accent-line mb-6" />
            <h1 className="heading-display mb-6">
              We Build What <span className="gradient-text">Matters</span>
            </h1>
            <p className="body-large max-w-2xl">
              Kynetix Labs delivers expert mobile, web, IoT, POS, custom software, 
              and AI/ML solutions. We build market-ready platforms and provide 
              comprehensive engineering services for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-section mb-6">Our Mission</h2>
              <p className="body-regular mb-4">
                As a hybrid technology lab, we specialize in mobile app development (Flutter, iOS, Android), 
                web platforms, IoT systems, smart POS solutions, custom software, and AI/ML integration. 
                We serve startups, SMEs, and enterprises across all industries.
              </p>
              <p className="body-regular">
                We believe in technology that solves real problems. No hype. No buzzwords. 
                Just high-performance results delivered with precision and care.
              </p>
            </div>
            <div>
              <h2 className="heading-section mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-display font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Understand</h4>
                    <p className="text-muted-foreground text-sm">Deep dive into your business context and technical requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-display font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Architect</h4>
                    <p className="text-muted-foreground text-sm">Design scalable solutions with security and performance in mind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-display font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Execute</h4>
                    <p className="text-muted-foreground text-sm">Deliver with agility, transparency, and engineering excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <FoundersSection />

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="heading-section mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-primary">E</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We don't ship mediocre work. Every line of code matters.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-primary">I</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground text-sm">
                Transparent communication and honest assessments always.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-primary">I</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Constantly pushing boundaries while staying pragmatic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="heading-section mb-4">Work With Us</h2>
          <p className="body-large max-w-xl mx-auto mb-8">
            Ready to bring your vision to life? Let's build something great together.
          </p>
          <Link to="/contact" className="btn-primary group">
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
