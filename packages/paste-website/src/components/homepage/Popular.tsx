import { Box } from '@twilio-paste/box';
import { Grid, Column } from '@twilio-paste/grid';

import { PopularComponents } from './PopularComponents';
import { PopularPatterns } from './PopularPatterns';
import { PopularSectionHeader } from './PopularSectionHeader';
import { SITE_CONTENT_MAX_WIDTH, HOMEPAGE_SECTION_OVERFLOW_OFFSET } from '../../constants';
import { useSlantedSkew } from '../SlantedBackgroundGradient';
import { DoodleLoopSmall } from '../../assets/illustrations/DoodleLoopSmall';
import { DoodleCurve } from '../../assets/illustrations/DoodleCurve';

const PopularComponentsTopAngle = (): JSX.Element => {
  const [skewOffset] = useSlantedSkew();

  return (
    <Box
      backgroundColor="colorBackground"
      borderRadius="borderRadius20"
      height="75%"
      position="absolute"
      top={skewOffset - HOMEPAGE_SECTION_OVERFLOW_OFFSET}
      right={0}
      bottom={0}
      left={0}
      transform="skewY(-9deg)"
      transformOrigin="100% 0"
    />
  );
};

const PopularComponentsBottomAngle = (): JSX.Element => {
  const [skewOffset] = useSlantedSkew();

  return (
    <Box
      backgroundColor="colorBackground"
      borderRadius="borderRadius20"
      height="85%"
      position="absolute"
      top={0}
      bottom={skewOffset}
      right={0}
      left={0}
      transform="skewY(-9deg)"
      transformOrigin="100% 0"
      zIndex="zIndex10"
    />
  );
};

const PopularComponentsAndPatterns = (): JSX.Element => {
  return (
    <Box margin="space70" marginTop="space110" padding={['space90', 'space180']} position="relative">
      <PopularComponentsTopAngle />
      <PopularComponentsBottomAngle />
      <Box
        maxWidth={SITE_CONTENT_MAX_WIDTH}
        position="relative"
        marginTop="spaceNegative90"
        marginLeft="auto"
        marginRight="auto"
        zIndex="zIndex10"
      >
        <Box position="absolute" top={140} right={-22}>
          <DoodleCurve />
        </Box>
        <Box position="absolute" bottom={[25, 5, 5]} left={-40}>
          <DoodleLoopSmall />
        </Box>
        <PopularSectionHeader />
        <Grid gutter="space60">
          <Column span={[12, 6]}>
            <PopularComponents />
          </Column>
          <Column span={[12, 6]}>
            <PopularPatterns />
          </Column>
        </Grid>
      </Box>
    </Box>
  );
};

export { PopularComponentsAndPatterns };
