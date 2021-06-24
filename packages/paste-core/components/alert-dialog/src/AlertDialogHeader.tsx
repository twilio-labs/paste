import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {modalHeaderStyles} from '@twilio-paste/modal';

export interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: string;
  headingID: string;
}

export const AlertDialogHeader = React.forwardRef<HTMLHeadElement, AlertDialogHeaderProps>(
  ({children, headingID, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="header"
        {...modalHeaderStyles}
        border="none"
        paddingBottom="space0"
        ref={ref}
      >
        <Heading as="h3" marginBottom="space0" variant="heading30" id={headingID}>
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
};
