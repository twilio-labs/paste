import { Box } from "@twilio-paste/box";
import { ProcessDisabledIcon } from "@twilio-paste/icons/esm/ProcessDisabledIcon";
import { ProcessDraftIcon } from "@twilio-paste/icons/esm/ProcessDraftIcon";
import { ProcessErrorIcon } from "@twilio-paste/icons/esm/ProcessErrorIcon";
import { ProcessInProgressIcon } from "@twilio-paste/icons/esm/ProcessInProgressIcon";
import { ProcessNeutralIcon } from "@twilio-paste/icons/esm/ProcessNeutralIcon";
import { ProcessSuccessIcon } from "@twilio-paste/icons/esm/ProcessSuccessIcon";
import { ProcessWarningIcon } from "@twilio-paste/icons/esm/ProcessWarningIcon";

export const BannerExample = `
<Box display="flex">
  <ProcessSuccessIcon
    color="colorTextIconSuccess"
    decorative={false}
    title="success" />
  <Text marginLeft="space20">Success</Text>
</Box>
`.trim();

export const ProcessError = (): JSX.Element => {
  return <ProcessErrorIcon color="colorTextIconError" decorative={false} title="Error" />;
};

export const ProcessWarning = (): JSX.Element => {
  return <ProcessWarningIcon color="colorTextIconWarning" decorative={false} title="Warning" />;
};

export const ProcessSuccess = (): JSX.Element => {
  return <ProcessSuccessIcon color="colorTextIconSuccess" decorative={false} title="Success" />;
};

export const ProcessNeutral = (): JSX.Element => {
  return <ProcessNeutralIcon color="colorTextIconNeutral" decorative={false} title="Neutral" />;
};

export const ProcessInProgress = (): JSX.Element => {
  return <ProcessInProgressIcon color="colorTextIconNeutral" decorative={false} title="In-progress" />;
};

export const ProcessDisabled = (): JSX.Element => {
  return <ProcessDisabledIcon color="colorTextIcon" decorative={false} title="Disabled" />;
};

export const ProcessDraft = (): JSX.Element => {
  return <ProcessDraftIcon color="colorTextIcon" decorative={false} title="Draft" />;
};

export const ConnectivityAvailable = (): JSX.Element => {
  return <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundAvailable" />;
};

export const ConnectivityBusy = (): JSX.Element => {
  return <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundBusy" />;
};

export const ConnectivityUnavailable = (): JSX.Element => {
  return <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundUnavailable" />;
};

export const ConnectivityOffline = (): JSX.Element => {
  return (
    <Box
      borderRadius="borderRadiusCircle"
      size="sizeSquare30"
      borderWidth="borderWidth20"
      borderColor="colorBorder"
      borderStyle="solid"
    />
  );
};

export const processStatusExamples = `
<Box display="flex" columnGap="space80" rowGap="space60" flexWrap="wrap">
  <Box display="flex">
    <ProcessErrorIcon
      color="colorTextIconError"
      decorative={false}
      title="error" />
    <Text marginLeft="space20">Error</Text>
  </Box>
  <Box display="flex">
    <ProcessWarningIcon
      color="colorTextIconWarning"
      decorative={false}
      title="warning" />
    <Text marginLeft="space20">Warning</Text>
  </Box>
  <Box display="flex">
    <ProcessSuccessIcon
      color="colorTextIconSuccess"
      decorative={false}
      title="success" />
    <Text marginLeft="space20">Success</Text>
  </Box>
  <Box display="flex">
    <ProcessNeutralIcon
      color="colorTextIconNeutral"
      decorative={false}
      title="neutral" />
    <Text marginLeft="space20">Neutral</Text>
  </Box>
  <Box display="flex">
    <ProcessInProgressIcon
      color="colorTextIconNeutral"
      decorative={false}
      title="In-progress" />
    <Text marginLeft="space20">In-progress</Text>
  </Box>
  <Box display="flex">
    <ProcessDisabledIcon
      color="colorTextIcon"
      decorative={false}
      title="disabled" />
    <Text marginLeft="space20">Disabled</Text>
  </Box>
  <Box display="flex">
    <ProcessDraftIcon
      color="colorTextIcon"
      decorative={false}
      title="draft" />
    <Text marginLeft="space20">Draft</Text>
  </Box>
</Box>
`.trim();

export const prefixSuffixTooltipExamples = `
<Stack orientation="vertical" spacing="space60">
  <Box display="flex">
    <ProcessErrorIcon
      color="colorTextIconError"
      decorative={false}
      title="failed to process"
      size="sizeIcon40"
    />
    <Text
      lineHeight="lineHeight40"
      fontSize="fontSize40"
      marginLeft="space30"
    >
      Failed to process
    </Text>
  </Box>
  <Box display="flex">
    <Text marginRight="space20">Failed to process</Text>
    <ProcessErrorIcon
      color="colorTextIconError"
      decorative={false}
      title="failed to process"
    />
  </Box>
</Stack>
`.trim();

export const tableExample = `
<>
  <Heading as="h2" variant="heading20">
    Exports
  </Heading>
  <Table>
    <THead>
      <Tr>
        <Th>Status</Th>
        <Th>Export name</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>
          <Box display="inline-flex" columnGap="space20">
            <ProcessSuccessIcon
              color="colorTextIconSuccess"
              decorative={false}
              title="success"
            />
            <Box>
              <Text as="div">Successfully exported</Text>
              <Text as="div" color="colorTextWeak">Tuesday, January 2, 2021</Text>
            </Box>
          </Box>
        </Td>
        <Td>
          <strong>Contacts who did not click</strong>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Box display="inline-flex" columnGap="space20">
            <ProcessSuccessIcon
              color="colorTextIconSuccess"
              decorative={false}
              title="success"
            />
            <Box>
              <Text as="div">Successfully exported</Text>
              <Text as="div" color="colorTextWeak">Tuesday, February 2, 2021</Text>
            </Box>
          </Box>
        </Td>
        <Td>
          <strong>All contacts</strong>
        </Td>
      </Tr>
    </TBody>
  </Table>
  <Box marginTop="space110">
    <Heading as="h2" variant="heading20">
      IDs
    </Heading>
  </Box>
  <Table>
    <THead>
      <Tr>
        <Th>ID</Th>
        <Th>Unique name</Th>
        <Th>Region</Th>
        <Th>Status</Th>
        <Th>Order Date</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>90294808908109537</Td>
        <Td>WE902990c21gjioGasd</Td>
        <Td>North America</Td>
        <Td>
          <StatusBadge variant="ProcessSuccess">Active</StatusBadge>
        </Td>
        <Td>2020-10-15</Td>
      </Tr>
      <Tr>
        <Td>90294808908872345</Td>
        <Td>WE928471c21gjioGasd</Td>
        <Td>North America</Td>
        <Td>
          <StatusBadge variant="ProcessNeutral">Ready</StatusBadge>
        </Td>
        <Td>2020-10-15</Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim();

export const tableWithPlainTextExample = `
<>
  <Heading as="h2" variant="heading20">
    Reboots
  </Heading>

  <Table>
    <THead>
      <Tr>
        <Th>Title</Th>
        <Th>Media</Th>
        <Th>Status</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>Bewitched</Td>
        <Td>Series</Td>
        <Td>
          <StatusBadge variant="ProcessWarning">Progress halted</StatusBadge>
        </Td>
      </Tr>
      <Tr>
        <Td>Mulan</Td>
        <Td>Feature</Td>
        <Td>Released</Td>
      </Tr>
      <Tr>
        <Td>Little Women</Td>
        <Td>Feature</Td>
        <Td>Released</Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim();

export const linkInStatusExamples = `
<Box display="flex" columnGap="space80" rowGap="space60" flexWrap="wrap">
  <Box display="flex">
    <ProcessErrorIcon
      color="colorTextIconError"
      decorative={false}
      title="error"
    />
    <Anchor
      marginLeft="space20"
      href="#"
      showExternal
    >
      Pre-registration needed
    </Anchor>
  </Box>
  <Box display="inline-flex" columnGap="space20">
    <ProcessErrorIcon
      color="colorTextIconError"
      decorative={false}
      title="error"
    />
    <Box>
      <Text as="div">Pre-registration needed</Text>
      <Box>
        <Anchor
        marginLeft="space20"
        href="#"
        showExternal
        >
          Fill out the registration form here
        </Anchor>
      </Box>
    </Box>
  </Box>
  <Box display="inline-flex" columnGap="space20">
    <ProcessErrorIcon
      color="colorTextIconError"
      decorative={false}
      title="error"
    />
    <Box>
      <Text as="div">Pre-registration needed</Text>
      <Box>
        <Button
        marginLeft="space20"
        variant="link"
        >
          View details
        </Button>
      </Box>
    </Box>
  </Box>
</Box>
`.trim();

export const otherCommonPlacements = `
<Stack orientation="vertical" spacing="space60">
  <Box width="60%">
    <Card>
      <Box
        as="span"
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="space70"
      >
        <Heading as="h3" variant="heading40" marginBottom="space0">
          Business Profile
        </Heading>
        <StatusBadge variant="ProcessSuccess">
          Approved
        </StatusBadge>
      </Box>
      <Paragraph marginBottom="space0">Information about your business</Paragraph>
    </Card>
  </Box>
  <Box width="275px">
    <Box
      as="span"
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="space30"
    >
      <Text fontWeight="fontWeightSemibold">Account Security</Text>
      <StatusBadge variant="ProcessSuccess">
        Connected
      </StatusBadge>
    </Box>
    <Box
      as="span"
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="space30"
    >
      <Text fontWeight="fontWeightSemibold">Autopilot</Text>
      <StatusBadge variant="ProcessSuccess">
        Connected
      </StatusBadge>
    </Box>
    <Box
      as="span"
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontWeight="fontWeightSemibold">Carrier Network</Text>
      <StatusBadge variant="ProcessWarning">
        Intermittent
      </StatusBadge>
    </Box>
  </Box>
</Stack>
`.trim();

export const connectivityStatusExamples = `
<Box display="flex" columnGap="space90" flexWrap="wrap">
  <Box display="inherit">
    <ConnectivityAvailableIcon
      color="colorTextIconAvailable"
      decorative={false}
      title="available"
    />
    Available
  </Box>
  <Box display="inherit">
    <ConnectivityBusyIcon
      color="colorTextIconBusy"
      decorative={false}
      title="busy"
    />
    Busy
  </Box>
  <Box display="inherit">
    <ConnectivityUnavailableIcon
      color="colorTextIconUnavailable"
      decorative={false}
      title="unavailable"
    />
    Unavailable
  </Box>
  <Box display="inherit">
  <ConnectivityNeutralIcon
    color="colorTextIconNeutral"
    decorative={false}
    title="neutral"
  />
  Neutral
</Box>
  <Box display="inherit">
    <ConnectivityOfflineIcon
      color="colorTextIconOffline"
      decorative={false}
      title="offline"
    />
    Offline
  </Box>
</Box>
`.trim();
