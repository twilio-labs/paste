import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@twilio-paste/animation-library';
import {StylingGlobals, ThemeProvider as StyledThemeProvider} from '@twilio-paste/styling-library';
import {pasteGlobalStyles, StyledBase, DefaultTheme} from '@twilio-paste/theme';
import type {ThemeProviderProps} from '@twilio-paste/theme';
import {createCustomTheme} from './utils';
import type {CustomTheme} from './types';

export interface CustomizationProviderProps {
  customBreakpoints?: ThemeProviderProps['customBreakpoints'];
  disableAnimations?: ThemeProviderProps['disableAnimations'];
  theme?: CustomTheme;
}

const CustomizationProvider: React.FC<CustomizationProviderProps> = ({
  customBreakpoints,
  theme,
  disableAnimations = false,
  ...props
}) => {
  const customTheme = React.useMemo(() => createCustomTheme(DefaultTheme, theme || {}, customBreakpoints), [
    theme,
    customBreakpoints,
  ]);

  const prefersReducedMotion = useReducedMotion();
  React.useEffect(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  return (
    <StyledThemeProvider theme={customTheme}>
      <StylingGlobals styles={pasteGlobalStyles({theme: customTheme})} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {CustomizationProvider};
