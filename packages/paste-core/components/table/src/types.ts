import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import type {ValueOf} from '@twilio-paste/types';
import type {WidthOptions} from '@twilio-paste/style-props';
import {isWidthTokenProp} from '@twilio-paste/style-props';
import {TableAlignmentObject, TableLayoutObject, TableVariantObject, TableVerticalAlignmentObject} from './constants';

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

export const TablePropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  striped: PropTypes.bool,
  tableLayout: PropTypes.oneOf(Object.values(TableLayoutObject)),
  variant: PropTypes.oneOf(Object.values(TableVariantObject)),
};

export interface THeadProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}

export const THeadPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export interface TBodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}

export const TBodyPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export interface TrProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  verticalAlign?: TableVerticalAlignmentOptions;
}

export const TrPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  verticalAlign: PropTypes.oneOf(Object.values(TableVerticalAlignmentObject)),
};

export interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  textAlign?: TableAlignmentOptions;
  width?: WidthOptions;
}

export const ThPropTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
  width: isWidthTokenProp,
};

export interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  textAlign?: TableAlignmentOptions;
}

export const TdPropTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
};

export interface TFootProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
}

export const TFootPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
