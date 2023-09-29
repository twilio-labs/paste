import type { Story } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from "@twilio-paste/modal";
import { Paragraph } from "@twilio-paste/paragraph";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { AlertDialog } from "../src";
import { AlertDialogBody } from "../src/AlertDialogBody";
import { AlertDialogContent } from "../src/AlertDialogContent";
import { AlertDialogFooter } from "../src/AlertDialogFooter";
import { AlertDialogHeader } from "../src/AlertDialogHeader";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Alert Dialog",
  component: AlertDialog,
  excludeStories: [
    "AlertDialogWithTwoActions",
    "DestructiveAlertDialog",
    "OpenAlertDialogFromButton",
    "OpenAlertDialogFromModal",
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

AlertDialogWithTwoActionsStory.storyName = "Alert Dialog With Two Actions";
AlertDialogWithTwoActionsStory.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const DestructiveAlertDialog = (): JSX.Element => {
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

DestructiveAlertDialogStory.storyName = "Destructive Alert Dialog";
DestructiveAlertDialogStory.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const DisabledButtonDestructiveAlertDialog = ({ dialogIsOpen = false }): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(dialogIsOpen);
  const [inputString, setInputString] = React.useState("");
  const [inputHasError, setInputHasError] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const handleOpen = (): void => {
    if (inputString !== "") setIsDisabled(false);
    setIsOpen(true);
  };
  const handleDismiss = (): void => {
    setIsDisabled(true);
    setIsOpen(false);
    setInputHasError(false);
  };
  const handleConfirm = (): void => {
    if (inputString === "Toyota TCB Automobile (Gevelsberg)") {
      setIsOpen(false);
      setInputString("");
      setInputHasError(false);
      setIsDisabled(true);
    } else {
      setInputHasError(true);
    }
  };
  const handleChange = (e): void => {
    setInputString(e.target.value);
    if (e.target.value !== "") setIsDisabled(false);
    else setIsDisabled(true);
  };
  return (
    <>
      <Button variant="destructive" onClick={handleOpen}>
        Delete object
      </Button>
      <AlertDialog
        heading="Delete regulatory bundle"
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onConfirmLabel="Delete"
        onDismiss={handleDismiss}
        onDismissLabel="Cancel"
        destructive
        onConfirmDisabled={isDisabled}
      >
        You&apos;re about to delete &ldquo;Toyota TCB Automobile (Gevelsberg)&ldquo; and all data associated with it.
        This regulatory bundle will be deleted immediately. You can&apos;t undo this action.
        <Box display="flex" flexDirection="column" rowGap="space30" marginY="space50">
          <Label htmlFor="delete-input" required>
            Regulatory bundle name
          </Label>
          <Input
            type="text"
            required
            id="delete-input"
            aria-describedby="delete-help-text"
            onChange={(e) => handleChange(e)}
            hasError={inputHasError}
            value={inputString}
          />
          <HelpText id="delete-help-text" variant={inputHasError ? "error" : "default"}>
            To confirm this deletion, please input the name of this regulatory bundle.
          </HelpText>
        </Box>
      </AlertDialog>
    </>
  );
};

export const OpenAlertDialogFromButton = (): JSX.Element => {
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

OpenAlertDialogFromButtonStory.storyName = "Open Alert Dialog From Button";
OpenAlertDialogFromButtonStory.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const OpenAlertDialogFromModal = (): JSX.Element => {
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

OpenAlertDialogFromModalStory.storyName = "Open Alert Dialog From Modal";
OpenAlertDialogFromModalStory.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const AlertDialogVRT = (): React.ReactNode => {
  const alertDialogHeadingID = useUID();
  const alertDialogBodyID = useUID();
  return (
    <AlertDialogContent role="alertdialog" aria-labelledby={alertDialogHeadingID}>
      <AlertDialogHeader headingID={alertDialogHeadingID}>Submit application</AlertDialogHeader>
      <AlertDialogBody bodyID={alertDialogBodyID}>
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialogBody>
      <AlertDialogFooter onDismiss={() => {}} onDismissLabel="Cancel" onConfirm={() => {}} onConfirmLabel="Submit" />
    </AlertDialogContent>
  );
};

AlertDialogVRT.storyName = "Alert Dialog for VRT";

export const DestructiveAlertDialogVRT = (): React.ReactNode => {
  const alertDialogHeadingID = useUID();
  const alertDialogBodyID = useUID();
  return (
    <AlertDialogContent role="alertdialog" aria-labelledby={alertDialogHeadingID}>
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

DestructiveAlertDialogVRT.storyName = "Destructive Alert Dialog for VRT";

export const CustomizedAlertDialog: Story = () => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={true}
      theme={theme}
      elements={{
        ALERT_DIALOG: { backgroundColor: "colorBackgroundSubaccount" },
        ALERT_DIALOG_HEADER_WRAPPER: { border: "inherit" },
        ALERT_DIALOG_HEADER: { fontFamily: "fontFamilyCode", backgroundColor: "colorBackgroundNeutralWeakest" },
        ALERT_DIALOG_BODY: { backgroundColor: "colorBackgroundSuccessWeakest" },
        ALERT_DIALOG_FOOTER: { paddingTop: "space50", backgroundColor: "colorBackgroundWarningWeakest" },
      }}
    >
      <AlertDialog
        data-testid="alert_dialog"
        isOpen
        onConfirm={() => {}}
        onDismiss={() => {}}
        onConfirmLabel="Confirm"
        onDismissLabel="Dismiss"
        heading="Alert Dialog"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </CustomizationProvider>
  );
};
CustomizedAlertDialog.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const CustomizedDestructiveAlertDialog: Story = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={true}
      theme={currentTheme}
      elements={{
        FOO: { backgroundColor: "colorBackgroundError" },
        FOO_HEADER_WRAPPER: { border: "inherit" },
        FOO_HEADER: { fontFamily: "fontFamilyCode", backgroundColor: "colorBackgroundNeutralWeakest" },
        FOO_BODY: { backgroundColor: "colorBackgroundSuccessWeakest" },
        FOO_FOOTER: { paddingTop: "space50", backgroundColor: "colorBackgroundWarningWeakest" },
      }}
    >
      <AlertDialog
        data-testid="destructive_alert_dialog"
        element="FOO"
        isOpen
        destructive
        onConfirm={() => {}}
        onDismiss={() => {}}
        onConfirmLabel="Confirm"
        onDismissLabel="Dismiss"
        heading="Alert Dialog"
      >
        Are you sure you want to delete this data? This action cannot be undone.
      </AlertDialog>
    </CustomizationProvider>
  );
};
CustomizedDestructiveAlertDialog.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
