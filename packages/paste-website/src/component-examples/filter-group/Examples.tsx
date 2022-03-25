import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';

import {DefaultFilterGroup} from './components/DefaultFilterGroup';
import {TABLE_DATA} from './constants';

export const DefaultFilterGroupExample: React.FC = () => (
  <Box marginBottom="space70" data-cy="filter-group-default-example">
    <DefaultFilterGroup data={TABLE_DATA} />
    <Anchor showExternal href="https://codesandbox.io/s/default-filter-group-rloskb?file=/src/App.tsx">
      View example in CodeSandbox
    </Anchor>
  </Box>
);

export const EmptyStateFilterGroupExample: React.FC = () => (
  <Box marginBottom="space70">
    <DefaultFilterGroup data={TABLE_DATA} defaultRoomType="Peer to Peer" defaultDateRange="day" />
    <Anchor showExternal href="https://codesandbox.io/s/empty-state-filter-group-e3pvdu?file=/src/App.tsx">
      View example in CodeSandbox
    </Anchor>
  </Box>
);
