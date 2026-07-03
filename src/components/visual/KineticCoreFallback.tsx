import { kineticCoreConfig } from "@/config/kineticCore";

export const KineticCoreFallback = () => {
  return (
    <div className="kinetic-core-fallback" aria-label={kineticCoreConfig.ariaLabel} role="img" data-kinetic-mode="fallback">
      <div className="kinetic-core-fallback-mark" aria-hidden="true">
        <span />
      </div>
      <div className="kinetic-core-fallback-stack">
        {kineticCoreConfig.layers.map((layer) => (
          <div key={layer.id} className="kinetic-core-fallback-layer">
            <span>{layer.label}</span>
            <strong>{layer.depth.toString().padStart(2, "0")}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};
