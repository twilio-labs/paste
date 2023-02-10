import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import merge from 'deepmerge';

import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextLinkDestructive',
  textAlign: 'left',
  transition: 'none',
  _hover: {color: 'colorTextLinkDestructiveStrongest', textDecoration: 'underline'},
  _active: {color: 'colorTextLinkDestructiveStrongest', textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextLinkDestructive',
  textAlign: 'left',
  _hover: {color: 'colorTextLinkDestructiveStronger'},
  _active: {color: 'colorTextLinkDestructiveStronger'},
  _focus: {color: 'colorTextLinkDestructiveStronger'},
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: 'colorTextWeaker',
  textAlign: 'left',
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
