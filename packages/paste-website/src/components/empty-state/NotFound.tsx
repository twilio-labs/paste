import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
    </Breadcrumb>
    <Text
      fontSize="fontSize80"
      lineHeight="lineHeight80"
      fontWeight="fontWeightSemibold"
      color="colorText"
      mb="space90"
    >
      Oops, this page doesn't exist
    </Text>
    <Box>
      <Text>
        If you think you landed here in error, please let us know by{' '}
        <Anchor href="https://github.com/twilio-labs/paste/issues">filing an issue</Anchor>.
      </Text>
    </Box>
  </>
);

export {NotFound};
