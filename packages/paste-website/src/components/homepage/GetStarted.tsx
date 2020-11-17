import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {GetStarterWhy} from './GetStartedWhy';
import {GetStartedInclusive} from './GetStartedInclusive';
import {GetStartedRunning} from './GetStartedRunning';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

export const GetStarted: React.FC = () => {
  return (
    <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto" paddingX="space70">
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
    </Box>
  );
};
