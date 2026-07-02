import { cinematicHeroMedia } from "@/config/media";

export interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

export interface MediaRuntimeInput {
  prefersReducedMotion: boolean;
  viewportWidth?: number | null;
  saveData?: boolean | null;
  effectiveType?: string | null;
}

export interface MediaRuntimeSnapshot extends Required<Pick<MediaRuntimeInput, "prefersReducedMotion">> {
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

export const getViewportWidth = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.innerWidth;
};

export const getMediaRuntimeSnapshot = (prefersReducedMotion: boolean): MediaRuntimeSnapshot => {
  const connection = getNavigatorConnection();

  return {
    prefersReducedMotion,
    viewportWidth: getViewportWidth(),
    saveData: connection?.saveData === true,
    effectiveType: connection?.effectiveType ?? null,
  };
};

export const isLowDataConnection = (effectiveType?: string | null) => {
  if (!effectiveType) {
    return false;
  }

  return cinematicHeroMedia.budget.lowDataEffectiveTypes.includes(effectiveType.toLowerCase());
};

export const shouldUsePosterFallback = ({
  prefersReducedMotion,
  viewportWidth,
  saveData,
  effectiveType,
}: MediaRuntimeInput) => {
  if (prefersReducedMotion || saveData || isLowDataConnection(effectiveType)) {
    return true;
  }

  if (typeof viewportWidth === "number" && viewportWidth < cinematicHeroMedia.budget.mobileVideoMinWidthPx) {
    return true;
  }

  return false;
};

export const canPlayHeroVideo = (input: MediaRuntimeInput, sourceCount: number) => {
  if (sourceCount === 0) {
    return false;
  }

  return !shouldUsePosterFallback(input);
};

export const getHeroMediaMode = (input: MediaRuntimeInput, sourceCount: number) => {
  return canPlayHeroVideo(input, sourceCount) ? "video" : "poster";
};
