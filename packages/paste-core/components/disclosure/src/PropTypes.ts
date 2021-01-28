import * as PropTypes from 'prop-types';
import type {DisclosureVariants} from './types';

export const DisclosurePropTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'contained'] as DisclosureVariants[]),
};

export const DisclosureContentPropTypes = {
  children: PropTypes.node.isRequired,
};
