import type { ValueOf } from '@twilio-paste/types';

export const ThemeVariants = {
  DEFAULT: 'default',
  SENDGRID: 'sendgrid',
  DARK: 'dark',
  TWILIO: 'twilio',
  TWILIO_DARK: 'twilio-dark',
  EVERGREEN: 'evergreen',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ThemeVariants = ValueOf<typeof ThemeVariants>;
