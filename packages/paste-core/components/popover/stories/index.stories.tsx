import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {CustomizationProvider} from '@twilio-paste/customization';
import {usePopoverState, Popover, PopoverContainer, PopoverButton, PopoverBadgeButton} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {PopoverContainer, PopoverButton},
  parameters: {
    // Sets a delay and diff threshold for the component's stories
    chromatic: {delay: 3000, diffThreshold: 0.3},
  },
};

export const Default: React.FC = () => {
  return (
    <Box height="300px">
      <PopoverContainer baseId="test-id" visible>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverTop: React.FC = () => {
  return (
    <Box bottom={12} position="absolute">
      <PopoverContainer baseId="test-id" placement="top-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover" data-testid="top-popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverLeft: React.FC = () => {
  return (
    <Box position="absolute" right={12} top={12}>
      <PopoverContainer baseId="test-id" placement="left-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverRight: React.FC = () => {
  return (
    <PopoverContainer baseId="test-id" placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const PopoverBottom: React.FC = () => {
  return (
    <PopoverContainer baseId="test-id" placement="bottom-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const BadgePopover: React.FC = () => {
  return (
    <Box height="300px">
      <PopoverContainer baseId="test-id">
        <PopoverBadgeButton variant="default">Open popover</PopoverBadgeButton>
        <Popover aria-label="Popover" data-testid="badge-popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const StateHookExample: React.FC = () => {
  const popover = usePopoverState({baseId: 'test-id'});
  return (
    <Box height="300px">
      <Stack orientation="horizontal" spacing="space60">
        <PopoverContainer state={popover}>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" data-testid="state-hook-popover">
            <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
          </Popover>
        </PopoverContainer>
        <Button variant="primary" onClick={() => popover.show()} data-testid="show-button">
          Open popover on click
        </Button>
        <Button variant="primary" onClick={() => popover.hide()} data-testid="hide-button">
          Close popover on click
        </Button>
      </Stack>
    </Box>
  );
};

export const Customization: React.FC = () => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        POPOVER: {
          backgroundColor: 'colorBackgroundNeutralWeakest',
          fontWeight: 'fontWeightBold',
        },
        POPOVER_BUTTON: {
          backgroundColor: 'colorBackgroundBrandStronger',
        },
        POPOVER_CLOSE_BUTTON: {
          backgroundColor: 'colorBackgroundBodyInverse',
          borderRadius: 'borderRadius20',
        },
        POPOVER_CLOSE_ICON: {
          color: 'colorTextInverse',
        },
      }}
    >
      <Box height="300px">
        <PopoverContainer baseId="test-id" visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover">
            <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
          </Popover>
        </PopoverContainer>
      </Box>
    </CustomizationProvider>
  );
};
