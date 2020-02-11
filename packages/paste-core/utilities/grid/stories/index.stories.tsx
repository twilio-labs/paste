import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '../src';

const spaceOptions = Object.keys(DefaultTheme.space);

storiesOf('Utilities|Grid', module)
  .addDecorator(withKnobs)
  .add('Grid - 12 Column and Gutter Support', () => {
    const gutterValue = select('gutter', spaceOptions, 'space0') as keyof ThemeShape['space'];
    return (
      <Grid gutter={gutterValue}>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            5
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            6
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            7
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            8
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            9
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            10
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            11
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            12
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 1 column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 3 Column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 4 Column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 6 Column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            5
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            6
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 5, 5, and 2 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={5}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            5
          </Box>
        </Column>
        <Column span={5}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            5
          </Box>
        </Column>
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 6 and 6 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={6}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            6
          </Box>
        </Column>
        <Column span={6}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            6
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 8 and 4 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={8}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            8
          </Box>
        </Column>
        <Column span={4}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 9 and 3 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={9}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            9
          </Box>
        </Column>
        <Column span={3}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 10 and 2 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={10}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            10
          </Box>
        </Column>
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 11 and 1 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={11}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            11
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column and Single Columns', () => {
    return (
      <Grid gutter="space20">
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 8 Column and 4 Single Columns', () => {
    return (
      <Grid gutter="space20">
        <Column span={8}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            8
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 8 Column Span with Offset', () => {
    return (
      <Grid>
        <Column span={[12, 6, 8]} offset={[0, 3, 2]}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            8
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Columns with Offset', () => {
    return (
      <Grid gutter="space20">
        <Column span={[12, 6, 6]} offset={[0, 2, 2]}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            6
          </Box>
        </Column>
        <Column span={4}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Right Offset Column', () => {
    return (
      <Grid>
        <Column span={4}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            4
          </Box>
        </Column>
        <Column span={4} offset={4}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Multiple Offset Columns', () => {
    return (
      <Grid>
        <Column span={2} offset={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
        <Column span={2} offset={6}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Sidebar', () => {
    return (
      <Grid gutter="space20">
        <Column span={3}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column span={9}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            9
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 3 Column Wider Center Column', () => {
    return (
      <Grid gutter="space60">
        <Column span={3}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column span={9}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            9
          </Box>
        </Column>
        <Column span={3}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Responsive', () => {
    return (
      <Grid gutter={['space20', 'space60', 'space90']}>
        <Column span={[2, 6, 8]}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            Responsive Column Size
          </Box>
        </Column>
        <Column span={[10, 6, 4]}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            Responsive Column Size
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Responsive Stack', () => {
    return (
      <Grid gutter="space20" vertical={[true, false, false]}>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            Responsive Column Size
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            Responsive Column Size
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Nested Column', () => {
    return (
      <Grid gutter="space40">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box height="size40">
            <Grid gutter="space20">
              <Column>
                <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
                  Nested Column 1
                </Box>
              </Column>
              <Column>
                <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
                  Nested Column 2
                </Box>
              </Column>
            </Grid>
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  });
