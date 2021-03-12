import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundPrimary',
  boxShadow: 'shadowBorderPrimary',
  _hover: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundPrimaryStronger',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
  _focus: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundPrimaryStronger',
    boxShadow: 'shadowFocus',
  },
  _active: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundPrimaryStrong',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundPrimaryStronger',
  boxShadow: 'shadowBorderPrimaryStronger',
});

const disabledStyles = merge({}, BaseStyles.disabled, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundPrimaryWeak',
  boxShadow: 'shadowBorderPrimaryWeak',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
PrimaryButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  PrimaryButton.propTypes = DirectButtonPropTypes;
}
PrimaryButton.displayName = 'PrimaryButton';

export {PrimaryButton};
