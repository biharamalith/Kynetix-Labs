import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Kynetix Labs - Mobile, Web, IoT, POS & AI/ML Development Services"
        description="Expert mobile app development (Flutter, iOS, Android), web platforms, IoT systems, smart POS solutions, custom software, and AI/ML integration for businesses of all sizes."
        keywords="mobile app development, flutter development, web development, IoT solutions, POS system development, custom software development, AI ML integration, iOS Android development, cloud architecture AWS GCP, react next.js development, smart point of sale, IoT software, machine learning services"
      />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <FoundersSection />
      <InsightsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
