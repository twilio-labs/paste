import * as React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Stack, StackOrientation} from '../src';

const orientationOptions = ['horizontal', 'vertical'];
const spaceOptions = Object.keys(DefaultTheme.space);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Stack',
  decorators: [withKnobs],
  component: Stack,
};

export const DefaultStack = (): React.ReactNode => {
  const orientaionValue = select('orientation', orientationOptions, 'vertical') as StackOrientation;
  const spaceValue = select('spacing', spaceOptions, 'space40') as keyof ThemeShape['space'];
  return (
    <Stack orientation={orientaionValue} spacing={spaceValue}>
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

DefaultStack.story = {
  name: 'Stack',
};

export const StackVertical = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

StackVertical.story = {
  name: 'Stack - Vertical',
};

export const StackHorizontal = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

StackHorizontal.story = {
  name: 'Stack - Horizontal',
};

export const StackResponsive = (): React.ReactNode => {
  return (
    <Stack orientation={['vertical', 'horizontal', 'vertical']} spacing="space40">
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

StackResponsive.story = {
  name: 'Stack - Responsive',
};

export const OneChild = (): React.ReactNode => {
  return (
    <Box display="inline-block" padding="space20" backgroundColor="colorBackgroundPrimary">
      <Stack orientation="horizontal" spacing="space60">
        {null}
        <Card>
          <Heading as="h2" variant="heading20">
            First Card
          </Heading>
        </Card>
        {null}
      </Stack>
    </Box>
  );
};

OneChild.story = {
  name: 'Stack - One Child',
};
