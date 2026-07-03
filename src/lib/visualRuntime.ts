import { kineticCoreConfig, type KineticCoreRuntimeMode } from "@/config/kineticCore";
import { getViewportWidth, type NetworkInformationLike } from "@/lib/media";

export interface VisualRuntimeSnapshot {
  prefersReducedMotion: boolean;
  viewportWidth: number | null;
  saveData: boolean;
  effectiveType: string | null;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformationLike;
  mozConnection?: NetworkInformationLike;
  webkitConnection?: NetworkInformationLike;
}

const getNavigatorConnection = (): NetworkInformationLike | null => {
  if (typeof navigator === "undefined") {
    return null;
  }

  const navigatorWithConnection = navigator as NavigatorWithConnection;
  return navigatorWithConnection.connection ?? navigatorWithConnection.mozConnection ?? navigatorWithConnection.webkitConnection ?? null;
};

export const getVisualRuntimeSnapshot = (prefersReducedMotion: boolean): VisualRuntimeSnapshot => {
  const connection = getNavigatorConnection();

  return {
    prefersReducedMotion,
    viewportWidth: getViewportWidth(),
    saveData: connection?.saveData === true,
    effectiveType: connection?.effectiveType ?? null,
  };
};

export const isLowDataVisualConnection = (effectiveType?: string | null) => {
  if (!effectiveType) {
    return false;
  }

  return kineticCoreConfig.budget.lowDataEffectiveTypes.includes(effectiveType.toLowerCase());
};

export const shouldUseKineticCoreFallback = ({
  prefersReducedMotion,
  viewportWidth,
  saveData,
  effectiveType,
}: VisualRuntimeSnapshot) => {
  if (prefersReducedMotion || saveData || isLowDataVisualConnection(effectiveType)) {
    return true;
  }

  if (typeof viewportWidth === "number" && viewportWidth < kineticCoreConfig.budget.mobileMinWidthPx) {
    return true;
  }

  return false;
};

export const getKineticCoreRuntimeMode = (snapshot: VisualRuntimeSnapshot): KineticCoreRuntimeMode => {
  return shouldUseKineticCoreFallback(snapshot) ? "fallback" : kineticCoreConfig.preferredMode;
};

export const isKineticCoreWithinBudget = () => {
  return (
    kineticCoreConfig.nodes.length <= kineticCoreConfig.budget.maxAnimatedNodes &&
    kineticCoreConfig.layers.length <= kineticCoreConfig.budget.maxDepthLayers
  );
};
