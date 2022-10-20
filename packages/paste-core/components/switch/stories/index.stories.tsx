import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Switch, SwitchGroup} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  subcomponents: {SwitchGroup},
};

export const DefaultSwitch = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="label" name="foo">
      Label
    </Switch>
  );
};
DefaultSwitch.story = {
  name: 'Switch',
};

export const SwitchChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  console.log(1, checked);
  return (
    <Switch
      id={useUID()}
      value="1"
      name="foo"
      checked={checked}
      onChange={(event) => {
        console.log(2, event.currentTarget.checked, event.target.checked);
        setChecked(event.target.checked);
      }}
    >
      Label
    </Switch>
  );
};

SwitchChecked.story = {
  name: 'Switch - Checked',
};

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

SwitchWithNoID.story = {
  name: 'Switch - With no ID',
};

export const SwitchDefaultChecked = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="label" name="foo" defaultChecked>
      Label
    </Switch>
  );
};
SwitchDefaultChecked.story = {
  name: 'Switch - defaultChecked',
};

export const SwitchRequired = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="label" name="foo" helpText="Some interesting help text" required>
      Label
    </Switch>
  );
};

SwitchRequired.story = {
  name: 'Switch - Required',
};

export const SwitchDisabled = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" disabled name="foo">
      Label
    </Switch>
  );
};

SwitchDisabled.story = {
  name: 'Switch - Disabled',
};

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

SwitchDisabledChecked.story = {
  name: 'Switch - Disabled & Checked',
};

export const SwitchError = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" hasError>
      Label
    </Switch>
  );
};

SwitchError.story = {
  name: 'Switch - Error',
};

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

SwitchErrorChecked.story = {
  name: 'Switch - Error & Checked',
};

export const SwitchErrorDisabled = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" hasError disabled>
      Label
    </Switch>
  );
};

SwitchErrorDisabled.story = {
  name: 'Switch - Error & Disabled',
};

export const SwitchErrorDisabledChecked = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" hasError disabled checked>
      Label
    </Switch>
  );
};

SwitchErrorDisabledChecked.story = {
  name: 'Switch - Error & Disabled & Checked',
};

export const SwitchHelpTextString = (): React.ReactNode => {
  return (
    <Switch id={useUID()} value="1" name="foo" helpText="Some interesting help text">
      Label
    </Switch>
  );
};

SwitchHelpTextString.story = {
  name: 'Switch - Help text string',
};

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

SwitchHelpTextChildren.story = {
  name: 'Switch - Help text children',
};

export const SwitchSelectAll = (): React.ReactNode => {
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
      isSelectAll
    >
      Select all
    </Switch>
  );
};

SwitchSelectAll.story = {
  name: 'Switch - Select all',
};

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

SwitchControlled.story = {
  name: 'Switch - Controlled',
};

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

DefaultSwitchGroup.story = {
  name: 'SwitchGroup',
};

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

SwitchGroupError.story = {
  name: 'Switch Group - Error',
};

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

SwitchGroupDisabled.story = {
  name: 'Switch Group - Disabled',
};

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

SwitchGroupOverrideDisabled.story = {
  name: 'Switch Group - Override Disabled',
};

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

SwitchGroupHorizontal.story = {
  name: 'Switch Group - Horizontal',
};

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

SwitchGroupHorizontalDisabled.story = {
  name: 'Switch Group - Horizontal disabled',
};

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
        Forth
      </Switch>
      <Switch id={useUID()} value="5" helpText="This is some help text.">
        Fifth
      </Switch>
    </SwitchGroup>
  );
};

SwitchGroupHorizontalError.story = {
  name: 'Switch Group - Horizontal error',
};

export const SwitchIndeterminateGroup = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const SwitchRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <SwitchGroup isSelectAll name="bar" legend="Select your favourite">
      <Switch
        id={useUID()}
        checked={allChecked}
        indeterminate={indeterminate}
        ref={SwitchRef}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Switch>
      <Switch
        id={useUID()}
        checked={checkedItems[0]}
        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Snacks
      </Switch>
      <Switch
        id={useUID()}
        checked={checkedItems[1]}
        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Drinks
      </Switch>
    </SwitchGroup>
  );
};

SwitchIndeterminateGroup.story = {
  name: 'Switch - Indeterminate group',
};

export const SwitchIndeterminateGroupDisabled = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);
  const [checkedItems2, setCheckedItems2] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const allChecked2 = checkedItems2.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;
  const indeterminate2 = checkedItems2.some(Boolean) && !allChecked2;

  const SwitchRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <Stack orientation="horizontal" spacing="space70">
      <SwitchGroup isSelectAll disabled name="bar" legend="Select your favourite">
        <Switch id={useUID()} checked ref={SwitchRef}>
          Select all
        </Switch>
        <Switch id={useUID()} checked onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
          Snacks
        </Switch>
        <Switch id={useUID()} checked onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}>
          Drinks
        </Switch>
      </SwitchGroup>
      <SwitchGroup isSelectAll disabled name="bar" legend="Select your favourite">
        <Switch
          id={useUID()}
          checked={allChecked}
          indeterminate={indeterminate}
          ref={SwitchRef}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
          Select all
        </Switch>
        <Switch
          id={useUID()}
          checked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Snacks
        </Switch>
        <Switch
          id={useUID()}
          checked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Drinks
        </Switch>
      </SwitchGroup>
      <SwitchGroup isSelectAll disabled name="bar" legend="Select your favourite">
        <Switch
          id={useUID()}
          checked={allChecked2}
          indeterminate={indeterminate2}
          onChange={(e) => setCheckedItems2([e.target.checked, e.target.checked])}
        >
          Select all
        </Switch>
        <Switch
          id={useUID()}
          checked={checkedItems2[0]}
          onChange={(e) => setCheckedItems2([e.target.checked, checkedItems2[1]])}
        >
          Snacks
        </Switch>
        <Switch
          id={useUID()}
          checked={checkedItems2[1]}
          onChange={(e) => setCheckedItems2([checkedItems2[0], e.target.checked])}
        >
          Drinks
        </Switch>
      </SwitchGroup>
    </Stack>
  );
};

SwitchIndeterminateGroupDisabled.story = {
  name: 'Switch - Indeterminate group disabled',
};

export const SwitchIndeterminateHorizontalGroup = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const SwitchRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <SwitchGroup isSelectAll orientation="horizontal" name="bar" legend="Select your favourite">
      <Switch
        id={useUID()}
        checked={allChecked}
        indeterminate={indeterminate}
        ref={SwitchRef}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Switch>
      <Switch
        id={useUID()}
        checked={checkedItems[0]}
        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Snacks
      </Switch>
      <Switch
        id={useUID()}
        checked={checkedItems[1]}
        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Drinks
      </Switch>
    </SwitchGroup>
  );
};

SwitchIndeterminateHorizontalGroup.story = {
  name: 'Switch - Indeterminate horizontal group',
};

/*import * as React from 'react';
import type {Story} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Label} from '@twilio-paste/label';
import {Switch, SwitchContainer} from '../src';
import {useTheme} from '@twilio-paste/theme';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Default: Story = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} helpText="Messages wil be sent to the registered number" label="Enable SMS notifications">
      <Switch />
    </SwitchContainer>
  );
};

export const SwitchOnly: Story = () => {
  const id = useUID();
  const labelId = useUID();
  return (
    <>
      <Label htmlFor={id} id={labelId}>
        Label
      </Label>
      <Switch id={id} labelId={labelId} />
    </>
  );
};

export const LabelOnly: Story = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} label="Enable notifications">
      <Switch />
    </SwitchContainer>
  );
};

export const Required: Story<{element?: string}> = ({element}) => {
  const id = useUID();
  return (
    <SwitchContainer
      id={id}
      element={element}
      helpText="Notifications must be enabled in order to proceed"
      label="Enable notifications"
      required
    >
      <Switch element={element} />
    </SwitchContainer>
  );
};

export const Disabled: Story = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} label="Show password" disabled>
      <Switch />
    </SwitchContainer>
  );
};

export const On: Story<{element?: string}> = ({element}) => {
  const id = useUID();
  return (
    <SwitchContainer id={id} element={element} label="Sign up for newsletter and updates">
      <Switch on element={element} />
    </SwitchContainer>
  );
};

export const DisabledOn: Story = () => {
  const id = useUID();
  return (
    <SwitchContainer
      id={id}
      label="Send copy to customer"
      helpText="Email will be sent to the registered address"
      disabled
    >
      <Switch on />
    </SwitchContainer>
  );
};

export const Controlled: Story = () => {
  const id = useUID();
  const [on, setOn] = React.useState(false);
  return (
    <SwitchContainer id={id} label="Opt into marketing emails" helpText="Emails will be sent to the registered address">
      <Switch on={on} onClick={() => setOn(!on)} />
    </SwitchContainer>
  );
};

export const Customized: Story = () => {
  const id = useUID();
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      theme={currentTheme}
      elements={{
        SWITCH: {
          width: '52px',
          backgroundColor: 'colorBackgroundAvailable',
          borderRadius: 'borderRadius30',
          '&[aria-checked=true]': {backgroundColor: 'colorBackgroundAvailable'},
        },
        SWITCH_KNOB: {color: 'colorTextError'},
        SWITCH_CONTAINER_HELP_TEXT: {fontWeight: 'fontWeightMedium', fontSize: 'fontSize40'},
        SWITCH_CONTAINER_LABEL: {fontWeight: 'fontWeightMedium'},
      }}
    >
      <SwitchContainer id={id} helpText="Update registered number in settings" label="Enable SMS notifications">
        <Switch />
      </SwitchContainer>
    </CustomizationProvider>
  );
};

*/
