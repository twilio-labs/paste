import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Grid, Column} from '@twilio-paste/grid';

import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {FlexCard} from './FlexCard';
import {ProgrammableVoiceCard} from './ProgrammableVideoCard';
import {ReactCard} from './ReactCard';
import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';

export const WorksGreatWith: React.FC = () => {
  return (
    <LandingPageSection>
      <SlantedBackgroundGradient startColor="colorBackgroundPrimaryDark" endColor="colorBackgroundPrimaryDarkest" />
      <LandingPageSectionContent variant="default">
        <Text
          as="h2"
          color="colorTextInverse"
          fontSize={['fontSize70', 'fontSize90', 'fontSize90']}
          lineHeight={['lineHeight70', 'lineHeight90', 'lineHeight90']}
          marginBottom={['space30', 'space170', 'space170']}
        >
          Works great with
        </Text>
        <Grid equalColumnHeights gutter="space40" vertical={[true, true, false]}>
          <Column>
            <FlexCard />
          </Column>
          <Column>
            <ProgrammableVoiceCard />
          </Column>
          <Column span={[12, 4, 4]}>
            <ReactCard />
          </Column>
        </Grid>
      </LandingPageSectionContent>
    </LandingPageSection>
  );
};
