import type {BoxProps} from '@twilio-paste/box';
import type {ValueOf} from '@twilio-paste/types';
import type {WidthOptions} from '@twilio-paste/style-props';

import type {
  TableAlignmentObject,
  TableLayoutObject,
  TableVariantObject,
  TableVerticalAlignmentObject,
} from './constants';

export type TableAlignmentOptions = ValueOf<typeof TableAlignmentObject>;
export type TableLayoutOptions = ValueOf<typeof TableLayoutObject>;
export type TableVariantOptions = ValueOf<typeof TableVariantObject>;
export type TableVerticalAlignmentOptions = ValueOf<typeof TableVerticalAlignmentObject>;

export interface TableContextProps {
  striped: boolean;
}

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  striped?: boolean;
  tableLayout?: TableLayoutOptions;
  variant?: TableVariantOptions;
  /**
   * Controls a tables ability to be shown on smaller viewports
   */
  scrollHorizontally?: boolean;
  /**
   * Controls table cell content line wrapping
   */
  noWrap?: boolean;
  /** Displays table and data grid actionable mode */
  isActionable?: boolean;
}

export interface THeadProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
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
  top?: BoxProps['top'];
}
export interface TBodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}
export interface TrProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  verticalAlign?: TableVerticalAlignmentOptions;
}
export interface ThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  textAlign?: TableAlignmentOptions;
  width?: WidthOptions;
}
export interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  textAlign?: TableAlignmentOptions;
}
export interface TFootProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}
