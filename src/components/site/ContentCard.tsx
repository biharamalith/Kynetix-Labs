import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "soft" | "strong";
}

export const ContentCard = ({ children, className, intensity = "soft" }: ContentCardProps) => {
  return (
    <div
      className={cn(
        "content-card group",
        intensity === "strong" && "content-card-strong",
        className,
      )}
    >
      <div className="content-card-sheen" aria-hidden="true" />
      {children}
    </div>
  );
};
