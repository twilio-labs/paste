import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Separator} from '@twilio-paste/separator';

export const SidebarSeparator: React.FC = () => (
  <Box paddingX="space30" paddingY="space20">
    <Separator orientation="horizontal" />
  </Box>
);
