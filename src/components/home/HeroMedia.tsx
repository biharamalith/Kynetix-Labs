import { CSSProperties } from "react";
import { VideoHero } from "@/components/media/VideoHero";
import { cinematicHeroMedia } from "@/config/media";
import { motionConfig } from "@/lib/motionConfig";

export const HeroMedia = () => {
  const mediaStyle = {
    "--hero-media-delay-ms": `${motionConfig.hero.mediaDelayMs}ms`,
  } as CSSProperties;

  return (
    <div className="hero-media-layer" aria-hidden="true" style={mediaStyle}>
      <VideoHero className="hero-media-stage" decorative />
      <div className="hero-media-signal-strip">
        {cinematicHeroMedia.posterSignals.map((signal) => (
          <span key={signal.label}>
            {signal.label} <strong>{signal.value}</strong>
          </span>
        ))}
      </div>
    </div>
  );
};
