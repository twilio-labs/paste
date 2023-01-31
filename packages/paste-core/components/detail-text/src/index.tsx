import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface DetailTextProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  as?: BoxProps['as'];
  marginTop?: 'space0' | 'space30';
}

export const DetailText = React.forwardRef<HTMLDivElement, DetailTextProps>(
  ({element = 'DETAIL_TEXT', as = 'div', children, marginTop = 'space30', ...props}, ref) => {
    return (
      <Box
        as={as}
        ref={ref}
        element={element}
        {...safelySpreadBoxProps(props)}
        marginTop={marginTop}
        color="colorTextWeak"
        fontSize="fontSize20"
        lineHeight="lineHeight20"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  }
);

DetailText.displayName = 'DetailText';

DetailText.propTypes = {
  as: PropTypes.string as any,
  children: PropTypes.node,
  element: PropTypes.string,
  marginTop: PropTypes.oneOf(['space0', 'space30']),
};
