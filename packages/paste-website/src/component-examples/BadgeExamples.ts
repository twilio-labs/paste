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
      <Badge variant="info" as="span">
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
      <Badge variant="warning" as="span">
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
      <Badge variant="warning" as="span">
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
      <Badge variant="info" as="span">
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
    <Badge variant="new" as="span">
      <NewIcon decorative />
      Beta
    </Badge>
  </Box>
</Box>
<Paragraph marginBottom="space0">
  Twilio’s Emergency Calling for SIP Trunking feature enables
  emergency call routing to Public Safety Answering Points (PSAPs) in
  the US, Canada, and the UK.
</Paragraph>
</Card>`;

export const settingsAndProducts = `<Box
    display="flex"
    flexDirection="row"
    alignItems="flex-start"
    columnGap="space40"
    minWidth="size100"
  >
    <RadioGroup
      name="call-recording"
      value="always"
      legend="Would you like to enable call recording?"
      helpText="Applies to all incoming and outbound calls."
      onChange={() => null}
    >
      <Radio value="always">Always</Radio>
      <Radio value="never">Never</Radio>
    </RadioGroup>

  <Box display="flex" minWidth="size60" columnGap="space20">
    <Badge variant="info" as="span">
      <ProductElasticSIPTrunkingIcon decorative size="sizeIcon10" />
      SIP Trunking
    </Badge>
    <Badge variant="info" as="span">
      <ProductVoiceIcon decorative size="sizeIcon10" />
      Voice
    </Badge>
  </Box>
</Box>`;
