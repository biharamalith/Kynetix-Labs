import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContentCard } from "@/components/site/ContentCard";
import { ValueList } from "@/components/site/ValueList";
import { createCaseStudyPath } from "@/config/routes";
import type { CaseStudy } from "@/content/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  const Icon = study.icon;
  const path = createCaseStudyPath(study.slug);

  return (
    <ContentCard className="h-full p-7" intensity="strong">
      <article className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex items-start justify-between gap-5">
          <div className="feature-icon-box feature-icon-box-lg">
            <Icon className="h-6 w-6" />
          </div>
          <div className="grid justify-items-end gap-2 text-right">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/55">{study.eyebrow}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
              {study.status}
            </span>
          </div>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/40">{study.category}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">{study.title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/62 md:text-base">{study.summary}</p>

        <ValueList title="What this shows" items={study.outcomes.slice(0, 3)} className="mt-7" />

        <Link
          to={path}
          aria-label={`View case study: ${study.title}`}
          className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-white"
        >
          View story
          <ArrowRight className="h-4 w-4" />
        </Link>
      </article>
    </ContentCard>
  );
};
