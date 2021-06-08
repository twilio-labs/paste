import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Grid, Column} from '@twilio-paste/grid';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';

import {FlexCard} from './FlexCard';
import {ProgrammableVoiceCard} from './ProgrammableVideoCard';
import {ReactCard} from './ReactCard';
import {LandingPageSection, LandingPageSectionContent} from './LandingPageLayoutUtils';
import {DoodleLoopArrow} from '../../assets/illustrations/DoodleLoopArrow';

export const WorksGreatWith: React.FC = () => {
  const {backgroundColors} = useTheme();
  return (
    <LandingPageSection
      css={{
        background: `linear-gradient(90deg, ${backgroundColors.colorBackgroundPrimaryDark} 0%, ${backgroundColors.colorBackgroundPrimaryDarkest} 100%)`,
        clipPath: 'polygon(0px 80px,100% 0,100% 100%,0 100%)',
        paddingTop: '150px',
        marginTop: '-80px',
      }}
    >
      <LandingPageSectionContent variant="default">
        <Box position="relative">
          <Text
            as="h2"
            color="colorTextInverse"
            fontSize={['fontSize70', 'fontSize90', 'fontSize90']}
            lineHeight={['lineHeight70', 'lineHeight90', 'lineHeight90']}
            marginBottom={['space30', 'space170', 'space170']}
            position="relative"
          >
            <Box as="span" display="flex" columnGap="space70" alignItems="flex-start">
              Works great with
              <Box as="span" display={['none', 'none', 'block']}>
                <DoodleLoopArrow />
              </Box>
            </Box>
          </Text>
        </Box>
        <Grid equalColumnHeights gutter="space40" vertical={[true, false, false]}>
          <Column span={[12, 4, 4]}>
            <FlexCard />
          </Column>
          <Column span={[12, 4, 4]}>
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
