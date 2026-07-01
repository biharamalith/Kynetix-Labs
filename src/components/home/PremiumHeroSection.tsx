import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Play, Sparkles } from "lucide-react";
import { heroCapabilities } from "@/lib/premiumContent";
import { IndustrialBackdrop } from "@/components/premium/IndustrialBackdrop";
import { PremiumButton } from "@/components/premium/PremiumButton";

const engineNodes = ["AI", "Cloud", "IoT", "Apps", "POS", "Data"];

export const PremiumHeroSection = () => {
  return (
    <section className="premium-hero">
      <IndustrialBackdrop />

      <div className="hero-loader" aria-hidden="true">
        <div className="hero-loader-mark">
          <img src="/logo.png" alt="" className="h-14 w-14 object-contain" />
          <div className="hero-loader-ring" />
        </div>
        <span>Kynetix Labs</span>
      </div>

      <div className="container-main relative z-10">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="hero-copy">
            <div className="premium-eyebrow hero-eyebrow">
              <span className="premium-eyebrow-dot" />
              Premium industrial digital systems
            </div>

            <h1 className="hero-title">
              Engineering intelligent digital systems with <span>kinetic precision.</span>
            </h1>

            <p className="hero-description">
              Kynetix Labs designs and builds high-impact mobile, web, cloud, IoT, POS, and AI-enabled
              software for businesses that need more than a basic website or app.
            </p>

            <div className="hero-actions">
              <PremiumButton to="/contact">Start a Project</PremiumButton>
              <Link to="/services" className="hero-play-link">
                <span className="hero-play-icon">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                Explore capabilities
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

          <div className="hero-engine-wrap" aria-label="Animated Kynetix digital engine visual">
            <div className="hero-engine-panel">
              <div className="engine-status-bar">
                <span>System architecture</span>
                <span>LIVE</span>
              </div>

              <div className="digital-engine">
                <div className="engine-ring engine-ring-one" />
                <div className="engine-ring engine-ring-two" />
                <div className="engine-ring engine-ring-three" />
                <div className="engine-core">
                  <Sparkles className="h-7 w-7 text-cyan-200" />
                  <span>KX</span>
                </div>
                {engineNodes.map((node, index) => (
                  <div key={node} className={`engine-node engine-node-${index + 1}`}>
                    {node}
                  </div>
                ))}
                <div className="engine-beam engine-beam-one" />
                <div className="engine-beam engine-beam-two" />
                <div className="engine-beam engine-beam-three" />
              </div>

              <div className="engine-metrics">
                <div>
                  <span>Frontend</span>
                  <strong>Premium UI</strong>
                </div>
                <div>
                  <span>Backend fit</span>
                  <strong>Scalable</strong>
                </div>
                <div>
                  <span>Motion</span>
                  <strong>Optimized</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
