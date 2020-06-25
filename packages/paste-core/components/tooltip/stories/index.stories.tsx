import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {Absolute} from '@twilio-paste/absolute';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Tooltip} from '../src';

storiesOf('Components|Tooltip', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Tooltip text={text('text', 'Welcome to Paste!')}>
        <Button variant="primary">Open tooltip</Button>
      </Tooltip>
    );
  })
  .add('Tooltip Placements', () => {
    return (
      <Box marginTop="space120" paddingTop="space120" paddingLeft="space60">
        <Stack orientation="horizontal" spacing="space40">
          <Tooltip text="Welcome to Paste!" placement="top">
            <Button variant="primary">Open tooltip to the top</Button>
          </Tooltip>
          <Tooltip text="Welcome to Paste!" placement="bottom">
            <Button variant="primary">Open tooltip to the bottom</Button>
          </Tooltip>
          <Tooltip text="Welcome to Paste!" placement="right">
            <Button variant="primary">Open tooltip to the right</Button>
          </Tooltip>
          <Tooltip text="Welcome to Paste!" placement="left">
            <Button variant="primary">Open tooltip to the left</Button>
          </Tooltip>
        </Stack>
      </Box>
    );
  })
  .add('Automatic edge placement', () => {
    return (
      <>
        <Absolute preset="top_left">
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Absolute>
        <Absolute preset="top_right">
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Absolute>
        <Absolute preset="bottom_left">
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Absolute>
        <Absolute preset="bottom_right">
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Absolute>
      </>
    );
  })
  .add('Automatic adjusted placement', () => {
    return (
      <>
        <Absolute preset="bottom_left">
          <Tooltip text="Tooltip adjusted to the top because bottom would be off screen" placement="bottom">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Absolute>
      </>
    );
  })
  .add('Icon Button Tooltip', () => {
    return (
      <Tooltip text="Welcome to Paste!">
        <Button variant="secondary" size="icon">
          <InformationIcon decorative={false} title="Open Tooltip" />
        </Button>
      </Tooltip>
    );
  })
  .add('Custom Tooltip', () => {
    return (
      <Box display="flex" alignItems="center">
        <Text as="span">Tooltip should appear from the icon.</Text>
        <Tooltip text="Welcome to Paste!">
          <Anchor href="https://paste.twilio.design">
            <InformationIcon decorative={false} title="Open tooltip" display="block" />
          </Anchor>
        </Tooltip>
      </Box>
    );
  })
  .add('Multiple Tooltips', () => {
    return (
      <>
        <Box display="flex" alignItems="center">
          <Text as="span">Tooltip should appear from the icon.</Text>
          <Tooltip text="Welcome to Paste!">
            <Anchor href="https://paste.twilio.design">
              <InformationIcon decorative={false} title="Open Tooltip" display="block" />
            </Anchor>
          </Tooltip>
        </Box>
        <Tooltip text="Welcome to Paste!">
          <Button variant="primary">Open tooltip</Button>
        </Tooltip>
      </>
    );
  });
