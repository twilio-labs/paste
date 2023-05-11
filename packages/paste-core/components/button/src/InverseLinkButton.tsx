import * as React from 'react';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import merge from 'deepmerge';

import {SizeStyles, BaseStyles} from './styles';
import type {DirectButtonProps} from './types';
import {DirectButtonPropTypes} from './proptypes';

const defaultStyles: BoxStyleProps = merge(BaseStyles.default, {
  color: 'colorTextInverse',
  textAlign: 'left',
  transition: 'none',
  _hover: {color: 'colorTextInverseWeaker', textDecoration: 'underline'},
  _focus: {boxShadow: 'shadowFocusInverse'},
  _active: {color: 'colorTextInverseWeaker', textDecoration: 'underline'},
});

const loadingStyles: BoxStyleProps = merge(BaseStyles.loading, {
  color: 'colorTextInverse',
  textAlign: 'left',
});

const disabledStyles: BoxStyleProps = merge(BaseStyles.disabled, {
  color: 'colorTextInverseWeakest',
  textAlign: 'left',
});

const ButtonStyleMapping = {
  default: defaultStyles,
  loading: loadingStyles,
  disabled: disabledStyles,
};

const InverseLinkButton = React.forwardRef<HTMLButtonElement, DirectButtonProps>(
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
InverseLinkButton.defaultProps = {
  as: 'a',
};
if (process.env.NODE_ENV === 'development') {
  InverseLinkButton.propTypes = DirectButtonPropTypes;
}
InverseLinkButton.displayName = 'InverseLinkButton';

export {InverseLinkButton};
