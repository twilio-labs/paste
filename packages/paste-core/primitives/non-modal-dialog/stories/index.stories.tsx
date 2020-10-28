import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {
  useNonModalDialogPrimitiveState,
  NonModalDialogPrimitive,
  NonModalDialogDisclosurePrimitive,
  NonModalDialogArrowPrimitive,
} from '../src';

const Example: React.FC<{}> = () => {
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

const RightPlacementExample: React.FC<{}> = () => {
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

const LeftPlacementExample: React.FC<{}> = () => {
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

const TopPlacementExample: React.FC<{}> = () => {
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

const BottomPlacementExample: React.FC<{}> = () => {
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

const GutterExample: React.FC<{}> = () => {
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

storiesOf('Primitives|Non-Modal Dialog', module)
  .add('Simple Non-Modal Dialog', () => {
    return <Example />;
  })
  .add('Non-Modal Dialog Right Placement', () => {
    return <RightPlacementExample />;
  })
  .add('Non-Modal Dialog Left Placement', () => {
    return <LeftPlacementExample />;
  })
  .add('Non-Modal Dialog Top Placement', () => {
    return <TopPlacementExample />;
  })
  .add('Non-Modal Dialog Bottom Placement', () => {
    return <BottomPlacementExample />;
  })
  .add('Non-Modal Dialog Without Gutter', () => {
    return <GutterExample />;
  });
