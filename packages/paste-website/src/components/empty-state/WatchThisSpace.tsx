import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';
import {Flex} from '@twilio-paste/flex';

export const WatchThisSpace: React.FC = ({children}) => {
  return (
    <Card>
      <Flex vAlignContent="center">
        <Box marginRight="space70" width="100%">
          {children}
        </Box>
        <Box>
          <Heading as="h3" variant="heading30">
            We are currently working on this page. Watch this space!
          </Heading>
          <Paragraph>
            Want to contribute or ask a question? Post on our{' '}
            <Anchor href="https://github.com/twilio-labs/paste/discussions" showExternal>
              Github Discussions
            </Anchor>
          </Paragraph>
        </Box>
      </Flex>
    </Card>
  );
};
