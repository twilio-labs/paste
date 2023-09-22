import { Globals as AnimatedGlobals, useReducedMotion } from "@twilio-paste/animation-library";
import {
  CacheProvider as EmotionCacheProvider,
  StylingGlobals,
  ThemeProvider as EmotionThemeProvider,
  createCache,
  styled,
} from "@twilio-paste/styling-library";
import type { CreateCacheOptions } from "@twilio-paste/styling-library";
import * as React from "react";

import { ThemeVariants } from "./constants";
import { pasteBaseStyles } from "./styles/base";
import { pasteFonts } from "./styles/fonts";
import { pasteGlobalStyles } from "./styles/global";
import { DarkTheme, DefaultTheme, EvergreenTheme, SendGridTheme, TwilioDarkTheme, TwilioTheme } from "./themes";
import { getThemeFromHash } from "./utils/getThemeFromHash";

export const StyledBase = styled.div(pasteBaseStyles);

const useThemeOverwriteHook = (): string | undefined => {
  const [overwriteTheme, setOverwriteTheme] = React.useState(getThemeFromHash());

  const handleLocationChange = (): void => {
    setOverwriteTheme(getThemeFromHash());
  };

  React.useEffect(() => {
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  });

  return overwriteTheme;
};

// eslint-disable-next-line @typescript-eslint/ban-types
function getProviderThemeProps(
  theme: ThemeVariants,
  customBreakpoints?: string[],
): { [key: string]: string[] | Partial<{ [key: string]: any }> } {
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
  const overwriteTheme = useThemeOverwriteHook();

  const providerThemeProps = getProviderThemeProps(overwriteTheme || theme, customBreakpoints);

  if (cache) {
    return (
      <EmotionCacheProvider value={cache}>
        <EmotionThemeProvider theme={providerThemeProps}>
          <StylingGlobals styles={pasteGlobalStyles({ theme: providerThemeProps })} />
          <StylingGlobals styles={pasteFonts} />
          <StyledBase className="paste-theme-provider" {...props} />
        </EmotionThemeProvider>
      </EmotionCacheProvider>
    );
  }

  return (
    <EmotionThemeProvider theme={providerThemeProps}>
      <StylingGlobals styles={pasteGlobalStyles({ theme: providerThemeProps })} />
      <StylingGlobals styles={pasteFonts} />
      <StyledBase className="paste-theme-provider" {...props} />
    </EmotionThemeProvider>
  );
};

ThemeProvider.displayName = "PasteThemeProvider";

export { ThemeProvider };
