import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Radio, RadioGroup} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: {RadioGroup},
};

export const DefaultRadio = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name="foo">
      Label
    </Radio>
  );
};

DefaultRadio.story = {
  name: 'Radio',
};

export const RadioChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Radio
      id={useUID()}
      value="label"
      name="foo"
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    >
      Label
    </Radio>
  );
};

RadioChecked.story = {
  name: 'Radio - Checked',
};

export const RadioDisabled = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name="foo" disabled>
      Label
    </Radio>
  );
};

RadioDisabled.story = {
  name: 'Radio - Disabled',
};

export const RadioDisabledChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Radio
      id={useUID()}
      value="label"
      name="foo"
      disabled
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    >
      Label
    </Radio>
  );
};

RadioDisabledChecked.story = {
  name: 'Radio - Disabled & Checked',
};

export const RadioError = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name="foo" hasError>
      Label
    </Radio>
  );
};

RadioError.story = {
  name: 'Radio - Error',
};

export const RadioErrorChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Radio
      id={useUID()}
      value="label"
      name="foo"
      hasError
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    >
      Label
    </Radio>
  );
};

RadioErrorChecked.story = {
  name: 'Radio - Error & Checked',
};

export const RadioHelpTextString = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="1" name="foo" helpText="Some interesting help text">
      Label
    </Radio>
  );
};

RadioHelpTextString.story = {
  name: 'Radio - Help text string',
};

export const RadioHelpTextChildren = (): React.ReactNode => {
  return (
    <Radio
      id={useUID()}
      value="1"
      name="foo"
      helpText={
        <>
          Some interesting help text with a <a href="http://www.google.com">link</a>
        </>
      }
    >
      Label
    </Radio>
  );
};

RadioHelpTextChildren.story = {
  name: 'Radio - Help text children',
};

export const RadiosControlled = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);
  return (
    <>
      <Radio
        id={useUID()}
        value="1"
        onChange={handleChange}
        checked={value === '1'}
        name="foo"
        helpText="This is some help text."
      >
        First
      </Radio>
      <Radio
        id={useUID()}
        value="2"
        onChange={handleChange}
        checked={value === '2'}
        name="foo"
        helpText="This is some help text."
      >
        Second
      </Radio>
      <Radio
        id={useUID()}
        value="3"
        onChange={handleChange}
        checked={value === '3'}
        name="foo"
        helpText="This is some help text."
      >
        Third
      </Radio>
    </>
  );
};

RadiosControlled.story = {
  name: 'Radios - Controlled',
};

export const DefaultRadioGroup = (): React.ReactNode => {
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

DefaultRadioGroup.story = {
  name: 'RadioGroup',
};

export const RadioGroupError = (): React.ReactNode => {
  const [value, setValue] = React.useState('2');
  return (
    <RadioGroup
      name="bar"
      value={value}
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      errorText="This is the error text."
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio
        id={useUID()}
        value="1"
        helpText={
          <Text as="span" color="currentColor">
            This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
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

RadioGroupError.story = {
  name: 'Radio Group - Error',
};

export const RadioGroupDisabled = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name="bar"
      value={value}
      legend="This is the legend text"
      disabled
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name="foo" helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupDisabled.story = {
  name: 'Radio Group - Disabled',
};

export const RadioGroupOverrideDisable = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name="bar"
      value={value}
      legend="This is the legend text"
      disabled
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name="foo" helpText="This is some help text." disabled={false}>
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupOverrideDisable.story = {
  name: 'Radio Group - Override Disable',
};

export const RadioGroupHorizontal = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name="bar"
      value={value}
      legend="This is the legend text"
      helpText="Help text should go here."
      orientation="horizontal"
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name="foo" helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupHorizontal.story = {
  name: 'Radio Group - Horizontal',
};

export const RadioGroupHorizontalDisabled = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name="bar"
      value={value}
      legend="This is the legend text"
      orientation="horizontal"
      disabled
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name="foo" helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupHorizontalDisabled.story = {
  name: 'Radio Group - Horizontal disabled',
};

export const RadioGroupHorizontalError = (): React.ReactNode => {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name="bar"
      value={value}
      legend="This is the legend text"
      helpText="Help text should go here."
      errorText="This is the error text."
      orientation="horizontal"
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name="foo" helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupHorizontalError.story = {
  name: 'Radio Group - Horizontal error',
};
