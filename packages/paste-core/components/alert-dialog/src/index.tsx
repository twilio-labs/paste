import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {useTransition} from '@twilio-paste/animation-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {ModalDialogOverlay} from '@twilio-paste/modal';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {AlertDialogHeader} from './AlertDialogHeader';
import {AlertDialogBody} from './AlertDialogBody';
import {AlertDialogContent} from './AlertDialogContent';
import {AlertDialogFooter} from './AlertDialogFooter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAnimationStates = (): any => ({
  from: {opacity: 0, transform: `scale(0.675)`},
  enter: {opacity: 1, transform: `scale(1)`},
  leave: {opacity: 0, transform: `scale(0.675)`},
  // https://www.react-spring.dev/docs/advanced/config
  config: {
    mass: 0.5,
    tension: 370,
    friction: 26,
  },
});

export interface AlertDialogProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  destructive?: boolean;
  heading: string;
  isOpen: boolean;
  onConfirm: () => void;
  onConfirmLabel: string;
  onDismiss: () => void;
  onDismissLabel: string;
  onConfirmDisabled?: boolean;
}

export const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  (
    {
      children,
      destructive,
      element = 'ALERT_DIALOG',
      heading,
      isOpen,
      onConfirm,
      onConfirmLabel,
      onDismiss,
      onDismissLabel,
      onConfirmDisabled,
      ...props
    },
    ref
  ) => {
    const transitions = useTransition(isOpen, getAnimationStates());
    const headingID = useUID();
    const bodyID = useUID();

    return (
      <>
        {transitions(
          (styles, item) =>
            item && (
              <ModalDialogOverlay isOpen={isOpen} style={{opacity: styles.opacity}}>
                <Box
                  // @ts-expect-error Render overlay as box for customization
                  as={AlertDialogContent}
                  {...safelySpreadBoxProps(props)}
                  aria-labelledby={headingID}
                  aria-describedby={bodyID}
                  element={element}
                  ref={ref}
                  role="alertdialog"
                  style={styles}
                >
                  <AlertDialogHeader headingID={headingID} element={`${element}_HEADER`}>
                    {heading}
                  </AlertDialogHeader>
                  <AlertDialogBody bodyID={bodyID} element={`${element}_BODY`}>
                    {children}
                  </AlertDialogBody>
                  <AlertDialogFooter
                    destructive={destructive}
                    element={`${element}_FOOTER`}
                    onDismiss={onDismiss}
                    onDismissLabel={onDismissLabel}
                    onConfirm={onConfirm}
                    onConfirmLabel={onConfirmLabel}
                    onConfirmDisabled={onConfirmDisabled}
                  />
                </Box>
              </ModalDialogOverlay>
            )
        )}
      </>
    );
  }
);

AlertDialog.displayName = 'AlertDialog';
