import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';
import { Anchor } from '@twilio-paste/anchor';

import { Radio, RadioGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Radio/Radio (Uncontrolled)',
  component: Radio,
  subcomponents: { RadioGroup },
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

RadioBasic.storyName = 'Radio - no initial defaultChecked';
RadioBasic.parameters = {
  chromatic: { disableSnapshot: true },
};

/**
 * No id passed to Radio
 */
export const RadioWithNoID = (): React.ReactNode => {
  return (
    <>
      <Radio value="1" name="foo" helpText="This is some help text.">
        First option
      </Radio>
      <Radio value="2" name="foo" helpText="This is some help text.">
        Second option
      </Radio>
      <Radio value="2" name="foo" helpText="This is some help text." disabled>
        Disabled option
      </Radio>
    </>
  );
};

RadioWithNoID.storyName = 'Radio - with no ID';
RadioWithNoID.parameters = {
  chromatic: { disableSnapshot: true },
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
            Some interesting help text with a <Anchor href="http://www.google.com">link</Anchor>
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

RadioDefaultChecked.storyName = 'Radio - initial defaultChecked';
RadioDefaultChecked.parameters = {
  chromatic: { disableSnapshot: true },
};
