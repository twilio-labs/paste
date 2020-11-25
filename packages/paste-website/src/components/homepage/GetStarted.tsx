import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Grid, Column} from '@twilio-paste/grid';
import {GetStarterWhy} from './GetStartedWhy';
import {GetStartedInclusive} from './GetStartedInclusive';
import {GetStartedRunning} from './GetStartedRunning';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH, HOMEPAGE_SECTION_OVERFLOW_OFFSET} from '../../constants';

export const GetStarted: React.FC = () => {
  return (
    <Box paddingX={['space90', 'space180']} position="relative">
      <SlantedBackgroundGradient
        startColor="colorBackgroundPrimaryDarkest"
        endColor="colorBackgroundPrimaryDarker"
        styles={{bottom: `${HOMEPAGE_SECTION_OVERFLOW_OFFSET}px`}}
      >
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          marginLeft="auto"
          marginRight="auto"
          position="relative"
          zIndex="zIndex10"
          paddingTop="space200"
          marginTop="spaceNegative160"
        >
          <Text
            as="h3"
            color="colorTextInverse"
            fontSize="fontSize70"
            lineHeight="lineHeight70"
            fontWeight="fontWeightBold"
            marginBottom="space70"
          >
            Learn more and get started
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
      </SlantedBackgroundGradient>
    </Box>
  );
};
