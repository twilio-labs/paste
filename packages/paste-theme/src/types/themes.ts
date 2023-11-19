import type { DarkTheme } from "../themes/dark";
import type { DefaultTheme } from "../themes/default";
import type { EvergreenTheme } from "../themes/evergreen";
import type { SendGridTheme } from "../themes/sendgrid";
import type { TwilioTheme } from "../themes/twilio";
import type { TwilioDarkTheme } from "../themes/twilio-dark";

export type SendGridThemeShape = typeof SendGridTheme;
export type ConsoleThemeShape = typeof DefaultTheme;
export type DarkThemeShape = typeof DarkTheme;
export type ThemeShape = typeof DefaultTheme;
export type EvergreenThemeShape = typeof EvergreenTheme;
export type TwilioThemeShape = typeof TwilioTheme;
export type TwilioDarkThemeShape = typeof TwilioDarkTheme;
