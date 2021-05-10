import * as React from 'react';

type Theme = 'default' | 'dark';
export type UseDarkModeReturn = [Theme, () => void, boolean];

export const useDarkMode = (): UseDarkModeReturn => {
  const [theme, setTheme] = React.useState<Theme>('default');
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: Theme): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    if (theme === 'default') {
      setMode('dark');
    } else {
      setMode('default');
    }
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
      setMode('dark');
    } else if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('default');
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
