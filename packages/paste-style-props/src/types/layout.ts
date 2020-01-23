// https://styled-system.com/api/#layout
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type WidthOptions = keyof ThemeShape['widths'];
export type MinWidthOptions = keyof ThemeShape['minWidths'];
export type MaxWidthOptions = keyof ThemeShape['maxWidths'];
export type HeightOptions = keyof ThemeShape['heights'];
export type MinHeightOptions = keyof ThemeShape['minHeights'];
export type MaxHeightOptions = keyof ThemeShape['maxHeights'];
export type IconSizeOptions = keyof ThemeShape['iconSizes'];

export type Width = ResponsiveValue<WidthOptions>;
export type MinWidth = ResponsiveValue<MinWidthOptions>;
export type MaxWidth = ResponsiveValue<MaxWidthOptions>;
export type Height = ResponsiveValue<HeightOptions>;
export type MinHeight = ResponsiveValue<MinHeightOptions>;
export type MaxHeight = ResponsiveValue<MaxHeightOptions>;
export type IconSize = ResponsiveValue<IconSizeOptions>;
export type Size = Width | Height;

// CSS native
export type DisplayOptions = CSS.DisplayProperty;
export type VerticalAlignOptions = CSS.VerticalAlignProperty<TLengthStyledSystem>;
export type OverflowOptions = CSS.OverflowProperty;
export type OverflowXOptions = CSS.OverflowXProperty;
export type OverflowYOptions = CSS.OverflowYProperty;

export type Display = ResponsiveValue<DisplayOptions>;
export type VerticalAlign = ResponsiveValue<VerticalAlignOptions>;
export type Overflow = ResponsiveValue<OverflowOptions>;
export type OverflowX = ResponsiveValue<OverflowXOptions>;
export type OverflowY = ResponsiveValue<OverflowYOptions>;

export interface OverflowProps {
  overflow?: Overflow;
  overflowX?: OverflowX;
  overflowY?: OverflowY;
}

// Styled-system grouping
export interface LayoutProps extends OverflowProps {
  width?: Width;
  minWidth?: MinWidth;
  maxWidth?: MaxWidth;
  height?: Height;
  minHeight?: MinHeight;
  maxHeight?: MaxHeight;
  size?: Size;
  display?: Display;
  verticalAlign?: VerticalAlign;
}
