import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ServiceArchitecture } from "@/components/services/ServiceArchitecture";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceOutcomeGrid } from "@/components/services/ServiceOutcomeGrid";
import { createServicePath } from "@/config/routes";
import { findServiceDetailBySlug } from "@/content/services";
import { company } from "@/lib/siteContent";
import { createServicePageStructuredData } from "@/lib/seo";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = findServiceDetailBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const servicePath = createServicePath(service.slug);

  return (
    <Layout>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.keywords}
        structuredData={createServicePageStructuredData({
          siteUrl: company.siteUrl,
          path: servicePath,
          name: service.eyebrow,
          description: service.seoDescription,
          providerName: company.name,
          serviceType: service.title,
        })}
      />

      <ServiceDetailHero service={service} />
      <ServiceOutcomeGrid service={service} />
      <ServiceDeliverables service={service} />
      <ServiceArchitecture service={service} />
      <ServiceFaq service={service} />
    </Layout>
  );
};

export default ServiceDetail;
