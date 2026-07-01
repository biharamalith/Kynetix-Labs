import { capabilityPillars } from "@/lib/siteContent";
import { ContentCard } from "@/components/site/ContentCard";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const CapabilityStrip = () => {
  return (
    <section className="relative border-y border-white/10 bg-black/30 py-8 backdrop-blur-xl">
      <div className="container-main">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <RevealOnScroll key={pillar.label} delay={index * 90}>
                <ContentCard className="h-full p-5">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="feature-icon-box">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/35">
                      {pillar.value}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-white">{pillar.label}</h3>
                  <p className="text-sm leading-6 text-white/60">{pillar.description}</p>
                </ContentCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
