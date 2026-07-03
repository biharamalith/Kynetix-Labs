import { ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { ContentCard } from "@/components/site/ContentCard";
import { cn } from "@/lib/utils";

interface DetailCardProps {
  id?: string;
  icon?: LucideIcon;
  eyebrow?: string;
  meta?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export const DetailCard = ({
  id,
  icon: Icon,
  eyebrow,
  meta,
  title,
  description,
  children,
  className,
}: DetailCardProps) => {
  return (
    <ContentCard className={cn("h-full p-7", className)} intensity="strong" surface="elevated">
      <article id={id} className="relative z-10 scroll-mt-28">
        <div className="mb-7 flex items-start justify-between gap-5">
          {Icon && (
            <div className="feature-icon-box feature-icon-box-lg">
              <Icon className="h-6 w-6" />
            </div>
          )}
          {(eyebrow || meta) && (
            <div className="grid justify-items-end gap-2 text-right">
              {eyebrow && <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/55">{eyebrow}</span>}
              {meta && (
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                  {meta}
                </span>
              )}
            </div>
          )}
        </div>
        <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/62 md:text-base">{description}</p>
        {children && <div className="mt-8 space-y-7">{children}</div>}
      </article>
    </ContentCard>
  );
};
