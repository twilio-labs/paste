import * as React from 'react';
import {Box} from '@twilio-paste/core/box';
import {Grid, Column} from '@twilio-paste/core/grid';
import {PopularComponents} from './PopularComponents';
import {PopularPatterns} from './PopularPatterns';
import {PopularSectionHeader} from './PopularSectionHeader';
import {SITE_CONTENT_MAX_WIDTH} from '../../constants';

const PopularComponentsAndPatterns: React.FC = () => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      margin="space70"
      position="relative"
      overflow="hidden"
    >
      <Box backgroundColor="colorBackground" padding={['space90', 'space180']}>
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
