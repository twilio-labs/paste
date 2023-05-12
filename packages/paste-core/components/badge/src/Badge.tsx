import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

import type {BadgeProps} from './types';
import {BadgePropTypes} from './propTypes';
import {useResizeChildIcons} from './hooks';
import {badgeBaseStyles, badgeVariantStyles, badgeAnchorStyles, getBadgeButtonStyles} from './styles';

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({as, href, variant, size = 'default', children, element = 'BADGE', ...props}, ref) => {
    const resizedChildren = useResizeChildIcons(children);

    let badgeStyles = {...badgeBaseStyles, ...badgeVariantStyles[variant]};

    if (as === 'a') {
      badgeStyles = {...badgeStyles, ...badgeAnchorStyles};
    }
    if (as === 'button') {
      badgeStyles = {...badgeStyles, ...getBadgeButtonStyles(variant)};
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

Badge.propTypes = BadgePropTypes;
