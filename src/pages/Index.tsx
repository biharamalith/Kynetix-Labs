import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { CapabilityStrip } from "@/components/home/CapabilityStrip";
import { PremiumCTASection } from "@/components/home/PremiumCTASection";
import { PremiumHeroSection } from "@/components/home/PremiumHeroSection";
import { PremiumProcessSection } from "@/components/home/PremiumProcessSection";
import { PremiumProductsSection } from "@/components/home/PremiumProductsSection";
import { PremiumServicesSection } from "@/components/home/PremiumServicesSection";
import { TechStackSection } from "@/components/home/TechStackSection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kynetix Labs",
    description:
      "Premium software engineering studio for mobile, web, cloud, IoT, POS, and AI-enabled business systems.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    email: "biharaanjana2019@gmail.com",
  };

  return (
    <Layout>
      <SEO
        title="Kynetix Labs - Premium Mobile, Web, IoT, POS & AI Software Engineering"
        description="Kynetix Labs builds premium mobile apps, web platforms, cloud systems, IoT software, smart POS products, and AI-enabled business workflows with industrial-quality design and engineering."
        keywords="premium software engineering Sri Lanka, mobile app development, web platform development, IoT software, smart POS system, AI workflow automation, cloud product engineering, React development, enterprise website design"
        structuredData={structuredData}
      />
      <PremiumHeroSection />
      <CapabilityStrip />
      <PremiumServicesSection />
      <PremiumProductsSection />
      <PremiumProcessSection />
      <TechStackSection />
      <PremiumCTASection />
    </Layout>
  );
};

export default Index;
