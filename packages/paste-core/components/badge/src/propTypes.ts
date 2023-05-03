import PropTypes from 'prop-types';

import type {BadgeSizes, BadgeVariants} from './types';

export const BadgePropTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  variant: PropTypes.oneOf([
    'neutral',
    'warning',
    'error',
    'success',
    'new',
    'subaccount',
    'decorative10',
    'decorative20',
    'decorative30',
    'decorative40',
    'neutral_counter',
    'error_counter',
    // the following variants are outdated but still supported to prevent breaking changes
    'default',
    'info',
  ] as BadgeVariants[]).isRequired,
  size: PropTypes.oneOf(['default', 'small'] as BadgeSizes[]),
  as: PropTypes.oneOf(['span', 'button', 'a']).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
