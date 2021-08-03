import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import {getVariantStyles} from './utils';
import type {BadgeProps, BadgeVariants, BadgeChildren} from './types';
import {useFocusableVariants, useResizeChildIcons} from './hooks';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({variant, children, ...props}, ref) => {
  const resizedChildren = useResizeChildIcons(children);
  const {color, backgroundColor} = getVariantStyles(variant);

  const {styleProps, wrapper: Wrapper, spanProps} = useFocusableVariants(props);

  return (
    <Wrapper>
      <Box
        {...spanProps}
        as="span"
        backgroundColor={backgroundColor}
        border="unset"
        borderRadius="borderRadius30"
        color={color}
        columnGap="space10"
        display="inline-flex"
        fontSize="fontSize20"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight10"
        maxWidth="min-content"
        paddingX="space30"
        paddingY="space20"
        ref={ref}
        {...styleProps}
      >
        {resizedChildren}
      </Box>
    </Wrapper>
  );
});

Badge.displayName = 'Badge';

if (process.env.NODE_ENV === 'development') {
  Badge.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired as PropTypes.Validator<BadgeChildren>,
    variant: PropTypes.oneOf(['info', 'default', 'warning', 'error', 'success', 'new'] as BadgeVariants[]).isRequired,
    as: PropTypes.oneOf(['span', 'button', 'a']),
    href: PropTypes.string,
    onClick: PropTypes.func,
  };
}
