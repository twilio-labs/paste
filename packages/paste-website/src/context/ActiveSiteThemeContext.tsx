import * as React from 'react';
import {Themes, ThemesType} from '../constants';

declare global {
  interface Window {
    activeTheme: string;
  }
}

export interface ActiveSiteThemeContextProps {
  theme: ThemesType;
  updateActiveSiteTheme: (newTheme: ThemesType) => void;
}

if (typeof window !== 'undefined') {
  window.activeTheme = window.activeTheme || '';
}

export const ActiveSiteThemeContext = React.createContext<ActiveSiteThemeContextProps | null>(null);

export const useActiveSiteTheme = (): ActiveSiteThemeContextProps => {
  const context = React.useContext(ActiveSiteThemeContext);
  if (!context) {
    throw new Error('useActiveSiteTheme must be used with ActiveSiteThemeProvider');
  }
  return context;
};

const getThemeFromWindow = (): ThemesType => {
  let theme: ThemesType;
  if (typeof window !== 'undefined' && window.activeTheme !== '') {
    theme = window.activeTheme as ThemesType;
  } else {
    theme = Themes.CONSOLE as ThemesType;
  }
  return theme;
};

export const ActiveSiteThemeProvider: React.FunctionComponent<{}> = (props: {}): React.ReactElement => {
  const [theme, setTheme] = React.useState(getThemeFromWindow());

  const handleThemeChange = (newTheme: ThemesType): void => {
    setTheme(newTheme);
    window.activeTheme = newTheme;
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
