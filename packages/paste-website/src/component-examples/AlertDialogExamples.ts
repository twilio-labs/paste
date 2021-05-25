export const defaultExample = `
const AlertDialogTrigger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open alert dialog
      </Button>
      <AlertDialog
        heading="Submit application"
        isOpen={isOpen}
        onConfirm={handleClose}
        onConfirmLabel="Submit"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
        Are you sure you want to submit this application? No information can be changed after submitting.
      </AlertDialog>
    </div>
  );
};

render(
  <AlertDialogTrigger />
)
`.trim();

export const destructiveExample = `
const AlertDialogTrigger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="destructive" onClick={handleOpen}>
        Delete user data
      </Button>
      <AlertDialog
        heading="Delete data"
        isOpen={isOpen}
        destructive
        onConfirm={handleClose}
        onConfirmLabel="Delete"
        onDismiss={handleClose}
        onDismissLabel="Cancel"
      >
      Are you sure you want to delete this data? This action cannot be undone.
      </AlertDialog>
    </div>
  );
};

render(
  <AlertDialogTrigger />
)
`.trim();

export const modalExample = `
const AlertDialogTrigger = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleAlertDialogOpen = () => setIsAlertDialogOpen(true);
  const handleAlertDialogClose = () => setIsAlertDialogOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleModalOpen}>
        Open modal
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
    </div>
  );
};

render(
  <AlertDialogTrigger />
)
`.trim();
