import { useEffect } from "react";
import { getMediaQueryList } from "@/lib/browserEnvironment";

export const CursorGlow = () => {
  useEffect(() => {
    // Desktop-only pointer effect. Touch devices skip this work completely for performance and usability.
    const mediaQuery = getMediaQueryList("(pointer: fine)");
    if (!mediaQuery?.matches) {
      return undefined;
    }

    const updateCursor = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updateCursor, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursor);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
};
