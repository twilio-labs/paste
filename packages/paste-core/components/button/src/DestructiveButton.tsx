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
  backgroundColor: 'colorBackgroundDestructive',
  boxShadow: 'shadowBorderDestructive',
  _hover: {
    color: 'colorTextLinkDestructive',
    backgroundColor: 'colorBackgroundBody',
    boxShadow: 'shadowBorderDestructive',
  },
  _focus: {
    boxShadow: 'shadowFocus',
  },
  _active: {
    color: 'colorTextLinkDestructive',
    backgroundColor: 'colorBackgroundDestructiveWeakest',
    boxShadow: 'shadowBorderDestructive',
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextLinkDestructive',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: 'shadowBorderWeak',
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: 'colorTextWeakest',
  backgroundColor: 'colorBackgroundStrong',
  boxShadow: 'shadowBorderWeaker',
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
