import { Link } from "react-router-dom";
import { ContentCard } from "@/components/site/ContentCard";
import { PageSection } from "@/components/site/PageSection";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { industriesCopy, industryProfiles } from "@/content/industries";

export const IndustryFitMatrix = () => {
  return (
    <PageSection
      eyebrow={industriesCopy.fit.eyebrow}
      title={industriesCopy.fit.title}
      description={industriesCopy.fit.description}
      className="page-section-muted"
    >
      <div className="mt-12 grid gap-4">
        {industryProfiles.map((industry, index) => (
          <RevealOnScroll key={industry.slug} delay={index * 45}>
            <ContentCard className="grid gap-6 p-6 lg:grid-cols-[0.8fr_1.2fr_1fr] lg:items-start">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/55">{industry.eyebrow}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{industry.title}</h3>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">Project fit</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {industry.projectFit.map((fit) => (
                    <span key={fit} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                      {fit}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">Useful paths</p>
                <div className="mt-3 grid gap-2">
                  {industry.systemFit.map((fit) => (
                    <Link key={fit.title} to={fit.path} className="text-sm text-white/75 transition-colors hover:text-white">
                      {fit.title}
                    </Link>
                  ))}
                </div>
              </div>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </div>
    </PageSection>
  );
};
