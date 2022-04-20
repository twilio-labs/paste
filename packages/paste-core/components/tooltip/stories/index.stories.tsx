import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTooltipState, Tooltip} from '../src';

export const StateHookExample: React.FC = () => {
  const tooltip = useTooltipState();
  return (
    <Theme.Provider theme="default">
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Tooltip',
  excludeStories: ['StateHookExample'],
  component: Tooltip,
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000, diffThreshold: 0.3},
  },
};

export const Default = (): React.ReactNode => {
  return (
    <Box as="div" minHeight="400px">
      <Tooltip visible text="Welcome to Paste!">
        <Button variant="primary">Open tooltip</Button>
      </Tooltip>
    </Box>
  );
};

export const TooltipPlacements = (): React.ReactNode => {
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
};

export const AutomaticEdgePlacement = (): React.ReactNode => {
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
};

AutomaticEdgePlacement.story = {
  name: 'Automatic edge placement',
};

export const AutomaticAdjustedPlacement = (): React.ReactNode => {
  return (
    <>
      <Box position="absolute" bottom={0} left={0}>
        <Tooltip visible text="Tooltip adjusted to the top because bottom would be off screen" placement="bottom">
          <Button variant="primary">Open tooltip</Button>
        </Tooltip>
      </Box>
    </>
  );
};

AutomaticAdjustedPlacement.story = {
  name: 'Automatic adjusted placement',
};

export const IconButtonTooltip = (): React.ReactNode => {
  return (
    <Tooltip text="Welcome to Paste!">
      <Button variant="secondary" size="icon">
        <InformationIcon decorative={false} title="Open Tooltip" />
      </Button>
    </Tooltip>
  );
};

export const NonButtonTooltip = (): React.ReactNode => {
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
};

export const MultipleTooltips = (): React.ReactNode => {
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
};

export const StateHookTooltip = (): React.ReactNode => {
  return <StateHookExample />;
};

StateHookTooltip.story = {
  name: 'State hook Tooltip',
};

export const CustomizedTooltip = (): React.ReactNode => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        TOOLTIP: {
          backgroundColor: 'colorBackgroundErrorWeakest',
          borderColor: 'colorBorderDestructive',
          maxWidth: 'size10',
          textAlign: 'center',
        },
        TOOLTIP_TEXT: {
          color: 'colorTextErrorStrong',
        },
        CUSTOM_TOOLTIP: {
          backgroundColor: 'colorBackgroundSuccessWeakest',
          borderColor: 'colorBorderSuccess',
          textAlign: 'left',
        },
        CUSTOM_TOOLTIP_TEXT: {
          color: 'colorTextSuccess',
        },
      }}
    >
      <Box as="div" display="flex" columnGap="space80">
        <Tooltip visible text="Welcome to Paste!">
          <Button variant="primary">Open tooltip</Button>
        </Tooltip>
        <Tooltip element="CUSTOM_TOOLTIP" visible text="Welcome to Paste!">
          <Button variant="primary">Open tooltip</Button>
        </Tooltip>
      </Box>
    </CustomizationProvider>
  );
};

CustomizedTooltip.story = {
  name: 'Customized Tooltip',
};
