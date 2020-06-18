// https://styled-system.com/api/#shadow
import {ThemeShape} from '@twilio-paste/theme';
import {ResponsiveValue} from '@twilio-paste/styling-library';

// Tokens
export type BoxShadowOptions = keyof ThemeShape['shadows'];
export type BoxShadow = ResponsiveValue<BoxShadowOptions>;

// Styled-system grouping
export interface ShadowProps {
  boxShadow?: BoxShadow;
  textShadow?: never;
}
