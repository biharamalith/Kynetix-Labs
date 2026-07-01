import { ReactNode, CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const Component = as;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as never}
      className={cn("reveal-motion", isVisible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
};
