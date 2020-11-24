import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {PopularComponents} from './PopularComponents';
import {PopularPatterns} from './PopularPatterns';
import {PopularSectionHeader} from './PopularSectionHeader';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';
import {useSlantedSkew} from '../SlantedBackgroundGradient';

const PopularComponentsTopAngle: React.FC<{}> = () => {
  const [skewOffset] = useSlantedSkew();

  return (
    <Box
      backgroundColor="colorBackground"
      borderRadius="borderRadius20"
      height="75%"
      position="absolute"
      top={skewOffset}
      right={0}
      bottom={0}
      left={0}
      transform="skewY(-9deg)"
      transformOrigin="85% 0"
    />
  );
};

const PopularComponentsBottomAngle: React.FC<{}> = () => {
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
      transformOrigin="85% 0"
    />
  );
};

const PopularComponentsAndPatterns: React.FC = () => {
  return (
    <Box margin="space70" marginTop="space200" padding={['space90', 'space180']} position="relative">
      <PopularComponentsTopAngle />
      <PopularComponentsBottomAngle />
      <Box position="relative">
        <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto">
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
    </Box>
  );
};

export {PopularComponentsAndPatterns};
