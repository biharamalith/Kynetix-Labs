import { smartPosContent, smartPosOutcomes, smartPosTrustSignals, smartPosVisualPanels } from "@/content/smartPos";
import { ContentCard } from "@/components/site/ContentCard";
import { MetricStrip } from "@/components/site/MetricStrip";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const SmartPosSystemVisual = () => {
  return (
    <PageSection
      eyebrow={smartPosContent.positioning.eyebrow}
      title={smartPosContent.positioning.title}
      description={smartPosContent.positioning.description}
      className="pt-4"
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <RevealOnScroll>
          <ContentCard className="relative h-full min-h-[34rem] p-6 md:p-8" intensity="strong">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.16),transparent_34%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/30 p-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/55">Retail command view</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">Smart POS Suite</h3>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">
                  {smartPosContent.status}
                </span>
              </div>

              <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
                {smartPosVisualPanels.map((panel) => {
                  const Icon = panel.icon;

                  return (
                    <div key={panel.label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5">
                      <div className="feature-icon-box">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-white/45">{panel.label}</p>
                      <p className="mt-2 font-display text-xl font-semibold text-white">{panel.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-white/15 bg-white/[0.055] p-5 text-sm leading-7 text-white/72">
                Product visuals are presented as a scoped interface direction. Real screens, payment behavior, inventory rules, and reports should be finalized around the buyer's store workflow.
              </div>
            </div>
          </ContentCard>
        </RevealOnScroll>

        <RevealOnScroll delay={130}>
          <div className="grid h-full gap-4">
            {smartPosOutcomes.map((outcome) => (
              <ContentCard key={outcome.label} className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">{outcome.label}</p>
                <p className="mt-3 text-sm leading-7 text-white/62">{outcome.description}</p>
              </ContentCard>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <MetricStrip items={smartPosTrustSignals.map((signal) => ({ label: signal.label, description: signal.description }))} />
    </PageSection>
  );
};
