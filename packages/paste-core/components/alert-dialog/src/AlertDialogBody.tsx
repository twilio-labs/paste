import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {modalBodyStyles} from '@twilio-paste/modal';

export interface AlertDialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  bodyID: string;
  children: NonNullable<React.ReactNode>;
}

export const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({bodyID, children, ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as="div" {...modalBodyStyles} id={bodyID} ref={ref}>
        {children}
      </Box>
    );
  }
);

AlertDialogBody.displayName = 'AlertDialogBody';

AlertDialogBody.propTypes = {
  bodyID: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
