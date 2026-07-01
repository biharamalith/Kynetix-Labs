import { CSSProperties } from "react";
import { Sparkles } from "lucide-react";
import { motionConfig } from "@/lib/motionConfig";
import { homeCopy } from "@/lib/siteContent";

const hero = homeCopy.hero;

export const HeroVisual = () => {
  const visualStyle = {
    "--hero-visual-delay-ms": `${motionConfig.hero.visualDelayMs}ms`,
  } as CSSProperties;

  return (
    <div className="hero-engine-wrap" style={visualStyle} aria-label={hero.visualAriaLabel}>
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
  );
};
