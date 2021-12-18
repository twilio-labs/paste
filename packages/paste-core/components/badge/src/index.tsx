import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import type {BadgeProps, BadgeVariants, BadgeChildren} from './types';
import {useResizeChildIcons} from './hooks';
import {badgeFocusableStyles, badgeVariantStyles} from './styles';
import {getBadgeSpanProps, isFocusableElement} from './utils';
import {BadgeWrapper} from './BadgeWrapper';

export type {BadgeProps};

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({variant, children, element = 'BADGE', ...props}, ref) => {
    const resizedChildren = useResizeChildIcons(children);

    const variantStyles = badgeVariantStyles[variant];
    const spanProps = getBadgeSpanProps(props);
    const isFocusable = isFocusableElement(props);

    return (
      // @ts-expect-error we need to explore polymorphic types for this ref to work https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
      <BadgeWrapper {...props} ref={isFocusable ? ref : null}>
        <Box
          {...spanProps}
          alignItems="center"
          as="span"
          border="unset"
          borderRadius="borderRadius30"
          columnGap="space10"
          display="flex"
          element={element}
          fontSize="fontSize20"
          fontWeight="fontWeightSemibold"
          lineHeight="lineHeight10"
          maxWidth="max-content"
          paddingX="space30"
          paddingY="space20"
          variant={variant}
          ref={!isFocusable ? ref : null}
          {...variantStyles}
          {...(isFocusable && {...badgeFocusableStyles})}
        >
          {resizedChildren}
        </Box>
      </BadgeWrapper>
    );
  }
);

Badge.displayName = 'Badge';

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired as PropTypes.Validator<BadgeChildren>,
  element: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'default', 'warning', 'error', 'success', 'new'] as BadgeVariants[]).isRequired,
  // @ts-expect-error type unions are a little too much for prop types inferred types to handle
  as: PropTypes.oneOf(['span', 'button', 'a']).isRequired,
  href: PropTypes.string,
  // @ts-expect-error again type unions. This is required when a button but not when a span and banned when a link.
  onClick: PropTypes.func,
};
