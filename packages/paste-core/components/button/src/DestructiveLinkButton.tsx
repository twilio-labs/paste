import * as React from 'react';
import {Box, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import {DirectButtonProps, DirectButtonPropTypes} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('lodash.merge');

const defaultStyles: BoxStyleProps = merge({}, BaseStyles.default, {
  color: 'colorTextLinkDestructive',
  transition: 'none',
  _hover: {color: 'colorTextLinkDestructiveDark', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkDestructiveDarker', textDecoration: 'underline'},
  _focus: {color: 'colorTextLinkDestructiveDark', textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  color: 'colorTextLinkDestructiveDarker',
  _hover: {color: 'colorTextLinkDestructiveDarker'},
  _active: {color: 'colorTextLinkDestructiveDarker'},
  _focus: {color: 'colorTextLinkDestructiveDarker'},
});

const disabledStyles: BoxStyleProps = merge({}, BaseStyles.disabled, {
  color: 'colorTextLinkDestructiveLight',
  _hover: {color: 'colorTextLinkDestructiveLight'},
  _active: {color: 'colorTextLinkDestructiveLight'},
  _focus: {color: 'colorTextLinkDestructiveLight'},
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
