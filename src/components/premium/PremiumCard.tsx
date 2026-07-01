import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "soft" | "strong";
}

export const PremiumCard = ({ children, className, intensity = "soft" }: PremiumCardProps) => {
  return (
    <div
      className={cn(
        "premium-card group",
        intensity === "strong" && "premium-card-strong",
        className,
      )}
    >
      <div className="premium-card-sheen" aria-hidden="true" />
      {children}
    </div>
  );
};
