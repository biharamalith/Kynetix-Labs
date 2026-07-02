import { ReactNode } from "react";
import { pageHeroSignals } from "@/content/brandLanguage";
import { RevealOnScroll } from "./RevealOnScroll";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  className?: string;
  showSignals?: boolean;
}

export const PageHero = ({ eyebrow, title, description, actions, className, showSignals = true }: PageHeroProps) => {
  return (
    <section className={cn("section-padding page-hero-shell", className)}>
      <div className="container-main">
        <RevealOnScroll className="page-hero-content">
          <div className="page-hero-kicker">
            <span className="section-eyebrow-dot" />
            {eyebrow}
          </div>
          <h1 className="heading-display page-hero-title">{title}</h1>
          <p className="body-large page-hero-description">{description}</p>
          {actions && <div className="page-hero-actions">{actions}</div>}
          {showSignals && (
            <div className="page-hero-signal-row" aria-label="Kynetix delivery signals">
              {pageHeroSignals.map((signal) => (
                <div key={signal.label}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};
