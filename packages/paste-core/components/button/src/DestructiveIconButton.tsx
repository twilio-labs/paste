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
  color: 'colorTextLinkDestructive',
  _hover: {
    color: 'colorTextLinkDestructiveStrongest',
  },
  _active: {
    color: 'colorTextLinkDestructiveStrongest',
  },
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextLinkDestructive',
});

const disabledStyles = merge(BaseStyles.disabled, {
  color: 'colorTextWeaker',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const DestructiveIconButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
DestructiveIconButton.defaultProps = {
  as: 'button',
};
if (process.env.NODE_ENV === 'development') {
  DestructiveIconButton.propTypes = DirectButtonPropTypes;
}
DestructiveIconButton.displayName = 'DestructiveIconButton';

export {DestructiveIconButton};
