import { Anchor } from '@twilio-paste/core/anchor';
import { Box } from '@twilio-paste/core/box';
import { Checkbox, CheckboxGroup } from '@twilio-paste/core/checkbox';
import { Input } from '@twilio-paste/core/input';
import { Label } from '@twilio-paste/core/label';
import { Radio, RadioGroup } from '@twilio-paste/core/radio-group';
import { Option, Select } from '@twilio-paste/core/select';
import { Text } from '@twilio-paste/core/text';
import { TextArea } from '@twilio-paste/core/textarea';
import { useUIDSeed } from '@twilio-paste/core/uid-library';
import * as React from 'react';

export const ExampleForm = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');
  const inputID = useUIDSeed();
  return (
    <Box as="form">
      <Box marginBottom="space50">
        <Label htmlFor={inputID('input')}>Text input</Label>
        <Input
          id={inputID('input')}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          type="text"
          value={inputValue}
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID('textarea')}>Textarea</Label>
        <TextArea
          id={inputID('textarea')}
          onChange={(e) => setTextAreaValue(e.currentTarget.value)}
          value={textAreaValue}
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID('select')}>Text input</Label>
        <Select id={inputID('select')} onChange={(e) => setSelectValue(e.currentTarget.value)} value={selectValue}>
          <Option value="">Select an option</Option>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Box>
      <Box marginBottom="space50">
        <RadioGroup
          name="bar"
          value={radioValue}
          legend={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
          required
          orientation="horizontal"
          onChange={(newValue) => {
            setRadioValue(newValue);
          }}
        >
          <Radio
            id={inputID('radio1')}
            value="1"
            helpText={
              <Text as="span" color="currentColor">
                This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
              </Text>
            }
          >
            First
          </Radio>
          <Radio id={inputID('radio2')} value="2" helpText="This is some help text.">
            Second
          </Radio>
          <Radio id={inputID('radio3')} value="3" helpText="This is some help text.">
            Third
          </Radio>
        </RadioGroup>
      </Box>
      <Box marginBottom="space50">
        <CheckboxGroup name="bar" legend="This is the legend text" required orientation="horizontal">
          <Checkbox id={inputID('check1')} value="1" helpText="This is some help text.">
            First
          </Checkbox>
          <Checkbox id={inputID('check2')} value="2" helpText="This is some help text.">
            Second
          </Checkbox>
          <Checkbox id={inputID('cehck3')} value="3" helpText="This is some help text.">
            Third
          </Checkbox>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};
