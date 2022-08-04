import * as React from 'react';
import {Toggle} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Toggle',
  component: Toggle,
};

export const Default = (): React.ReactNode => {
  return (
    <Toggle id="toggle" helpText={<>Info that helps a user with this field.</>}>
      Label
    </Toggle>
  );
};

export const LabelOnly = (): React.ReactNode => {
  return (
    <>
      <Toggle id="toggle">Label</Toggle>
    </>
  );
};

export const Required = (): React.ReactNode => {
  return (
    <Toggle id="toggle" helpText={<>Info that helps a user with this field.</>} required>
      Label
    </Toggle>
  );
};

export const Disabled = (): React.ReactNode => {
  return (
    <Toggle id="toggle" helpText={<>Info that helps a user with this field.</>} disabled>
      Label
    </Toggle>
  );
};

export const On = (): React.ReactNode => {
  return (
    <Toggle id="toggle" helpText={<>Info that helps a user with this field.</>} on>
      Label
    </Toggle>
  );
};

export const DisabledOn = (): React.ReactNode => {
  return (
    <Toggle id="toggle" helpText={<>Info that helps a user with this field.</>} disabled on>
      Label
    </Toggle>
  );
};
