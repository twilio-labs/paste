import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {ModalDialogOverlay, ModalDialogContent} from '../src';

const StyledModalDialogOverlay = styled(ModalDialogOverlay)({
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

const StyledModalDialogContent = styled(ModalDialogContent)({
  width: '100%',
  maxWidth: '560px',
  maxHeight: 'calc(100% - 60px)',
  background: '#f4f5f6',
  borderRadius: '5px',
});

interface BasicModalDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

const BasicModalDialog: React.FC<BasicModalDialogProps> = ({isOpen, handleClose}) => (
  <StyledModalDialogOverlay isOpen={isOpen} onDismiss={handleClose}>
    <StyledModalDialogContent>
      <Text as="p" color="colorText">
        Roll your own dialog!
      </Text>
    </StyledModalDialogContent>
  </StyledModalDialogOverlay>
);

const ModalActivator: React.FC = () => {
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

storiesOf('Primitives|ModalDialog', module)
  .addDecorator(withKnobs)
  .add('Custom overlay and content', () => {
    return <ModalActivator />;
  });
