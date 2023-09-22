import { Box } from '@twilio-paste/core/box';
import { Checkbox, CheckboxGroup } from '@twilio-paste/core/checkbox';
import { Heading } from '@twilio-paste/core/heading';
import { HelpText } from '@twilio-paste/core/help-text';
import { Input } from '@twilio-paste/core/input';
import { Label } from '@twilio-paste/core/label';
import { Radio, RadioGroup } from '@twilio-paste/core/radio-group';
import { Option, Select } from '@twilio-paste/core/select';
import { Stack } from '@twilio-paste/core/stack';
import { useUIDSeed } from '@twilio-paste/core/uid-library';
import * as React from 'react';

const FormPreview = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('input');
  const [selectValue, setSelectValue] = React.useState('select');
  const [radioValue, setRadioValue] = React.useState('radio');
  const inputId = useUIDSeed();

  return (
    <Box as="form">
      <Heading as="h3" variant="heading30">
        Form Heading
      </Heading>
      <Stack orientation="vertical" spacing="space90">
        <Box>
          <Label htmlFor={inputId('input')}>Text input</Label>
          <Input
            aria-describedby={inputId('input-help-text')}
            id={inputId('input')}
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <HelpText id={inputId('input-help-text')}>This is help text.</HelpText>
        </Box>
        <Box>
          <Label htmlFor={inputId('select')}>Select input</Label>
          <Select
            id={inputId('select')}
            value={selectValue}
            onChange={(event) => {
              setSelectValue(event.target.value);
            }}
          >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </Box>
        <Box>
          <RadioGroup
            legend="This is the legend text"
            name="foo"
            value={radioValue}
            onChange={(newValue) => {
              setRadioValue(newValue);
            }}
          >
            <Radio id={inputId('radio1')} value="1" helpText="First selection">
              First
            </Radio>
            <Radio id={inputId('radio2')} value="2" helpText="Second selection">
              Second
            </Radio>
          </RadioGroup>
        </Box>
        <Box>
          <CheckboxGroup name="bar" legend="This is the legend text">
            <Checkbox id={inputId('check1')} value="1" helpText="First selection">
              First
            </Checkbox>
            <Checkbox id={inputId('check2')} value="2" helpText="Second selection">
              Second
            </Checkbox>
          </CheckboxGroup>
        </Box>
      </Stack>
    </Box>
  );
};

export { FormPreview };
