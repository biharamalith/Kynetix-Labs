import { ReactNode } from "react";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { cn } from "@/lib/utils";

type ScrollRevealTag = "div" | "section" | "article" | "li";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ScrollRevealTag;
}

export const ScrollReveal = ({ children, className, delay = 0, as = "div" }: ScrollRevealProps) => {
  return (
    <RevealOnScroll as={as} delay={delay} className={cn("scroll-story-reveal", className)}>
      {children}
    </RevealOnScroll>
  );
};
