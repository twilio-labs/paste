import type { BoxProps } from "@twilio-paste/box";
import type { WhiteSpaceOptions, WidthOptions } from "@twilio-paste/style-props";
import type { HTMLPasteProps, ValueOf } from "@twilio-paste/types";

import type {
  TableAlignmentObject,
  TableLayoutObject,
  TableVariantObject,
  TableVerticalAlignmentObject,
} from "./constants";

export type TableAlignmentOptions = ValueOf<typeof TableAlignmentObject>;
export type TableLayoutOptions = ValueOf<typeof TableLayoutObject>;
export type TableVariantOptions = ValueOf<typeof TableVariantObject>;
export type TableVerticalAlignmentOptions = ValueOf<typeof TableVerticalAlignmentObject>;

export interface TableContextProps {
  striped: boolean;
}

export interface TableProps extends HTMLPasteProps<"table"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name ('TABLE') to apply unique styles with the Customization Provider.
   *
   * @default 'TABLE'
   * @type {BoxProps['element']}
   * @memberof TableProps
   */
  element?: BoxProps["element"];
  /**
   * Sets a background color for even rows within the table.
   *
   * @default 'false'
   * @type {boolean}
   * @memberof TableProps
   */
  striped?: boolean;
  /**
   * Sets the `table-layout` style of the Table.
   *
   * @default 'auto'
   * @type {TableLayoutOptions}
   * @memberof TableProps
   */
  tableLayout?: TableLayoutOptions;
  /**
   * Sets the `border` style of the Table.
   *
   * @default 'default'
   * @type {TableVariantOptions}
   * @memberof TableProps
   */
  variant?: TableVariantOptions;
  /**
   * Sets the table to scroll horizontally on small screens.
   *
   * @default 'false'
   */
  scrollHorizontally?: boolean;
  /**
   * Sets the table cells to not line wrap.
   *
   * @default 'false'
   */
  noWrap?: boolean;
  /**
   * Sets the table to visually display the actionable state of an interactive table. Mainly used for Data Grid.
   *
   * @type {boolean}
   * @memberof TableProps
   */
  isActionable?: boolean;
}

export interface THeadProps extends HTMLPasteProps<"thead"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name ('THEAD') to apply unique styles with the Customization Provider.
   *
   * @default 'THEAD'
   * @type {BoxProps['element']}
   * @memberof THeadProps
   */
  element?: BoxProps["element"];
  /**
   * Makes the table head stick to the top of the window as the user scrolls a long table
   *
   * @type {boolean}
   * @memberof THeadProps
   */
  stickyHeader?: boolean;
  /**
   * Allows manual control of the top offset, used in conjunction with `stickyHeader`
   *
   * @type {BoxProps['top']}
   * @memberof THeadProps
   */
  top?: BoxProps["top"];
}
export interface TBodyProps extends HTMLPasteProps<"tbody"> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps["element"];
}
export interface TrProps extends HTMLPasteProps<"tr"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name ('TR') to apply unique styles with the Customization Provider.
   *
   * @default 'TR'
   * @type {BoxProps['element']}
   * @memberof TrProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the vertical alignment of the content within the Table row.
   *
   * @default 'middle'
   * @type {TableVerticalAlignmentOptions}
   * @memberof TrProps
   */
  verticalAlign?: TableVerticalAlignmentOptions;
}
export interface ThProps extends HTMLPasteProps<"th"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name ('TH') to apply unique styles with the Customization Provider.
   *
   * @default 'TH'
   * @type {BoxProps['element']}
   * @memberof ThProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the text alignment of the content within the Table cell.
   *
   * @default 'left'
   * @type {TableAlignmentOptions}
   * @memberof ThProps
   */
  textAlign?: TableAlignmentOptions;
  /**
   * Sets how white space inside the Table cell is handled.
   *
   * @default 'normal'
   * @type {WhiteSpaceOptions}
   * @memberof ThProps
   */
  whiteSpace?: WhiteSpaceOptions;
  /**
   * Sets the width of a Table cell.
   *
   * @type {WidthOptions}
   * @memberof ThProps
   */
  width?: WidthOptions;
}
export interface TdProps extends HTMLPasteProps<"td"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name ('TD') to apply unique styles with the Customization Provider.
   *
   * @default 'TD'
   * @type {BoxProps['element']}
   * @memberof TdProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the text alignment of the content within the Table cell.
   *
   * @default 'left'
   * @type {TableAlignmentOptions}
   * @memberof TdProps
   */
  textAlign?: TableAlignmentOptions;
  /**
   * Sets how white space inside the Table cell is handled.
   *
   * @default 'normal'
   * @type {WhiteSpaceOptions}
   * @memberof TdProps
   */
  whiteSpace?: WhiteSpaceOptions;
}
export interface TFootProps extends HTMLPasteProps<"tfoot"> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps["element"];
}
