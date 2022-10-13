import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('deepmerge');

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextLink',
  _hover: {
    color: 'colorTextLinkStronger',
  },
  _focus: {
    color: 'colorTextLinkStronger',
  },
  _active: {
    color: 'colorTextLinkStrongest',
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextLinkStronger',
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: 'colorTextLinkWeak',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const PrimaryIconButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
PrimaryIconButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  PrimaryIconButton.propTypes = DirectButtonPropTypes;
}
PrimaryIconButton.displayName = 'PrimaryIconButton';

export {PrimaryIconButton};
