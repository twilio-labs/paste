export const exportButton = `
const ExportButton = () => {
  const [submitting, setSubmitting] = React.useState(false);

  const handleClick = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Tooltip text="Export first 10,000 message log lines">
      <Button variant="secondary" onClick={handleClick} loading={submitting}>
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

export const exportImmediate = `
const ExportButton = () => {
  const [submitting, setSubmitting] = React.useState(false);

  const handleClick = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Tooltip text="Export first 10,000 message log lines">
      <Button variant="secondary" onClick={handleClick} loading={submitting}>
        <ExportIcon decorative />
        Export CSV
      </Button>
    </Tooltip>
  );
};

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

const ExportImmediate = () => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <ExportButton />
      <ExportMenu />
    </Stack>
  );
};

render(
  <ExportImmediate />
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

export const exportDownloadPage = `
const ExportDownloadPage = () => (
  <>
    <Heading as="h2" variant="heading20">
      Active Exports
    </Heading>
    <Table scrollHorizontally>
      <THead>
        <Tr>
          <Th>Status</Th>
          <Th>Export name</Th>
          <Th>Actions</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <Box display="flex" alignItems="center">
              <Box
                width="sizeSquare40"
                height="sizeSquare40"
                backgroundColor="colorBackgroundSuccess"
                borderRadius="borderRadiusCircle"
              />
              <Text as="p" marginLeft="space30">
                Ready for download
              </Text>
            </Box>
            <Text as="p" color="colorTextWeak" marginLeft="space60">
              Tuesday, June 1, 2021
            </Text>
          </Td>
          <Td>
            <strong>Contacts who did not click</strong>
          </Td>
          <Td>
            <Button variant="link">
              <DownloadIcon decorative />
              Download CSV
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Box display="flex" alignItems="center">
              <Box
                width="sizeSquare40"
                height="sizeSquare40"
                backgroundColor="colorBackgroundSuccess"
                borderRadius="borderRadiusCircle"
              />
              <Text as="p" marginLeft="space30">
                Ready for download
              </Text>
            </Box>
            <Text as="p" color="colorTextWeak" marginLeft="space60">
              Tuesday, February 2, 2021
            </Text>
          </Td>
          <Td>
            <strong>All contacts</strong>
          </Td>
          <Td>
            <Button variant="link">
              <DownloadIcon decorative />
              Download CSV
            </Button>
          </Td>
        </Tr>
      </TBody>
    </Table>
  </>
);

render(
  <ExportDownloadPage />
)
`.trim();

export const exportPlacement = `
const ExportPlacement = () => (
  <>
    <Heading as="h2" variant="heading20">
      90s Music
    </Heading>
    <Box display="flex" justifyContent="flex-end" marginBottom="space60">
      <Tooltip text="Export first 10,000 message log lines">
        <Button variant="secondary" size="small" onClick={() => {}}>
          <ExportIcon decorative />
          Export CSV
        </Button>
      </Tooltip>
    </Box>
    <Table>
      <THead>
        <Tr>
          <Th>Artist</Th>
          <Th>Title</Th>
          <Th>Year</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Blackstreet</Td>
          <Td>No Diggity</Td>
          <Td>1996</Td>
        </Tr>
        <Tr>
          <Td>Oasis</Td>
          <Td>Wonderwall</Td>
          <Td>1995</Td>
        </Tr>
        <Tr>
          <Td>Daft Punk</Td>
          <Td>Around the World</Td>
          <Td>1997</Td>
        </Tr>
      </TBody>
    </Table>
  </>
);


render(
  <ExportPlacement />
)
`.trim();

export const exportCard = `
const ExportCard = () => (
  <Card>
    <Heading as="h3" variant="heading30">
      August 2021 usage
    </Heading>
    <Paragraph>Balance: -$10,512.02</Paragraph>
    <Button variant="secondary" onClick={() => {}}>
      <ExportIcon decorative />
      Export PDF
    </Button>
  </Card>
);

render(
  <ExportCard />
)
`.trim();
