import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "soft" | "strong";
  surface?: "default" | "elevated" | "quiet";
}

const surfaceClasses = {
  default: "",
  elevated: "content-card-elevated",
  quiet: "content-card-quiet",
} as const;

export const ContentCard = ({ children, className, intensity = "soft", surface = "default" }: ContentCardProps) => {
  return (
    <div
      className={cn(
        "content-card group",
        intensity === "strong" && "content-card-strong",
        surfaceClasses[surface],
        className,
      )}
    >
      <div className="content-card-sheen" aria-hidden="true" />
      {children}
    </div>
  );
};
