import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {Paragraph} from '@twilio-paste/paragraph';
import {useTabState, Tabs, TabList, Tab, TabPanels, TabPanel, TabStateReturn} from '../src';

export const HorizontalTabsExample: React.FC = () => {
  const selectedId = useUID();
  return (
    <>
      <Paragraph>These tabs have full keyboard support. Try tabbing and using arrow keys.</Paragraph>
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
    </>
  );
};

export const FittedTabsExample: React.FC = () => {
  const selectedId = useUID();
  return (
    <>
      <Paragraph>
        These tabs will take up the full width of the available space, and have full keyboard support. Try tabbing and
        using arrow keys.
      </Paragraph>
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
    </>
  );
};

export const VerticalTabsExample: React.FC = () => {
  const selectedId = useUID();
  return (
    <>
      <Paragraph>This changes the keys to jump between tabs from left/right arrow to up/down arrow</Paragraph>
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
    </>
  );
};

const useButtonClickTabState = (): TabStateReturn => {
  const tab = useTabState();
  return {
    ...tab,
    baseId: 'state-hook-tab-example',
  };
};

export const StateHookExample: React.FC = () => {
  const {...tab} = useButtonClickTabState();
  return (
    <>
      <Paragraph>These tabs use the state prop to allow a button in the tab content to move between tabs.</Paragraph>
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
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Tabs',
  excludeStories: ['HorizontalTabsExample', 'FittedTabsExample', 'VerticalTabsExample', 'StateHookExample'],
  component: Tabs,
  subcomponents: {TabList, Tab, TabPanels, TabPanel},
};

export const HorizontalTabs = (): React.ReactNode => {
  return <HorizontalTabsExample />;
};

export const VerticalTabs = (): React.ReactNode => {
  return <VerticalTabsExample />;
};

export const FittedTabs = (): React.ReactNode => {
  return <FittedTabsExample />;
};

export const StateHook = (): React.ReactNode => {
  return <StateHookExample />;
};

StateHook.story = {
  name: 'State hook',
};
