import { productShowcase } from "@/lib/premiumContent";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { PremiumButton } from "@/components/premium/PremiumButton";
import { Reveal } from "@/components/premium/Reveal";
import { SectionShell } from "@/components/premium/SectionShell";

export const PremiumProductsSection = () => {
  return (
    <SectionShell
      eyebrow="Productized thinking"
      title={<>Build reusable platforms clients can understand and buy.</>}
      description="Instead of looking like a generic agency, Kynetix should show product direction: systems, consoles, suites, and industry-ready software patterns."
      className="premium-section-muted"
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {productShowcase.map((product, index) => {
          const Icon = product.icon;
          return (
            <Reveal key={product.name} delay={index * 120}>
              <PremiumCard className="relative h-full overflow-hidden p-7">
                <div className="product-orbit" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="premium-icon-box premium-icon-box-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-semibold text-white">{product.name}</h3>
                  <p className="text-sm leading-7 text-white/60">{product.summary}</p>
                </div>
              </PremiumCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <PremiumButton to="/products" variant="outline">
          Explore product direction
        </PremiumButton>
      </Reveal>
    </SectionShell>
  );
};
