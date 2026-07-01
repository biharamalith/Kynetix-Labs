import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { AnimatedText } from "@/components/site/AnimatedText";
import { SiteButton } from "@/components/site/SiteButton";
import { motionConfig } from "@/lib/motionConfig";
import { heroCapabilities, homeCopy } from "@/lib/siteContent";

const hero = homeCopy.hero;

export const HeroIntro = () => {
  const introStyle = {
    "--hero-intro-delay-ms": `${motionConfig.hero.introDelayMs}ms`,
  } as CSSProperties;

  return (
    <div className="hero-copy" style={introStyle}>
      <div className="section-eyebrow hero-eyebrow">
        <span className="section-eyebrow-dot" />
        {hero.eyebrow}
      </div>

      <h1 className="hero-title" aria-label={`${hero.title} ${hero.highlight}`}>
        <AnimatedText text={hero.title} highlight={hero.highlight} />
      </h1>

      <p className="hero-description">{hero.description}</p>

      <div className="hero-actions">
        <SiteButton to={hero.primaryAction.path}>{hero.primaryAction.label}</SiteButton>
        <Link to={hero.secondaryAction.path} className="hero-play-link">
          <span className="hero-play-icon">
            <Play className="h-4 w-4 fill-current" />
          </span>
          {hero.secondaryAction.label}
        </Link>
      </div>

      <div className="hero-capability-grid" aria-label="Kynetix Labs capabilities">
        {heroCapabilities.map((item, index) => (
          <span
            key={item}
            style={
              {
                "--chip-index": index,
                "--chip-delay-base-ms": `${motionConfig.hero.chipBaseDelayMs}ms`,
                "--chip-delay-step-ms": `${motionConfig.hero.chipStepMs}ms`,
              } as CSSProperties
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
