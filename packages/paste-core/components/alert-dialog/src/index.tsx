import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {useTransition} from '@twilio-paste/animation-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {ModalDialogOverlay} from '@twilio-paste/modal';
import {AlertDialogHeader} from './AlertDialogHeader';
import {AlertDialogBody} from './AlertDialogBody';
import {AlertDialogContent} from './AlertDialogContent';
import {AlertDialogFooter} from './AlertDialogFooter';

/// <reference types="@emotion/react/types/css-prop" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAnimationStates = (): any => ({
  from: {opacity: 0, transform: `scale(0.675)`},
  enter: {opacity: 1, transform: `scale(1)`},
  leave: {opacity: 0, transform: `scale(0.675)`},
  // https://www.react-spring.io/docs/hooks/api
  config: {
    mass: 0.5,
    tension: 370,
    friction: 26,
  },
});

export interface AlertDialogProps extends React.HTMLAttributes<HTMLElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  destructive?: boolean;
  heading: string;
  isOpen: boolean;
  onConfirm: () => void;
  onConfirmLabel: string;
  onDismiss: () => void;
  onDismissLabel: string;
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
              // @ts-expect-error @TODO debugging in emotion upgrade.
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

AlertDialog.propTypes = {
  children: PropTypes.node.isRequired,
  destructive: PropTypes.bool,
  element: PropTypes.string,
  heading: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onConfirmLabel: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onDismissLabel: PropTypes.string.isRequired,
};
