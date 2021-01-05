import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import {DirectButtonPropTypes} from './types';
import type {DirectButtonProps} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundDestructive',
  boxShadow: 'shadowBorderDestructive',
  _hover: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundDestructiveDarker',
    boxShadow: 'shadowBorderDestructiveDarker',
  },
  _focus: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundDestructiveDarker',
    boxShadow: 'shadowFocus',
  },
  _active: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundDestructiveDark',
    boxShadow: 'shadowBorderDestructiveDarker',
  },
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundDestructiveDarker',
  boxShadow: 'shadowBorderDestructiveDarker',
});

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundDestructiveLight',
  boxShadow: 'shadowBorderDestructiveLight',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
DestructiveButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  DestructiveButton.propTypes = DirectButtonPropTypes;
}
DestructiveButton.displayName = 'DestructiveButton';

export {DestructiveButton};
