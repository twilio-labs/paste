import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Radio, RadioGroup} from '../src';

storiesOf('Forms|Radio', module)
  .add('Radio', () => {
    return (
      <Radio id={useUID()} value="label" name="foo">
        Label
      </Radio>
    );
  })
  .add('Radio - Checked', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Radio
        id={useUID()}
        value="label"
        name="foo"
        checked={checked}
        onChange={event => setChecked(event.target.checked)}
      >
        Label
      </Radio>
    );
  })
  .add('Radio - Disabled', () => {
    return (
      <Radio id={useUID()} value="label" name="foo" disabled>
        Label
      </Radio>
    );
  })
  .add('Radio - Disabled & Checked', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Radio
        id={useUID()}
        value="label"
        name="foo"
        disabled
        checked={checked}
        onChange={event => setChecked(event.target.checked)}
      >
        Label
      </Radio>
    );
  })
  .add('Radio - Error', () => {
    return (
      <Radio id={useUID()} value="label" name="foo" hasError>
        Label
      </Radio>
    );
  })
  .add('Radio - Error & Checked', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Radio
        id={useUID()}
        value="label"
        name="foo"
        hasError
        checked={checked}
        onChange={event => setChecked(event.target.checked)}
      >
        Label
      </Radio>
    );
  })
  .add('Radio - Help text string', () => {
    return (
      <Radio id={useUID()} value="1" name="foo" helpText="Some interesting help text">
        Label
      </Radio>
    );
  })
  .add('Radio - Help text children', () => {
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
  })
  .add('Radio Group', () => {
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
        onChange={newValue => {
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
  })
  .add('Radio Group - Error', () => {
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
        onChange={newValue => {
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
  })
  .add('Radio Group - Disabled', () => {
    const [value, setValue] = React.useState('1');
    return (
      <RadioGroup
        name="bar"
        value={value}
        legend="This is the legend text"
        disabled
        onChange={newValue => {
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
  })
  .add('Radio Group - Horizontal', () => {
    const [value, setValue] = React.useState('1');
    return (
      <RadioGroup
        name="bar"
        value={value}
        legend="This is the legend text"
        helpText="Help text should go here."
        orientation="horizontal"
        onChange={newValue => {
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
  })
  .add('Radio Group - Horizontal disabled', () => {
    const [value, setValue] = React.useState('1');
    return (
      <RadioGroup
        name="bar"
        value={value}
        legend="This is the legend text"
        orientation="horizontal"
        disabled
        onChange={newValue => {
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
  })
  .add('Radio Group - Horizontal error', () => {
    const [value, setValue] = React.useState('1');
    return (
      <RadioGroup
        name="bar"
        value={value}
        legend="This is the legend text"
        helpText="Help text should go here."
        errorText="This is the error text."
        orientation="horizontal"
        onChange={newValue => {
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
  });
