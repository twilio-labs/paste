import * as React from 'react';
import type {Story} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Tabs, TabList, Tab} from '@twilio-paste/tabs';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import {useUID} from '@twilio-paste/uid-library';

import {InPageNavigation, InPageNavigationItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/In Page Navigation',
  component: InPageNavigation,
};

export const Default: Story = () => {
  return (
    <>
      <Heading as="h1" variant="heading30">
        Comparison to Tabs style
      </Heading>
      <Stack orientation="vertical" spacing="space120">
        <Box>
          This is what <strong>In Page Navigation</strong> looks like (only for visual- clicking should not lead
          anywhere)
          {/* using UID here to make unique labels for landmarks in Storybook for axe testing */}
          <InPageNavigation aria-label={`get started ${useUID()}`}>
            <InPageNavigationItem href="#" currentPage>
              Super SIM
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Programmable Wireless</InPageNavigationItem>
          </InPageNavigation>
        </Box>
        <Box>
          This is what Tabs look like:
          <Tabs>
            <TabList aria-label="get started">
              <Tab>Super SIM</Tab>
              <Tab>Programmable Wireless</Tab>
            </TabList>
          </Tabs>
        </Box>
      </Stack>
    </>
  );
};

export const FullWidth: Story = () => {
  return (
    <>
      <Heading as="h1" variant="heading30">
        Comparison to Tabs style
      </Heading>
      <Stack orientation="vertical" spacing="space120">
        <Box>
          This is what <strong>In Page Navigation</strong> looks like (only for visual- clicking should not lead
          anywhere)
          {/* using UID here to make unique labels for landmarks in Storybook for axe testing */}
          <InPageNavigation aria-label={`privacy ${useUID()}`} variant="fullWidth">
            <InPageNavigationItem href="#" currentPage>
              Home
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Detection</InPageNavigationItem>
            <InPageNavigationItem href="#">Settings</InPageNavigationItem>
          </InPageNavigation>
        </Box>
        <Box>
          This is what Tabs look like:
          <Tabs variant="fitted">
            <TabList aria-label="privacy">
              <Tab>Home</Tab>
              <Tab>Detection</Tab>
              <Tab>Settings</Tab>
            </TabList>
          </Tabs>
        </Box>
      </Stack>
    </>
  );
};

export const Customized: Story = () => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        IN_PAGE_NAVIGATION: {backgroundColor: 'colorBackgroundDecorative20Weakest'},
        IN_PAGE_NAVIGATION_ITEMS: {padding: 'space40'},
        IN_PAGE_NAVIGATION_ITEM: {margin: 'space40'},
        IN_PAGE_NAVIGATION_ITEM_ANCHOR: {fontSize: 'fontSize40'},
      }}
    >
      {/* using UID here to make unique labels for landmarks in Storybook for axe testing */}
      <InPageNavigation aria-label={`privacy ${useUID()}`}>
        <InPageNavigationItem href="#" currentPage>
          Home
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Detection</InPageNavigationItem>
        <InPageNavigationItem href="#">Settings</InPageNavigationItem>
      </InPageNavigation>
    </CustomizationProvider>
  );
};
