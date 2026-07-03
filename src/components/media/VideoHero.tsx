import { useMemo, useState } from "react";
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
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const runtimeSnapshot = useMemo(() => getMediaRuntimeSnapshot(prefersReducedMotion), [prefersReducedMotion]);
  const mode = getHeroMediaMode(runtimeSnapshot, cinematicHeroMedia.videoSources.length);
  const shouldRenderVideo = mode === "video" && !hasVideoError;
  const mediaState = shouldRenderVideo ? (isVideoReady ? "video-ready" : "video-loading") : "poster-fallback";
  const frameLabel = shouldRenderVideo ? "Video sequence" : "Poster fallback";

  return (
    <MediaFrame
      className={cn("video-hero", className)}
      label={frameLabel}
      ariaLabel={shouldRenderVideo ? cinematicHeroMedia.ariaLabel : undefined}
      decorative={decorative}
      mediaState={mediaState}
    >
      <ResponsivePoster className={cn(shouldRenderVideo && "video-hero-poster-underlay")} decorative={decorative || shouldRenderVideo} />
      {shouldRenderVideo ? (
        <video
          className={cn("video-hero-element", isVideoReady && "video-hero-element-ready")}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={cinematicHeroMedia.poster.src}
          aria-hidden="true"
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => setHasVideoError(true)}
        >
          {cinematicHeroMedia.videoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : null}
    </MediaFrame>
  );
};
