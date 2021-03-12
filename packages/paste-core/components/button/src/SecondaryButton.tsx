import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextLink',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderPrimary',
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

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  ...baseLoadingStyles,
  _hover: baseLoadingStyles,
  _active: baseLoadingStyles,
  _focus: baseLoadingStyles,
});

const baseDisabledStyles: BoxStyleProps = {
  color: 'colorTextLinkWeak',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderPrimaryWeak',
};

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {
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

const SecondaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
  ({size, buttonState, fullWidth, ...props}, ref) => {
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
