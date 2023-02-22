import * as React from 'react';
import {useReducedMotion, Globals as AnimatedGlobals} from '@twilio-paste/animation-library';
import {
  styled,
  StylingGlobals,
  ThemeProvider as EmotionThemeProvider,
  createCache,
  CacheProvider as EmotionCacheProvider,
} from '@twilio-paste/styling-library';
import type {CreateCacheOptions} from '@twilio-paste/styling-library';

import {DefaultTheme, SendGridTheme, DarkTheme, TwilioTheme, TwilioDarkTheme, EvergreenTheme} from './themes';
import {pasteGlobalStyles} from './styles/global';
import {pasteBaseStyles} from './styles/base';
import {pasteFonts} from './styles/fonts';
import {ThemeVariants, DeprecatedThemeVariants} from './constants';
import {isDeprecatedTheme} from './utils/isDeprecatedTheme';

export const StyledBase = styled.div(pasteBaseStyles);

// eslint-disable-next-line @typescript-eslint/ban-types
function getProviderThemeProps(theme: ThemeVariants | DeprecatedThemeVariants, customBreakpoints?: string[]): {} {
  switch (theme) {
    case ThemeVariants.TWILIO:
      return {
        ...TwilioTheme,
        breakpoints: customBreakpoints || TwilioTheme.breakpoints,
      };
    case ThemeVariants.TWILIO_DARK:
      return {
        ...TwilioDarkTheme,
        breakpoints: customBreakpoints || TwilioDarkTheme.breakpoints,
      };
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
    case ThemeVariants.EVERGREEN:
      return {
        ...EvergreenTheme,
        breakpoints: customBreakpoints || EvergreenTheme.breakpoints,
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

export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeVariants;
  disableAnimations?: boolean;
  cacheProviderProps?: CreateCacheOptions;
}

const ThemeProvider: React.FunctionComponent<React.PropsWithChildren<ThemeProviderProps>> = ({
  customBreakpoints,
  theme = ThemeVariants.DEFAULT,
  disableAnimations = false,
  // https://emotion.sh/docs/@emotion/cache#options
  cacheProviderProps,
  ...props
}) => {
  const [cache] = React.useState(cacheProviderProps ? createCache(cacheProviderProps) : null);
  const prefersReducedMotion = useReducedMotion();
  React.useMemo(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [disableAnimations, prefersReducedMotion]);

  const providerThemeProps = getProviderThemeProps(theme, customBreakpoints);

  if (cache) {
    return (
      <EmotionCacheProvider value={cache}>
        <EmotionThemeProvider theme={providerThemeProps}>
          <StylingGlobals styles={pasteGlobalStyles({theme: providerThemeProps})} />
          <StylingGlobals styles={pasteFonts} />
          <StyledBase className="paste-theme-provider" {...props} />
        </EmotionThemeProvider>
      </EmotionCacheProvider>
    );
  }

  return (
    <EmotionThemeProvider theme={providerThemeProps}>
      <StylingGlobals styles={pasteGlobalStyles({theme: providerThemeProps})} />
      <StylingGlobals styles={pasteFonts} />
      <StyledBase className="paste-theme-provider" {...props} />
    </EmotionThemeProvider>
  );
};

ThemeProvider.displayName = 'PasteThemeProvider';

export {ThemeProvider};
