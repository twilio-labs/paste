import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import {isMaxWidthTokenProp} from '@twilio-paste/style-props';

export interface FormProps extends Omit<React.ComponentPropsWithRef<'form'>, 'children'> {
  element?: BoxProps['element'];
  children: React.ReactNode;
  maxWidth?: BoxStyleProps['maxWidth'];
}

export const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({element = 'FORM', maxWidth, children, ...props}, ref) => (
    <Box
      as="form"
      ref={ref}
      element={element}
      maxWidth={maxWidth}
      display="flex"
      flexDirection="column"
      rowGap="space80"
      {...safelySpreadBoxProps(props)}
    >
      {children}
    </Box>
  )
);

Form.displayName = 'Form';

Form.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  maxWidth: isMaxWidthTokenProp,
};
