import type {ResponsiveValue} from '@twilio-paste/styling-library';
import type {LayoutProps, MarginProps, PaddingProps} from '@twilio-paste/style-props';

export type DisplayOptions = 'flex' | 'inline-flex';
export type Display = ResponsiveValue<DisplayOptions>;
export type VerticalAlignOptions = 'top' | 'center' | 'bottom' | 'stretch';
export type VerticalAlign = ResponsiveValue<VerticalAlignOptions>;
export type HorizontalAlignOptions = 'left' | 'center' | 'right' | 'around' | 'between';
export type HorizontalAlign = ResponsiveValue<HorizontalAlignOptions>;
export type VerticalOptions = boolean;
export type Vertical = ResponsiveValue<VerticalOptions>;
export type GrowOptions = boolean | number;
export type Grow = ResponsiveValue<GrowOptions>;
export type ShrinkOptions = boolean | number;
export type Shrink = ResponsiveValue<ShrinkOptions>;
export type BasisOptions = string | number;
export type Basis = ResponsiveValue<BasisOptions>;
export type WrapOptions = boolean;
export type Wrap = ResponsiveValue<WrapOptions>;

export interface FlexProps extends Omit<LayoutProps, 'verticalAlign'>, MarginProps, PaddingProps {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  display?: Display;
  vertical?: Vertical;
  vAlignContent?: VerticalAlign;
  hAlignContent?: HorizontalAlign;
  grow?: Grow;
  shrink?: Shrink;
  basis?: Basis;
  wrap?: Wrap;
}
