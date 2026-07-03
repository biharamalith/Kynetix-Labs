import { CSSProperties, useMemo } from "react";
import { KineticCoreFallback } from "@/components/visual/KineticCoreFallback";
import { useReducedMotion } from "@/components/site/useReducedMotion";
import { kineticCoreConfig } from "@/config/kineticCore";
import { getKineticCoreRuntimeMode, getVisualRuntimeSnapshot } from "@/lib/visualRuntime";

export const KineticCore = () => {
  const prefersReducedMotion = useReducedMotion();
  const runtimeSnapshot = useMemo(() => getVisualRuntimeSnapshot(prefersReducedMotion), [prefersReducedMotion]);
  const mode = getKineticCoreRuntimeMode(runtimeSnapshot);

  if (mode === "fallback") {
    return <KineticCoreFallback />;
  }

  return (
    <div className="kinetic-core-shell" aria-label={kineticCoreConfig.ariaLabel} role="img" data-kinetic-mode={mode}>
      <div className="kinetic-core-depth-grid" aria-hidden="true" />
      <div className="kinetic-core-scene" aria-hidden="true">
        {kineticCoreConfig.layers.map((layer) => (
          <div
            key={layer.id}
            className="kinetic-core-layer"
            style={
              {
                "--kinetic-layer-depth": layer.depth,
              } as CSSProperties
            }
          >
            <span>{layer.label}</span>
          </div>
        ))}

        <div className="kinetic-core-orbit kinetic-core-orbit-one" />
        <div className="kinetic-core-orbit kinetic-core-orbit-two" />
        <div className="kinetic-core-orbit kinetic-core-orbit-three" />
        <div className="kinetic-core-beam kinetic-core-beam-one" />
        <div className="kinetic-core-beam kinetic-core-beam-two" />

        <div className="kinetic-core-center">
          <span>KX</span>
          <strong>Core</strong>
        </div>

        {kineticCoreConfig.nodes.map((node) => (
          <div
            key={node.id}
            className={`kinetic-core-node kinetic-core-node-orbit-${node.orbit}`}
            style={
              {
                "--kinetic-node-angle": `${node.angle}deg`,
              } as CSSProperties
            }
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
};
