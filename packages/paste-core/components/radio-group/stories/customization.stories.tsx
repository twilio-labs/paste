import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { useUID } from '@twilio-paste/uid-library';
import { Anchor } from '@twilio-paste/anchor';
import { Text } from '@twilio-paste/text';
import { Paragraph } from '@twilio-paste/paragraph';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';

import { Radio, RadioGroup } from '../src';

export const CustomizedRadioGroup: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState('2');
  const [valueSecond, setValueSecond] = React.useState('2');
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={theme}
      elements={{
        RADIO_GROUP: { padding: 'space30' },
        RADIO_GROUP_SET: { marginLeft: 'space60' },
        RADIO_GROUP_ITEM: { marginBottom: 'space60' },
        RADIO_GROUP_ERROR_TEXT_WRAPPER: { marginBottom: 'space60' },
        RADIO: { padding: 'space30' },
        RADIO_CONTROL: { borderRadius: 'borderRadius20' },
        RADIO_LABEL_TEXT: { color: 'colorTextNeutral' },
        RADIO_HELP_TEXT_WRAPPER: { marginLeft: 'space20' },

        MY_RADIO_GROUP: { padding: 'space30' },
        MY_RADIO_GROUP_SET: { marginLeft: 'space60' },
        MY_RADIO_GROUP_ITEM: { marginBottom: 'space60' },
        MY_RADIO_GROUP_ERROR_TEXT_WRAPPER: { marginBottom: 'space60' },
        MY_RADIO: { padding: 'space30' },
        MY_RADIO_CONTROL: { borderRadius: 'borderRadius20' },
        MY_RADIO_LABEL_TEXT: { color: 'colorTextNeutral' },
        MY_RADIO_HELP_TEXT_WRAPPER: { marginLeft: 'space20' },
      }}
    >
      <Paragraph>Using default element name:</Paragraph>
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
      <Paragraph>Using custom element name:</Paragraph>
      <RadioGroup
        element="MY_RADIO_GROUP"
        name="barSecond"
        value={valueSecond}
        legend={
          <Text as="span" color="currentColor">
            This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
        helpText="Help text should go here."
        errorText="This is the error text."
        onChange={(newValue) => {
          setValueSecond(newValue);
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
    </CustomizationProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio/Customization',
  component: CustomizedRadioGroup,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
