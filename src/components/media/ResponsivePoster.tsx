import { cinematicHeroMedia } from "@/config/media";
import { cn } from "@/lib/utils";

interface ResponsivePosterProps {
  className?: string;
  decorative?: boolean;
}

export const ResponsivePoster = ({ className, decorative = false }: ResponsivePosterProps) => {
  return (
    <div
      className={cn("responsive-poster", className)}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : cinematicHeroMedia.posterAlt}
    >
      <img
        className="responsive-poster-image"
        src={cinematicHeroMedia.poster.src}
        width={cinematicHeroMedia.poster.width}
        height={cinematicHeroMedia.poster.height}
        alt=""
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
    </div>
  );
};
