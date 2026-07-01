import { CSSProperties, useEffect, useState } from "react";
import { company, homeCopy } from "@/lib/siteContent";
import { motionConfig } from "@/lib/motionConfig";
import { useReducedMotion } from "./useReducedMotion";

const screenStyle = {
  "--loading-exit-ms": `${motionConfig.loadingScreen.exitDurationMs}ms`,
} as CSSProperties;

export const LoadingScreen = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || sessionStorage.getItem(motionConfig.loadingScreen.storageKey) === "true") {
      return undefined;
    }

    setIsMounted(true);

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
      sessionStorage.setItem(motionConfig.loadingScreen.storageKey, "true");
    }, motionConfig.loadingScreen.minVisibleMs);

    const removeTimer = window.setTimeout(() => {
      setIsMounted(false);
    }, motionConfig.loadingScreen.minVisibleMs + motionConfig.loadingScreen.exitDurationMs);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, [prefersReducedMotion]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`loading-screen${isLeaving ? " loading-screen-exit" : ""}`} style={screenStyle} role="status" aria-label={`Loading ${company.name}`}>
      <div className="loading-screen-grid" aria-hidden="true" />
      <div className="loading-screen-content">
        <div className="loading-screen-mark">
          <img src={company.logoPath} alt="" className="h-14 w-14 object-contain" />
          <span className="loading-screen-ring loading-screen-ring-one" />
          <span className="loading-screen-ring loading-screen-ring-two" />
        </div>
        <div className="loading-screen-copy">
          <p>{company.name}</p>
          <ul aria-hidden="true">
            {homeCopy.hero.loadingSequence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
