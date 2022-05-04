import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Radio, RadioGroup} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio/Radio (Uncontrolled)',
  component: Radio,
  subcomponents: {RadioGroup},
};

/**
 * No defaultChecked passed to Radio
 */
export const RadioBasic = (): React.ReactNode => {
  return (
    <>
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First option
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text.">
        Second option
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text." disabled>
        Disabled option
      </Radio>
    </>
  );
};

RadioBasic.story = {
  name: 'Radio - no initial defaultChecked',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

/**
 * Only `defaultChecked` passed to Radio
 */
export const RadioDefaultChecked = (): React.ReactNode => {
  return (
    <>
      <Radio id={useUID()} value="1" name="foo" helpText="This is some help text.">
        First option
      </Radio>
      <Radio
        id={useUID()}
        value="2"
        name="foo"
        defaultChecked
        helpText={
          <>
            Some interesting help text with a <a href="http://www.google.com">link</a>
          </>
        }
      >
        Second option
      </Radio>
      <Radio id={useUID()} value="2" name="foo" helpText="This is some help text." disabled>
        Disabled option
      </Radio>
    </>
  );
};

RadioDefaultChecked.story = {
  name: 'Radio - initial defaultChecked',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};
