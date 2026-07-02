import { useEffect, useState } from "react";
import { getMediaQueryList } from "@/lib/browserEnvironment";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = getMediaQueryList(REDUCED_MOTION_QUERY);
    if (!mediaQuery) {
      return undefined;
    }

    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
};
