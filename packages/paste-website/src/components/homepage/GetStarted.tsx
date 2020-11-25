import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Grid, Column} from '@twilio-paste/grid';
import {GetStarterWhy} from './GetStartedWhy';
import {GetStartedInclusive} from './GetStartedInclusive';
import {GetStartedRunning} from './GetStartedRunning';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH, HOMEPAGE_SECTION_OVERFLOW_OFFSET} from '../../constants';

export const GetStarted: React.FC = () => {
  const [whyVisible, setWhyVisible] = React.useState(false);
  const [inclusiveVisible, setInclusiveVisible] = React.useState(false);
  const [runningVisible, setRunningVisible] = React.useState(false);

  const handleWhyVisibilityChange = (isVisible: boolean): void => {
    if (!whyVisible) {
      setWhyVisible(isVisible);
    }
  };
  const handleInclusiveVisibilityChange = (isVisible: boolean): void => {
    if (!inclusiveVisible) {
      setInclusiveVisible(isVisible);
    }
  };
  const handleRunningVisibilityChange = (isVisible: boolean): void => {
    if (!runningVisible) {
      setRunningVisible(isVisible);
    }
  };

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

          <Grid as="section" gutter="space40" vertical={[true, false, false]} equalColumnHeights>
            <Column span={4}>
              <Box marginBottom={['space70', 'space0', 'space0']}>
                <VisibilitySensor onChange={handleWhyVisibilityChange} partialVisibility minTopValue={75}>
                  <GetStarterWhy show={whyVisible} />
                </VisibilitySensor>
              </Box>
            </Column>
            <Column span={4}>
              <Box marginBottom={['space70', 'space0', 'space0']}>
                <VisibilitySensor onChange={handleInclusiveVisibilityChange} partialVisibility minTopValue={75}>
                  <GetStartedInclusive show={inclusiveVisible} />
                </VisibilitySensor>
              </Box>
            </Column>
            <Column span={4}>
              <VisibilitySensor onChange={handleRunningVisibilityChange} partialVisibility minTopValue={75}>
                <GetStartedRunning show={runningVisible} />
              </VisibilitySensor>
            </Column>
          </Grid>
        </Box>
      </SlantedBackgroundGradient>
    </Box>
  );
};
