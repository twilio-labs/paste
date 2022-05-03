import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Radio, RadioGroup} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio/Radio Group (Controlled)',
  component: Radio,
  subcomponents: {RadioGroup},
};

/**
 * D) value is passed down from context and neither (default)checked is set
 */
export const ControlledRadioGroupA = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');

  return (
    <RadioGroup
      name="bar"
      value={value}
      legend={
        <Text as="span" color="currentColor">
          This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      required
      onChange={(newValue) => {
        console.log('new value is:', newValue);
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="1"
        helpText={
          <Text as="span" color="currentColor">
            This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
      >
        First
      </Radio>
      <Radio id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

ControlledRadioGroupA.story = {
  name: 'Controlled RadioGroup with no (default)checked on radios',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

/**
 * E) value is passed down from context and defaultChecked is set (value wins)
 */
export const ControlledRadioGroupB = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');

  return (
    <RadioGroup
      name="bar"
      value={value}
      legend={
        <Text as="span" color="currentColor">
          This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      required
      onChange={(newValue) => {
        console.log('new value is:', newValue);
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="1"
        helpText={
          <Text as="span" color="currentColor">
            This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
      >
        First
      </Radio>
      <Radio id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" helpText="This is some help text." defaultChecked>
        Third
      </Radio>
    </RadioGroup>
  );
};

ControlledRadioGroupB.story = {
  name: 'Controlled RadioGroup with defaultChecked set on different Radio',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

/**
 * F) value is passed down from context and checked is set (context wins)
 */
export const ControlledRadioGroupC = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');

  return (
    <RadioGroup
      name="bar"
      value={value}
      legend={
        <Text as="span" color="currentColor">
          This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      required
      onChange={(newValue) => {
        console.log('new value is:', newValue);
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="1"
        helpText={
          <Text as="span" color="currentColor">
            This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
      >
        First
      </Radio>
      <Radio id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" helpText="This is some help text." checked>
        Third
      </Radio>
    </RadioGroup>
  );
};

ControlledRadioGroupC.story = {
  name: 'Controlled RadioGroup with checked set on different Radio',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

/**
 * G) value is passed from context and both are set (context wins)
 */

export const ControlledRadioGroupD = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');

  return (
    <RadioGroup
      name="bar"
      value={value}
      legend={
        <Text as="span" color="currentColor">
          This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      required
      onChange={(newValue) => {
        console.log('new value is:', newValue);
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="1"
        defaultChecked
        helpText={
          <Text as="span" color="currentColor">
            This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
      >
        First
      </Radio>
      <Radio id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" helpText="This is some help text." checked>
        Third
      </Radio>
    </RadioGroup>
  );
};

ControlledRadioGroupD.story = {
  name: 'Controlled RadioGroup with checked and defaultChecked set on different Radios',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};
