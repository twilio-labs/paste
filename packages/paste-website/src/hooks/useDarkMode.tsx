import type { ValueOf } from "@twilio-paste/types";
import { setCookie } from "nookies";
import * as React from "react";

import { SimpleStorage } from "../utils/SimpleStorage";

export type UseDarkModeReturn = [ValidThemeName, () => void, boolean];
export const themeCookieName = "paste-docs-theme";

const ValidThemes = {
  DEFAULT: "twilio",
  DARK: "twilio-dark",
} as const;

export type ValidThemeName = ValueOf<typeof ValidThemes>;

const isValidTheme = (themeName: ValidThemeName): boolean => {
  return themeName === ValidThemes.DEFAULT || themeName === ValidThemes.DARK;
};

export const useDarkMode = (defaultTheme: ValidThemeName = ValidThemes.DEFAULT): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<ValidThemeName>(defaultTheme);
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: ValidThemeName): void => {
    SimpleStorage.set("theme", mode);
    setCookie(null, "paste-docs-theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    document.body.dataset.theme = "evergreen";
    if (theme === ValidThemes.DEFAULT) {
      setMode(ValidThemes.DARK);
    } else {
      setMode(ValidThemes.DEFAULT);
    }
  };

  React.useEffect(() => {
    const localTheme = SimpleStorage.get("theme") as ValidThemeName;

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
