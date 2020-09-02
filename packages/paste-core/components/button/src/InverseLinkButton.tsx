import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import {DirectButtonProps, DirectButtonPropTypes} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextInverse',
  transition: 'none',
  _hover: {color: 'colorTextInverseWeaker', textDecoration: 'underline'},
  _focus: {color: 'colorTextInverseWeaker', boxShadow: 'shadowFocusInverse', textDecoration: 'underline'},
  _active: {textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextInverse',
});

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {
  color: 'colorTextInverseWeaker',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const InverseLinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
InverseLinkButton.defaultProps = {
  as: 'a',
};
if (process.env.NODE_ENV === 'development') {
  InverseLinkButton.propTypes = DirectButtonPropTypes;
}
InverseLinkButton.displayName = 'InverseLinkButton';

export {InverseLinkButton};
