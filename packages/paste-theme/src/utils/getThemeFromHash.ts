export const getThemeFromHash = (): string | undefined => {
  try {
    if (window.location.hash.includes("paste-theme-override")) {
      return window.location.hash.split("=")[1];
    }
    // eslint-disable-next-line unicorn/prefer-optional-catch-binding
  } catch (error) {}
  return undefined;
};
