export const HorizontalTabsExample = `
const HorizontalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="horizontal-tabs-example">
      <TabList aria-label="My tabs">
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab id={selectedId}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1</TabPanel>
        <TabPanel>Tab 2</TabPanel>
        <TabPanel>Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <HorizontalTabsExample />
)
`.trim();

export const FittedTabsExample = `
const FittedTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs selectedId={selectedId} baseId="fitted-tabs-example" variant="fitted">
      <TabList aria-label="My tabs">
        <Tab>Tab 1 is a long tab name because the server sent a long tab name</Tab>
        <Tab id={selectedId}>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1</TabPanel>
        <TabPanel>Tab 2</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

render(
  <FittedTabsExample />
)
`.trim();

export const VerticalTabsExample = `
const VerticalTabsExample = () => {
  const selectedId = useUID();
  return (
    <Tabs orientation="vertical" selectedId={selectedId} baseId="vertical-tabs-example">
      <TabList aria-label="My tabs">
        <Tab id={selectedId}>Tab 1 is a long tab name because the server sent a long tab name</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1</TabPanel>
        <TabPanel>Tab 2</TabPanel>
        <TabPanel>Tab 3</TabPanel>
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
      <TabList aria-label="My tabs">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Paragraph>Tab 1</Paragraph>
          <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-2')}>
            Go to tab 2
          </Button>
        </TabPanel>
        <TabPanel>
          <Paragraph>Tab 2</Paragraph>
          <Button variant="primary" onClick={() => tab.select('state-hook-tab-example-1')}>
            Go back to tab 1
          </Button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


render(
  <StateHookExample />
)
`.trim();
