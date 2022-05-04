import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';
import {Flex} from '@twilio-paste/flex';

import {StaticImage} from 'gatsby-plugin-image';

export const WatchThisSpace: React.FC = () => {
  return (
    <Card>
      <Flex vAlignContent="center">
        <Box marginRight="space70">
          <StaticImage
            src="../../assets/images/patterns/empty-awaiting-data.png"
            alt="This content has not been published"
            placeholder="blurred"
          />
        </Box>
        <Box>
          <Heading as="h3" variant="heading30">
            We are currently working on this page. Watch this space!
          </Heading>
          <Paragraph>
            Want to contribute or ask a question? Post on our{' '}
            <Anchor href="https://github.com/twilio-labs/paste/discussions">Github Discussions</Anchor>
          </Paragraph>
        </Box>
      </Flex>
    </Card>
  );
};
