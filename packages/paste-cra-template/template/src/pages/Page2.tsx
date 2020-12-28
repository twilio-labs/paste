import * as React from 'react';
import {Button} from '@twilio-paste/core/button';
import {Box} from '@twilio-paste/core/box';
import {Heading} from '@twilio-paste/core/heading';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {Modal} from '@twilio-paste/core/modal';

const Page2: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        variant="secondary"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        Open modal
      </Button>
      <Modal
        isOpen={isOpen}
        ariaLabelledby="12"
        onDismiss={() => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          setIsOpen((isOpen) => !isOpen);
        }}
        size="wide"
      >
        <Box margin="space60">
          <Heading as="h1" variant="heading10">
            Heading is Magical
          </Heading>
          <Button variant="primary">
            <PlusIcon decorative />
            Primary button
          </Button>
        </Box>
      </Modal>
    </>
  );
};
export default Page2;
