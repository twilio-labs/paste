import {ThemeProvider} from './themeProvider';
import {ThemeConsumer} from './themeConsumer';
import {withTheme} from './withTheme';
import {useTheme} from './useTheme';
import {ThemeVariants} from './constants';

const Theme = {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
};

export {Theme, withTheme, useTheme, ThemeVariants};
