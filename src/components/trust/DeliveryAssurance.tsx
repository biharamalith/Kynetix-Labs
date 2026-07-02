import { processAssuranceItems, processPageContent } from "@/content/process";
import { MetricStrip } from "@/components/site/MetricStrip";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SiteButton } from "@/components/site/SiteButton";

export const DeliveryAssurance = () => {
  return (
    <PageSection
      eyebrow={processPageContent.assurance.eyebrow}
      title={processPageContent.assurance.title}
      description={processPageContent.assurance.description}
      className="page-section-muted"
    >
      <RevealOnScroll>
        <MetricStrip items={processAssuranceItems} />
      </RevealOnScroll>
      <RevealOnScroll className="mt-12 rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.045] p-7 text-center md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60">{processPageContent.cta.eyebrow}</p>
        <h3 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold text-white md:text-4xl">
          {processPageContent.cta.title}
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-base">{processPageContent.cta.description}</p>
        <div className="mt-8 flex justify-center">
          <SiteButton to={processPageContent.cta.action.path}>{processPageContent.cta.action.label}</SiteButton>
        </div>
      </RevealOnScroll>
    </PageSection>
  );
};
