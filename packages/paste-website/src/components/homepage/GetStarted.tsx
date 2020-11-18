import * as React from 'react';
import {Grid, Column} from '@twilio-paste/grid';
import {GetStarterWhy} from './GetStartedWhy';
import {GetStartedInclusive} from './GetStartedInclusive';
import {GetStartedRunning} from './GetStartedRunning';

export const GetStarted: React.FC = () => {
  return (
    <Box backgroundColor="colorBackgroundPrimaryDarker" paddingX={['space90', 'space180']}>
      <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto">
        <Text
          as="h2"
          color="colorTextInverse"
          fontSize="fontSize70"
          fontWeight="fontWeightBold"
          lineHeight="lineHeight70"
          marginBottom="space70"
        >
          Learn more to get started
        </Text>
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
    </Box>
  );
};
