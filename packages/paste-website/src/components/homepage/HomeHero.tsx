import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Text} from '@twilio-paste/text';
import {NewComponentBanner} from './NewComponentBanner';
import {NewComponentBannerBadge} from './NewComponentBannerBadge';
import {NewComponentBannerLink} from './NewComponentBannerLink';
import {NewComponentBannerText} from './NewComponentBannerText';
import {HomeHeroIllustration} from './HomeHeroIllustration';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

const HomeHero: React.FC = () => {
  return (
    <Box paddingX={['space90', 'space180']} paddingY={['space90', 'space200']} position="relative">
      <SlantedBackgroundGradient
        skewAngle={0}
        startColor="colorBackgroundPrimaryDarker"
        endColor="colorBackgroundPrimaryDark"
      >
        <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto" position="relative">
          <Grid vertical={[true, false, false]}>
            <Column span={5}>
              <NewComponentBanner>
                <NewComponentBannerBadge>New!</NewComponentBannerBadge>
                <NewComponentBannerText>We just released a toast component!</NewComponentBannerText>
                <NewComponentBannerLink to="/components/toast">Check it out</NewComponentBannerLink>
              </NewComponentBanner>
              <Text
                as="h1"
                color="colorTextInverse"
                fontSize="fontSize110"
                lineHeight="lineHeight110"
                marginTop="space120"
              >
                Build inclusive, delightful Twilio customer experiences with Paste.
              </Text>
              <Text
                as="div"
                color="colorTextInverse"
                fontSize="fontSize40"
                fontWeight="fontWeightBold"
                lineHeight="lineHeight40"
                marginTop="space120"
              >
                <Anchor href="/roadmap" variant="inverse">
                  See our roadmap
                </Anchor>
              </Text>
            </Column>
            <Column span={7} height="100%">
              <HomeHeroIllustration />
            </Column>
          </Grid>
        </Box>
      </SlantedBackgroundGradient>
    </Box>
  );
};

export {HomeHero};
