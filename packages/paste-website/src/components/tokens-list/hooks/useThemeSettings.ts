import * as React from 'react';

import type {ThemeKeys} from '../types';

import {useDarkModeContext} from '../../../context/DarkModeContext';

export const useThemeSettings = (): {
  themeKey: ThemeKeys;
  handleChangeTheme: React.ChangeEventHandler<HTMLSelectElement>;
} => {
  const {theme} = useDarkModeContext();

  const [themeKey, setThemeKey] = React.useState<ThemeKeys>(theme);

  React.useEffect(() => {
    setThemeKey(theme);
  }, [theme]);

  const handleChangeTheme = React.useCallback(({target: {value}}) => setThemeKey(value), []);

  return {themeKey, handleChangeTheme};
};
