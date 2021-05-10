import * as React from 'react';
import type {UseDarkModeReturn} from '../hooks/useDarkMode';

type DarkModeContextValue = {
  theme: UseDarkModeReturn[0];
  toggleMode: UseDarkModeReturn[1];
  componentMounted: UseDarkModeReturn[2];
};

export const DarkModeContext = React.createContext<DarkModeContextValue | null>(null);

export const useDarkModeContext = (): DarkModeContextValue => {
  const context = React.useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkModeContext must be used with DarkModeContextProvider');
  }
  return context;
};
