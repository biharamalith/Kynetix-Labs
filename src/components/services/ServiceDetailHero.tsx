import { Link } from "react-router-dom";
import type { ServiceDetailContent } from "@/content/services";
import { PageHero } from "@/components/site/PageHero";
import { SiteButton } from "@/components/site/SiteButton";
import { routes } from "@/config/routes";

interface ServiceDetailHeroProps {
  service: ServiceDetailContent;
}

export const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => (
  <PageHero
    eyebrow={service.eyebrow}
    title={service.title}
    description={service.description}
    actions={
      <>
        <SiteButton to={service.primaryAction.path}>{service.primaryAction.label}</SiteButton>
        <SiteButton to={service.secondaryAction.path} variant="outline">
          {service.secondaryAction.label}
        </SiteButton>
        <Link className="hero-play-link" to={routes.services}>
          Back to services
        </Link>
      </>
    }
  />
);
