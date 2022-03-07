import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Text} from '@twilio-paste/text';
import {Badge} from '@twilio-paste/badge';
import {Stack} from '@twilio-paste/stack';
import {ArrowForwardIcon} from '@twilio-paste/icons/esm/ArrowForwardIcon';
import {NewComponentBanner} from './NewComponentBanner';
import {NewComponentBannerLink} from './NewComponentBannerLink';
import {NewComponentBannerText} from './NewComponentBannerText';
import {HomeHeroIllustration} from './HomeHeroIllustration';
import {SlantedBackgroundGradient} from '../SlantedBackgroundGradient';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

const SeeRoadmapAnchor: React.FC = () => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };
  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  return (
    <Box as="span" display="flex" alignItems="center">
      <Anchor
        href="/roadmap"
        variant="inverse"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() =>
          trackCustomEvent({
            category: 'Hero',
            action: 'click-see-roadmap',
            label: 'See our roadmap',
          })
        }
      >
        See our roadmap
      </Anchor>
      <Box
        as="span"
        display="flex"
        transform={hovered ? 'translateY(1px) translateX(4px)' : 'translateY(1px) translateX(0)'}
        transition="all 100ms ease"
      >
        <ArrowForwardIcon decorative display="inline-block" size="sizeIcon40" />
      </Box>
    </Box>
  );
};

const HomeHero: React.FC = () => {
  return (
    <Box
      paddingX={['space90', 'space180']}
      paddingTop={['space90', 'space200']}
      paddingBottom={['space90', 'space160', 'space160']}
      position="relative"
    >
      <SlantedBackgroundGradient skewAngle={0} startColor="colorBackgroundBrandStrong" endColor="colorBackgroundBrand">
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          marginLeft="auto"
          marginRight="auto"
          position="relative"
          zIndex="zIndex10"
        >
          <Grid vertical={[true, false, false]}>
            <Column span={5}>
              <Stack orientation="vertical" spacing="space40">
                <NewComponentBanner>
                  <Badge as="span" variant="new">
                    New!
                  </Badge>
                  <NewComponentBannerText>We&apos;re hiring a Staff Product Designer!</NewComponentBannerText>
                  <NewComponentBannerLink
                    showExternal
                    to="https://boards.greenhouse.io/twilio/jobs/3823505"
                    onClick={() =>
                      trackCustomEvent({
                        category: 'Hero',
                        action: 'click-new-component-banner',
                        label: 'Go to Staff Designer Position',
                      })
                    }
                  >
                    Apply here
                  </NewComponentBannerLink>
                </NewComponentBanner>
                <NewComponentBanner>
                  <Badge as="span" variant="new">
                    New!
                  </Badge>
                  <NewComponentBannerText>We&apos;re hiring a Principal UX Engineer!</NewComponentBannerText>
                  <NewComponentBannerLink
                    showExternal
                    to="https://boards.greenhouse.io/twilio/jobs/3873421"
                    onClick={() =>
                      trackCustomEvent({
                        category: 'Hero',
                        action: 'click-new-component-banner',
                        label: 'Go to Principal UX',
                      })
                    }
                  >
                    Apply here
                  </NewComponentBannerLink>
                </NewComponentBanner>
              </Stack>
              <Text
                as="h1"
                color="colorTextInverse"
                fontSize={['fontSize90', 'fontSize110']}
                lineHeight={['lineHeight90', 'lineHeight110']}
                marginTop={['space80', 'space120']}
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
                <SeeRoadmapAnchor />
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
