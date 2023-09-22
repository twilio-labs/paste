import type { BoxStyleProps } from '@twilio-paste/box';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import merge from 'deepmerge';
import * as React from 'react';

import { BaseStyles, SizeStyles } from './styles';
import type { DirectButtonProps } from './types';

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextInverse',
  textAlign: 'left',
  transition: 'none',
  _hover: { color: 'colorTextInverseWeaker', textDecoration: 'underline' },
  _focus: { boxShadow: 'shadowFocusInverse' },
  _active: { color: 'colorTextInverseWeaker', textDecoration: 'underline' },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextInverse',
  textAlign: 'left',
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: 'colorTextInverseWeakest',
  textAlign: 'left',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const InverseLinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({ size, buttonState, fullWidth, ...props }, ref) => {
    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? '100%' : 'auto'}
        {...safelySpreadBoxProps(props)}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  },
);
InverseLinkButton.defaultProps = {
  as: 'a',
};

InverseLinkButton.displayName = 'InverseLinkButton';

export { InverseLinkButton };
