import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {useUID} from 'react-uid';
import {Paragraph} from '@twilio-paste/paragraph';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '../src';

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
        <TabPanels paddingTop="space20">
          <TabPanel>Tab 1</TabPanel>
          <TabPanel>Tab 2</TabPanel>
          <TabPanel>Tab 3</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export const VerticalTabsExample: React.FC<{}> = () => {
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
        <TabPanels paddingLeft="space30">
          <TabPanel>Tab 1</TabPanel>
          <TabPanel>Tab 2</TabPanel>
          <TabPanel>Tab 3</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

storiesOf('Components|Tabs', module)
  .addDecorator(withKnobs)
  .add('Horizontal Tabs', () => {
    return <HorizontalTabsExample />;
  })
  .add('Vertical Tabs', () => {
    return <VerticalTabsExample />;
  });
