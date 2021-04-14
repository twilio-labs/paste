import * as PropTypes from 'prop-types';
import type {AsTags, Variants} from './types';

export const PaginationPropTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const PaginationItemsPropTypes = {
  children: PropTypes.node.isRequired,
};

export const PaginationNumbersPropTypes = {
  children: PropTypes.node.isRequired,
  pageLabel: PropTypes.string,
};

export const PaginationLabelPropTypes = {
  children: PropTypes.node.isRequired,
};

export const PaginationNumberPropTypes = {
  as: PropTypes.oneOf(['a', 'button'] as AsTags[]),
  children: PropTypes.node.isRequired,
  isCurrent: PropTypes.bool,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export const PaginationArrowButtonPropTypes = {
  as: PropTypes.oneOf(['a', 'button'] as AsTags[]),
  visibleLabel: PropTypes.string,
};

export const PaginationArrowPropTypes = {
  as: PropTypes.oneOf(['a', 'button'] as AsTags[]),
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['back', 'forward'] as Variants[]).isRequired,
  visibleLabel: PropTypes.string,
};

export const PaginationEllipsisPropTypes = {
  label: PropTypes.string.isRequired,
};
