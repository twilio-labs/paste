import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { useUID } from '@twilio-paste/uid-library';
import { Anchor } from '@twilio-paste/anchor';
import { Text } from '@twilio-paste/text';
import { Paragraph } from '@twilio-paste/paragraph';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';

import { Checkbox, CheckboxGroup, CheckboxDisclaimer } from '../src';

export const CustomizedCheckboxGroup: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const [checked4, setChecked4] = React.useState(true);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const theme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={theme}
      elements={{
        CHECKBOX_GROUP: { padding: 'space30' },
        CHECKBOX_GROUP_SET: { marginLeft: 'space60' },
        CHECKBOX_GROUP_ITEM: { marginBottom: 'space60' },
        CHECKBOX_GROUP_ERROR_TEXT_WRAPPER: { marginBottom: 'space60' },
        CHECKBOX: { padding: 'space30' }, // the whole box
        CHECKBOX_CONTROL: { borderRadius: 'borderRadius20' },
        CHECKBOX_LABEL_TEXT: { color: 'colorTextNeutral' },
        MY_CHECKBOX_GROUP: { padding: 'space30' },
        MY_CHECKBOX_GROUP_SET: { marginLeft: 'space60' },
        MY_CHECKBOX_GROUP_ITEM: { marginBottom: 'space60' },
        MY_CHECKBOX: { padding: 'space30' }, // the whole box
        MY_CHECKBOX_CONTROL: { borderRadius: 'borderRadius20' },
        MY_CHECKBOX_LABEL_TEXT: { color: 'colorTextNeutral' },
      }}
    >
      <Paragraph>Using default element name:</Paragraph>
      <CheckboxGroup
        name="bar"
        legend={
          <Text as="span" color="currentColor">
            This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
        helpText="Help text should go here."
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
          disabled
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
      <Paragraph>Using custom element name:</Paragraph>
      <CheckboxGroup
        element="MY_CHECKBOX_GROUP"
        name="bar"
        legend={
          <Text as="span" color="currentColor">
            This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
        helpText="Help text should go here."
        required
      >
        <Checkbox
          element="MY_CHECKBOX"
          id={useUID()}
          value="1"
          checked={checked4}
          onChange={(event) => {
            setChecked4(event.currentTarget.checked);
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
          element="MY_CHECKBOX"
          checked={checked5}
          onChange={(event) => {
            setChecked5(event.currentTarget.checked);
          }}
          id={useUID()}
          value="2"
          helpText="This is some help text."
        >
          Second
        </Checkbox>
        <Checkbox
          element="MY_CHECKBOX"
          disabled
          checked={checked6}
          onChange={(event) => {
            setChecked6(event.currentTarget.checked);
          }}
          id={useUID()}
          value="3"
          helpText="This is some help text."
        >
          Third
        </Checkbox>
      </CheckboxGroup>
    </CustomizationProvider>
  );
};

export const CustomizedCheckboxDisclaimer: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={theme}
      elements={{
        CHECKBOX_DISCLAIMER: { backgroundColor: 'colorBackgroundDestructiveWeakest' },
        CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER: { marginBottom: 'space80' },
        MY_CHECKBOX_DISCLAIMER: { backgroundColor: 'colorBackgroundDestructiveWeakest' },
        MY_CHECKBOX_DISCLAIMER_ERROR_TEXT_WRAPPER: { marginTop: 'space80' },
      }}
    >
      <Paragraph>Using default element name:</Paragraph>
      <CheckboxDisclaimer id={useUID()} value="foo" name="foo" required errorText="error!">
        <Text as="span">
          I declare the information provided above is accurate. I acknowledge that Twilio will process the information
          provided above for the purpose of identity verification, and will be sharing it with my local telecomm
          providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out
          of service for inaccurate or false information.
        </Text>
      </CheckboxDisclaimer>
      <Paragraph>Using default element name:</Paragraph>
      <CheckboxDisclaimer
        element="MY_CHECKBOX_DISCLAIMER"
        id={useUID()}
        value="foo"
        name="foo"
        required
        errorText="error!"
      >
        <Text as="span">
          I declare the information provided above is accurate. I acknowledge that Twilio will process the information
          provided above for the purpose of identity verification, and will be sharing it with my local telecomm
          providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out
          of service for inaccurate or false information.
        </Text>
      </CheckboxDisclaimer>
    </CustomizationProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Checkbox/Customization',
  component: CustomizedCheckboxGroup,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
