import * as React from 'react';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '@twilio-paste/grid';
import {Anchor} from '@twilio-paste/anchor';
import {
  Checkbox,
  FormLabel,
  FormInput,
  Select,
  Option,
  Radio,
  FormTextArea,
  CheckboxGroup,
  RadioGroup,
} from '@twilio-paste/form';
import type {
  FormInputProps,
  SelectProps,
  FormTextAreaProps,
  CheckboxGroupProps,
  RadioGroupProps,
} from '@twilio-paste/form';

const InputField: React.FC<Pick<FormInputProps, 'disabled' | 'hasError'>> = ({disabled, hasError}) => {
  const inputIDSeed = useUIDSeed();
  return (
    <>
      <FormLabel htmlFor={inputIDSeed('input')} disabled={disabled}>
        Text Input
      </FormLabel>
      <FormInput id={inputIDSeed('input')} type="text" value="" disabled={disabled} hasError={hasError} />
    </>
  );
};

const TextareaField: React.FC<Pick<FormTextAreaProps, 'disabled' | 'hasError'>> = ({disabled, hasError}) => {
  const inputIDSeed = useUIDSeed();
  return (
    <>
      <FormLabel htmlFor={inputIDSeed('textarea')} disabled={disabled}>
        Textarea textarea
      </FormLabel>
      <FormTextArea id={inputIDSeed('textarea')} value="" disabled={disabled} hasError={hasError} />
    </>
  );
};

const SelectField: React.FC<Pick<SelectProps, 'disabled' | 'hasError'>> = ({disabled, hasError}) => {
  const inputIDSeed = useUIDSeed();
  return (
    <>
      <FormLabel htmlFor={inputIDSeed('select')} disabled={disabled}>
        Select Input
      </FormLabel>
      <Select id={inputIDSeed('select')} value="" onChange={() => {}} disabled={disabled} hasError={hasError}>
        <Option value="1">Option</Option>
      </Select>
    </>
  );
};

const CheckboxGroupField: React.FC<Pick<CheckboxGroupProps, 'orientation' | 'errorText'>> = ({
  orientation,
  errorText,
}) => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  return (
    <CheckboxGroup
      name="bar"
      legend={
        <Text as="span" color="currentColor">
          This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
        </Text>
      }
      helpText="Help text should go here."
      orientation={orientation}
      errorText={errorText}
      required
    >
      <Checkbox
        id={useUID()}
        value="1"
        checked={checked1}
        onChange={(event) => {
          setChecked1(event.currentTarget.checked);
        }}
        helpText={
          <Text as="span" color="currentColor">
            This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
      >
        First
      </Checkbox>
      <Checkbox
        checked={checked2}
        onChange={(event) => {
          setChecked2(event.currentTarget.checked);
        }}
        id={useUID()}
        value="2"
        helpText="This is some help text."
      >
        Second
      </Checkbox>
      <Checkbox
        checked={checked3}
        onChange={(event) => {
          setChecked3(event.currentTarget.checked);
        }}
        id={useUID()}
        value="3"
        helpText="This is some help text."
      >
        Third
      </Checkbox>
    </CheckboxGroup>
  );
};

const RadioGroupField: React.FC<Pick<RadioGroupProps, 'orientation' | 'errorText'>> = ({orientation, errorText}) => {
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
      errorText={errorText}
      orientation={orientation}
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Forms/Form',
};

export const All = (): React.ReactNode => {
  const inputIDSeed = useUIDSeed();
  return (
    <>
      <Box marginBottom="space70">
        <InputField />
        <Grid>
          <Column>
            <CheckboxGroupField />
          </Column>
          <Column>
            <RadioGroupField />
          </Column>
        </Grid>
        <TextareaField />
        <CheckboxGroupField orientation="horizontal" />
        <RadioGroupField orientation="horizontal" />
        <SelectField />
        <Checkbox id={inputIDSeed('chcekbox1')} value="1" name="foo">
          Label
        </Checkbox>
        <Checkbox checked id={inputIDSeed('checkbox2')} value="1" name="foo">
          Label
        </Checkbox>
        <Radio id={inputIDSeed('radio1')} value="1" name="foo">
          Label
        </Radio>
        <Radio checked id={inputIDSeed('radio2')} value="1" name="foo">
          Label
        </Radio>
      </Box>
      <Box marginBottom="space70">
        <InputField disabled />
        <TextareaField disabled />
        <SelectField disabled />
        <Checkbox disabled id={inputIDSeed('disabledcheckbox1')} value="1" name="foo">
          Label
        </Checkbox>
        <Checkbox checked disabled id={inputIDSeed('disabledcheckbox2')} value="1" name="foo">
          Label
        </Checkbox>
        <Radio disabled id={inputIDSeed('disabledradio1')} value="1" name="foo">
          Label
        </Radio>
        <Radio checked disabled id={inputIDSeed('disabledradio2')} value="1" name="foo">
          Label
        </Radio>
      </Box>
      <Box marginBottom="space70">
        <InputField hasError />
        <Grid>
          <Column>
            <CheckboxGroupField errorText="this is an error" />
          </Column>
          <Column>
            <RadioGroupField errorText="this is an error" />
          </Column>
        </Grid>
        <TextareaField hasError />
        <CheckboxGroupField orientation="horizontal" errorText="this is an error" />
        <RadioGroupField orientation="horizontal" errorText="this is an error" />
        <SelectField hasError />
        <Checkbox hasError id={inputIDSeed('errorcheck1')} value="1" name="foo">
          Label
        </Checkbox>
        <Checkbox checked hasError id={inputIDSeed('errorcheck2')} value="1" name="foo">
          Label
        </Checkbox>
        <Radio hasError id={inputIDSeed('errorradio1')} value="1" name="foo">
          Label
        </Radio>
        <Radio checked hasError id={inputIDSeed('errorradio2')} value="1" name="foo">
          Label
        </Radio>
      </Box>
    </>
  );
};
