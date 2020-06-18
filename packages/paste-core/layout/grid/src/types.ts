import {ResponsiveValue} from '@twilio-paste/styling-library';
import {LayoutProps, PaddingProps, Space, SpaceProps} from '@twilio-paste/style-props';

export interface GridProps extends SpaceProps {
  as?: keyof JSX.IntrinsicElements;
  children: NonNullable<React.ReactNode>;
  gutter?: Space;
  vertical?: ResponsiveValue<boolean>;
}

export type ColumnMinWidth = ResponsiveValue<'100%' | '0'>;
export type ColumnWidthSpan = ResponsiveValue<string>;
export type ColumnOffsetOptions = number;
export type ColumnOffset = ResponsiveValue<ColumnOffsetOptions>;
export type ColumnSpanOptions = number;
export type ColumnSpan = ResponsiveValue<ColumnSpanOptions>;

export interface ColumnStyleProps extends Omit<LayoutProps, 'minWidth' | 'width'>, PaddingProps {
  marginLeft?: ResponsiveValue<string>;
  minWidth?: ColumnMinWidth;
  width?: ColumnWidthSpan;
}

export interface ColumnProps extends ColumnStyleProps {
  as?: keyof JSX.IntrinsicElements;
  count?: number;
  gutter?: Space;
  offset?: ColumnOffset;
  span?: ColumnSpan;
  vertical?: ResponsiveValue<boolean>;
}
