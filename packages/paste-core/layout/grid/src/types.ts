import type {ResponsiveValue} from '@twilio-paste/styling-library';
import type {LayoutProps, FlexboxProps, PaddingProps, Space, Padding, SpaceProps} from '@twilio-paste/style-props';

export interface GridProps extends SpaceProps {
  as?: keyof JSX.IntrinsicElements;
  children: NonNullable<React.ReactNode>;
  equalColumnHeights?: boolean;
  gutter?: Space;
  vertical?: ResponsiveValue<boolean>;
}

export type ColumnMinWidth = ResponsiveValue<'100%' | '0'>;
export type ColumnWidthSpan = ResponsiveValue<string>;
export type ColumnOffsetOptions = number;
export type ColumnOffset = ResponsiveValue<ColumnOffsetOptions>;
export type ColumnSpanOptions = number;
export type ColumnSpan = ResponsiveValue<ColumnSpanOptions>;
export type ColumnPadding = {
  paddingTop?: Padding;
  paddingBottom?: Padding;
  paddingRight?: Padding;
  paddingLeft?: Padding;
};

export interface ColumnStyleProps extends Omit<LayoutProps, 'minWidth' | 'width'>, PaddingProps {
  alignContent?: FlexboxProps['alignContent'];
  marginLeft?: ResponsiveValue<string>;
  minWidth?: ColumnMinWidth;
  width?: ColumnWidthSpan;
}

export interface ColumnProps extends ColumnStyleProps {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  count?: number;
  gutter?: Space;
  offset?: ColumnOffset;
  ref?: any;
  span?: ColumnSpan;
  stretchColumnContent?: boolean;
  vertical?: ResponsiveValue<boolean>;
}
