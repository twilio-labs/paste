import type { ValueOf } from "@twilio-paste/types";
import * as React from "react";
import { BASE_COOKIE_OPTIONS, setCookie } from "../utils/cookies";

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
    setCookie(null, themeCookieKey, mode, BASE_COOKIE_OPTIONS);

    // setCookie(themeCookieKey, mode, 365);
  };

  const toggleTheme = (): void => {
    if (theme === ValidThemes.DEFAULT) {
      setMode(ValidThemes.DARK);
    } else {
      setMode(ValidThemes.DEFAULT);
    }
  };

  React.useEffect(() => {
    // const cookieTheme = getCookie(themeCookieKey) as ValidThemeName;

    // if (window.matchMedia?.("(prefers-color-scheme: dark)").matches && !cookieTheme) {
    //   setMode(ValidThemes.DARK);
    // }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
