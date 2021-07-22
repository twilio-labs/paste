import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import {getVariantStyles} from './utils';
import type {BadgeProps, BadgeVariants} from './types';
import {useFocusableVariants, useWrapChildren} from './hooks';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({variant, children, ...props}, ref) => {
  const wrappedChildren = useWrapChildren(children);
  const {color, backgroundColor} = getVariantStyles(variant);

  const {styleProps, wrapper: Wrapper, spanProps} = useFocusableVariants(props);

  return (
    <Wrapper>
      <Box
        {...spanProps}
        ref={ref}
        as="span"
        border="unset"
        backgroundColor={backgroundColor}
        borderRadius="borderRadius30"
        color={color}
        display="inline-flex"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight10"
        paddingX="space30"
        paddingY="space20"
        fontSize="fontSize20"
        {...styleProps}
      >
        {wrappedChildren}
      </Box>
    </Wrapper>
  );
});

Badge.displayName = 'Badge';

if (process.env.NODE_ENV === 'development') {
  Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['info', 'default', 'warning', 'error', 'success', 'new'] as BadgeVariants[]).isRequired,
    as: PropTypes.oneOf(['span', 'button', 'a']),
    href: PropTypes.string,
    onClick: PropTypes.func,
  };
}
