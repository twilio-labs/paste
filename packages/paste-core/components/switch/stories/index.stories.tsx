import { Anchor } from '@twilio-paste/anchor';
import { Text } from '@twilio-paste/text';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Switch, SwitchGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  subcomponents: { SwitchGroup },
};

export const DefaultSwitch = (): React.ReactNode => {
  const switchRef = React.useRef(null);
  return <Switch ref={switchRef}>Play notification sounds</Switch>;
};
DefaultSwitch.storyName = 'Switch';

export const SwitchChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      id={useUID()}
      value="1"
      name="foo"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Switch>
  );
};

SwitchChecked.storyName = 'Switch - Checked';

export const SwitchWithNoID = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      value="1"
      name="foo"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Switch>
  );
};

SwitchWithNoID.storyName = 'Switch - With no ID';

export const SwitchDefaultChecked = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="label" name="foo" defaultChecked>
      Label
    </Switch>
  );
};
SwitchDefaultChecked.storyName = 'Switch - defaultChecked';

export const SwitchRequired = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="label" name="foo" helpText="Some interesting help text" required>
      Label
    </Switch>
  );
};

SwitchRequired.storyName = 'Switch - Required';

export const SwitchDisabled = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" disabled name="foo">
      Label
    </Switch>
  );
};

SwitchDisabled.storyName = 'Switch - Disabled';

export const SwitchDisabledChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      id={useUID()}
      value="1"
      disabled
      checked={checked}
      name="foo"
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Switch>
  );
};

SwitchDisabledChecked.storyName = 'Switch - Disabled & Checked';

export const SwitchError = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" hasError>
      Label
    </Switch>
  );
};

SwitchError.storyName = 'Switch - Error';

export const SwitchErrorChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      id={useUID()}
      value="1"
      name="foo"
      hasError
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Switch>
  );
};

SwitchErrorChecked.storyName = 'Switch - Error & Checked';

export const SwitchErrorDisabled = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" hasError disabled>
      Label
    </Switch>
  );
};

SwitchErrorDisabled.storyName = 'Switch - Error & Disabled';

export const SwitchErrorDisabledChecked = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" hasError disabled checked>
      Label
    </Switch>
  );
};

SwitchErrorDisabledChecked.storyName = 'Switch - Error & Disabled & Checked';

export const SwitchHelpTextString = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" helpText="Some interesting help text">
      Label
    </Switch>
  );
};

SwitchHelpTextString.storyName = 'Switch - Help text string';

export const SwitchHelpTextChildren = (): React.ReactNode => {
  return (
    <Switch
      id={useUID()}
      value="1"
      name="foo"
      helpText={
        <>
          Some interesting help text with a <Anchor href="http://www.google.com">link</Anchor>
        </>
      }
    >
      Label
    </Switch>
  );
};

SwitchHelpTextChildren.storyName = 'Switch - Help text children';

export const SwitchControlled = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <>
      <Switch
        checked={checked1 === true}
        helpText="This is some help text."
        id={useUID()}
        name="foo"
        onChange={handleChange1}
        value="1"
      >
        First
      </Switch>
      <Switch
        checked={checked2 === true}
        helpText="This is some help text."
        id={useUID()}
        name="foo"
        onChange={handleChange2}
        value="2"
      >
        Second
      </Switch>
      <Switch
        checked={checked3 === true}
        helpText="This is some help text."
        id={useUID()}
        name="foo"
        onChange={handleChange3}
        value="3"
      >
        Third
      </Switch>
    </>
  );
};

SwitchControlled.storyName = 'Switch - Controlled';

export const DefaultSwitchGroup = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  return (
    <>
      <SwitchGroup
        name="bar"
        legend={
          <Text as="span" color="currentColor">
            This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
        helpText="Help text should go here."
        required
      >
        <Switch
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
        </Switch>
        <Switch
          checked={checked2}
          onChange={(event) => {
            setChecked2(event.currentTarget.checked);
          }}
          id={useUID()}
          value="2"
          helpText="This is some help text."
        >
          Second
        </Switch>
        <Switch
          checked={checked3}
          onChange={(event) => {
            setChecked3(event.currentTarget.checked);
          }}
          id={useUID()}
          value="3"
          helpText="This is some help text."
        >
          Third
        </Switch>
      </SwitchGroup>
    </>
  );
};

DefaultSwitchGroup.storyName = 'SwitchGroup';

export const SwitchGroupError = (): React.ReactNode => {
  return (
    <SwitchGroup name="bar" legend="This is the legend text" errorText="This is the error text." required>
      <Switch id={useUID()} value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupError.storyName = 'Switch Group - Error';

export const SwitchGroupDisabled = (): React.ReactNode => {
  return (
    <SwitchGroup name="bar" legend="This is the legend text" required disabled>
      <Switch id={useUID()} value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupDisabled.storyName = 'Switch Group - Disabled';

export const SwitchGroupOverrideDisabled = (): React.ReactNode => {
  return (
    <SwitchGroup name="bar" legend="This is the legend text" required>
      <Switch id={useUID()} value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch id={useUID()} value="3" helpText="This is some help text." disabled>
        Third
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupOverrideDisabled.storyName = 'Switch Group - Override Disabled';

export const SwitchGroupHorizontal = (): React.ReactNode => {
  return (
    <SwitchGroup
      name="bar"
      legend="This is the legend text"
      helpText="Help text should go here."
      orientation="horizontal"
      required
    >
      <Switch id={useUID()} value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupHorizontal.storyName = 'Switch Group - Horizontal';

export const SwitchGroupHorizontalDisabled = (): React.ReactNode => {
  return (
    <SwitchGroup name="bar" legend="This is the legend text" orientation="horizontal" required disabled>
      <Switch id={useUID()} value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupHorizontalDisabled.storyName = 'Switch Group - Horizontal disabled';

export const SwitchGroupHorizontalError = (): React.ReactNode => {
  return (
    <SwitchGroup
      name="bar"
      legend="This is the legend text"
      errorText="This is the error text."
      orientation="horizontal"
      required
    >
      <Switch id={useUID()} value="1" helpText="This is some help text.">
        First
      </Switch>
      <Switch id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Switch>
      <Switch id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Switch>
      <Switch id={useUID()} value="4" helpText="This is some help text.">
        Fourth
      </Switch>
      <Switch id={useUID()} value="5" helpText="This is some help text.">
        Fifth
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupHorizontalError.storyName = 'Switch Group - Horizontal error';
