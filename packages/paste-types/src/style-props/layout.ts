// https://styled-system.com/api/#layout
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type Width = ResponsiveValue<keyof ThemeShape['widths']>;
export type MinWidth = ResponsiveValue<keyof ThemeShape['minWidths']>;
export type MaxWidth = ResponsiveValue<keyof ThemeShape['maxWidths']>;
export type Height = ResponsiveValue<keyof ThemeShape['heights']>;
export type MinHeight = ResponsiveValue<keyof ThemeShape['minHeights']>;
export type MaxHeight = ResponsiveValue<keyof ThemeShape['maxHeights']>;
export type Size = Width | Height;

// CSS native
export type Display = ResponsiveValue<CSS.DisplayProperty>;
export type VerticalAlign = ResponsiveValue<CSS.VerticalAlignProperty<TLengthStyledSystem>>;
export type Overflow = ResponsiveValue<CSS.OverflowProperty>;
export type OverflowX = ResponsiveValue<CSS.OverflowXProperty>;
export type OverflowY = ResponsiveValue<CSS.OverflowYProperty>;

// Styled-system grouping
export interface LayoutProps {
  width?: Width;
  minWidth?: MinWidth;
  maxWidth?: MaxWidth;
  height?: Height;
  minHeight?: MinHeight;
  maxHeight?: MaxHeight;
  size?: Size;
  display?: Display;
  verticalAlign?: VerticalAlign;
  overflow?: Overflow;
  overflowX?: OverflowX;
  overflowY?: OverflowY;
}
