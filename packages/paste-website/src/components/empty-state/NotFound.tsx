import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';

const NotFound: React.FC<{}> = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
    </Breadcrumb>
    <Heading as="h1" variant="heading10">
      Oops, this page doesn&apos;t exist
    </Heading>
    <Box>
      <Paragraph>
        If you think you landed here in error, please let us know by{' '}
        <Anchor href="https://github.com/twilio-labs/paste/issues">filing an issue</Anchor>.
      </Paragraph>
    </Box>
  </>
);

export {NotFound};
