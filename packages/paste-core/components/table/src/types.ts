import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {WidthOptions, isWidthTokenProp} from '@twilio-paste/style-props';
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
  striped?: boolean;
  tableLayout?: TableLayoutOptions;
  variant?: TableVariantOptions;
}

export const TablePropTypes = {
  children: PropTypes.node.isRequired,
  striped: PropTypes.bool,
  tableLayout: PropTypes.oneOf(Object.values(TableLayoutObject)),
  variant: PropTypes.oneOf(Object.values(TableVariantObject)),
};

export interface THeadProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
}

export const THeadPropTypes = {
  children: PropTypes.node.isRequired,
};

export interface TBodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
}

export const TBodyPropTypes = {
  children: PropTypes.node.isRequired,
};

export interface TrProps extends React.TableHTMLAttributes<HTMLTableRowElement> {
  children: NonNullable<React.ReactNode>;
  verticalAlign?: TableVerticalAlignmentOptions;
}

export const TrPropTypes = {
  children: PropTypes.node.isRequired,
  verticalAlign: PropTypes.oneOf(Object.values(TableVerticalAlignmentObject)),
};

export interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: React.ReactNode;
  textAlign?: TableAlignmentOptions;
  width?: WidthOptions;
}

export const ThPropTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
  width: isWidthTokenProp,
};

export interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  textAlign?: TableAlignmentOptions;
}

export const TdPropTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
};

export interface TFootProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children: NonNullable<React.ReactNode>;
}

export const TFootPropTypes = {
  children: PropTypes.node.isRequired,
};
