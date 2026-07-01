import { CSSProperties } from "react";
import { techSignals } from "@/lib/premiumContent";
import { Reveal } from "@/components/premium/Reveal";

export const TechStackSection = () => {
  return (
    <section className="premium-tech-section">
      <div className="container-main">
        <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="premium-eyebrow">
              <span className="premium-eyebrow-dot" />
              Technical foundation
            </div>
            <h2 className="premium-section-title mt-5">Reusable architecture before heavy 3D.</h2>
            <p className="premium-section-description mt-5">
              Branch 1 creates the visual and component foundation. After this, cinematic loader, WebGL,
              product configurator-style sections, and advanced animation can be added safely.
            </p>
          </div>
          <div className="tech-signal-grid">
            {techSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className="tech-signal" style={{ "--signal-index": index } as CSSProperties}>
                  <Icon className="h-4 w-4" />
                  <span>{signal.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
