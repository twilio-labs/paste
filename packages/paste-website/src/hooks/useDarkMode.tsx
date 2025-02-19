import type { ValueOf } from "@twilio-paste/types";
import * as React from "react";

import { SimpleStorage } from "../utils/SimpleStorage";

export type UseDarkModeReturn = [ValidThemeName, () => void, boolean];

const setCookie = (name: string, value: any, days: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const ValidThemes = {
  DEFAULT: "twilio",
  DARK: "twilio-dark",
} as const;

type ValidThemeName = ValueOf<typeof ValidThemes>;

const isValidTheme = (themeName: ValidThemeName): boolean => {
  return themeName === ValidThemes.DEFAULT || themeName === ValidThemes.DARK;
};

export const useDarkMode = (defaultValue: ValidThemeName = ValidThemes.DEFAULT): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<ValidThemeName>(defaultValue);
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: ValidThemeName): void => {
    SimpleStorage.set("theme", mode);
    setTheme(mode);
    setCookie("paste-docs-theme", mode, 365);
  };

  const toggleTheme = (): void => {
    if (theme === ValidThemes.DEFAULT) {
      setMode(ValidThemes.DARK);
    } else {
      setMode(ValidThemes.DEFAULT);
    }
  };

  React.useEffect(() => {
    const localTheme = SimpleStorage.get("theme") as ValidThemeName;

    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches && !localTheme) {
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
