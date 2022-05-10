import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {WatchThisSpace} from '../src/components/empty-state/WatchThisSpace';
import {DoodleZigzag} from '../src/assets/illustrations/DoodleZigzag';

export default {
  title: 'Website/EmptyState',
  component: WatchThisSpace,
};

export const WatchThisSpaceExample = (): React.ReactNode => {
  return (
    <Box width="size50">
      <WatchThisSpace>
        <DoodleZigzag />
      </WatchThisSpace>
    </Box>
  );
};
