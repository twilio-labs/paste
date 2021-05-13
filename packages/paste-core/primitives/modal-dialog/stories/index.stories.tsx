import * as React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {styled} from '@twilio-paste/styling-library';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {useModalDialogPrimitiveState, ModalDialogPrimitive, ModalDialogBackdropPrimitive} from '../src';

const StyledModalDialogBackdrop = styled(ModalDialogBackdropPrimitive)({
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

const StyledModalDialog = styled(ModalDialogPrimitive)({
  width: '100%',
  maxWidth: '560px',
  maxHeight: 'calc(100% - 60px)',
  background: '#f4f5f6',
  borderRadius: '5px',
  padding: '20px',
});

export const ModalPrimitiveExample: React.FC = () => {
  const dialog = useModalDialogPrimitiveState({baseId: 'modal-primitive-example'});
  const handleOpen = (): void => dialog.show();
  const initialFocusRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  // Focusing back on the button after closing the dialog seems to work fine in the browser,
  // but theres a console warning when running tests to use `unstable_finalFocusRef` on
  // the Dialog component: https://reakit.io/docs/dialog/#dialog.

  const finalFocusRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

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
        ref={finalFocusRef}
      >
        Open Modal
      </Button>
      <StyledModalDialogBackdrop {...dialog}>
        <StyledModalDialog {...dialog} aria-label="Welcome" unstable_finalFocusRef={finalFocusRef}>
          <input type="text" defaultValue="first" />
          <br />
          <input ref={initialFocusRef} type="text" defaultValue="second (initial focused)" />
          <Text as="p" color="colorText">
            Roll your own dialog!
          </Text>
        </StyledModalDialog>
      </StyledModalDialogBackdrop>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/ModalDialog',
  excludeStories: ['ModalPrimitiveExample'],
  decorators: [withKnobs],
  component: ModalDialogBackdropPrimitive,
  subcomponents: {ModalDialogPrimitive},
};

export const CustomOverlayAndContent = (): React.ReactNode => {
  return <ModalPrimitiveExample />;
};

CustomOverlayAndContent.story = {
  name: 'Custom overlay and content',
};
