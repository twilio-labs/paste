import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {ModalDialogPrimitiveOverlay, ModalDialogPrimitiveContent} from '../src';

const StyledModalDialogOverlay = styled(ModalDialogPrimitiveOverlay)({
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

const StyledModalDialogContent = styled(ModalDialogPrimitiveContent)({
  width: '100%',
  maxWidth: '560px',
  maxHeight: 'calc(100% - 60px)',
  background: '#f4f5f6',
  borderRadius: '5px',
  padding: '20px',
});

interface BasicModalDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

const BasicModalDialog: React.FC<BasicModalDialogProps> = ({isOpen, handleClose}) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.useRef(null);

  return (
    <StyledModalDialogOverlay isOpen={isOpen} onDismiss={handleClose} allowPinchZoom initialFocusRef={inputRef}>
      <StyledModalDialogContent>
        <input type="text" value="first" />
        <br />
        <input ref={inputRef} type="text" value="second (initial focused)" />
        <Text as="p" color="colorText">
          Roll your own dialog!
        </Text>
      </StyledModalDialogContent>
    </StyledModalDialogOverlay>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/ModalDialog',
  component: ModalDialogPrimitiveOverlay,
  subcomponents: {ModalDialogPrimitiveContent},
};

export const CustomOverlayAndContent = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <BasicModalDialog isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

CustomOverlayAndContent.story = {
  name: 'Custom overlay and content',
};
