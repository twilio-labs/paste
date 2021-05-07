import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {BoxShadow, BackgroundColor} from '@twilio-paste/style-props';
import {FauxInputProps, FauxInputPropTypes} from '../types';

const InverseFauxInput = React.forwardRef<HTMLDivElement, FauxInputProps>(
  ({disabled, hasError, readOnly, children, type}, ref) => {
    let backgroundColor = 'colorBackgroundInverse' as BackgroundColor;
    let boxShadow = 'shadowBorderInverse' as BoxShadow;
    let boxShadowHover = 'shadowBorderInverseStrongest' as BoxShadow;
    if (disabled && type !== 'hidden') {
      backgroundColor = 'colorBackgroundInverseStrong';
      boxShadow = 'shadowBorderInverseWeaker';
      boxShadowHover = 'shadowBorderInverseWeaker';
    } else if (readOnly && type !== 'hidden') {
      backgroundColor = 'colorBackgroundInverseStrong';
      boxShadowHover = 'shadowBorderInverse';
    } else if (hasError && type !== 'hidden') {
      boxShadow = 'shadowBorderErrorWeak';
    } else if (type === 'hidden') {
      backgroundColor = null;
      boxShadow = null;
      boxShadowHover = null;
    }

    return (
      <Box
        ref={ref}
        display="flex"
        width="100%"
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        borderRadius="borderRadius20"
        color={'colorTextInverse'}
        transition="box-shadow 100ms ease-in"
        cursor={disabled ? 'not-allowed' : 'text'}
        _hover={{
          boxShadow: boxShadowHover,
        }}
        _focusWithin={{
          backgroundColor: 'colorBackgroundInverse',
          boxShadow: 'shadowFocusInverse',
        }}
        _active={{
          boxShadow: boxShadowHover,
        }}
      >
        {children}
      </Box>
    );
  }
);

InverseFauxInput.displayName = 'InverseFauxInput';

if (process.env.NODE_ENV === 'development') {
  InverseFauxInput.propTypes = FauxInputPropTypes;
}

export {InverseFauxInput};
