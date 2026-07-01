import { serviceCards } from "@/lib/premiumContent";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { PremiumButton } from "@/components/premium/PremiumButton";
import { Reveal } from "@/components/premium/Reveal";
import { SectionShell } from "@/components/premium/SectionShell";

export const PremiumServicesSection = () => {
  return (
    <SectionShell
      eyebrow="Enterprise capability layer"
      title={<>From idea to software system, not just screens.</>}
      description="This first premium direction presents Kynetix as a product engineering partner: clear capabilities, strong structure, and reusable UI patterns ready for deeper animation and 3D branches."
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {serviceCards.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 110}>
              <PremiumCard className="h-full p-7" intensity="strong">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/70">
                    {service.eyebrow}
                  </span>
                  <div className="premium-icon-box">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mb-4 font-display text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mb-7 text-sm leading-7 text-white/60">{service.description}</p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <PremiumButton to="/services" variant="outline">
          View all services
        </PremiumButton>
      </Reveal>
    </SectionShell>
  );
};
