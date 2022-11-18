import * as React from 'react';
import type {Story} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Tabs, TabList, Tab} from '@twilio-paste/tabs';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';

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
          <InPageNavigation aria-label="get started">
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
          <InPageNavigation aria-label="privacy" variant="fullWidth">
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
        IN_PAGE_NAVIGATION: {fontWeight: 'fontWeightLight', backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
        IN_PAGE_NAVIGATION_ITEMS: {padding: 'space40'},
        IN_PAGE_NAVIGATION_ITEM: {margin: 'space40'},
        IN_PAGE_NAVIGATION_ITEM_ANCHOR: {fontSize: 'fontSize40'},
      }}
    >
      <InPageNavigation aria-label="privacy">
        <InPageNavigationItem href="#" currentPage>
          Home
        </InPageNavigationItem>
        <InPageNavigationItem href="#">Detection</InPageNavigationItem>
        <InPageNavigationItem href="#">Settings</InPageNavigationItem>
      </InPageNavigation>
    </CustomizationProvider>
  );
};
