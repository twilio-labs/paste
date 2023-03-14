import * as React from 'react';

type Theme = 'twilio' | 'twilio-dark';
export type UseDarkModeReturn = [Theme, () => void, boolean];

export const useDarkMode = (): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<Theme>('twilio');
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: Theme): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    if (theme === 'twilio') {
      setMode('twilio-dark');
    } else {
      setMode('twilio');
    }
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
      setMode('twilio-dark');
    } else if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('twilio');
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
