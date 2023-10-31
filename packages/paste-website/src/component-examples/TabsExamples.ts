export const HorizontalTabsExample = `
const HorizontalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="Horizontal product tabs">
        <Tab>Programmable communications</Tab>
        <Tab disabled>Super network</Tab>
        <Tab id={selectedId}>Internet of things</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h3" variant="heading30">Programmable communications</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Messaging</Heading>
              <Paragraph>Send and receive text messages from your app.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Voice</Heading>
              <Paragraph>Make, receive, and control calls using code.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Super network</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Phone numbers</Heading>
              <Paragraph>Choose from local or global numbers, Short Codes, Alphanumeric Sender IDs, etc.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Interconnect</Heading>
              <Paragraph>Enable network-level security to protect communications.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Internet of things</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Internet of things</Heading>
            <Paragraph>Connect IoT devices to global cellular networks.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <HorizontalTabsExample />
)
`.trim();

export const FullWidthTabsExample = `
const FullWidthTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="full-width-tabs-example" variant="full_width">
      <TabList aria-label="Full width product tabs">
        <Tab>Solutions</Tab>
        <Tab id={selectedId}>Account security</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h3" variant="heading30">Solutions</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Flex</Heading>
              <Paragraph>Build with the world's most flexible cloud contact center.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Task Router</Heading>
              <Paragraph>Add intelligent task routing to assign tasks in your call center.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Account security</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Verify</Heading>
            <Paragraph>Verify your users with SMS, Voice, and email.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

render(
  <FullWidthTabsExample />
)
`.trim();

export const VerticalTabsExample = `
const VerticalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs orientation="vertical" selectedId={selectedId} baseId="vertical-tabs-example">
      <TabList aria-label="Vertical product tabs">
        <Tab id={selectedId}>Developer tools</Tab>
        <Tab>Marketplace</Tab>
        <Tab>Solutions</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading as="h3" variant="heading30">Developer tools</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Studio</Heading>
              <Paragraph>Use a visual communications workflow builder for IVRs, reminders, etc.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Functions</Heading>
              <Paragraph>Create serverless functions for custom logic and integrations.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Marketplace</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Add-ons</Heading>
              <Paragraph>Choose add-ons to expand the functionality of your app.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Channels</Heading>
              <Paragraph>Add Facebook Messenger channel.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Heading as="h3" variant="heading30">Solutions</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Flex</Heading>
            <Paragraph>Build with the world's most flexible cloud contact center.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <VerticalTabsExample />
)
`.trim();

export const StateHookTabsExample = `
const useButtonClickTabState = () => {
  const tab = useTabState();
  return {
    ...tab,
    baseId: 'state-hook-tab-example',
  };
};

const StateHookExample = () => {
  const {...tab} = useButtonClickTabState();
  return (
    <Tabs state={tab}>
      <TabList aria-label="State hook tabs">
      <Tab>Programmable communications</Tab>
      <Tab>Internet of things</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box marginBottom="space50">
            <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-2')}>
              Go to internet of things tab
            </Button>
          </Box>
          <Heading as="h3" variant="heading30">Programmable communications</Heading>
          <Stack orientation="vertical" spacing="space60">
            <Card>
              <Heading as="h5" variant="heading50">Messaging</Heading>
              <Paragraph>Send and receive text messages from your app.</Paragraph>
            </Card>
            <Card>
              <Heading as="h5" variant="heading50">Voice</Heading>
              <Paragraph>Make, receive, and control calls using code.</Paragraph>
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Box marginBottom="space50">
            <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-1')}>
              Go back to programmable communications tab
            </Button>
          </Box>
          <Heading as="h3" variant="heading30">Internet of things</Heading>
          <Card>
            <Heading as="h5" variant="heading50">Internet of things</Heading>
            <Paragraph>Connect IoT devices to global cellular networks.</Paragraph>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <StateHookExample />
)
`.trim();
