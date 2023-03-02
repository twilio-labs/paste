import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import merge from 'deepmerge';

import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextPrimary',
  textAlign: 'left',
  transition: 'none',
  _hover: {color: 'colorTextPrimaryStrongest', textDecoration: 'underline'},
  _active: {color: 'colorTextPrimaryStrongest', textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextPrimary',
  textAlign: 'left',
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: 'colorTextWeaker',
  textAlign: 'left',
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
