import { Globals as AnimatedGlobals, useReducedMotion } from "@twilio-paste/animation-library";
import { ThemeProvider as StyledThemeProvider, StylingGlobals } from "@twilio-paste/styling-library";
import { DarkTheme, DefaultTheme, StyledBase, pasteGlobalStyles } from "@twilio-paste/theme";
import * as React from "react";

import type { CustomizationProviderProps } from "./types";
import { createCustomTheme } from "./utils";

/**
 * The customization provider can be used to wrap a Paste applications and customize the
 * look and feel of the components you are using. You can provide overrides to the entire
 * theme, supply custom breakpoints for responsive design, and customize tagged DOM
 * elements within each paste component with custom CSS.
 *
 * @param {*} {
 *   baseTheme = 'default',
 *   customBreakpoints,
 *   elements,
 *   theme,
 *   disableAnimations = false,
 *   ...props
 * }
 * @return {*}
 */
const CustomizationProvider: React.FC<React.PropsWithChildren<CustomizationProviderProps>> = ({
  baseTheme = "default",
  customBreakpoints,
  elements,
  theme,
  disableAnimations = false,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  React.useMemo(() => {
    AnimatedGlobals.assign({
      skipAnimation: disableAnimations || prefersReducedMotion,
    });
  }, [disableAnimations, prefersReducedMotion]);

  const customTheme = React.useMemo(
    () =>
      createCustomTheme({
        baseTheme: baseTheme === "dark" ? DarkTheme : DefaultTheme,
        overrides: theme || {},
        elements: elements || {},
        customBreakpoints,
      }),
    [baseTheme, customBreakpoints, elements, theme],
  );

  return (
    <StyledThemeProvider theme={customTheme}>
      <StylingGlobals styles={pasteGlobalStyles({ theme: customTheme })} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

CustomizationProvider.displayName = "PasteCustomizationProvider";

export { CustomizationProvider };
