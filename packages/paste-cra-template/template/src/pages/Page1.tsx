import * as React from 'react';
import {Button} from '@twilio-paste/core/button';
import {Box} from '@twilio-paste/core/box';
import {Heading} from '@twilio-paste/core/heading';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';

import {BasicCombobox} from '../components/BasicCombobox';

const Page1 = (): JSX.Element => {
  return (
    <Box margin="space60">
      <Heading as="h1" variant="heading10">
        Start here.
      </Heading>
      <Button variant="primary">
        <PlusIcon decorative />
        Primary button
      </Button>
      <BasicCombobox />
    </Box>
  );
};

Page1.displayName = 'Page1';

export default Page1;
