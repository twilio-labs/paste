// https://styled-system.com/api/#shadow
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

// Tokens
export type BoxShadowOptions = keyof ThemeShape['shadows'];
export type BoxShadow = ResponsiveValue<BoxShadowOptions>;

// Styled-system grouping
export interface ShadowProps {
  boxShadow?: BoxShadow;
  textShadow?: never;
}
