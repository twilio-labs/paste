import * as React from 'react';
import { ThemeContext } from '@twilio-paste/styling-library';

import type { ThemeShape } from './types/themes';

export interface ThemeConsumerProps {
  children: ({ theme }: { theme: ThemeShape }) => React.ReactNode;
}
const ThemeConsumer = ({ children, ...props }: ThemeConsumerProps): React.ReactElement => {
  if (children == null || typeof children !== 'function') {
    throw new Error('[ThemeConsumer]: You must pass a function as children');
  }
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const newTheme = theme as ThemeShape;
        return children({ ...props, theme: newTheme });
      }}
    </ThemeContext.Consumer>
  );
};

ThemeConsumer.displayName = 'PasteThemeConsumer';

export { ThemeConsumer };
