import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@twilio-paste/animation-library';
import {
  styled,
  StylingGlobals,
  css,
  SystemStyleObject,
  ThemeProvider as StyledThemeProvider,
} from '@twilio-paste/styling-library';
import {DefaultTheme, SendGridTheme, ConsoleTheme} from './themes';
import {ThemeVariants} from './constants';

const pasteGlobalStyles = css({
  html: {
    fontSize: '100%',
  },
  body: {
    margin: 0,
    fontSize: 'fontSize30',
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0 !important' as SystemStyleObject,
      animationIterationCount: '1 !important' as SystemStyleObject,
      transitionDuration: '0 !important' as SystemStyleObject,
      scrollBehavior: 'auto !important' as SystemStyleObject,
    },
  },
  // To disable reach/dialog's style warning
  // Issue: https://github.com/twilio-labs/paste/discussions/524
  // Reach Docs Guidance: https://reach.tech/styling#skip-including-styles
  ':root': {
    ['--reach-dialog' as any]: '1',
  },
});

export const pasteBaseStyles = css({
  color: 'colorText',
  fontSize: 'fontSize30',
  fontFamily: 'fontFamilyText',
  lineHeight: 'lineHeight30',
  fontWeight: 'fontWeightNormal',
});

export const StyledBase = styled.div(pasteBaseStyles);

// eslint-disable-next-line @typescript-eslint/ban-types
function getProviderThemeProps(theme: ThemeVariants, customBreakpoints?: string[]): {} {
  switch (theme) {
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
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
