import type { ServiceDetailContent } from "@/content/services";
import { ContentCard } from "@/components/site/ContentCard";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";
import { ValueList } from "@/components/site/ValueList";

interface ServiceFaqProps {
  service: ServiceDetailContent;
}

export const ServiceFaq = ({ service }: ServiceFaqProps) => (
  <PageSection
    eyebrow="Project fit"
    title="A focused first conversation should confirm fit, scope, and next steps."
    description="These notes keep the page honest for buyers and avoid unsupported promises before project discovery."
    className="page-section-muted"
  >
    <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <RevealOnScroll>
        <ContentCard className="h-full p-7" intensity="strong">
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-semibold text-white">Good fit signals</h3>
            <ValueList className="mt-7" items={service.fitSignals} />
            <SiteButton className="mt-8" to={service.primaryAction.path}>
              {service.primaryAction.label}
            </SiteButton>
          </div>
        </ContentCard>
      </RevealOnScroll>
      <div className="grid gap-4">
        {service.faq.map((item, index) => (
          <RevealOnScroll key={item.question} delay={index * 75}>
            <ContentCard className="p-6">
              <div className="relative z-10">
                <h3 className="font-display text-xl font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.answer}</p>
              </div>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </PageSection>
);
