import { Anchor } from '@twilio-paste/anchor';
import { Text } from '@twilio-paste/text';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Radio, RadioGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: { RadioGroup },
};

export const RadioDefault = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()}>
      Label
    </Radio>
  );
};

RadioDefault.storyName = 'Radio';

export const RadioChecked = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} checked>
      Label
    </Radio>
  );
};

RadioChecked.storyName = 'Radio - checked';

export const RadioDisabled = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} disabled>
      Label
    </Radio>
  );
};

RadioDisabled.storyName = 'Radio - disabled';

export const RadioCheckedDisabled = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} checked disabled>
      Label
    </Radio>
  );
};

RadioCheckedDisabled.storyName = 'Radio - checked & disabled';

export const RadioError = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} hasError>
      Label
    </Radio>
  );
};

RadioError.storyName = 'Radio - Error';

export const RadioErrorDisabled = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} disabled hasError>
      Label
    </Radio>
  );
};

RadioErrorDisabled.storyName = 'Radio - Error and disabled';

export const RadioErrorDefaultChecked = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} checked hasError>
      Label
    </Radio>
  );
};

RadioErrorDefaultChecked.storyName = 'Radio - Error & checked';

export const RadioErrorCheckedDisabled = (): React.ReactNode => {
  return (
    <Radio id={useUID()} value="label" name={useUID()} checked hasError disabled>
      Label
    </Radio>
  );
};

RadioErrorCheckedDisabled.storyName = 'Radio - Error & checked & disabled';

export const RadioGroupDefault = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('2');
  return (
    <RadioGroup
      name={name}
      value={value}
      legend={
        <Text as="span" color="currentColor">
          This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
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

RadioGroupDefault.storyName = 'Radio Group';

export const RadioGroupDisabled = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name={name}
      value={value}
      legend="This is the legend text"
      disabled
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name={name} helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name={name} helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name={name} helpText="This is some help text.">
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupDisabled.storyName = 'Radio Group - Disabled';

export const RadioGroupOverrideDisable = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name={name}
      value={value}
      legend="This is the legend text"
      disabled
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" name={name} helpText="This is some help text.">
        First
      </Radio>
      <Radio id={useUID()} value="2" name={name} helpText="This is some help text.">
        Second
      </Radio>
      <Radio id={useUID()} value="3" name={name} helpText="This is some help text." disabled={false}>
        Third
      </Radio>
    </RadioGroup>
  );
};

RadioGroupOverrideDisable.storyName = 'Radio Group - Override Disable';

export const RadioGroupError = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('2');
  return (
    <RadioGroup
      name={name}
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

RadioGroupError.storyName = 'Radio Group - Error';

export const RadioGroupHorizontal = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name={name}
      value={value}
      legend="This is the legend text"
      helpText="Help text should go here."
      orientation="horizontal"
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" helpText="This is some help text.">
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

RadioGroupHorizontal.storyName = 'Radio Group - Horizontal';

export const RadioGroupHorizontalDisabled = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name={name}
      value={value}
      legend="This is the legend text"
      orientation="horizontal"
      disabled
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" helpText="This is some help text.">
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

RadioGroupHorizontalDisabled.storyName = 'Radio Group - Horizontal disabled';

export const RadioGroupHorizontalError = (): React.ReactNode => {
  const name = useUID();
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup
      name={name}
      value={value}
      legend="This is the legend text"
      helpText="Help text should go here."
      errorText="This is the error text."
      orientation="horizontal"
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Radio id={useUID()} value="1" helpText="This is some help text.">
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

RadioGroupHorizontalError.storyName = 'Radio Group - Horizontal error';
