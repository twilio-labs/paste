import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {
  useModalDialogPrimitiveState,
  ModalDialogPrimitive,
  ModalDialogBackdropPrimitive,
} from '@twilio-paste/modal-dialog-primitive';

const StyledModalDialogOverlay = styled(ModalDialogBackdropPrimitive)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.7)',
});

const StyledModalDialogContent = styled(ModalDialogPrimitive)({
  width: '100%',
  maxWidth: '560px',
  maxHeight: 'calc(100% - 60px)',
  background: '#f4f5f6',
  borderRadius: '5px',
  padding: '20px',
});

export const ModalDialogPrimitiveExample: React.FC = () => {
  const dialog = useModalDialogPrimitiveState({baseId: 'modal-primitive-example'});
  const handleOpen = (): void => dialog.show();
  const initialFocusRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    if (dialog.visible) {
      initialFocusRef.current.focus();
    }
  }, [dialog.visible]);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleOpen}
        aria-controls={dialog.baseId}
        aria-expanded={!!dialog.visible}
        aria-haspopup="dialog"
      >
        Open Modal
      </Button>
      <StyledModalDialogOverlay {...dialog}>
        <StyledModalDialogContent {...dialog} aria-label="Welcome">
          <input type="text" defaultValue="first" />
          <br />
          <input ref={initialFocusRef} type="text" defaultValue="second (initial focused)" />
          <Text as="p" color="colorText">
            Roll your own dialog!
          </Text>
        </StyledModalDialogContent>
      </StyledModalDialogOverlay>
    </>
  );
};
