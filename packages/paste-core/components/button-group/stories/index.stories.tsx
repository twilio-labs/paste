import * as React from 'react';
import type {ButtonGroupProps} from '../src';
import type {Story} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {ButtonGroup} from '../src';
import {Button} from '@twilio-paste/button';
import {Popover, PopoverContainer, PopoverButton} from '@twilio-paste/popover';
import {Text} from '@twilio-paste/text';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
};

type ButtonGroupStoryProps = Partial<Omit<ButtonGroupProps, 'children'>>;

export const Unattached: Story = (props: ButtonGroupStoryProps) => (
  <ButtonGroup aria-label="A decisive group of buttons" {...props}>
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
    <Button variant="secondary">Maybe</Button>
  </ButtonGroup>
);

export const Attached: Story = (props: ButtonGroupStoryProps) => (
  <ButtonGroup attached aria-label="A decisive group of buttons" {...props}>
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
    <Button variant="secondary">Maybe</Button>
  </ButtonGroup>
);

export const FewButtons: Story = () => (
  <ButtonGroup attached aria-label="A decisive group of buttons">
    <Button variant="secondary">Yes</Button>
    <Button variant="secondary">No</Button>
  </ButtonGroup>
);

export const ManyButtons: Story = () => (
  <ButtonGroup attached aria-label="An alphabetical group of buttons">
    {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => (
      <Button key={letter} variant="secondary">
        {letter}
      </Button>
    ))}
  </ButtonGroup>
);

export const PopoverButtons: Story = () => {
  const id = useUID();
  return (
    <PopoverContainer baseId={id} placement="auto-end">
      <ButtonGroup attached aria-label="A decisive group of buttons">
        <PopoverButton variant="secondary">Yes</PopoverButton>
        <PopoverButton variant="secondary">No</PopoverButton>
        <PopoverButton variant="secondary">Maybe</PopoverButton>
      </ButtonGroup>
      <Popover aria-label="Popover">
        <Text as="span">An excellent choice indeed!</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const Customized: Story = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        BUTTON_GROUP: {
          padding: 'space40',
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderRadius: 'borderRadius30',
        },
      }}
    >
      <Attached />
    </CustomizationProvider>
  );
};
