import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
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
  fontWeight: 'fontWeightSemibold',
  backgroundColor: 'colorBackgroundInverse',
  boxShadow: 'shadowBorderInverse',
  _hover: {
    color: 'colorTextInverse',
    fontWeight: 'fontWeightSemibold',
    backgroundColor: 'colorBackgroundInverseStrong',
    boxShadow: 'shadowBorderInverseLighter',
  },
  _focus: {
    color: 'colorTextInverse',
    fontWeight: 'fontWeightSemibold',
    backgroundColor: 'colorBackgroundInverseStrong',
    boxShadow: 'shadowFocusInverse',
  },
  _active: {
    color: 'colorTextInverse',
    fontWeight: 'fontWeightSemibold',
    backgroundColor: 'colorBackgroundInverseStrong',
    boxShadow: 'shadowBorderInverseStrongest',
  },
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextInverse',
  fontWeight: 'fontWeightSemibold',
  backgroundColor: 'colorBackgroundInverseStrong',
  boxShadow: 'shadowBorderInverseWeaker',
});

const disabledStyles = merge({}, BaseStyles.disabled, {
  color: 'colorTextInverseWeaker',
  fontWeight: 'fontWeightSemibold',
  backgroundColor: 'colorBackgroundInverse',
  boxShadow: 'shadowBorderInverseWeaker',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const InverseButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
InverseButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  InverseButton.propTypes = DirectButtonPropTypes;
}
InverseButton.displayName = 'InverseButton';

export {InverseButton};
