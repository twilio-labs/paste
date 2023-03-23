import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

import type {BadgeProps, BadgeVariants} from './types';
import {useResizeChildIcons} from './hooks';
import {badgeVariantStyles, getBadgeAnchorStyles, getBadgeButtonStyles} from './styles';

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({as, href, variant, children, element = 'BADGE', ...props}, ref) => {
    const resizedChildren = useResizeChildIcons(children);

    let badgeStyles = badgeVariantStyles[variant];

    if (as === 'a') {
      badgeStyles = {...badgeStyles, ...getBadgeAnchorStyles()};
    }
    if (as === 'button') {
      badgeStyles = {...badgeStyles, ...getBadgeButtonStyles(variant)};
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...(href ? secureExternalLink(href) : {})}
        href={href}
        alignItems="center"
        as={as}
        border="unset"
        borderRadius="borderRadius20"
        columnGap="space20"
        display="flex"
        element={element}
        fontSize="fontSize20"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight10"
        maxWidth="max-content"
        paddingX="space30"
        paddingY="space20"
        // these next props are from button-reset styles
        appearance="none"
        background="none"
        outline="none"
        fontFamily="inherit"
        position="relative"
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
  as: PropTypes.oneOf(['span', 'button', 'a']).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export * from './types';
