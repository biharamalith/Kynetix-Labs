export const getMediaQueryList = (query: string) => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return null;
  }

  return window.matchMedia(query);
};

export const isSessionFlagSet = (key: string) => {
  try {
    return window.sessionStorage.getItem(key) === "true";
  } catch {
    return false;
  }
};

export const setSessionFlag = (key: string) => {
  try {
    window.sessionStorage.setItem(key, "true");
  } catch {
    // Storage can be unavailable in privacy-restricted browsers; animation should never block the page.
  }
};
