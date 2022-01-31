import type {DefaultTheme} from '../themes/default';
import type {SendGridTheme} from '../themes/sendgrid';
import type {DarkTheme} from '../themes/dark';

export type SendGridThemeShape = typeof SendGridTheme;
export type DarkThemeShape = typeof DarkTheme;
export type ThemeShape = typeof DefaultTheme;
