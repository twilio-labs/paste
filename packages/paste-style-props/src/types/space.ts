// https://styled-system.com/api/#space
import {ThemeShape} from '@twilio-paste/theme';
import {ResponsiveValue} from 'styled-system';

// Tokens
export type SpaceOptions = keyof ThemeShape['space'];
export type Space = ResponsiveValue<SpaceOptions>;
export type Padding = Space;
export type Margin = Space | 'auto';

// Styled-system groupings
export interface MarginProps {
  margin?: Margin;
  marginTop?: Margin;
  marginRight?: Margin;
  marginBottom?: Margin;
  marginLeft?: Margin;
}

export interface PaddingProps {
  padding?: Padding;
  paddingTop?: Padding;
  paddingRight?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
}

export interface SpaceProps extends MarginProps, PaddingProps {}
