import { CSSProperties } from "react";
import { motionConfig } from "@/lib/motionConfig";
import { homeCopy } from "@/lib/siteContent";

const hero = homeCopy.hero;

export const HeroIntro = () => {
  const introStyle = {
    "--hero-intro-delay-ms": `${motionConfig.hero.introDelayMs}ms`,
  } as CSSProperties;

  return (
    <div className="hero-brand-reveal" style={introStyle}>
      <h1 className="hero-signature" aria-label={`${hero.title} ${hero.highlight}`}>
        <span>{hero.title}</span>
      </h1>
      <p className="hero-brand-subtitle">{hero.highlight}</p>
    </div>
  );
};
