import type { ValueOf } from "@twilio-paste/types";
import * as React from "react";

export type UseDarkModeReturn = [ValidThemeName, () => void, boolean];

export const themeCookieKey = "paste-docs-theme";

const setCookie = (name: string, value: any, days: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  // eslint-disable-next-line unicorn/no-document-cookie
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = (name: string): string | undefined => {
  // eslint-disable-next-line unicorn/no-document-cookie
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) {
      return part.split(";").shift();
    }
  }
  return undefined;
};

const ValidThemes = {
  DEFAULT: "twilio",
  DARK: "twilio-dark",
} as const;

type ValidThemeName = ValueOf<typeof ValidThemes>;

export const useDarkMode = (defaultValue: ValidThemeName = ValidThemes.DEFAULT): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<ValidThemeName>(defaultValue);
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: ValidThemeName): void => {
    setTheme(mode);
    setCookie(themeCookieKey, mode, 365);
  };

  const toggleTheme = (): void => {
    if (theme === ValidThemes.DEFAULT) {
      setMode(ValidThemes.DARK);
    } else {
      setMode(ValidThemes.DEFAULT);
    }
  };

  React.useEffect(() => {
    const cookieTheme = getCookie(themeCookieKey) as ValidThemeName;

    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches && !cookieTheme) {
      setMode(ValidThemes.DARK);
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
