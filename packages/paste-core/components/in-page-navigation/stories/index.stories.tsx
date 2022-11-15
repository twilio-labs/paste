import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Tabs, TabList, Tab} from '@twilio-paste/tabs';

import {InPageNavigation, InPageNavigationItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/In Page Navigation',
  component: InPageNavigation,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Heading as="h1" variant="heading30">
        Comparison to Tabs style
      </Heading>
      <Stack orientation="vertical" spacing="space90">
        <Box>
          This is what In Page Navigation looks like (only for visual- clicking should not lead anywhere)
          <InPageNavigation>
            <InPageNavigationItem href="#" currentPage>
              Bio
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Impact</InPageNavigationItem>
          </InPageNavigation>
        </Box>
        <Box>
          This is what Tabs look like:
          <Tabs>
            <TabList aria-label="my tabsz">
              <Tab>Bio</Tab>
              <Tab>Impact</Tab>
            </TabList>
          </Tabs>
        </Box>
      </Stack>
    </>
  );
};
