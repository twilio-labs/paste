import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {GetStarterWhy} from './GetStartedWhy';
import {GetStartedInclusive} from './GetStartedInclusive';
import {GetStartedRunning} from './GetStartedRunning';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

export const GetStarted: React.FC = () => {
  const theme = useTheme();
  return (
    <Box paddingX={['space90', 'space180']} position="relative">
      <SlantedBackgroundGradient
        startColor="colorBackgroundPrimaryDarkest"
        endColor="colorBackgroundPrimaryDarker"
        css={{position: 'absolute', top: `-${theme.sizes.size20}`, right: '0', bottom: '0', left: '0'}}
      />
      <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto" position="relative" zIndex="zIndex10">
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
