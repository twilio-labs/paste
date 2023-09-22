import { Box } from '@twilio-paste/core/box';
import * as React from 'react';

import { KitchenSink } from '../components/KitchenSink';
import { SideBar } from '../components/SideBar';

export const IndexPage = (): JSX.Element => {
  return (
    <Box as="main" display="flex" height="100vh" overflow="hidden">
      <Box height="100vh" flexBasis="25%" backgroundColor="colorBackground" overflow="auto">
        <SideBar />
      </Box>
      <Box height="100vh" flexBasis="75%" overflow="auto">
        <KitchenSink />
      </Box>
    </Box>
  );
};
