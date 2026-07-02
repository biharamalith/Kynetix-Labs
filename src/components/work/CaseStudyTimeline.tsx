import type { CaseStudyStage } from "@/content/caseStudies";

interface CaseStudyTimelineProps {
  stages: CaseStudyStage[];
}

export const CaseStudyTimeline = ({ stages }: CaseStudyTimelineProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stages.map((stage, index) => (
        <article key={stage.label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold text-white">{stage.label}</h3>
          <p className="mt-3 text-sm leading-7 text-white/62">{stage.description}</p>
        </article>
      ))}
    </div>
  );
};
