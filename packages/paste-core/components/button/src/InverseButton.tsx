import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import merge from 'deepmerge';

import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

/*
 * defensively resetting 'color' on pseudostyles from over zealous
 * legacy global styles "a {...}" when button is set as an anchor
 */
const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundInverse',
  boxShadow: 'shadowBorderInverseWeaker',
  _hover: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundInverseStrong',
    boxShadow: 'shadowBorderInverseStronger',
  },
  _focus: {
    boxShadow: 'shadowFocusInverse',
  },
  _active: {
    color: 'colorTextInverse',
    backgroundColor: 'colorBackgroundInverseStrong',
    boxShadow: 'shadowBorderInverseStrongest',
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextInverse',
  backgroundColor: 'colorBackgroundInverseStrong',
  boxShadow: 'shadowBorderInverseWeaker',
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: 'colorTextInverseWeakest',
  backgroundColor: 'colorBackgroundInverseStrong',
  boxShadow: 'shadowBorderInverseWeakest',
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
