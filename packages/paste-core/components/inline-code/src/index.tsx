import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface InlineCodeProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children: string;
  element?: BoxProps['element'];
}

const InlineCode = React.forwardRef<HTMLDivElement, InlineCodeProps>(
  ({children, element = 'INLINE_CODE', ...props}, ref) => {
    return (
      <Box
        as="code"
        element={element}
        {...safelySpreadBoxProps(props)}
        backgroundColor="colorBackground"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeaker"
        borderStyle="solid"
        borderRadius="borderRadius20"
        color="inherit"
        fontFamily="fontFamilyCode"
        fontSize="inherit"
        lineHeight="inherit"
        paddingY="space10"
        paddingX="space20"
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

InlineCode.displayName = 'InlineCode';

InlineCode.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
};

export {InlineCode};
