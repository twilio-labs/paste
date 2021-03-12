import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
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
  color: 'colorTextLinkDestructive',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderDestructive',
  _hover: {
    color: 'colorTextLinkDestructiveStronger',
    backgroundColor: 'colorBackgroundDestructiveWeakest',
    boxShadow: 'shadowBorderDestructiveStronger',
  },
  _focus: {
    color: 'colorTextLinkDestructiveStronger',
    backgroundColor: 'colorBackgroundDestructiveWeakest',
    boxShadow: 'shadowFocus',
  },
  _active: {
    color: 'colorTextLinkDestructiveStronger',
    backgroundColor: 'colorBackgroundDestructiveWeaker',
    boxShadow: 'shadowBorderDestructiveStronger',
  },
});

const baseLoadingStyles: BoxStyleProps = {
  color: 'colorTextLinkDestructiveStronger',
  backgroundColor: 'colorBackgroundDestructiveWeaker',
  boxShadow: 'shadowBorderDestructiveWeaker',
};

const loadingStyles: BoxStyleProps = merge({}, BaseStyles.loading, {
  ...baseLoadingStyles,
  _hover: baseLoadingStyles,
  _active: baseLoadingStyles,
  _focus: baseLoadingStyles,
});

const baseDisabledStyles: BoxStyleProps = {
  color: 'colorTextLinkDestructiveWeak',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderDestructiveWeak',
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

const DestructiveSecondaryButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
DestructiveSecondaryButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  DestructiveSecondaryButton.propTypes = DirectButtonPropTypes;
}
DestructiveSecondaryButton.displayName = 'DestructiveSecondaryButton';

export {DestructiveSecondaryButton};
