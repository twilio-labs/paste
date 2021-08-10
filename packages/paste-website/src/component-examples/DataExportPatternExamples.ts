export const exportButton = `
const ExportButton = () => {
  return (
    <Tooltip text="Export first 10,000 message log lines">
      <Button variant="secondary" onClick={() => {}}>
        <ExportIcon decorative />
        Export CSV
      </Button>
    </Tooltip>
  );
};

render(
  <ExportButton />
)
`.trim();

export const exportMenu = `
const ExportMenu = () => {
  const menu = useMenuState();

  return (
    <>
      <MenuButton {...menu} variant="secondary">
        <ExportIcon decorative />
        Export
        <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Export options">
        <MenuItem
          {...menu}
          onClick={() => {
            alert("Data as CSV");
          }}
        >
          Data as CSV
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            alert("Graph as PNG");
          }}
        >
          Graph as PNG
        </MenuItem>
      </Menu>
    </>
  );
};

render(
  <ExportMenu />
)
`.trim();

export const exportModal = `
const ExportOptionsModal = ({ isOpen, closeAction }) => {
  const seed = useUIDSeed();
  const modalHeadingID = seed("modal-heading");

  return (
    <Modal
      ariaLabelledby={modalHeadingID}
      isOpen={isOpen}
      onDismiss={closeAction}
      size="default"
    >
      <ModalHeader>
        <ModalHeading as="h3" id={modalHeadingID}>
          Data export options
        </ModalHeading>
      </ModalHeader>
      <ModalBody>
        <CheckboxGroup
          name="desktop"
          legend="Select the columns you would like to export"
        >
          <Checkbox id={seed("timestamp")} value="timestamp">
            Timestamp
          </Checkbox>
          <Checkbox id={seed("event")} value="event">
            Event
          </Checkbox>
          <Checkbox id={seed("product")} value="product">
            Product
          </Checkbox>
          <Checkbox id={seed("debug_event_sid")} value="debug_event_sid">
            Debug event SID
          </Checkbox>
          <Checkbox id={seed("service_sid")} value="service_sid">
            Service SID
          </Checkbox>
          <Checkbox id={seed("resource_sid")} value="resource_sid">
            Resource SID
          </Checkbox>
          <Checkbox id={seed("message")} value="message">
            Message
          </Checkbox>
        </CheckboxGroup>
      </ModalBody>
      <ModalFooter>
        <ModalFooterActions>
          <Button variant="secondary" onClick={closeAction}>
            Cancel
          </Button>
          <Button variant="primary" onClick={closeAction}>
            <ExportIcon decorative /> Export
          </Button>
        </ModalFooterActions>
      </ModalFooter>
    </Modal>
  );
};

const ExportModal = () => {
  const [showExportModal, setShowExportModal] = React.useState(false);
  const handleOpen = () => setShowExportModal(true);
  const handleClose = () => setShowExportModal(false);

  return (
    <>
      <Tooltip text="Export first 10,000 message log lines">
        <Button variant="secondary" onClick={handleOpen}>
          <ExportIcon decorative />
          Export CSV
        </Button>
      </Tooltip>
      <ExportOptionsModal isOpen={showExportModal} closeAction={handleClose} />
    </>
  );
};

render(
  <ExportModal />
)
`.trim();

export const exportDelayed = `
const ExportDelayed = () => {
  const toaster = useToaster();

  const handleClick = () => {
    toaster.push({
      message:
        "Successfully initiated data export. You will receive an email when your export is ready to download.",
      variant: "success"
    });
  };

  return (
    <>
      <Button variant="secondary" onClick={handleClick}>
        <ExportIcon decorative />
        Export CSV
      </Button>
      <Toaster {...toaster} />
    </>
  );
};

render(
  <ExportDelayed />
)
`.trim();
