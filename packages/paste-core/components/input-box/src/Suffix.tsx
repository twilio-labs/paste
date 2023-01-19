import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {BackgroundColor, BorderColor} from '@twilio-paste/style-props';

import type {Variants} from './types';

export interface SuffixProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  /*
   * Requiring element here instead of extending directly from BoxProps.
   * This ensures an element prop is always passed on these composite components.
   */
  element: BoxProps['element'];
  variant?: Variants;
}

const Suffix = React.forwardRef<HTMLDivElement, SuffixProps>(
  ({children, disabled, element = 'SUFFIX', variant}, ref) => {
    let backgroundColor = 'colorBackground' as BackgroundColor;
    let borderColor = 'colorBorderWeaker' as BorderColor;
    if (disabled && variant === 'inverse') {
      backgroundColor = 'none';
      borderColor = 'colorBorderInverseWeaker';
    } else if (variant === 'inverse') {
      backgroundColor = 'colorBackgroundInverseStrong';
      borderColor = 'colorBorderInverse';
    }

    if (children == null) return null;
    return (
      <Box
        alignItems="flex-start"
        backgroundColor={backgroundColor}
        borderBottomRightRadius="borderRadius20"
        borderLeftColor={borderColor}
        borderLeftStyle="solid"
        borderLeftWidth="borderWidth10"
        borderTopRightRadius="borderRadius20"
        display="flex"
        element={`${element}_SUFFIX`}
        lineHeight="lineHeight20"
        padding="space30"
        variant={variant}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

Suffix.displayName = 'Suffix';

Suffix.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string.isRequired,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};

export {Suffix};
