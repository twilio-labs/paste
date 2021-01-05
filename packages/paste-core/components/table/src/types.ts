import * as PropTypes from 'prop-types';
import type {ValueOf} from '@twilio-paste/types';
import type {WidthOptions} from '@twilio-paste/style-props';
import {isWidthTokenProp} from '@twilio-paste/style-props';
import {TableAlignmentObject, TableLayoutObject, TableVerticalAlignmentObject} from './constants';

export type TableAlignmentOptions = ValueOf<typeof TableAlignmentObject>;
export type TableLayoutOptions = ValueOf<typeof TableLayoutObject>;
export type TableVerticalAlignmentOptions = ValueOf<typeof TableVerticalAlignmentObject>;

export interface TableProps {
  children: NonNullable<React.ReactNode>;
  tableLayout?: TableLayoutOptions;
}

export const TablePropTypes = {
  children: PropTypes.node.isRequired,
  tableLayout: PropTypes.oneOf(Object.values(TableLayoutObject)),
};

export interface THeadProps {
  children: NonNullable<React.ReactNode>;
}

export const THeadPropTypes = {
  children: PropTypes.node.isRequired,
};

export interface TBodyProps {
  children: NonNullable<React.ReactNode>;
}

export const TBodyPropTypes = {
  children: PropTypes.node.isRequired,
};

export interface TrProps {
  children: NonNullable<React.ReactNode>;
  verticalAlign?: TableVerticalAlignmentOptions;
}

export const TrPropTypes = {
  children: PropTypes.node.isRequired,
  verticalAlign: PropTypes.oneOf(Object.values(TableVerticalAlignmentObject)),
};

export interface ThProps {
  children: NonNullable<React.ReactNode>;
  textAlign?: TableAlignmentOptions;
  width?: WidthOptions;
}

export const ThPropTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
  width: isWidthTokenProp,
};

export interface TdProps {
  children: NonNullable<React.ReactNode>;
  textAlign?: TableAlignmentOptions;
}

export const TdPropTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
};

export interface TFootProps {
  children: NonNullable<React.ReactNode>;
}

export const TFootPropTypes = {
  children: PropTypes.node.isRequired,
};
