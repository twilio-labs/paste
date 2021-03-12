import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextLink',
  transition: 'none',
  _hover: {color: 'colorTextLinkStrong', textDecoration: 'underline'},
  _focus: {color: 'colorTextLinkStrong', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkStronger', textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextLinkStronger',
});

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {
  color: 'colorTextLinkWeak',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const LinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
LinkButton.defaultProps = {
  as: 'a',
};
if (process.env.NODE_ENV === 'development') {
  LinkButton.propTypes = DirectButtonPropTypes;
}
LinkButton.displayName = 'LinkButton';

export {LinkButton};
