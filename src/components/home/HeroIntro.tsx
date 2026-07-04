import { CSSProperties } from "react";
import { motionConfig } from "@/lib/motionConfig";
import { homeCopy } from "@/lib/siteContent";

const hero = homeCopy.hero;
const heroSubtitle = "Software systems for modern operations.";

export const HeroIntro = () => {
  const introStyle = {
    "--hero-intro-delay-ms": `${motionConfig.hero.introDelayMs}ms`,
  } as CSSProperties;

  return (
    <div className="hero-brand-reveal" style={introStyle}>
      <p className="hero-product-name">{hero.title}</p>
      <h1 className="hero-product-headline" aria-label={`${hero.title} ${hero.highlight}`}>
        {hero.highlight}
      </h1>
      <p className="hero-product-subtitle">{heroSubtitle}</p>
    </div>
  );
};
