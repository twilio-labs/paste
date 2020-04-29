import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Stack, Orientation} from '../src';

const orientationOptions = ['horizontal', 'vertical'];
const spaceOptions = Object.keys(DefaultTheme.space);

storiesOf('Layout|Stack', module)
  .addDecorator(withKnobs)
  .add('Stack', () => {
    const orientaionValue = select('orientation', orientationOptions, 'vertical') as Orientation;
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
        </Card>
        <Card>
          <Heading as="h2" variant="heading20">
            Third Card
          </Heading>
        </Card>
      </Stack>
    );
  })
  .add('Stack - Vertical', () => {
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
        </Card>
        <Card>
          <Heading as="h2" variant="heading20">
            Third Card
          </Heading>
        </Card>
      </Stack>
    );
  })
  .add('Stack - Horizontal', () => {
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
        </Card>
        <Card>
          <Heading as="h2" variant="heading20">
            Third Card
          </Heading>
        </Card>
      </Stack>
    );
  });
