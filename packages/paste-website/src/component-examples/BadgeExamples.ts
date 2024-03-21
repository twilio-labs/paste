export const tableExample = `<Table tableLayout="auto">
  <THead>
    <Tr>
      <Th>Call SID</Th>
      <Th>Direction</Th>
      <Th>Date</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative20" as="span">
          Inbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative40" as="span">
          Outbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative40" as="span">
          Outbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
    <Tr>
      <Td>
        <Text fontFamily="fontFamilyCode" as="span">
          CA0yc4mxi6cn4z13bte7qmflc2drc85mlp
        </Text>
      </Td>
      <Td>
        <Badge variant="decorative20" as="span">
          Inbound
        </Badge>
      </Td>
      <Td>2020-09-17, 16:24:28 PDT</Td>
    </Tr>
  </TBody>
</Table>`;

export const betaFeatureExample = `<Card>
  <Box display="flex" columnGap="space40">
    <Heading as="h3" variant="heading40">
      Emergency Calling
    </Heading>
    <Box height="min-content" display="inherit" columnGap="space30">
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <NewIcon decorative/>
          Beta
        </PopoverBadgeButton>
        <Popover aria-label="Popover">

        This product is in beta, which means we're still working out all the kinks. Let us know if you spot any bugs.

        </Popover>
      </PopoverContainer>
    </Box>
  </Box>
  <Paragraph marginBottom="space0">
    Twilio’s Emergency Calling for SIP Trunking feature enables
    emergency call routing to Public Safety Answering Points (PSAPs) in
    the US, Canada, and the UK.
  </Paragraph>
</Card>`;

export const settingsAndProducts = `const SettingsAndProducts = () => {
  const [callRecording, setCallRecording] = React.useState("always");

  const handleOnChange = React.useCallback(
    (newValue) => {
      setCallRecording(newValue);
    },
    [setCallRecording]
  );
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      columnGap="space40"
    >
      <RadioGroup
        name="call-recording"
        value={callRecording}
        legend="Would you like to enable call recording?"
        helpText="Applies to all incoming and outbound calls."
        onChange={handleOnChange}
      >
        <Radio id="always" value="always">
          Always
        </Radio>
        <Radio id="never" value="never">
          Never
        </Radio>
      </RadioGroup>

      <Box display="flex" columnGap="space20">
        <Badge variant="decorative20" as="span">
          <ProductElasticSIPTrunkingIcon decorative size="sizeIcon10" />
          SIP Trunking
        </Badge>
        <Badge variant="decorative30" as="span">
          <ProductVoiceIcon decorative size="sizeIcon10" />
          Voice
        </Badge>
      </Box>
    </Box>
  );
};

render(
  SettingsAndProducts
)
`.trim();

export const badgeModalExample = `
const InteractiveTrigger = () => {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <Box display="flex" columnGap="space80">
      <Badge as="button" variant="new" onClick={handleOpen}>
        <NewIcon decorative/>
        Beta
      </Badge>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Beta mode
          </ModalHeading>
        </ModalHeader>
        <ModalBody>

          <Paragraph marginBottom="space0">
            This product is in beta, which means we're still working out all the kinks. Let us know if you spot any bugs.
          </Paragraph>

        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="primary" onClick={handleClose}>Got it</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <NewIcon decorative/>
          Beta
        </PopoverBadgeButton>
        <Popover aria-label="Popover">

        This product is in beta, which means we're still working out all the kinks. Let us know if you spot any bugs.

        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <InteractiveTrigger />
)
`.trim();

export const counterExample = `
const HorizontalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="Horizontal product tabs">
        <Tab id={selectedId}>Owl Inc.</Tab>
        <Tab>Out of Organization</Tab>
        <Tab>
          <Stack orientation="horizontal" spacing="space20">
            Invitations
            <Badge as="span" variant="neutral_counter">50</Badge>
          </Stack>
        </Tab>
      </TabList>
    </Tabs>
  );
};


render(
  <HorizontalTabsExample />
)
`.trim();
