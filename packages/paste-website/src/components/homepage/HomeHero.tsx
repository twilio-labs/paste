import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Text} from '@twilio-paste/text';
import {ArrowForwardIcon} from '@twilio-paste/icons/esm/ArrowForwardIcon';
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
    <Anchor href="/roadmap" variant="inverse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Box as="span" display="flex" alignItems="center">
        See our roadmap
        <Box
          as="span"
          display="flex"
          transform={hovered ? 'translateX(4px)' : 'translateX(0)'}
          transition="all 100ms ease"
        >
          <ArrowForwardIcon decorative display="inline-block" size="sizeIcon40" />
        </Box>
      </Box>
    </Anchor>
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
      <SlantedBackgroundGradient
        skewAngle={0}
        startColor="colorBackgroundPrimaryDarker"
        endColor="colorBackgroundPrimaryDark"
      >
        <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto" position="relative">
          <Grid vertical={[true, false, false]}>
            <Column span={5}>
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
