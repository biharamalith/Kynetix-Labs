import { ContentCard } from "@/components/site/ContentCard";
import type { CaseStudyResult } from "@/content/caseStudies";

interface CaseStudyImpactProps {
  results: CaseStudyResult[];
}

export const CaseStudyImpact = ({ results }: CaseStudyImpactProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {results.map((result) => (
        <ContentCard key={result.label} className="p-5">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">{result.label}</p>
            <p className="mt-3 text-sm leading-7 text-white/62">{result.description}</p>
          </div>
        </ContentCard>
      ))}
    </div>
  );
};
