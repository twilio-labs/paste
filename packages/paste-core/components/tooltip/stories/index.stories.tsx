import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Theme} from '@twilio-paste/theme';
import {useTooltipState, Tooltip} from '../src';

export const StateHookExample: React.FC = () => {
  const tooltip = useTooltipState();
  return (
    <Theme.Provider theme="console">
      <Stack orientation="horizontal" spacing="space60">
        <Tooltip
          data-testid="state-hook-tooltip"
          state={tooltip}
          text="This should be visible by pressing another button"
        >
          <Button variant="primary">Open tooltip</Button>
        </Tooltip>
        <Button variant="primary" onClick={() => tooltip.show()} data-testid="show-button">
          Open tooltip on click
        </Button>
        <Button variant="primary" onClick={() => tooltip.hide()} data-testid="hide-button">
          Close tooltip on click
        </Button>
      </Stack>
    </Theme.Provider>
  );
};

storiesOf('Components|Tooltip', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return (
        <Tooltip visible text={text('text', 'Welcome to Paste!')}>
          <Button variant="primary">Open tooltip</Button>
        </Tooltip>
      );
    },
    {chromatic: {delay: 300}}
  )
  .add(
    'Tooltip Placements',
    () => {
      return (
        <Box margin="space190" padding="space190">
          <Stack orientation="horizontal" spacing="space40">
            <Tooltip visible text="Welcome!" placement="left">
              <Button variant="primary">Open tooltip to the left</Button>
            </Tooltip>
            <Tooltip visible text="Welcome to Paste!" placement="top">
              <Button variant="primary">Open tooltip to the top</Button>
            </Tooltip>
            <Tooltip visible text="Welcome to Paste!" placement="bottom">
              <Button variant="primary">Open tooltip to the bottom</Button>
            </Tooltip>
            <Tooltip visible text="Welcome to Paste!" placement="right">
              <Button variant="primary">Open tooltip to the right</Button>
            </Tooltip>
          </Stack>
        </Box>
      );
    },
    {chromatic: {delay: 300}}
  )
  .add('Automatic edge placement', () => {
    return (
      <>
        <Box position="absolute" top={0} left={0}>
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Box>
        <Box position="absolute" top={0} right={0}>
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Box>
        <Box position="absolute" bottom={0} left={0}>
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Box>
        <Box position="absolute" bottom={0} right={0}>
          <Tooltip text="Welcome to Paste!">
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </Box>
      </>
    );
  })
  .add(
    'Automatic adjusted placement',
    () => {
      return (
        <>
          <Box position="absolute" bottom={0} left={0}>
            <Tooltip visible text="Tooltip adjusted to the top because bottom would be off screen" placement="bottom">
              <Button variant="primary">Open tooltip</Button>
            </Tooltip>
          </Box>
        </>
      );
    },
    {chromatic: {delay: 300}}
  )
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
  })
  .add('State hook Tooltip', () => {
    return <StateHookExample />;
  });
