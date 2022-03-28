import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {
  useNonModalDialogPrimitiveState,
  NonModalDialogPrimitive,
  NonModalDialogDisclosurePrimitive,
  NonModalDialogArrowPrimitive,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Non-Modal Dialog',
  component: NonModalDialogPrimitive,
  subcomponents: {NonModalDialogDisclosurePrimitive, NonModalDialogArrowPrimitive},
};

export const SimpleNonModalDialog = (): React.ReactNode => {
  const nonModalDialog = useNonModalDialogPrimitiveState();
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome">
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        Welcome to Paste!
      </NonModalDialogPrimitive>
    </>
  );
};

SimpleNonModalDialog.story = {
  name: 'Simple Non-Modal Dialog',
};

export const NonModalDialogRightPlacement = (): React.ReactNode => {
  const nonModalDialog = useNonModalDialogPrimitiveState({placement: 'right'});
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome">
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        Welcome to Paste!
      </NonModalDialogPrimitive>
    </>
  );
};

NonModalDialogRightPlacement.story = {
  name: 'Non-Modal Dialog Right Placement',
};

export const NonModalDialogLeftPlacement = (): React.ReactNode => {
  const nonModalDialog = useNonModalDialogPrimitiveState({placement: 'left'});
  return (
    <Box position="absolute" top={12} right={12}>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome">
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        Welcome to Paste!
      </NonModalDialogPrimitive>
    </Box>
  );
};

NonModalDialogLeftPlacement.story = {
  name: 'Non-Modal Dialog Left Placement',
};

export const NonModalDialogTopPlacement = (): React.ReactNode => {
  const nonModalDialog = useNonModalDialogPrimitiveState({placement: 'top'});
  return (
    <Box position="absolute" bottom={12}>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome">
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        Welcome to Paste!
      </NonModalDialogPrimitive>
    </Box>
  );
};

NonModalDialogTopPlacement.story = {
  name: 'Non-Modal Dialog Top Placement',
};

export const NonModalDialogBottomPlacement = (): React.ReactNode => {
  const nonModalDialog = useNonModalDialogPrimitiveState({placement: 'bottom'});
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome">
        <NonModalDialogArrowPrimitive {...nonModalDialog} />
        Welcome to Paste!
      </NonModalDialogPrimitive>
    </>
  );
};

NonModalDialogBottomPlacement.story = {
  name: 'Non-Modal Dialog Bottom Placement',
};

export const NonModalDialogWithoutGutter = (): React.ReactNode => {
  const nonModalDialog = useNonModalDialogPrimitiveState({gutter: 0});
  return (
    <>
      <NonModalDialogDisclosurePrimitive {...nonModalDialog}>Open non-modal dialog</NonModalDialogDisclosurePrimitive>
      <NonModalDialogPrimitive {...nonModalDialog} aria-label="Welcome">
        Welcome to Paste!
      </NonModalDialogPrimitive>
    </>
  );
};

NonModalDialogWithoutGutter.story = {
  name: 'Non-Modal Dialog Without Gutter',
};
