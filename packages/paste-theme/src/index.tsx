import {ThemeProvider, pasteBaseStyles} from './themeProvider';
import {ThemeConsumer} from './themeConsumer';

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export {pasteBaseStyles};
export {CustomizationProvider} from './CustomizationProvider';
export {ThemeShape, SendGridThemeShape, ConsoleThemeShape} from './types';
export {DefaultTheme, ConsoleTheme, SendGridTheme} from './themes';
export {withTheme} from './withTheme';
export {useTheme} from './useTheme';
export {ThemeVariants} from './constants';
export {Theme};
