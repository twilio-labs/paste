import * as React from 'react';
import type {ThemeShape} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Truncate} from '@twilio-paste/truncate';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Grid, Column} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Grid',
  component: Grid,
  subcomponents: {Column},
};

export const Grid12ColumnAndGutterSupport = (): React.ReactNode => {
  const asValue = 'div' as keyof JSX.IntrinsicElements;
  const gutterValue = 'space0' as keyof ThemeShape['space'];
  return (
    <Grid as={asValue} gutter={gutterValue}>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          3
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          4
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          5
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          6
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          7
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          8
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          9
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          10
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          11
        </Box>
      </Column>
      <Column as={asValue}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          12
        </Box>
      </Column>
    </Grid>
  );
};

Grid12ColumnAndGutterSupport.story = {
  name: 'Grid - 12 Column and Gutter Support',
};

export const Grid1Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
    </Grid>
  );
};

Grid1Column.story = {
  name: 'Grid - 1 column',
};

export const Grid2Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
    </Grid>
  );
};

Grid2Column.story = {
  name: 'Grid - 2 column',
};

export const Grid3Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          3
        </Box>
      </Column>
    </Grid>
  );
};

Grid3Column.story = {
  name: 'Grid - 3 Column',
};

export const Grid4Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          3
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          4
        </Box>
      </Column>
    </Grid>
  );
};

Grid4Column.story = {
  name: 'Grid - 4 Column',
};

export const Grid6Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          3
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          4
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          5
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          6
        </Box>
      </Column>
    </Grid>
  );
};

Grid6Column.story = {
  name: 'Grid - 6 Column',
};

export const Grid55And2Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={5}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          5
        </Box>
      </Column>
      <Column span={5}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          5
        </Box>
      </Column>
      <Column span={2}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          2
        </Box>
      </Column>
    </Grid>
  );
};

Grid55And2Column.story = {
  name: 'Grid - 5, 5, and 2 Column',
};

export const Grid6And6Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={6}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          6
        </Box>
      </Column>
      <Column span={6}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          6
        </Box>
      </Column>
    </Grid>
  );
};

Grid6And6Column.story = {
  name: 'Grid - 6 and 6 Column',
};

export const Grid8And4Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={8}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          8
        </Box>
      </Column>
      <Column span={4}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          4
        </Box>
      </Column>
    </Grid>
  );
};

Grid8And4Column.story = {
  name: 'Grid - 8 and 4 Column',
};

export const Grid9And3Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={9}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          9
        </Box>
      </Column>
      <Column span={3}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          3
        </Box>
      </Column>
    </Grid>
  );
};

Grid9And3Column.story = {
  name: 'Grid - 9 and 3 Column',
};

export const Grid10And2Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={10}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          10
        </Box>
      </Column>
      <Column span={2}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
    </Grid>
  );
};

Grid10And2Column.story = {
  name: 'Grid - 10 and 2 Column',
};

export const Grid11And1Column = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={11}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          11
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
    </Grid>
  );
};

Grid11And1Column.story = {
  name: 'Grid - 11 and 1 Column',
};

export const Grid2ColumnAndSingleColumns = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={2}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          2
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
    </Grid>
  );
};

Grid2ColumnAndSingleColumns.story = {
  name: 'Grid - 2 Column and Single Columns',
};

export const Grid8ColumnAnd4SingleColumns = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={8}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          8
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
      <Column span={1}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          1
        </Box>
      </Column>
    </Grid>
  );
};

Grid8ColumnAnd4SingleColumns.story = {
  name: 'Grid - 8 Column and 4 Single Columns',
};

export const Grid8ColumnSpanWithOffset = (): React.ReactNode => {
  return (
    <Grid>
      <Column span={[12, 6, 8]} offset={[0, 3, 2]}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          8
        </Box>
      </Column>
    </Grid>
  );
};

Grid8ColumnSpanWithOffset.story = {
  name: 'Grid - 8 Column Span with Offset',
};

export const Grid2ColumnsWithOffset = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={[12, 6, 6]} offset={[0, 2, 2]}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          6
        </Box>
      </Column>
      <Column span={4}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          4
        </Box>
      </Column>
    </Grid>
  );
};

Grid2ColumnsWithOffset.story = {
  name: 'Grid - 2 Columns with Offset',
};

export const GridRightOffsetColumn = (): React.ReactNode => {
  return (
    <Grid>
      <Column span={4}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          4
        </Box>
      </Column>
      <Column span={4} offset={4}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          4
        </Box>
      </Column>
    </Grid>
  );
};

GridRightOffsetColumn.story = {
  name: 'Grid - Right Offset Column',
};

export const GridMultipleOffsetColumns = (): React.ReactNode => {
  return (
    <Grid>
      <Column span={2} offset={2}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          2
        </Box>
      </Column>
      <Column span={2} offset={6}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          2
        </Box>
      </Column>
    </Grid>
  );
};

GridMultipleOffsetColumns.story = {
  name: 'Grid - Multiple Offset Columns',
};

export const Grid2ColumnSidebar = (): React.ReactNode => {
  return (
    <Grid gutter="space20">
      <Column span={3}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          3
        </Box>
      </Column>
      <Column span={9}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          9
        </Box>
      </Column>
    </Grid>
  );
};

Grid2ColumnSidebar.story = {
  name: 'Grid - 2 Column Sidebar',
};

export const Grid3ColumnWiderCenterColumn = (): React.ReactNode => {
  return (
    <Grid gutter="space60">
      <Column span={2}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          2
        </Box>
      </Column>
      <Column span={8}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          8
        </Box>
      </Column>
      <Column span={2}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          2
        </Box>
      </Column>
    </Grid>
  );
};

Grid3ColumnWiderCenterColumn.story = {
  name: 'Grid - 3 Column Wider Center Column',
};

export const Grid2ColumnResponsive = (): React.ReactNode => {
  return (
    <Grid gutter={['space20', 'space60', 'space90']}>
      <Column span={[2, 6, 8]}>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          Responsive Column Size
        </Box>
      </Column>
      <Column span={[10, 6, 4]}>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          Responsive Column Size
        </Box>
      </Column>
    </Grid>
  );
};

Grid2ColumnResponsive.story = {
  name: 'Grid - 2 Column Responsive',
};

export const Grid2ColumnResponsiveStack = (): React.ReactNode => {
  return (
    <Grid gutter="space20" vertical={[true, false, false]}>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          Responsive Column Size
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
          Responsive Column Size
        </Box>
      </Column>
    </Grid>
  );
};

Grid2ColumnResponsiveStack.story = {
  name: 'Grid - 2 Column Responsive Stack',
};

export const GridNestedColumn = (): React.ReactNode => {
  return (
    <Grid gutter="space40">
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          1
        </Box>
      </Column>
      <Column>
        <Box height="size40">
          <Grid gutter="space20">
            <Column>
              <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
                Nested Column 1
              </Box>
            </Column>
            <Column>
              <Box backgroundColor="colorBackgroundPrimaryWeak" height="size40">
                Nested Column 2
              </Box>
            </Column>
          </Grid>
        </Box>
      </Column>
      <Column>
        <Box backgroundColor="colorBackgroundPrimaryWeaker" height="size40">
          3
        </Box>
      </Column>
    </Grid>
  );
};

GridNestedColumn.story = {
  name: 'Grid - Nested Column',
};

export const Grid3ColumnCardLayout = (): React.ReactNode => {
  return (
    <Grid gutter="space70" vertical={[true, false, false]}>
      <Column>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Card Heading
          </Heading>
          <Text as="p">Body</Text>
        </Card>
      </Column>
      <Column>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Card Heading
          </Heading>
          <Text as="p">Body</Text>
        </Card>
      </Column>
      <Column>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Card Heading
          </Heading>
          <Text as="p">Body</Text>
        </Card>
      </Column>
    </Grid>
  );
};

Grid3ColumnCardLayout.story = {
  name: 'Grid - 3 Column Card Layout',
};

export const GridWrapped2ColumnCardLayout = (): React.ReactNode => {
  return (
    <Grid gutter="space70" vertical={[true, false, false]}>
      <Column span={6}>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Card Heading
          </Heading>
          <Text as="p">Body</Text>
        </Card>
      </Column>
      <Column span={6}>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Card Heading
          </Heading>
          <Text as="p">Body</Text>
        </Card>
      </Column>
      <Column span={6}>
        <Box marginTop="space70">
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Box>
      </Column>
      <Column span={6}>
        <Box marginTop="space70">
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Box>
      </Column>
    </Grid>
  );
};

GridWrapped2ColumnCardLayout.story = {
  name: 'Grid - Wrapped 2 Column Card Layout',
};

export const Grid2ColumnContentWithCard = (): React.ReactNode => {
  return (
    <Grid gutter="space70" vertical={[true, false, false]}>
      <Column span={8}>
        <Heading as="h2" variant="heading20">
          Content Heading
        </Heading>
        <Paragraph>
          Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
          chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
        </Paragraph>
        <Paragraph>
          Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
          croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
          intelligentsia. Literally heirloom blue bottle etsy.
        </Paragraph>
      </Column>
      <Column span={4}>
        <Card padding="space70">
          <Heading as="h2" variant="heading20">
            Card Heading
          </Heading>
          <Text as="p">Body</Text>
        </Card>
      </Column>
    </Grid>
  );
};

Grid2ColumnContentWithCard.story = {
  name: 'Grid - 2 Column Content with Card',
};

export const GridEqualHeightColumns = (): React.ReactNode => {
  return (
    <>
      <Grid gutter="space30" vertical={[true, true, false]} equalColumnHeights>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Why use Paste?
            </Heading>
            <Paragraph marginBottom="space0">
              Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to do
              the right thing, cheaply.
            </Paragraph>
          </Card>
        </Column>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Inclusive by default
            </Heading>
            <Paragraph marginBottom="space0">
              Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
              to build accessibly.
            </Paragraph>
            <Paragraph marginBottom="space0">
              Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
              to build accessibly.
            </Paragraph>
          </Card>
        </Column>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Get up and running
            </Heading>
            <Paragraph marginBottom="space0">
              Whether you’re a designer or developer, setting up Paste is easy and only takes a few minutes!
            </Paragraph>
          </Card>
        </Column>
      </Grid>
      <Grid gutter="space30" equalColumnHeights>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Why use Paste?
            </Heading>
            <Paragraph marginBottom="space0">
              Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to do
              the right thing, cheaply.
            </Paragraph>
          </Card>
        </Column>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Inclusive by default
            </Heading>
            <Paragraph marginBottom="space0">
              Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
              to build accessibly.
            </Paragraph>
            <Paragraph marginBottom="space0">
              Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
              to build accessibly.
            </Paragraph>
          </Card>
        </Column>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Get up and running
            </Heading>
            <Paragraph marginBottom="space0">
              Whether you’re a designer or developer, setting up Paste is easy and only takes a few minutes!
            </Paragraph>
          </Card>
        </Column>
      </Grid>
    </>
  );
};

GridEqualHeightColumns.story = {
  name: 'Grid - Equal height columns',
};

export const GridContainingLongContent = (): React.ReactNode => {
  return (
    <Box width="size50">
      <Text as="p" marginBottom="space100">
        Proving that long content shouldn&rsquo;t break out from it&rsquo;s flex container width
      </Text>
      <Grid gutter="space70">
        <Column span={8}>
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Column>
        <Column span={4}>
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Column>
      </Grid>
      <Grid gutter="space70">
        <Column>
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Column>
        <Column>
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Column>
      </Grid>
    </Box>
  );
};

GridContainingLongContent.story = {
  name: 'Grid - Containing long content',
};

export const CustomGrid: React.FC = () => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Grid gutter="space30" equalColumnHeights>
        <Column>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Default
            </Heading>
            <Paragraph marginBottom="space0">
              Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to do
              the right thing, cheaply.
            </Paragraph>
          </Card>
        </Column>
        <Column>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Default
            </Heading>
            <Paragraph marginBottom="space0">
              Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
              to build accessibly.
            </Paragraph>
            <Paragraph marginBottom="space0">
              Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
              to build accessibly.
            </Paragraph>
          </Card>
        </Column>
      </Grid>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          GRID: {
            backgroundColor: 'colorBackgroundPrimary',
            borderRadius: 'borderRadius30',
            padding: 'space30',
          },
          COLUMN: {
            backgroundColor: 'colorBackgroundDestructiveWeaker',
            padding: 'space30',
          },
        }}
      >
        <Grid gutter="space30" equalColumnHeights>
          <Column>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Customized
              </Heading>
              <Paragraph marginBottom="space0">
                Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to
                do the right thing, cheaply.
              </Paragraph>
            </Card>
          </Column>
          <Column>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Customized
              </Heading>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
            </Card>
          </Column>
        </Grid>
      </CustomizationProvider>
      <CustomizationProvider
        baseTheme="default"
        elements={{
          NEW_GRID: {
            backgroundColor: 'colorBackgroundStrongest',
            padding: 'space60',
          },
          NEW_COLUMN: {
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            padding: 'space40',
          },
          ANOTHER_NEW_COLUMN: {
            backgroundColor: 'colorBackgroundTrial',
            padding: 'space80',
          },
        }}
      >
        <Grid element="NEW_GRID" gutter="space30" equalColumnHeights>
          <Column element="NEW_COLUMN">
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Customized element
              </Heading>
              <Paragraph marginBottom="space0">
                Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to
                do the right thing, cheaply.
              </Paragraph>
            </Card>
          </Column>
          <Column element="ANOTHER_NEW_COLUMN">
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Customized element
              </Heading>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
            </Card>
          </Column>
        </Grid>
      </CustomizationProvider>
    </Stack>
  );
};
