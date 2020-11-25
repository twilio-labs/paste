import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {PopularComponents} from './PopularComponents';
import {PopularPatterns} from './PopularPatterns';
import {PopularSectionHeader} from './PopularSectionHeader';
import {SITE_CONTENT_MAX_WIDTH, HOMEPAGE_SECTION_OVERFLOW_OFFSET} from '../../constants';
import {useSlantedSkew} from '../SlantedBackgroundGradient';

const PopularComponentsTopAngle: React.FC<{}> = () => {
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
      transformOrigin="100% 0"
    />
  );
};

const PopularComponentsAndPatterns: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const handleVisibilityChange = (isVisible: boolean): void => {
    if (!visible) {
      setVisible(isVisible);
    }
  };

  return (
    <Box margin="space70" marginTop="space110" padding={['space90', 'space180']} position="relative">
      <PopularComponentsTopAngle />
      <PopularComponentsBottomAngle />
      <Box position="relative" marginTop="spaceNegative90">
        <Box maxWidth={SITE_CONTENT_MAX_WIDTH} marginLeft="auto" marginRight="auto">
          <PopularSectionHeader />
          <VisibilitySensor onChange={handleVisibilityChange} partialVisibility minTopValue={75}>
            <Grid gutter="space60">
              <Column span={[12, 6]}>
                <PopularComponents show={visible} />
              </Column>
              <Column span={[12, 6]}>
                <PopularPatterns show={visible} />
              </Column>
            </Grid>
          </VisibilitySensor>
        </Box>
      </Box>
    </Box>
  );
};

export {PopularComponentsAndPatterns};
