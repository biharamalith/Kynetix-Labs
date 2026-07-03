import { SiteButton } from "@/components/site/SiteButton";
import { KineticCore } from "@/components/visual/KineticCore";
import { kineticCoreConfig } from "@/config/kineticCore";

export const KineticCoreSection = () => {
  const { section, layers, safetyRules } = kineticCoreConfig;

  return (
    <section className="kinetic-core-section" aria-labelledby="kinetic-core-title">
      <div className="container-main">
        <div className="kinetic-core-layout">
          <div className="kinetic-core-copy">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              {section.eyebrow}
            </div>
            <h2 id="kinetic-core-title" className="page-section-title">
              {section.title}
            </h2>
            <p className="page-section-description">{section.description}</p>
            <p className="kinetic-core-proof-note">{section.proofNote}</p>
            <div className="kinetic-core-actions">
              <SiteButton to={section.primaryAction.path} size="lg">
                {section.primaryAction.label}
              </SiteButton>
            </div>
          </div>

          <div className="kinetic-core-visual-column">
            <KineticCore />
          </div>
        </div>

        <div className="kinetic-core-layers" aria-label="Kinetic core layers">
          {layers.map((layer) => (
            <article key={layer.id} className="kinetic-core-layer-card">
              <span>{layer.depth.toString().padStart(2, "0")}</span>
              <h3>{layer.label}</h3>
              <p>{layer.description}</p>
            </article>
          ))}
        </div>

        <div className="kinetic-core-safety" aria-label="Kinetic core safety rules">
          {safetyRules.map((rule) => (
            <span key={rule}>{rule}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
