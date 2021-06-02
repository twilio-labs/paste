import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {useTransition} from '@twilio-paste/animation-library';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import {ModalDialogOverlay} from '@twilio-paste/modal';
import {AlertDialogHeader} from './AlertDialogHeader';
import {AlertDialogBody} from './AlertDialogBody';
import {AlertDialogContent} from './AlertDialogContent';
import {AlertDialogFooter} from './AlertDialogFooter';

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

export interface AlertDialogProps extends React.HTMLAttributes<HTMLElement> {
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
  ({children, destructive, heading, isOpen, onConfirm, onConfirmLabel, onDismiss, onDismissLabel, ...props}, ref) => {
    const transitions = useTransition(isOpen, getAnimationStates());
    const headingID = useUID();
    const bodyID = useUID();

    return (
      <>
        {transitions(
          (styles, item) =>
            item && (
              <ModalDialogOverlay isOpen={isOpen} style={{opacity: styles.opacity}}>
                <AlertDialogContent
                  {...safelySpreadBoxProps(props)}
                  aria-labelledby={headingID}
                  aria-describedby={bodyID}
                  ref={ref}
                  role="alertdialog"
                  style={styles}
                >
                  <AlertDialogHeader headingID={headingID}>{heading}</AlertDialogHeader>
                  <AlertDialogBody bodyID={bodyID}>{children}</AlertDialogBody>
                  <AlertDialogFooter
                    destructive={destructive}
                    onDismiss={onDismiss}
                    onDismissLabel={onDismissLabel}
                    onConfirm={onConfirm}
                    onConfirmLabel={onConfirmLabel}
                  />
                </AlertDialogContent>
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
  heading: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onConfirmLabel: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onDismissLabel: PropTypes.string.isRequired,
};
