import * as React from 'react';
import {ThemeVariants} from '@twilio-paste/theme';

declare global {
  interface Window {
    activeTheme: string;
  }
}

export interface ActiveSiteThemeContextProps {
  theme: ThemeVariants;
  updateActiveSiteTheme: (newTheme: ThemeVariants) => void;
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

const getThemeFromWindow = (): ThemeVariants => {
  const theme: ThemeVariants =
    typeof window !== 'undefined' && window.activeTheme !== ''
      ? (window.activeTheme as ThemeVariants)
      : (ThemeVariants.DARK as ThemeVariants);
  return theme;
};

export const ActiveSiteThemeProvider: React.FC = (props): React.ReactElement => {
  const [theme, setTheme] = React.useState(getThemeFromWindow());

  const handleThemeChange = (newTheme: ThemeVariants): void => {
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
