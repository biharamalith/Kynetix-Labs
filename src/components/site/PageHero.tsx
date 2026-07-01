import { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: ReactNode;
  className?: string;
}

export const PageHero = ({ eyebrow, title, description, actions, className }: PageHeroProps) => {
  return (
    // Reusable inner-page hero. Change page text in `pageCopy` from siteContent.ts, not inside each page file.
    <section className={cn("section-padding", className)}>
      <div className="container-main">
        <RevealOnScroll className="max-w-4xl">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            {eyebrow}
          </div>
          <h1 className="heading-display mt-6 text-white">{title}</h1>
          <p className="body-large mt-6 max-w-2xl">{description}</p>
          {actions && <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">{actions}</div>}
        </RevealOnScroll>
      </div>
    </section>
  );
};
