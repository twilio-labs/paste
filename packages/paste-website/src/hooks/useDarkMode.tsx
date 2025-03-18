import type { ValueOf } from "@twilio-paste/types";
import { parseCookies, setCookie } from "nookies";
import * as React from "react";

export type UseDarkModeReturn = [ValidThemeName | undefined, () => void, boolean];

const ValidThemes = {
  DEFAULT: "twilio",
  DARK: "twilio-dark",
} as const;

type ValidThemeName = ValueOf<typeof ValidThemes>;

const isValidTheme = (themeName: ValidThemeName): boolean => {
  return Object.values(ValidThemes).includes(themeName);
};

export const useDarkMode = (): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<ValidThemeName>();
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: ValidThemeName): void => {
    setCookie(null, "paste-docs-theme", mode, { path: "/" });
    document.body.dataset.theme = mode;
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    if (theme === ValidThemes.DEFAULT) {
      setMode(ValidThemes.DARK);
    } else {
      setMode(ValidThemes.DEFAULT);
    }
  };

  React.useEffect(() => {
    const localTheme = parseCookies()["paste-docs-theme"] as ValidThemeName;

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && !localTheme) {
      setMode(ValidThemes.DARK);
    } else if (localTheme && isValidTheme(localTheme)) {
      setTheme(localTheme);
    } else {
      setMode(ValidThemes.DEFAULT);
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
