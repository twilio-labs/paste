import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

import type {BadgeProps, BadgeVariants, BadgeSizes} from './types';
import {useResizeChildIcons} from './hooks';
import {badgeBaseStyles, badgeVariantStyles, getBadgeAnchorStyles, getBadgeButtonStyles} from './styles';

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({as, href, variant, size = 'default', children, element = 'BADGE', ...props}, ref) => {
    const resizedChildren = useResizeChildIcons(children);

    let badgeStyles = {...badgeBaseStyles, ...badgeVariantStyles[variant]};

    if (as === 'a') {
      badgeStyles = {...badgeBaseStyles, ...badgeStyles, ...getBadgeAnchorStyles()};
    }
    if (as === 'button') {
      badgeStyles = {...badgeBaseStyles, ...badgeStyles, ...getBadgeButtonStyles(variant)};
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...(href ? secureExternalLink(href) : {})}
        href={href}
        as={as}
        element={element}
        paddingX={size === 'small' ? 'space20' : 'space30'}
        paddingY={size === 'small' ? 'space10' : 'space20'}
        variant={variant}
        ref={ref}
        {...badgeStyles}
      >
        {variant === 'error_counter' ? <ErrorIcon element={`${element}_ICON`} decorative size="sizeIcon10" /> : null}
        {resizedChildren}
      </Box>
    );
  }
);

Badge.displayName = 'Badge';

Badge.propTypes = {
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

export * from './types';
export {badgeBaseStyles} from './styles';
export {useResizeChildIcons} from './hooks';
