import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {BackgroundColor, BorderColor} from '@twilio-paste/style-props';
import {Variants} from './types';

export interface PrefixProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  variant?: Variants;
}

const Prefix = React.forwardRef<HTMLDivElement, PrefixProps>(({children, disabled, variant}, ref) => {
  let backgroundColor = 'colorBackground' as BackgroundColor;
  let borderColor = 'colorBorderWeaker' as BorderColor;
  if (disabled && variant === 'inverse') {
    backgroundColor = 'none';
    borderColor = 'colorBorderErrorWeaker';
  } else if (variant === 'inverse') {
    backgroundColor = 'colorBackgroundInverseStrong';
    borderColor = 'colorBorderInverse';
  }

  if (children == null) return null;
  return (
    <Box
      alignItems="flex-start"
      backgroundColor={backgroundColor}
      borderBottomLeftRadius="borderRadius20"
      borderRightColor={borderColor}
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderTopLeftRadius="borderRadius20"
      display="flex"
      lineHeight="lineHeight20"
      padding="space30"
      ref={ref}
    >
      {children}
    </Box>
  );
});

Prefix.displayName = 'Prefix';

if (process.env.NODE_ENV === 'development') {
  Prefix.propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant: PropTypes.oneOf(['default', 'inverse']) as any,
  };
}

export {Prefix};
