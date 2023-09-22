import type { BoxStyleProps } from '@twilio-paste/box';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import merge from 'deepmerge';
import * as React from 'react';

import { BaseStyles, SizeStyles } from './styles';
import type { DirectButtonProps } from './types';

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextLinkDestructive',
  textAlign: 'left',
  transition: 'none',
  _hover: { color: 'colorTextLinkDestructiveStrongest', textDecoration: 'underline' },
  _active: { color: 'colorTextLinkDestructiveStrongest', textDecoration: 'underline' },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextLinkDestructive',
  textAlign: 'left',
  _hover: { color: 'colorTextLinkDestructiveStronger' },
  _active: { color: 'colorTextLinkDestructiveStronger' },
  _focus: { color: 'colorTextLinkDestructiveStronger' },
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: 'colorTextWeaker',
  textAlign: 'left',
  _hover: { color: 'colorTextLinkDestructiveWeak' },
  _active: { color: 'colorTextLinkDestructiveWeak' },
  _focus: { color: 'colorTextLinkDestructiveWeak' },
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveLinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
DestructiveLinkButton.defaultProps = {
  as: 'a' as keyof JSX.IntrinsicElements,
};
DestructiveLinkButton.displayName = 'DestructiveLinkButton';

export { DestructiveLinkButton };
