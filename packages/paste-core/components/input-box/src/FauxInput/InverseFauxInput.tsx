import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxShadow, BackgroundColor} from '@twilio-paste/style-props';
import type {FauxInputProps} from '../types';
import {FauxInputPropTypes} from '../types';

const InverseFauxInput = React.forwardRef<HTMLDivElement, FauxInputProps>(
  ({disabled, element, hasError, readOnly, children, type, variant}, ref) => {
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
        element={element}
        ref={ref}
        display="flex"
        width="100%"
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        borderRadius="borderRadius20"
        color={'colorTextInverse'}
        transition="box-shadow 100ms ease-in"
        cursor={disabled ? 'not-allowed' : 'text'}
        variant={variant}
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

InverseFauxInput.propTypes = FauxInputPropTypes;

export {InverseFauxInput};
