import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
// import {CustomizationProvider} from '@twilio-paste/customization';
import {Switch, SwitchContainer} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Switch',
  component: Switch,
};

export const SwitchFinal: React.FC = () => {
  const id = useUID();
  return (
    <SwitchContainer id={id} helpText="This is help text" label="This is the label">
      <Switch disabled />
    </SwitchContainer>
  );
};

// export const ToggleOnly: React.FC = () => {
//   const id = useUID();
//   return <Toggle id={id}></Toggle>;
// };

// export const Default: React.FC<{onClick?: () => void}> = ({onClick}) => {
//   const id = useUID();
//   return (
//     <Toggle id={id} helpText={<>Info that helps a user with this field.</>} onClick={onClick}>
//       Label
//     </Toggle>
//   );
// };

// export const LabelOnly: React.FC = () => {
//   const id = useUID();
//   return <Toggle id={id}>Label</Toggle>;
// };

// export const Required: React.FC = () => {
//   const id = useUID();
//   return (
//     <Toggle id={id} helpText={<>Info that helps a user with this field.</>} required>
//       Label
//     </Toggle>
//   );
// };

// export const Disabled: React.FC = () => {
//   const id = useUID();
//   return (
//     <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled>
//       Label
//     </Toggle>
//   );
// };

// export const On: React.FC<{element?: string}> = ({element}) => {
//   const id = useUID();
//   return (
//     <Toggle id={id} element={element} helpText={<>Info that helps a user with this field.</>} on data-testid="toggle">
//       Label
//     </Toggle>
//   );
// };

// export const DisabledOn: React.FC = () => {
//   const id = useUID();
//   return (
//     <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled on>
//       Label
//     </Toggle>
//   );
// };

// export const Customized: React.FC = () => {
//   const id = useUID();
//   return (
//     <CustomizationProvider
//       baseTheme="default"
//       elements={{
//         TOGGLE: {width: '60px', backgroundColor: 'colorBackgroundAvailable'},
//         TOGGLE_KNOB: {color: 'colorTextError'},
//       }}
//     >
//       <Toggle id={id} helpText={<>Info that helps a user with this field.</>}>
//         Label
//       </Toggle>
//     </CustomizationProvider>
//   );
// };
