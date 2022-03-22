import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {DefaultFilterGroup} from './components/DefaultFilterGroup';

export const DefaultFilterGroupExample: React.FC = () => (
  <Box marginBottom="space70">
    <DefaultFilterGroup />
  </Box>
);

export const EmptyStateFilterGroupExample: React.FC = () => (
  <Box marginBottom="space70">
    <DefaultFilterGroup defaultRoomType="Peer to Peer" defaultDateRange="day" />
  </Box>
);
