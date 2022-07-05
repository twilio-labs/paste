import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@twilio-paste/animation-library';
import {styled, StylingGlobals, ThemeProvider as StyledThemeProvider} from '@twilio-paste/styling-library';
import {DefaultTheme, DarkTheme} from './themes';
import {pasteGlobalStyles} from './styles/global';
import {pasteBaseStyles} from './styles/base';
import {pasteFonts} from './styles/fonts';
import {ThemeVariants, DeprecatedThemeVariants} from './constants';
import {isDeprecatedTheme} from './utils/isDeprecatedTheme';

export const StyledBase = styled.div(pasteBaseStyles);

// eslint-disable-next-line @typescript-eslint/ban-types
function getProviderThemeProps(theme: ThemeVariants | DeprecatedThemeVariants, customBreakpoints?: string[]): {} {
  switch (theme) {
    case ThemeVariants.DARK:
      return {
        ...DarkTheme,
        breakpoints: customBreakpoints || DarkTheme.breakpoints,
      };
    case ThemeVariants.SENDGRID:
      return {
        ...DefaultTheme,
        fonts: {...DefaultTheme.fonts, fontFamilyText: `'Colfax', Helvetica, Arial, sans-serif`},
        breakpoints: customBreakpoints || DefaultTheme.breakpoints,
      };
    case DeprecatedThemeVariants.CONSOLE:
      isDeprecatedTheme(DeprecatedThemeVariants.CONSOLE);
      return {
        ...DefaultTheme,
        breakpoints: customBreakpoints || DefaultTheme.breakpoints,
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

export interface CSSVarsProps {
  /**
   * The element to attach the CSS custom properties to.
   * @default ":host, :root"
   */
  root?: string;
  /**
   * The element to attach the CSS custom properties to.
   * @default ":host, :root"
   */
  themeCssVars: any;
}

export const CSSVars: React.FC<CSSVarsProps> = ({root = ':host, :root'}) => {
  /**
   * Append color mode selector to allow semantic tokens to change according to the color mode
   */
  const selector = [root, `[data-theme]`].join(',');
  return <StylingGlobals styles={(theme: any) => ({[selector]: theme.__cssVars})} />;
};

import '@twilio-paste/design-tokens/dist/all-custom-properties.css';
export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeVariants;
  disableAnimations?: boolean;
  cssVarsRoot?: string;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme = ThemeVariants.DEFAULT,
  customBreakpoints,
  disableAnimations = false,
  cssVarsRoot,
  ...props
}) => {
  const providerThemeProps = getProviderThemeProps(theme, customBreakpoints);
  const computedTheme = React.useMemo(() => toCSSVar(providerThemeProps), [providerThemeProps]);

  const prefersReducedMotion = useReducedMotion();
  React.useMemo(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [disableAnimations, prefersReducedMotion]);

  return (
    <StyledThemeProvider theme={providerThemeProps}>
      <StylingGlobals styles={pasteGlobalStyles({theme: providerThemeProps})} />
      <StylingGlobals styles={pasteFonts} />
      <CSSVars root={cssVarsRoot} />
      <StyledBase className="paste-theme-provider" {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
