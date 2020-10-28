import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Popover, PopoverContainer, PopoverButton} from '../src';

const Example: React.FC<{}> = () => {
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

const BottomExample: React.FC<{}> = () => {
  return (
    <PopoverContainer baseId="test-id" placement="bottom-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

const TopExample: React.FC<{}> = () => {
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

const RightExample: React.FC<{}> = () => {
  return (
    <PopoverContainer baseId="test-id" placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

const LeftExample: React.FC<{}> = () => {
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

storiesOf('Components|Popover', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return <Example />;
    },
    {chromatic: {delay: 300}}
  )
  .add('Popover Top', () => {
    return <TopExample />;
  })
  .add('Popover Left', () => {
    return <LeftExample />;
  })
  .add('Popover Right', () => {
    return <RightExample />;
  })
  .add('Popover Bottom', () => {
    return <BottomExample />;
  });
