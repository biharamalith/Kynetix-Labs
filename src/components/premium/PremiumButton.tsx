import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  children: ReactNode;
  to: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  showArrow?: boolean;
}

export const PremiumButton = ({
  children,
  to,
  variant = "primary",
  className,
  showArrow = true,
}: PremiumButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "premium-button group",
        variant === "primary" && "premium-button-primary",
        variant === "outline" && "premium-button-outline",
        variant === "ghost" && "premium-button-ghost",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
};
