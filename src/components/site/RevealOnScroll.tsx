import { CSSProperties, ReactNode, createElement, useEffect, useRef, useState } from "react";
import { getMediaQueryList } from "@/lib/browserEnvironment";
import { motionConfig } from "@/lib/motionConfig";
import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "article" | "li";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
}

export const RevealOnScroll = ({ children, className, delay = 0, as = "div" }: RevealOnScrollProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    // Respect OS reduced-motion preference: content appears immediately without scroll animation.
    const mediaQuery = getMediaQueryList("(prefers-reduced-motion: reduce)");
    if (mediaQuery?.matches) {
      setIsVisible(true);
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    // One-shot observer keeps runtime cheap: each section unobserves after its first reveal.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: motionConfig.reveal.threshold, rootMargin: motionConfig.reveal.rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
      className: cn("reveal-motion", isVisible && "is-visible", className),
      style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children,
  );
};
