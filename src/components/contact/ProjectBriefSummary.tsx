import { CheckCircle2 } from "lucide-react";
import { projectBriefProjectTypes, projectBriefResponseSteps } from "@/content/contact";
import { ContentCard } from "@/components/site/ContentCard";

export const ProjectBriefSummary = () => {
  return (
    <ContentCard className="p-6">
      <p className="section-eyebrow">What to include</p>
      <h3 className="mt-3 font-display text-xl font-semibold text-white">A useful brief gives enough context to scope the next step.</h3>
      <div className="mt-6 grid gap-3">
        {projectBriefProjectTypes.slice(0, 4).map((type) => (
          <div key={type.id} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <p className="font-display text-sm font-semibold text-white">{type.label}</p>
            <p className="mt-1 text-xs leading-5 text-white/55">{type.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 border-t border-white/10 pt-6">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/80">After submit</p>
        <ul className="mt-4 space-y-3">
          {projectBriefResponseSteps.map((step) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-white/60">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </ContentCard>
  );
};
