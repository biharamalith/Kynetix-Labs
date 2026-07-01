import { capabilityPillars } from "@/lib/premiumContent";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { Reveal } from "@/components/premium/Reveal";

export const CapabilityStrip = () => {
  return (
    <section className="relative border-y border-white/10 bg-black/30 py-8 backdrop-blur-xl">
      <div className="container-main">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.label} delay={index * 90}>
                <PremiumCard className="h-full p-5">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="premium-icon-box">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/35">
                      {pillar.value}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-white">{pillar.label}</h3>
                  <p className="text-sm leading-6 text-white/60">{pillar.description}</p>
                </PremiumCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
