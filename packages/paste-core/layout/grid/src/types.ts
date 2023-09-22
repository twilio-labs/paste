import type { BoxProps } from '@twilio-paste/box';
import type { FlexboxProps, LayoutProps, Padding, PaddingProps, Space, SpaceProps } from '@twilio-paste/style-props';
import type { ResponsiveValue } from '@twilio-paste/styling-library';
import type { HTMLPasteProps } from '@twilio-paste/types';

/** element identifier from BoxProps for customization */
export interface GridProps extends HTMLPasteProps<'div'>, SpaceProps {
  as?: keyof JSX.IntrinsicElements;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'GRID'
   * @type {BoxProps['element']}
   * @memberof GridProps
   */
  element?: BoxProps['element'];
  children: NonNullable<React.ReactNode>;
  /**
   * Sets the height of columns in a row to be equal.
   *
   * @type {boolean}
   * @memberof GridProps
   */
  equalColumnHeights?: boolean;
  /**
   * Sets the spacing on both sides of a Column. Use a spacing token that represents half of the total space you need between 2 Columns.
   *
   * @type {Space}
   * @memberof GridProps
   */
  gutter?: Space;
  /**
   * Stacks the Columns
   *
   * @type {ResponsiveValue<boolean>}
   * @memberof GridProps
   */
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
  marginLeft?: Space;
  minWidth?: ColumnMinWidth;
  width?: ColumnWidthSpan;
}

/** element identifier from BoxProps for customization */
export interface ColumnProps extends HTMLPasteProps<'div'>, ColumnStyleProps {
  as?: keyof JSX.IntrinsicElements;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'COLUMN'
   * @type {BoxProps['element']}
   * @memberof ColumnProps
   */
  element?: BoxProps['element'];
  children?: React.ReactNode;
  count?: number;
  gutter?: Space;
  /**
   * Sets the left margin of a Column (how many columns a column is offset)
   *
   * @type {ColumnOffset}
   * @memberof ColumnProps
   */
  offset?: ColumnOffset;
  /**
   * Sets the width of a column by defining the number of columns that column can span
   *
   * @type {ColumnSpan}
   * @memberof ColumnProps
   */
  span?: ColumnSpan;
  stretchColumnContent?: boolean;
  vertical?: ResponsiveValue<boolean>;
}
