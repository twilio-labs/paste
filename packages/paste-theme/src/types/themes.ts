import {DefaultTheme} from '../themes/default';
import {SendGridTheme} from '../themes/sendgrid';
import {ConsoleTheme} from '../themes/console';

export type SendGridThemeShape = typeof SendGridTheme;
export type ConsoleThemeShape = typeof ConsoleTheme;
export type ThemeShape = typeof DefaultTheme;
export type GenericThemeShape = keyof ThemeShape;
