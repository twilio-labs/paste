import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles, ToggleButtonStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('deepmerge');

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorText',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorder',
  _hover: {
    color: 'colorTextLinkStronger',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
  _focus: {
    color: 'colorTextLinkStronger',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowFocus',
  },
  _active: {
    color: 'colorTextLinkStronger',
    backgroundColor: 'colorBackgroundPrimaryWeaker',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
});

const baseLoadingStyles: BoxStyleProps = {
  color: 'colorTextLinkStronger',
  backgroundColor: 'colorBackgroundPrimaryWeaker',
  boxShadow: 'shadowBorderPrimaryWeaker',
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
  boxShadow: 'shadowBorderWeak',
};

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  ...baseDisabledStyles,
  _hover: baseDisabledStyles,
  _active: baseDisabledStyles,
  _focus: baseDisabledStyles,
  _pressed: {
    backgroundColor: 'colorBackgroundStrong',
    color: 'colorTextWeak',
    boxShadow: 'none',
  },
  _pressed_hover: {
    backgroundColor: 'colorBackgroundStrong',
    color: 'colorTextWeak',
    boxShadow: 'none',
  },
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const SecondaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({size, buttonState, fullWidth, pressed, ...props}, ref) => {
    const toggleStyles = pressed === undefined ? {} : ToggleButtonStyles;

    // Must spread size styles after button styles
    return (
      <Box
        ref={ref}
        width={fullWidth ? '100%' : 'auto'}
        aria-pressed={pressed}
        {...safelySpreadBoxProps(props)}
        {...toggleStyles}
        {...ButtonStyleMapping[buttonState]}
        {...SizeStyles[size]}
      />
    );
  }
);
SecondaryButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  SecondaryButton.propTypes = DirectButtonPropTypes;
}
SecondaryButton.displayName = 'SecondaryButton';

export {SecondaryButton};
