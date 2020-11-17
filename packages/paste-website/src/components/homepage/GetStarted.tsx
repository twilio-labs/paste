import * as React from 'react';
import {Grid, Column} from '@twilio-paste/core/grid';

import {GetStarterWhy} from './GetStartedWhy';
import {GetStartedInclusive} from './GetStartedInclusive';
import {GetStartedRunning} from './GetStartedRunning';

export const GetStarted: React.FC = () => {
  return (
    <Grid as="section" gutter="space40" vertical={[true, false, false]}>
      <Column span={4}>
        <GetStarterWhy />
      </Column>
      <Column span={4}>
        <GetStartedInclusive />
      </Column>
      <Column span={4}>
        <GetStartedRunning />
      </Column>
    </Grid>
  );
};
