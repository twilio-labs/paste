import type { ResponsiveValue, TLengthStyledSystem } from '@twilio-paste/styling-library';
import type { ThemeShape } from '@twilio-paste/theme';
// https://styled-system.com/api/#layout
import type { Properties } from 'csstype';

// Tokens
export type WidthOptions =
  | keyof ThemeShape['widths']
  | '100%'
  | '100vw'
  | 'auto'
  | Properties<TLengthStyledSystem>['width'];
export type MinWidthOptions =
  | keyof ThemeShape['minWidths']
  | '100%'
  | '100vw'
  | 'auto'
  | Properties<TLengthStyledSystem>['minWidth'];
export type MaxWidthOptions =
  | keyof ThemeShape['maxWidths']
  | '100%'
  | '100vw'
  | 'auto'
  | Properties<TLengthStyledSystem>['maxWidth'];
export type HeightOptions =
  | keyof ThemeShape['heights']
  | '100%'
  | '100vh'
  | 'auto'
  | Properties<TLengthStyledSystem>['height'];
export type MinHeightOptions =
  | keyof ThemeShape['minHeights']
  | '100%'
  | '100vh'
  | 'auto'
  | Properties<TLengthStyledSystem>['minHeight'];
export type MaxHeightOptions =
  | keyof ThemeShape['maxHeights']
  | '100%'
  | '100vh'
  | 'auto'
  | Properties<TLengthStyledSystem>['maxHeight'];
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
export type DisplayOptions = Properties['display'];
export type VerticalAlignOptions = Properties['verticalAlign'];
export type OverflowOptions = Properties['overflow'];
export type OverflowXOptions = Properties['overflowX'];
export type OverflowYOptions = Properties['overflowY'];

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
