import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {modalFooterStyles} from '@twilio-paste/modal';

export interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  destructive?: boolean;
  onConfirm: () => void;
  onConfirmLabel: string;
  onDismiss: () => void;
  onDismissLabel: string;
}

export const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  (
    {destructive, element = 'ALERT_DIALOG_FOOTER', onConfirm, onConfirmLabel, onDismiss, onDismissLabel, ...props},
    ref
  ) => {
    const primaryVariant = destructive ? 'destructive' : 'primary';

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="footer"
        {...modalFooterStyles}
        border="none"
        element={element}
        justifyContent="flex-end"
        paddingTop="space0"
        ref={ref}
      >
        <Stack orientation="horizontal" spacing="space50">
          <Button variant="secondary" onClick={onDismiss}>
            {onDismissLabel}
          </Button>
          <Button variant={primaryVariant} onClick={onConfirm}>
            {onConfirmLabel}
          </Button>
        </Stack>
      </Box>
    );
  }
);

AlertDialogFooter.displayName = 'AlertDialogFooter';

AlertDialogFooter.propTypes = {
  destructive: PropTypes.bool,
  element: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onConfirmLabel: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onDismissLabel: PropTypes.string.isRequired,
};
