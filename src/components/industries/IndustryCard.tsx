import { DetailCard } from "@/components/site/DetailCard";
import { SiteButton } from "@/components/site/SiteButton";
import type { IndustryProfile } from "@/content/industries";

interface IndustryCardProps {
  industry: IndustryProfile;
}

export const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <DetailCard
      id={industry.slug}
      icon={industry.icon}
      eyebrow={industry.eyebrow}
      title={industry.title}
      description={industry.summary}
    >
      <p className="text-sm leading-7 text-white/60">{industry.description}</p>

      <div>
        <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/60">Common pressure</h4>
        <div className="grid gap-4">
          {industry.buyerPains.map((point) => (
            <div key={point.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <p className="text-sm font-semibold text-white">{point.label}</p>
              <p className="mt-2 text-sm leading-7 text-white/58">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Proof boundary</h4>
        <p className="mt-3 text-sm leading-7 text-white/58">{industry.proofBoundary}</p>
      </div>

      <div className="grid gap-3">
        <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Relevant Kynetix paths</h4>
        {industry.systemFit.map((fit) => (
          <SiteButton key={fit.title} to={fit.path} variant="ghost" className="justify-between text-left" showArrow>
            {fit.title}
          </SiteButton>
        ))}
      </div>
    </DetailCard>
  );
};
