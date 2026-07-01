import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Play, Sparkles } from "lucide-react";
import { heroCapabilities, homeCopy } from "@/lib/siteContent";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { SiteButton } from "@/components/site/SiteButton";

const hero = homeCopy.hero;

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <AnimatedBackground />

      {/*
        First-load visual opener.
        Timing and animation rules live in src/index.css under `.hero-loader`.
        Text/logo come from centralized content so branding changes do not require component edits.
      */}
      <div className="hero-loader" aria-hidden="true">
        <div className="hero-loader-mark">
          <img src="/logo.png" alt="" className="h-14 w-14 object-contain" />
          <div className="hero-loader-ring" />
        </div>
        <span>{hero.loaderLabel}</span>
      </div>

      <div className="container-main relative z-10">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="hero-copy">
            <div className="section-eyebrow hero-eyebrow">
              <span className="section-eyebrow-dot" />
              {hero.eyebrow}
            </div>

            <h1 className="hero-title">
              {hero.title} <span>{hero.highlight}</span>
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
                <span key={item} style={{ "--chip-index": index } as CSSProperties}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/*
            Animated system visual.
            Add/remove nodes from `homeCopy.hero.nodes`; CSS positions the first six node classes.
            If a WebGL or video visual is added later, replace this wrapper without changing hero copy.
          */}
          <div className="hero-engine-wrap" aria-label={hero.visualAriaLabel}>
            <div className="hero-engine-panel">
              <div className="engine-status-bar">
                <span>{hero.statusLabel}</span>
                <span>{hero.statusValue}</span>
              </div>

              <div className="digital-engine">
                <div className="engine-ring engine-ring-one" />
                <div className="engine-ring engine-ring-two" />
                <div className="engine-ring engine-ring-three" />
                <div className="engine-core">
                  <Sparkles className="h-7 w-7 text-cyan-200" />
                  <span>{hero.centerLabel}</span>
                </div>
                {hero.nodes.map((node, index) => (
                  <div key={node} className={`engine-node engine-node-${index + 1}`}>
                    {node}
                  </div>
                ))}
                <div className="engine-beam engine-beam-one" />
                <div className="engine-beam engine-beam-two" />
                <div className="engine-beam engine-beam-three" />
              </div>

              <div className="engine-metrics">
                {hero.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
