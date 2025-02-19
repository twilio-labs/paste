import type { ValueOf } from "@twilio-paste/types";
import * as React from "react";

import { setCookie } from "../utils/cookies";

export type UseDarkModeReturn = [ValidThemeName, () => void, boolean];

export const themeCookieKey = "paste-docs-theme";

const ValidThemes = {
  DEFAULT: "twilio",
  DARK: "twilio-dark",
} as const;

export type ValidThemeName = ValueOf<typeof ValidThemes>;

export const useDarkMode = (defaultValue: ValidThemeName = ValidThemes.DEFAULT): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<ValidThemeName>(defaultValue);
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: ValidThemeName): void => {
    setTheme(mode);
    setCookie(null, themeCookieKey, mode);
  };

  const toggleTheme = (): void => {
    if (theme === ValidThemes.DEFAULT) {
      setMode(ValidThemes.DARK);
    } else {
      setMode(ValidThemes.DEFAULT);
    }
  };

  React.useEffect(() => {
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
