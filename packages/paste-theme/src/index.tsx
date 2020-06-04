import {ThemeProvider, pasteBaseStyles, StyledBase} from './themeProvider';
import {ThemeConsumer} from './themeConsumer';

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export {pasteBaseStyles, StyledBase};
export {CustomizationProvider} from './CustomizationProvider';
export {ThemeShape, SendGridThemeShape, ConsoleThemeShape} from './types';
export {DefaultTheme, ConsoleTheme, SendGridTheme} from './themes';
export {withTheme} from './withTheme';
export {useTheme} from './useTheme';
export {ThemeVariants} from './constants';
export {Theme};
