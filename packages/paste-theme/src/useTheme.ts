import * as React from 'react';
import {ThemeContext} from '@emotion/core';
import {ThemeShape} from '@paste/theme-tokens';

const useTheme = (): ThemeShape => {
  const context = React.useContext(ThemeContext) as ThemeShape;
  if (!context) {
    throw new Error('[useHook]: must be used within the @paste/theme provider');
  }
  return context;
};

export {useTheme};
