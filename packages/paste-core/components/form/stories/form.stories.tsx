import * as React from 'react';
import {useUIDSeed} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/theme';
import {Checkbox, FormLabel, FormInput, Select, Option, Radio, FormTextArea} from '../src';

storiesOf('Forms|Form', module)
  .add('All', () => {
    const inputIDSeed = useUIDSeed();
    return (
      <>
        <Box marginBottom="space70">
          <FormLabel htmlFor={inputIDSeed('input')}>Text Input</FormLabel>
          <FormInput id={inputIDSeed('input')} type="text" value="" />
          <FormLabel htmlFor={inputIDSeed('textarea')}>Textarea textarea</FormLabel>
          <FormTextArea id={inputIDSeed('textarea')} value="" />
          <FormLabel htmlFor={inputIDSeed('select')}>Select Input</FormLabel>
          <Select id={inputIDSeed('select')} value="" onChange={() => {}}>
            <Option value="1">Option</Option>
          </Select>
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
          <FormLabel disabled htmlFor={inputIDSeed('disabledinput')}>
            Text Input
          </FormLabel>
          <FormInput disabled id={inputIDSeed('disabledinput')} type="text" value="" />
          <FormLabel disabled htmlFor={inputIDSeed('disabledtextarea')}>
            Textarea Input
          </FormLabel>
          <FormTextArea disabled id={inputIDSeed('disabledtextarea')} value="" />
          <FormLabel disabled htmlFor={inputIDSeed('disabledselect')}>
            Select Input
          </FormLabel>
          <Select disabled id={inputIDSeed('disabledselect')} value="" onChange={() => {}}>
            <Option value="1">Option</Option>
          </Select>
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
          <FormLabel htmlFor={inputIDSeed('errorinput')}>Text Input</FormLabel>
          <FormInput hasError id={inputIDSeed('errorinput')} type="text" value="" />
          <FormLabel htmlFor={inputIDSeed('errortextarea')}>Textarea Input</FormLabel>
          <FormTextArea hasError id={inputIDSeed('errortextarea')} value="" />
          <FormLabel htmlFor={inputIDSeed('errorselect')}>Select Input</FormLabel>
          <Select hasError id={inputIDSeed('errorselect')} value="" onChange={() => {}}>
            <Option value="1">Option</Option>
          </Select>
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
  })
  .add('Customization', () => {
    const inputIDSeed = useUIDSeed();
    return (
      <CustomizationProvider
        elements={{
          FORM_LABEL: {
            borderBottom: 'solid 1px #ccc',
            marginBottom: 'space40',
          },
          FORM_LABEL_TEXT: {
            fontSize: 'fontSize20',
            fontWeight: 'fontWeightNormal',
          },
          FORM_INPUT: {
            backgroundColor: 'hotpink',
            ':disabled': {
              backgroundColor: 'purple',
            },
          },
          FORM_INPUT_WRAPPER: {
            padding: 'space40',
          },
          FORM_TEXTAREA: {
            backgroundColor: 'green',
            ':disabled': {
              backgroundColor: 'orange',
            },
          },
          FORM_TEXTAREA_WRAPPER: {
            padding: 'space40',
          },
          FORM_SELECT: {
            backgroundColor: 'colorBackgroundError',
            ':disabled': {
              backgroundColor: 'navy',
            },
          },
          FORM_SELECT_WRAPPER: {
            padding: 'space40',
          },
        }}
      >
        <Box marginBottom="space70">
          <FormLabel htmlFor={inputIDSeed('input')}>Text Input</FormLabel>
          <FormInput id={inputIDSeed('input')} placeholder="holder" type="text" value="" />
          <FormLabel htmlFor={inputIDSeed('textarea')}>Textarea textarea</FormLabel>
          <FormTextArea id={inputIDSeed('textarea')} value="" />
          <FormLabel htmlFor={inputIDSeed('select')}>Select Input</FormLabel>
          <Select id={inputIDSeed('select')} value="" onChange={() => {}}>
            <Option value="1">Option</Option>
          </Select>
        </Box>
        <Box marginBottom="space70">
          <FormLabel disabled htmlFor={inputIDSeed('disabledinput')}>
            Text Input
          </FormLabel>
          <FormInput disabled id={inputIDSeed('disabledinput')} type="text" value="" />
          <FormLabel disabled htmlFor={inputIDSeed('disabledtextarea')}>
            Textarea Input
          </FormLabel>
          <FormTextArea disabled id={inputIDSeed('disabledtextarea')} value="" />
          <FormLabel disabled htmlFor={inputIDSeed('disabledselect')}>
            Select Input
          </FormLabel>
          <Select disabled id={inputIDSeed('disabledselect')} value="" onChange={() => {}}>
            <Option value="1">Option</Option>
          </Select>
        </Box>
        <Box marginBottom="space70">
          <FormLabel htmlFor={inputIDSeed('errorinput')}>Text Input</FormLabel>
          <FormInput hasError id={inputIDSeed('errorinput')} type="text" value="" />
          <FormLabel htmlFor={inputIDSeed('errortextarea')}>Textarea Input</FormLabel>
          <FormTextArea hasError id={inputIDSeed('errortextarea')} value="" />
          <FormLabel htmlFor={inputIDSeed('errorselect')}>Select Input</FormLabel>
          <Select hasError id={inputIDSeed('errorselect')} value="" onChange={() => {}}>
            <Option value="1">Option</Option>
          </Select>
        </Box>
      </CustomizationProvider>
    );
  });
