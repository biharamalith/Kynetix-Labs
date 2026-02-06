import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
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
