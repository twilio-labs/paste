import type { ResponsiveValue } from '@twilio-paste/styling-library';
// https://styled-system.com/api/#space
import type { ThemeShape } from '@twilio-paste/theme';

// Tokens
export type SpaceOptions = keyof ThemeShape['space'];
export type Space = ResponsiveValue<SpaceOptions>;
export type Padding = Space;
export type Margin = Space | 'auto';
export type Gap = Space;

// Styled-system groupings
export interface MarginProps {
  margin?: Margin;
  marginTop?: Margin;
  marginRight?: Margin;
  marginBottom?: Margin;
  marginLeft?: Margin;
  marginX?: Margin;
  marginY?: Margin;
}

export interface PaddingProps {
  padding?: Padding;
  paddingTop?: Padding;
  paddingRight?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
  paddingX?: Padding;
  paddingY?: Padding;
}

export interface GapProps {
  columnGap?: Gap;
  rowGap?: Gap;
}

export interface SpaceProps extends MarginProps, PaddingProps, GapProps {}
