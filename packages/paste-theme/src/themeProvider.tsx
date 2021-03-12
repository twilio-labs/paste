import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@twilio-paste/animation-library';
import {styled, StylingGlobals, ThemeProvider as StyledThemeProvider} from '@twilio-paste/styling-library';
import {DefaultTheme, SendGridTheme, ConsoleTheme, DarkTheme} from './themes';
import {pasteGlobalStyles} from './styles/global';
import {pasteBaseStyles} from './styles/base';
import {pasteFonts} from './styles/fonts';
import {ThemeVariants} from './constants';

export const StyledBase = styled.div(pasteBaseStyles);

// eslint-disable-next-line @typescript-eslint/ban-types
function getProviderThemeProps(theme: ThemeVariants, customBreakpoints?: string[]): {} {
  switch (theme) {
    case ThemeVariants.DARK:
      return {
        ...DarkTheme,
        breakpoints: customBreakpoints || DarkTheme.breakpoints,
      };
    case ThemeVariants.SENDGRID:
      return {
        ...SendGridTheme,
        breakpoints: customBreakpoints || SendGridTheme.breakpoints,
      };
    case ThemeVariants.CONSOLE:
      return {
        ...ConsoleTheme,
        breakpoints: customBreakpoints || ConsoleTheme.breakpoints,
      };
    case ThemeVariants.FLEX:
    case ThemeVariants.DEFAULT:
    default:
      return {
        ...DefaultTheme,
        breakpoints: customBreakpoints || DefaultTheme.breakpoints,
      };
  }
}

export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeVariants;
  disableAnimations?: boolean;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  customBreakpoints,
  theme = ThemeVariants.DEFAULT,
  disableAnimations = false,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  React.useEffect(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  const providerThemeProps = getProviderThemeProps(theme, customBreakpoints);

  return (
    <StyledThemeProvider theme={providerThemeProps}>
      <StylingGlobals styles={pasteGlobalStyles({theme: providerThemeProps})} />
      <StylingGlobals styles={pasteFonts} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
