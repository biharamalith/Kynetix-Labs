import { projectBriefTrustSignals } from "@/content/contact";
import { ContentCard } from "@/components/site/ContentCard";

export const ContactTrustPanel = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {projectBriefTrustSignals.map((signal) => {
        const Icon = signal.icon;

        return (
          <ContentCard key={signal.title} className="p-5">
            <div className="flex items-start gap-4">
              <div className="feature-icon-box">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-white">{signal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{signal.description}</p>
              </div>
            </div>
          </ContentCard>
        );
      })}
    </div>
  );
};
