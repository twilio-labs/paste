import type {ValueOf} from '@twilio-paste/types';

export const ThemeVariants = {
  DEFAULT: 'default',
  SENDGRID: 'sendgrid',
  FLEX: 'flex',
  DARK: 'dark',
  TWILIO: 'twilio',
  TWILIO_DARK: 'twilio-dark',
  EVERGREEN: 'evergreen',
};

export const DeprecatedThemeVariants = {
  CONSOLE: 'console',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ThemeVariants = ValueOf<typeof ThemeVariants>;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DeprecatedThemeVariants = ValueOf<typeof DeprecatedThemeVariants>;
