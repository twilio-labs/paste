import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Toggle} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export const Default: React.FC<{onClick?: () => void}> = ({onClick}) => {
  const id = useUID();
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} onClick={onClick}>
      Label
    </Toggle>
  );
};

export const LabelOnly: React.FC = () => {
  const id = useUID();
  return <Toggle id={id}>Label</Toggle>;
};

export const Required: React.FC = () => {
  const id = useUID();
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} required>
      Label
    </Toggle>
  );
};

export const Disabled: React.FC = () => {
  const id = useUID();
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled>
      Label
    </Toggle>
  );
};

export const On: React.FC<{element?: string}> = ({element}) => {
  const id = useUID();
  return (
    <Toggle id={id} element={element} helpText={<>Info that helps a user with this field.</>} on data-testid="toggle">
      Label
    </Toggle>
  );
};

export const DisabledOn: React.FC = () => {
  const id = useUID();
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled on>
      Label
    </Toggle>
  );
};

export const Customized: React.FC = () => {
  const id = useUID();
  return (
    <CustomizationProvider baseTheme="default" elements={{TOGGLE: {width: '60px'}}}>
      <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled on>
        Label
      </Toggle>
    </CustomizationProvider>
  );
};
