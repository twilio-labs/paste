import { Anchor } from '@twilio-paste/anchor';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Radio, RadioGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio/Radio (Controlled)',
  component: Radio,
  subcomponents: { RadioGroup },
};

/**
 * No default `checked` passed to Radio
 */
export const RadioUnchecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState('');

  return (
    <>
      <Radio
        id={useUID()}
        value="1"
        name="foo"
        checked={checked === '1'}
        onChange={() => setChecked('1')}
        helpText="This is some help text."
      >
        First option
      </Radio>
      <Radio
        id={useUID()}
        value="2"
        name="foo"
        checked={checked === '2'}
        onChange={() => setChecked('2')}
        helpText={
          <>
            Some interesting help text with a <Anchor href="http://www.google.com">link</Anchor>
          </>
        }
      >
        Second option
      </Radio>
      <Radio
        id={useUID()}
        value="3"
        name="foo"
        checked={checked === '3'}
        onChange={() => setChecked('3')}
        helpText="This is some help text."
        disabled
      >
        Disabled option
      </Radio>
    </>
  );
};

RadioUnchecked.storyName = 'Radio - No initial checked';
RadioUnchecked.parameters = {
  chromatic: { disableSnapshot: true },
};

/**
 * `checked` passed to Radio
 */
export const RadioChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState('2');

  return (
    <>
      <Radio
        id={useUID()}
        value="1"
        name="foo"
        checked={checked === '1'}
        onChange={() => setChecked('1')}
        helpText="This is some help text."
      >
        First option
      </Radio>
      <Radio
        id={useUID()}
        value="2"
        name="foo"
        checked={checked === '2'}
        onChange={() => setChecked('2')}
        helpText={
          <>
            Some interesting help text with a <Anchor href="http://www.google.com">link</Anchor>
          </>
        }
      >
        Second option
      </Radio>
      <Radio
        id={useUID()}
        value="3"
        name="foo"
        checked={checked === '3'}
        onChange={() => setChecked('3')}
        helpText="This is some help text."
        disabled
      >
        Disabled option
      </Radio>
    </>
  );
};

RadioChecked.storyName = 'Radio - initial checked';
RadioChecked.parameters = {
  chromatic: { disableSnapshot: true },
};
