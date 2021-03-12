import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextLinkDestructive',
  transition: 'none',
  _hover: {color: 'colorTextLinkDestructiveStrong', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkDestructiveStronger', textDecoration: 'underline'},
  _focus: {color: 'colorTextLinkDestructiveStrong', textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextLinkDestructiveStronger',
  _hover: {color: 'colorTextLinkDestructiveStronger'},
  _active: {color: 'colorTextLinkDestructiveStronger'},
  _focus: {color: 'colorTextLinkDestructiveStronger'},
});

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {
  color: 'colorTextLinkDestructiveWeak',
  _hover: {color: 'colorTextLinkDestructiveWeak'},
  _active: {color: 'colorTextLinkDestructiveWeak'},
  _focus: {color: 'colorTextLinkDestructiveWeak'},
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveLinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
DestructiveLinkButton.defaultProps = {
  as: 'a' as keyof JSX.IntrinsicElements,
};
if (process.env.NODE_ENV === 'development') {
  DestructiveLinkButton.propTypes = DirectButtonPropTypes;
}
DestructiveLinkButton.displayName = 'DestructiveLinkButton';

export {DestructiveLinkButton};
