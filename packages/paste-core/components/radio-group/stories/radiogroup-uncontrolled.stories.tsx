import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Radio, RadioGroup} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio/Radio Group (Uncontrolled)',
  component: Radio,
  subcomponents: {RadioGroup},
};

/**
 * RadioGroup passes no context value (defaults to '' empty string) with uncontrolled radios
 */
export const UncontrolledRadioGroupA = (): React.ReactNode => {
  return (
    <RadioGroup
      name="bar"
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      errorText="This is the error text."
    >
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text." defaultChecked>
        Second
      </Radio>
      <Radio id={useUID()} value="3" name="foo" helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

UncontrolledRadioGroupA.story = {
  name: 'Uncontrolled RadioGroup with uncontrolled Radios',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

/**
 * RadioGroup passes no context value (defaults to '' empty string) with controlled radios
 */
export const UncontrolledRadioGroupB = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');
  return (
    <RadioGroup
      name="bar"
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      errorText="This is the error text."
    >
      <Radio
        id={useUID()}
        value="1"
        checked={value === '1'}
        helpText={
          <Text as="span" color="currentColor">
            This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
        onChange={() => {
          setValue('1');
        }}
      >
        First
      </Radio>
      <Radio
        id={useUID()}
        value="2"
        helpText="This is some help text."
        checked={value === '2'}
        onChange={() => {
          setValue('2');
        }}
      >
        Second
      </Radio>
      <Radio
        id={useUID()}
        value="3"
        helpText="This is some help text."
        checked={value === '3'}
        onChange={() => {
          setValue('3');
        }}
      >
        Third
      </Radio>
    </RadioGroup>
  );
};

UncontrolledRadioGroupB.story = {
  name: 'Uncontrolled RadioGroup with controlled Radios',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};
