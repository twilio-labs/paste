import * as React from 'react';
import { ThemeContext } from '@twilio-paste/styling-library';

import type { ThemeShape } from './types/themes';

const useTheme = (): ThemeShape => {
  const context = React.useContext(ThemeContext) as ThemeShape;
  if (!context) {
    throw new Error('[useHook]: must be used within the @twilio-paste/theme provider');
  }
  return context;
};

export { useTheme };
