import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SiteButtonProps {
  children: ReactNode;
  to: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

const buttonSizeClasses = {
  sm: "site-button-sm",
  md: "site-button-md",
  lg: "site-button-lg",
} as const;

export const SiteButton = ({
  children,
  to,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
}: SiteButtonProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "site-button group",
        buttonSizeClasses[size],
        variant === "primary" && "site-button-primary",
        variant === "outline" && "site-button-outline",
        variant === "ghost" && "site-button-ghost",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
};
