import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('deepmerge');

/*
 * defensively resetting interaction color from over zealous legacy
 * global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextIcon',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorder',
  _hover: {
    color: 'colorText',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
  _focus: {
    color: 'colorTextLinkStronger',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowFocus',
  },
  _active: {
    color: 'colorTextLinkStronger',
    backgroundColor: 'colorBackgroundPrimaryWeaker',
    boxShadow: 'shadowBorderPrimaryStronger',
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {fontSize: 'inherit', fontWeight: 'inherit'});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {fontSize: 'inherit', fontWeight: 'inherit'});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const IconOnlyButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
IconOnlyButton.defaultProps = {
  as: 'button',
};
IconOnlyButton.propTypes = DirectButtonPropTypes;

IconOnlyButton.displayName = 'IconOnlyButton';

export {IconOnlyButton};
