export const defaultExample = `
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  // Content properties
  const [projectName, setProjectName] = React.useState('');
  const projectInputID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        New Project
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Create new project
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Paragraph>
            Create a new Project within your Organization. Please contact your account representative to configure invoicing.
          </Paragraph>
          <FormLabel htmlFor={projectInputID}>Project Name</FormLabel>
          <FormInput onChange={(e) => setProjectName(e.currentTarget.value)} id={projectInputID} type="text" value={projectName} />

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim();

export const wideExample = `
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  // Content properties
  const [documentName, setDocumentName] = React.useState('');
  const [address1, setAddress1Name] = React.useState('');
  const [address2, setAddress2Name] = React.useState('');
  const documentNameInputID = useUID();
  const address1InputID = useUID();
  const address2InputID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Add supporting document
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="wide">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Add supporting document
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Grid gutter="space50">
            <Column>
              <Box marginBottom="space50">
                <FormLabel htmlFor={documentNameInputID}>Supporting document name</FormLabel>
                <FormInput onChange={(e) => setDocumentName(e.currentTarget.value)} id={documentNameInputID} type="text" value={documentName} />
              </Box>
              <Box marginBottom="space50">
                <FormLabel htmlFor={address1InputID}>Address 1</FormLabel>
                <FormInput onChange={(e) => setAddress1Name(e.currentTarget.value)} id={address1InputID} type="text" value={address1} />
              </Box>
              <Box>
                <FormLabel htmlFor={address2InputID}>Address 2</FormLabel>
                <FormInput onChange={(e) => setAddress2Name(e.currentTarget.value)} id={address2InputID} type="text" value={address2} />
              </Box>
            </Column>
            <Column>
              <Box backgroundColor="colorBackground" height="size20" display="flex" alignItems="center" justifyContent="center">
                <Text as="p" textAlign="center">Upload supporting document</Text>
              </Box>
            </Column>
          </Grid>

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Add document</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim();

export const initialFocusExample = `
const ModalTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  // ref of target intial focus element
  const nameInputRef = React.createRef();

  // Content properties
  const [name, setName] = React.useState('');
  const inputID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        New project
      </Button>
      <Modal
        ariaLabelledby={modalHeadingID}
        isOpen={isOpen}
        onDismiss={handleClose}
        // set inital focus here
        initialFocusRef={nameInputRef}
        size="default"
      >
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Create a new project
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Box as="form">
            <FormLabel htmlFor={inputID}>Project Name</FormLabel>
            <FormInput
              id={inputID}
              value={name}
              // assign the target ref here
              ref={nameInputRef}
              onChange={e => setName(e.currentTarget.value)}
              type="text"
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

render(
  <ModalTrigger />
)
`.trim();
