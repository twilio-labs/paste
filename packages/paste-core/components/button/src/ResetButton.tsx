import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import {DirectButtonProps, DirectButtonPropTypes} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {fontSize: 'inherit', fontWeight: 'inherit'});

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {fontSize: 'inherit', fontWeight: 'inherit'});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const ResetButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
ResetButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  ResetButton.propTypes = DirectButtonPropTypes;
}
ResetButton.displayName = 'ResetButton';

export {ResetButton};
