import {ValueOf} from './types';

export const ThemeVariants = {
  DEFAULT: 'default',
  CONSOLE: 'console',
  SENDGRID: 'sendgrid',
  FLEX: 'flex',
} as const;

export type ThemeVariants = ValueOf<typeof ThemeVariants>;
