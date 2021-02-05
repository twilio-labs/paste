import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Popover, PopoverContainer, PopoverButton} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {PopoverContainer, PopoverButton},
  parameters: {
    // Sets a delay and diff threshold for the component's stories
    chromatic: {delay: 1000, diffThreshold: 0.3},
  },
};

export const Default = (): React.ReactNode => {
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

export const PopoverTop = (): React.ReactNode => {
  return (
    <Box bottom={12} position="absolute">
      <PopoverContainer baseId="test-id" placement="top-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverLeft = (): React.ReactNode => {
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

export const PopoverRight = (): React.ReactNode => {
  return (
    <PopoverContainer baseId="test-id" placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const PopoverBottom = (): React.ReactNode => {
  return (
    <PopoverContainer baseId="test-id" placement="bottom-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};
