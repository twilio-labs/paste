import * as PropTypes from 'prop-types';
import type {AsTags, Variants} from './types';

export const PaginationPropTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export const PaginationItemsPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export const PaginationNumbersPropTypes = {
  children: PropTypes.node.isRequired,
  pageLabel: PropTypes.string,
  element: PropTypes.string,
};

export const PaginationLabelPropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export const PaginationNumberPropTypes = {
  as: PropTypes.oneOf(['a', 'button'] as AsTags[]),
  children: PropTypes.node.isRequired,
  isCurrent: PropTypes.bool,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  element: PropTypes.string,
};

export const PaginationArrowButtonPropTypes = {
  as: PropTypes.oneOf(['a', 'button'] as AsTags[]),
  disabled: PropTypes.bool,
  visibleLabel: PropTypes.string,
  element: PropTypes.string,
};

export const PaginationArrowPropTypes = {
  as: PropTypes.oneOf(['a', 'button'] as AsTags[]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  isHovered: PropTypes.bool,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['back', 'forward'] as Variants[]).isRequired,
  visibleLabel: PropTypes.string,
  element: PropTypes.string,
};

export const PaginationArrowIconWrapperPropTypes = {
  children: PropTypes.node.isRequired,
  isHovered: PropTypes.bool,
  element: PropTypes.string,
};

export const PaginationEllipsisPropTypes = {
  label: PropTypes.string.isRequired,
  element: PropTypes.string,
};
