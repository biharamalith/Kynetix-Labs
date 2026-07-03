import { scrollStoryConfig, type ScrollStoryRuntimeMode } from "@/config/scrollStory";
import { getViewportWidth, type NetworkInformationLike } from "@/lib/media";

export interface ScrollRuntimeSnapshot {
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

export const getScrollRuntimeSnapshot = (prefersReducedMotion: boolean): ScrollRuntimeSnapshot => {
  const connection = getNavigatorConnection();

  return {
    prefersReducedMotion,
    viewportWidth: getViewportWidth(),
    saveData: connection?.saveData === true,
    effectiveType: connection?.effectiveType ?? null,
  };
};

export const isLowDataScrollConnection = (effectiveType?: string | null) => {
  if (!effectiveType) {
    return false;
  }

  return scrollStoryConfig.budget.lowDataEffectiveTypes.includes(effectiveType.toLowerCase());
};

export const shouldUseScrollStoryFallback = ({
  prefersReducedMotion,
  viewportWidth,
  saveData,
  effectiveType,
}: ScrollRuntimeSnapshot) => {
  if (prefersReducedMotion || saveData || isLowDataScrollConnection(effectiveType)) {
    return true;
  }

  if (typeof viewportWidth === "number" && viewportWidth < scrollStoryConfig.budget.minEnhancedWidthPx) {
    return true;
  }

  return false;
};

export const getScrollStoryRuntimeMode = (snapshot: ScrollRuntimeSnapshot): ScrollStoryRuntimeMode => {
  return shouldUseScrollStoryFallback(snapshot) ? "fallback" : scrollStoryConfig.preferredMode;
};

export const getScrollStoryStepDelay = (index: number) => {
  return index * scrollStoryConfig.budget.revealDelayStepMs;
};

export const isScrollStoryWithinBudget = () => {
  return (
    scrollStoryConfig.steps.length <= scrollStoryConfig.budget.maxStorySteps &&
    scrollStoryConfig.budget.maxAnimatedRails <= 3
  );
};
