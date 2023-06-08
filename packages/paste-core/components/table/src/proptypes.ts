import PropTypes from 'prop-types';
import {isWidthTokenProp} from '@twilio-paste/style-props';

import {TableAlignmentObject, TableLayoutObject, TableVariantObject, TableVerticalAlignmentObject} from './constants';

export const TablePropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  isActionable: PropTypes.bool,
  scrollHorizontally: PropTypes.bool,
  noWrap: PropTypes.bool,
  striped: PropTypes.bool,
  tableLayout: PropTypes.oneOf(Object.values(TableLayoutObject)),
  variant: PropTypes.oneOf(Object.values(TableVariantObject)),
};

export const THeadPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
export const TBodyPropTypes = THeadPropTypes;
export const TFootPropTypes = THeadPropTypes;

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
  colSpan: PropTypes.number,
};

export const TdPropTypes = {
  colSpan: PropTypes.number,
  children: PropTypes.node,
  element: PropTypes.string,
  textAlign: PropTypes.oneOf(Object.values(TableAlignmentObject)),
};
