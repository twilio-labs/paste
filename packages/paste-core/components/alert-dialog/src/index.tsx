import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {useTransition} from '@twilio-paste/animation-library';
import {css, styled} from '@twilio-paste/styling-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {
  modalHeaderStyles,
  modalBodyStyles,
  modalFooterStyles,
  ModalDialogOverlay,
  ModalDialogContent,
} from '@twilio-paste/modal';

const NarrowModalDialogContent = styled(ModalDialogContent)(() =>
  css({
    maxWidth: 'size40',
  })
);

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
  children: React.ReactNode;
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

    const primaryVariant = destructive ? 'destructive' : 'primary';

    return (
      <>
        {transitions(
          (styles, item) =>
            item && (
              <ModalDialogOverlay isOpen={isOpen} style={{opacity: styles.opacity}}>
                <NarrowModalDialogContent
                  {...safelySpreadBoxProps(props)}
                  aria-labelledby={headingID}
                  aria-describedby={bodyID}
                  ref={ref}
                  role="alertdialog"
                  style={styles}
                >
                  <Box as="header" {...modalHeaderStyles} border="none" paddingBottom="space0">
                    <Heading as="h3" marginBottom="space0" variant="heading30" id={headingID}>
                      {heading}
                    </Heading>
                  </Box>
                  <Box as="div" {...modalBodyStyles} id={bodyID}>
                    {children}
                  </Box>
                  <Box as="footer" {...modalFooterStyles} border="none" justifyContent="flex-end" paddingTop="space0">
                    <Stack orientation="horizontal" spacing="space50">
                      <Button variant="secondary" onClick={onDismiss}>
                        {onDismissLabel}
                      </Button>
                      <Button variant={primaryVariant} onClick={onConfirm}>
                        {onConfirmLabel}
                      </Button>
                    </Stack>
                  </Box>
                </NarrowModalDialogContent>
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
