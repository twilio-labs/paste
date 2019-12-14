// https://styled-system.com/api/#shadow
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

// Tokens
export type BoxShadow = ResponsiveValue<keyof ThemeShape['shadows']>;

// Styled-system grouping
export interface ShadowProps {
  boxShadow?: BoxShadow;
  textShadow?: never;
}
