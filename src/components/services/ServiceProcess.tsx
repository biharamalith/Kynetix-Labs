import { serviceProcessSteps, serviceProofSignals, serviceStoryCopy } from "@/content/services";
import { ContentCard } from "@/components/site/ContentCard";
import { MetricStrip } from "@/components/site/MetricStrip";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const ServiceProcess = () => {
  const copy = serviceStoryCopy.process;

  return (
    <PageSection eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {serviceProcessSteps.map((step, index) => (
          <RevealOnScroll key={step.step} delay={index * 95}>
            <ContentCard className="h-full p-6">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/55">{step.step}</span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{step.description}</p>
              </div>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </div>
      <MetricStrip items={serviceProofSignals} />
    </PageSection>
  );
};
