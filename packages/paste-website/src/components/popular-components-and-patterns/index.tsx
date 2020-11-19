import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {PopularComponents} from './PopularComponents';
import {PopularPatterns} from './PopularPatterns';
import {PopularSectionHeader} from './PopularSectionHeader';

const PopularComponentsAndPatterns: React.FC = () => {
  return (
    <Box backgroundColor="colorBackground" padding={['space90', 'space180']}>
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
  );
};

export {PopularComponentsAndPatterns};
