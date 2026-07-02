import { ContentCard } from "@/components/site/ContentCard";
import { ValueList } from "@/components/site/ValueList";
import type { CaseStudy } from "@/content/caseStudies";

interface CaseStudyStackProps {
  study: CaseStudy;
}

export const CaseStudyStack = ({ study }: CaseStudyStackProps) => {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <ContentCard className="p-6" intensity="strong">
        <div className="relative z-10">
          <ValueList title="Stack and methods" items={study.stack} columns="two" />
        </div>
      </ContentCard>
      <ContentCard className="p-6" intensity="strong">
        <div className="relative z-10">
          <ValueList title="Architecture decisions" items={study.architecture} />
        </div>
      </ContentCard>
    </div>
  );
};
