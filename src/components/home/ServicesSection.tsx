import { CheckCircle2 } from "lucide-react";
import { homeCopy, homeServices } from "@/lib/siteContent";
import { ContentCard } from "@/components/site/ContentCard";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { PageSection } from "@/components/site/PageSection";

const copy = homeCopy.services;

export const ServicesSection = () => {
  return (
    <PageSection eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {homeServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <RevealOnScroll key={service.title} delay={index * 120}>
              <ContentCard className="h-full p-7" intensity="strong">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="feature-icon-box feature-icon-box-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/55">
                    {service.eyebrow}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{service.description}</p>
                <ul className="mt-7 space-y-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </PageSection>
  );
};
