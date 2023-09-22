/* DISCLAIMER: this is an example, not meant to be used in production */
import { Anchor } from '@twilio-paste/anchor';
import { Box } from '@twilio-paste/box';

import { CustomDateFilterGroup } from './components/CustomDateFilterGroup';
import { DefaultFilterGroup } from './components/DefaultFilterGroup';
import { DATE_TIME_TABLE_DATA, TABLE_DATA } from './constants';

export const DefaultFilterGroupExample = (): JSX.Element => (
  <Box marginBottom="space70" data-cy="filter-group-default-example">
    <DefaultFilterGroup data={TABLE_DATA} />
    <Anchor showExternal href="https://codesandbox.io/s/default-filter-group-rloskb?file=/src/App.tsx">
      <strong>View example in CodeSandbox</strong>
    </Anchor>
  </Box>
);

export const EmptyStateFilterGroupExample = (): JSX.Element => (
  <Box marginBottom="space70">
    <DefaultFilterGroup data={TABLE_DATA} defaultRoomType="Peer to Peer" defaultDateRange="day" />
    <Anchor showExternal href="https://codesandbox.io/s/empty-state-filter-group-e3pvdu?file=/src/App.tsx">
      <strong>View example in CodeSandbox</strong>
    </Anchor>
  </Box>
);

export const CustomDateFilterGroupExample = (): JSX.Element => (
  <Box marginBottom="space70" data-cy="custom-filter-group-example">
    <CustomDateFilterGroup data={DATE_TIME_TABLE_DATA} />
    <Anchor showExternal href="https://codesandbox.io/s/custom-date-time-filter-group-unsgkp?file=/src/App.tsx">
      <strong>View example in CodeSandbox</strong>
    </Anchor>
  </Box>
);
