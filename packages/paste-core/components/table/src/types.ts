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
}

export interface THeadProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
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
export interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
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
