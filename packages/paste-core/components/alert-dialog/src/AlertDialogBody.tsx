import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {modalBodyStyles} from '@twilio-paste/modal';

export interface AlertDialogBodyProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  bodyID: string;
  children: NonNullable<React.ReactNode>;
}

export const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({bodyID, children, element = 'ALERT_DIALOG_BODY', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as="div" {...modalBodyStyles} element={element} id={bodyID} ref={ref}>
        {children}
      </Box>
    );
  }
);

AlertDialogBody.displayName = 'AlertDialogBody';

AlertDialogBody.propTypes = {
  bodyID: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
