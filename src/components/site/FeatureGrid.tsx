import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  children: ReactNode;
  columns?: "two" | "three";
  className?: string;
}

export const FeatureGrid = ({ children, columns = "three", className }: FeatureGridProps) => {
  return (
    <div className={cn("mt-12 grid gap-6", columns === "two" ? "lg:grid-cols-2" : "lg:grid-cols-3", className)}>
      {children}
    </div>
  );
};
