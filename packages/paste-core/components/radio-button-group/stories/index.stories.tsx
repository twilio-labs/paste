import * as React from 'react';
import type {Story} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {RadioButton, RadioButtonGroup} from '../src';
import type {RadioButtonGroupProps} from '../src';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  subcomponents: {RadioButton},
};

type RadioButtonGroupStoryProps = Partial<Omit<RadioButtonGroupProps, 'children'>>;

export const Attached: Story<RadioButtonGroupStoryProps> = (props) => (
  <RadioButtonGroup
    name="foo"
    legend={
      <Text as="span" color="currentColor">
        This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
      </Text>
    }
    helpText="Help text should go here."
    errorText="This is the error text."
    attached
    {...props}
  >
    <RadioButton value="1">First</RadioButton>
    <RadioButton value="2" defaultChecked>
      Second
    </RadioButton>
    <RadioButton value="3">Third</RadioButton>
  </RadioButtonGroup>
);

export const FewRadioButtons: Story = () => (
  <RadioButtonGroup
    name="foo"
    legend={
      <Text as="span" color="currentColor">
        This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
      </Text>
    }
    helpText="Help text should go here."
    errorText="This is the error text."
    attached
  >
    <RadioButton value="1">First</RadioButton>
    <RadioButton value="2">Second</RadioButton>
  </RadioButtonGroup>
);

export const ManyRadioButtons: Story = () => (
  <RadioButtonGroup
    name="foo"
    legend={
      <Text as="span" color="currentColor">
        This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
      </Text>
    }
    helpText="Help text should go here."
    errorText="This is the error text."
    attached
  >
    {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => (
      <RadioButton key={letter} value={letter}>
        {letter}
      </RadioButton>
    ))}
  </RadioButtonGroup>
);
export const Unattached: Story = () => {
  return (
    <RadioButtonGroup
      name="foo"
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      errorText="This is the error text."
    >
      <RadioButton value="1">First</RadioButton>
      <RadioButton value="2" defaultChecked>
        Second
      </RadioButton>
      <RadioButton value="3">Third</RadioButton>
    </RadioButtonGroup>
  );
};

/**
 * RadioButtonGroup passes no context value (defaults to '' empty string) with uncontrolled radios
 */
export const Uncontrolled: Story = () => {
  return (
    <RadioButtonGroup
      name="foo"
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      errorText="This is the error text."
      attached
    >
      <RadioButton value="1">First</RadioButton>
      <RadioButton value="2" defaultChecked>
        Second
      </RadioButton>
      <RadioButton value="3">Third</RadioButton>
    </RadioButtonGroup>
  );
};

export const Controlled: Story = () => {
  const [value, setValue] = React.useState('2');
  return (
    <RadioButtonGroup
      name="foo"
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      errorText="This is the error text."
    >
      <RadioButton
        id={useUID()}
        value="1"
        checked={value === '1'}
        onChange={() => {
          setValue('1');
        }}
      >
        First
      </RadioButton>
      <RadioButton
        id={useUID()}
        value="2"
        checked={value === '2'}
        onChange={() => {
          setValue('2');
        }}
      >
        Second
      </RadioButton>
      <RadioButton
        id={useUID()}
        value="3"
        checked={value === '3'}
        onChange={() => {
          setValue('3');
        }}
      >
        Third
      </RadioButton>
    </RadioButtonGroup>
  );
};

export const Customized: Story = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        RADIO_BUTTON_GROUP: {
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
