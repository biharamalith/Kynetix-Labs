import { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const PageSection = ({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: PageSectionProps) => {
  return (
    // Shared section shell: use this for new long-form sections to keep spacing, reveal behavior, and headings consistent.
    <section className={cn("page-section", className)}>
      <div className="container-main">
        <RevealOnScroll className={cn("page-section-header", contentClassName)}>
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            {eyebrow}
          </div>
          <h2 className="page-section-title">{title}</h2>
          {description && <p className="page-section-description">{description}</p>}
        </RevealOnScroll>
        {children}
      </div>
    </section>
  );
};
