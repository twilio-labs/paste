import * as PropTypes from 'prop-types';
import {isWidthTokenProp} from '@twilio-paste/style-props';

import {TableAlignmentObject, TableLayoutObject, TableVariantObject, TableVerticalAlignmentObject} from './constants';

export const TablePropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  striped: PropTypes.bool,
  tableLayout: PropTypes.oneOf(Object.values(TableLayoutObject)),
  variant: PropTypes.oneOf(Object.values(TableVariantObject)),
};

export const THeadPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export const TBodyPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export const TrPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  verticalAlign: PropTypes.oneOf(Object.values(TableVerticalAlignmentObject)),
};

export const ThPropTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
  width: isWidthTokenProp,
};

export const TdPropTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
};

export const TFootPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
