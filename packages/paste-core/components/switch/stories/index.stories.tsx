import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Switch, SwitchContainer} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Default: React.FC = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} helpText="Messages wil be sent to the registered number" label="Enable SMS notifications">
      <Switch />
    </SwitchContainer>
  );
};

export const SwitchOnly: React.FC = () => {
  const id = useUID();
  return <Switch id={id} />;
};

export const LabelOnly: React.FC = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} label="Enable notifications">
      <Switch />
    </SwitchContainer>
  );
};

export const Required: React.FC = () => {
  const id = useUID();
  return (
    <SwitchContainer
      id={id}
      helpText="Notifications must be enabled in order to proceed"
      label="Enable notifications"
      required
    >
      <Switch />
    </SwitchContainer>
  );
};

export const Disabled: React.FC = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} label="Show password" disabled>
      <Switch />
    </SwitchContainer>
  );
};

export const On: React.FC<{element?: string}> = ({element}) => {
  const id = useUID();
  return (
    <SwitchContainer id={id} element={element} label="Sign up for newsletter and updates">
      <Switch on />
    </SwitchContainer>
  );
};

export const DisabledOn: React.FC = () => {
  const id = useUID();
  return (
    <SwitchContainer
      id={id}
      label="Send copy to customer"
      helpText="Email will be send to the registered address"
      disabled
    >
      <Switch on />
    </SwitchContainer>
  );
};

export const Customized: React.FC = () => {
  const id = useUID();
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        SWITCH: {width: '52px', backgroundColor: 'colorBackgroundAvailable', borderRadius: 'borderRadius30'},
        SWITCH_KNOB: {color: 'colorTextError'},
        SWITCH_HELP_TEXT_WRAPPER: {marginLeft: 'space170'},
        SWITCH_LABEL_TEXT_WRAPPER: {color: 'colorTextBrandHighlight'},
      }}
    >
      <SwitchContainer id={id} helpText="Update registered number in settings" label="Enable SMS notifications">
        <Switch />
      </SwitchContainer>
    </CustomizationProvider>
  );
};
