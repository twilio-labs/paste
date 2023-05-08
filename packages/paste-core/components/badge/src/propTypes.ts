import PropTypes from 'prop-types';

import {BadgeVariants} from './constants';
import type {BadgeSizes} from './types';

export const BadgePropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(BadgeVariants)).isRequired,
  size: PropTypes.oneOf(['default', 'small'] as BadgeSizes[]),
  as: PropTypes.oneOf(['span', 'button', 'a']).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
