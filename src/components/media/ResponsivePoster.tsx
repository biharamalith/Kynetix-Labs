import { cinematicHeroMedia } from "@/config/media";

interface ResponsivePosterProps {
  decorative?: boolean;
}

export const ResponsivePoster = ({ decorative = false }: ResponsivePosterProps) => {
  return (
    <div
      className="responsive-poster"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : cinematicHeroMedia.posterAlt}
    >
      <div className="responsive-poster-grid" />
      <div className="responsive-poster-horizon" />
      <div className="responsive-poster-core">
        <span>{cinematicHeroMedia.eyebrow}</span>
        <strong>{cinematicHeroMedia.title}</strong>
      </div>
      <div className="responsive-poster-rail responsive-poster-rail-one" />
      <div className="responsive-poster-rail responsive-poster-rail-two" />
      <div className="responsive-poster-rail responsive-poster-rail-three" />
    </div>
  );
};
