import * as React from 'react';
import {ThemeContext} from '@emotion/core';
import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface ThemeConsumerProps {
  children: ({theme}: {theme: ThemeShape}) => React.ReactNode;
}
const ThemeConsumer = ({children, ...props}: ThemeConsumerProps): React.ReactElement => {
  if (children == null || typeof children !== 'function') {
    throw new Error('[ThemeConsumer]: You must pass a function as children');
  }
  return (
    <ThemeContext.Consumer>
      {theme => {
        const newTheme = theme as ThemeShape;
        return children({...props, theme: newTheme});
      }}
    </ThemeContext.Consumer>
  );
};

export {ThemeConsumer};
