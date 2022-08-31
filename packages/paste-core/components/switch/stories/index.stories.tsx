import * as React from 'react';
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
