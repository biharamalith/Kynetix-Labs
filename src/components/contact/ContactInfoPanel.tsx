import { contactMethods } from "@/lib/siteContent";
import { ContentCard } from "@/components/site/ContentCard";

export const ContactInfoPanel = () => {
  return (
    <div className="space-y-5">
      {contactMethods.map((method) => {
        const Icon = method.icon;
        const content = (
          <ContentCard className="flex items-center gap-4 p-5">
            <div className="feature-icon-box">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-white">{method.title}</h3>
              <p className="mt-1 text-sm text-white/60">{method.value}</p>
            </div>
          </ContentCard>
        );

        return method.href ? (
          <a key={method.title} href={method.href} className="block transition-transform duration-300 hover:-translate-y-1">
            {content}
          </a>
        ) : (
          <div key={method.title}>{content}</div>
        );
      })}
    </div>
  );
};
