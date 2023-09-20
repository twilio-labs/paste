import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface AlertDialogBodyProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  bodyID: string;
  children: NonNullable<React.ReactNode>;
}

export const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({bodyID, children, element = 'ALERT_DIALOG_BODY', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        overflowY="auto"
        padding="space90"
        paddingTop="space0"
        element={element}
        id={bodyID}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

AlertDialogBody.displayName = 'AlertDialogBody';
