import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import merge from 'deepmerge';

import {SizeStyles, BaseStyles, DestructiveSecondaryToggleStyles} from './styles';
import type {DirectButtonProps} from './types';

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextDestructive',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderWeak',
  _hover: {
    color: 'colorTextDestructive',
    backgroundColor: 'colorBackgroundBody',
    boxShadow: 'shadowBorderDestructive',
  },
  _focus: {
    boxShadow: 'shadowFocusShadowBorder',
  },
  _active: {
    color: 'colorTextDestructive',
    backgroundColor: 'colorBackgroundDestructiveWeakest',
    boxShadow: 'shadowBorderDestructive',
  },
});

const baseLoadingStyles: BoxStyleProps = {
  color: 'colorTextDestructive',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderWeak',
};

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  ...baseLoadingStyles,
  _hover: baseLoadingStyles,
  _active: baseLoadingStyles,
  _focus: baseLoadingStyles,
});

const baseDisabledStyles: BoxStyleProps = {
  color: 'colorTextWeaker',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderWeaker',
};

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  ...baseDisabledStyles,
  _hover: baseDisabledStyles,
  _active: baseDisabledStyles,
  _focus: baseDisabledStyles,
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveSecondaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({size, buttonState, fullWidth, pressed, ...props}, ref) => {
    const toggleStyles = pressed === undefined ? {} : DestructiveSecondaryToggleStyles;

    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? '100%' : 'auto'}
        aria-pressed={pressed}
        {...safelySpreadBoxProps(props)}
        {...ButtonStyleMapping[buttonState]}
        {...toggleStyles}
        {...SizeStyles[size]}
      />
    );
  }
);
DestructiveSecondaryButton.defaultProps = {
  as: 'button',
};
DestructiveSecondaryButton.displayName = 'DestructiveSecondaryButton';

export {DestructiveSecondaryButton};
