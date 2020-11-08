import {ValueOf} from '@twilio-paste/types';

export const ThemeVariants = {
  DEFAULT: 'default',
  CONSOLE: 'console',
  SENDGRID: 'sendgrid',
  FLEX: 'flex',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ThemeVariants = ValueOf<typeof ThemeVariants>;
