import { useEffect, useState } from "react";

const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  return height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
};

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    // requestAnimationFrame prevents excessive state updates during fast scroll events.
    const updateProgress = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => setProgress(getScrollProgress()));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
};
