import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '@twilio-paste/modal';
import {Paragraph} from '@twilio-paste/paragraph';
import {AlertDialog} from '../src';
import {AlertDialogHeader} from '../src/AlertDialogHeader';
import {AlertDialogBody} from '../src/AlertDialogBody';
import {AlertDialogContent} from '../src/AlertDialogContent';
import {AlertDialogFooter} from '../src/AlertDialogFooter';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Alert Dialog',
  component: AlertDialog,
  excludeStories: [
    'AlertDialogWithTwoActions',
    'DestructiveAlertDialog',
    'OpenAlertDialogFromButton',
    'OpenAlertDialogFromModal',
  ],
};

export const AlertDialogWithTwoActions: React.FC = () => {
  return (
    <AlertDialog
      heading="Submit application"
      isOpen
      onConfirm={() => {}}
      onConfirmLabel="Submit"
      onDismiss={() => {}}
      onDismissLabel="Cancel"
    >
      Are you sure you want to submit this application? No information can be changed after submitting.
    </AlertDialog>
  );
};

export const AlertDialogWithTwoActionsStory = (): React.ReactNode => {
  return <AlertDialogWithTwoActions />;
};

AlertDialogWithTwoActionsStory.story = {
  name: 'Alert Dialog With Two Actions',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const DestructiveAlertDialog: React.FC = () => {
  return (
    <AlertDialog
      heading="Delete data"
      isOpen
      destructive
      onConfirm={() => {}}
      onConfirmLabel="Delete"
      onDismiss={() => {}}
      onDismissLabel="Cancel"
    >
      Are you sure you want to delete this data? This action cannot be undone.
    </AlertDialog>
  );
};

export const DestructiveAlertDialogStory = (): React.ReactNode => {
  return <DestructiveAlertDialog />;
};

DestructiveAlertDialogStory.story = {
  name: 'Destructive Alert Dialog',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const OpenAlertDialogFromButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Click Me!
      </Button>
      <AlertDialog
        heading="Submit application"
        isOpen={isOpen}
        onConfirm={() => {}}
        onConfirmLabel="Submit"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </>
  );
};

export const OpenAlertDialogFromButtonStory = (): React.ReactNode => {
  return <OpenAlertDialogFromButton />;
};

OpenAlertDialogFromButtonStory.story = {
  name: 'Open Alert Dialog From Button',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const OpenAlertDialogFromModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(true);
  const handleModalOpen = (): void => setIsModalOpen(true);
  const handleModalClose = (): void => setIsModalOpen(false);
  const handleAlertDialogOpen = (): void => setIsAlertDialogOpen(true);
  const handleAlertDialogClose = (): void => setIsAlertDialogOpen(false);
  const modalHeadingID = useUID();

  return (
    <>
      <Button variant="primary" onClick={handleModalOpen}>
        Open Modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isModalOpen} onDismiss={handleModalClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Open alert dialog
          </Heading>
          <Paragraph>Click the submit button to open the alert dialog.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAlertDialogOpen}>
              Submit
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
      <AlertDialog
        heading="Submit application"
        isOpen={isAlertDialogOpen}
        onConfirm={handleAlertDialogClose}
        onConfirmLabel="Submit"
        onDismiss={handleAlertDialogClose}
        onDismissLabel="Cancel"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </>
  );
};

export const OpenAlertDialogFromModalStory = (): React.ReactNode => {
  return <OpenAlertDialogFromModal />;
};

OpenAlertDialogFromModalStory.story = {
  name: 'Open Alert Dialog From Modal',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const AlertDialogVRT = (): React.ReactNode => {
  const alertDialogHeadingID = useUID();
  const alertDialogBodyID = useUID();
  return (
    <AlertDialogContent role="alertdialog">
      <AlertDialogHeader headingID={alertDialogHeadingID}>Submit application</AlertDialogHeader>
      <AlertDialogBody bodyID={alertDialogBodyID}>
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialogBody>
      <AlertDialogFooter onDismiss={() => {}} onDismissLabel="Cancel" onConfirm={() => {}} onConfirmLabel="Submit" />
    </AlertDialogContent>
  );
};

AlertDialogVRT.story = {
  name: 'Alert Dialog for VRT',
};

export const DestructiveAlertDialogVRT = (): React.ReactNode => {
  const alertDialogHeadingID = useUID();
  const alertDialogBodyID = useUID();
  return (
    <AlertDialogContent role="alertdialog">
      <AlertDialogHeader headingID={alertDialogHeadingID}>Delete data</AlertDialogHeader>
      <AlertDialogBody bodyID={alertDialogBodyID}>
        Are you sure you want to delete this data? This action cannot be undone.
      </AlertDialogBody>
      <AlertDialogFooter
        onDismiss={() => {}}
        onDismissLabel="Cancel"
        onConfirm={() => {}}
        onConfirmLabel="Delete"
        destructive
      />
    </AlertDialogContent>
  );
};

DestructiveAlertDialogVRT.story = {
  name: 'Destructive Alert Dialog for VRT',
};
