import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Text} from '@twilio-paste/text';
import {NewComponentBanner} from './NewComponentBanner';
import {NewComponentBannerBadge} from './NewComponentBannerBadge';
import {NewComponentBannerLink} from './NewComponentBannerLink';
import {NewComponentBannerText} from './NewComponentBannerText';
import {SiteHeroIllustration} from './SiteHeroIllustration';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

const SiteHero: React.FC = () => {
  return (
    <Box
      backgroundColor="colorBackgroundPrimaryDarker"
      paddingLeft={['space90', 'space180']}
      paddingRight={['space90', 'space180']}
      paddingTop="space200"
    >
      <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto">
        <Grid gutter="space40" vertical={[true, false, false]}>
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
          <Column span={7}>
            <SiteHeroIllustration />
          </Column>
        </Grid>
      </Box>
    </Box>
  );
};

export {SiteHero};
