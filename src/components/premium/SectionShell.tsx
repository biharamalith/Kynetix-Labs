import { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export const SectionShell = ({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) => {
  return (
    <section className={cn("premium-section", className)}>
      <div className="container-main">
        <Reveal className={cn("premium-section-header", contentClassName)}>
          <div className="premium-eyebrow">
            <span className="premium-eyebrow-dot" />
            {eyebrow}
          </div>
          <h2 className="premium-section-title">{title}</h2>
          {description && <p className="premium-section-description">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
};
