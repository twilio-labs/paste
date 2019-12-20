import {DefaultTheme} from '../default';
import {SendGridTheme} from '../sendgrid';
import {ConsoleTheme} from '../console';

export type SendGridThemeShape = typeof SendGridTheme;
export type ConsoleThemeShape = typeof ConsoleTheme;
export type ThemeShape = typeof DefaultTheme;
