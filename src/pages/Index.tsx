import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { CapabilityStrip } from "@/components/home/CapabilityStrip";
import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { KineticCoreSection } from "@/components/visual/KineticCoreSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProductHighlightsSection } from "@/components/home/ProductHighlightsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { createOrganizationStructuredData, seo } from "@/lib/siteContent";

const Index = () => {
  return (
    <Layout>
      <SEO {...seo.home} structuredData={createOrganizationStructuredData()} />
      <HeroSection />
      <CapabilityStrip />
      <KineticCoreSection />
      <ServicesSection />
      <ProductHighlightsSection />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
