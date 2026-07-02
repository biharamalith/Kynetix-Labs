import { useMemo } from "react";
import { MediaFrame } from "@/components/media/MediaFrame";
import { ResponsivePoster } from "@/components/media/ResponsivePoster";
import { useReducedMotion } from "@/components/site/useReducedMotion";
import { cinematicHeroMedia } from "@/config/media";
import { getHeroMediaMode, getMediaRuntimeSnapshot } from "@/lib/media";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
  className?: string;
  decorative?: boolean;
}

export const VideoHero = ({ className, decorative = false }: VideoHeroProps) => {
  const prefersReducedMotion = useReducedMotion();
  const runtimeSnapshot = useMemo(() => getMediaRuntimeSnapshot(prefersReducedMotion), [prefersReducedMotion]);
  const mode = getHeroMediaMode(runtimeSnapshot, cinematicHeroMedia.videoSources.length);

  return (
    <MediaFrame className={cn("video-hero", className)} label={mode === "video" ? "Video ready" : "Poster fallback"}>
      {mode === "video" ? (
        <video
          className="video-hero-element"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          {cinematicHeroMedia.videoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : (
        <ResponsivePoster decorative={decorative} />
      )}
    </MediaFrame>
  );
};
