import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLHeadElement>, Pick<BoxProps, 'element'> {
  children: string;
  headingID: string;
}

export const AlertDialogHeader = React.forwardRef<HTMLHeadElement, AlertDialogHeaderProps>(
  ({children, element = 'ALERT_DIALOG_HEADER', headingID, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        padding="space90"
        flexShrink={0}
        border="none"
        element={`${element}_WRAPPER`}
        ref={ref}
      >
        <Heading as="h3" element={element} marginBottom="space0" variant="heading30" id={headingID}>
          {children}
        </Heading>
      </Box>
    );
  }
);

AlertDialogHeader.displayName = 'AlertDialogHeader';

AlertDialogHeader.propTypes = {
  children: PropTypes.string.isRequired,
  headingID: PropTypes.string.isRequired,
  element: PropTypes.string,
};
