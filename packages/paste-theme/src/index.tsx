import {ThemeProvider, StyledBase} from './themeProvider';
import type {ThemeProviderProps} from './themeProvider';
import {ThemeConsumer} from './themeConsumer';

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export {pasteBaseStyles} from './styles/base';
export {pasteGlobalStyles} from './styles/global';
export {pasteFonts} from './styles/fonts';
export {StyledBase};
export type {ThemeProviderProps};
export type {ThemeShape, SendGridThemeShape, ConsoleThemeShape, DarkThemeShape} from './types/themes';
export type {GenericThemeShape} from './types/GenericThemeShape';
export type {GenericTokenShape} from './types/GenericTokenShape';
export {DefaultTheme, ConsoleTheme, SendGridTheme, DarkTheme} from './themes';
export {withTheme} from './withTheme';
export {useTheme} from './useTheme';
export {ThemeVariants} from './constants';
export {generateThemeFromTokens} from './generateThemeFromTokens';
export {generateTokensFromTheme} from './generateTokensFromTheme';
export {Theme};

// utils
export {remToPx} from './utils/remToPx';
