import { ThemeConsumer } from "./themeConsumer";
import { StyledBase, ThemeProvider } from "./themeProvider";
import type { ThemeProviderProps } from "./themeProvider";

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export { pasteBaseStyles } from "./styles/base";
export { pasteGlobalStyles } from "./styles/global";
export { pasteFonts } from "./styles/fonts";
export { StyledBase };
export type { ThemeProviderProps };
export type {
  ThemeShape,
  SendGridThemeShape,
  ConsoleThemeShape,
  DarkThemeShape,
  EvergreenThemeShape,
  TwilioThemeShape,
  TwilioDarkThemeShape,
} from "./types/themes";
export type { GenericThemeShape } from "./types/GenericThemeShape";
export {
  DefaultTheme,
  ConsoleTheme,
  SendGridTheme,
  DarkTheme,
  EvergreenTheme,
  TwilioTheme,
  TwilioDarkTheme,
} from "./themes";
export { withTheme } from "./withTheme";
export { useTheme } from "./useTheme";
export { ThemeVariants } from "./constants";
export { generateThemeFromTokens } from "./generateThemeFromTokens";
export { generateTokensFromTheme } from "./generateTokensFromTheme";
export { Theme };

// utils
export { remToPx } from "./utils/remToPx";
export * from "./useThemeContrastCheck";
