import {ThemeProvider, StyledBase, ThemeProviderProps} from './themeProvider';
import {ThemeConsumer} from './themeConsumer';

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export {pasteBaseStyles} from './styles/base';
export {pasteGlobalStyles} from './styles/global';
export {pasteFonts} from './styles/fonts';
export {StyledBase, ThemeProviderProps};
export {ThemeShape, SendGridThemeShape, ConsoleThemeShape} from './types/themes';
export {GenericThemeShape} from './types/GenericThemeShape';
export {GenericTokenShape} from './types/GenericTokenShape';
export {DefaultTheme, ConsoleTheme, SendGridTheme} from './themes';
export {withTheme} from './withTheme';
export {useTheme} from './useTheme';
export {ThemeVariants} from './constants';
export {generateThemeFromTokens} from './generateThemeFromTokens';
export {generateTokensFromTheme} from './generateTokensFromTheme';
export {Theme};
