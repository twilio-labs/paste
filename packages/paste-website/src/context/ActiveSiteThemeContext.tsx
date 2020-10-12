import * as React from 'react';
import {ThemeVariants} from '@twilio-paste/theme';

export interface ActiveSiteThemeContextProps {
  theme: ThemeVariants;
  updateActiveSiteTheme: (newTheme: ThemeVariants) => void;
}

export const ActiveSiteThemeContext = React.createContext<ActiveSiteThemeContextProps | null>(null);

export const useActiveSiteTheme = (): ActiveSiteThemeContextProps => {
  const context = React.useContext(ActiveSiteThemeContext);
  if (!context) {
    throw new Error('useActiveSiteTheme must be used with ActiveSiteThemeProvider');
  }
  return context;
};

const getThemeFromWindow = (): ThemeVariants => {
  let theme = ThemeVariants.CONSOLE as ThemeVariants;
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    if (window.localStorage.getItem('paste_theme') !== null) {
      theme = window.localStorage.getItem('paste_theme') as ThemeVariants;
    } else {
      window.localStorage.setItem('paste_theme', ThemeVariants.CONSOLE);
    }
  }
  return theme;
};

export const ActiveSiteThemeProvider: React.FunctionComponent<{}> = (props: {}): React.ReactElement => {
  const [theme, setTheme] = React.useState(getThemeFromWindow());

  const handleThemeChange = (newTheme: ThemeVariants): void => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('paste_theme', newTheme);
    }
  };

  return (
    <ActiveSiteThemeContext.Provider
      value={{
        theme,
        updateActiveSiteTheme: handleThemeChange,
      }}
      {...props}
    />
  );
};
