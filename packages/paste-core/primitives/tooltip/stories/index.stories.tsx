import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {useTooltipPrimitiveState, TooltipPrimitive, TooltipPrimitiveReference} from '../src';

const Example: React.FC<{}> = () => {
  const tooltip = useTooltipPrimitiveState();
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </>
  );
};

const RightPlacementExample: React.FC<{}> = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'right'});
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </>
  );
};

const LeftPlacementExample: React.FC<{}> = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'left'});
  return (
    <Box position="absolute" top={12} right={12}>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </Box>
  );
};

const TopPlacementExample: React.FC<{}> = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'top'});
  return (
    <Box position="absolute" bottom={12}>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </Box>
  );
};

const BottomPlacementExample: React.FC<{}> = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'bottom'});
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </>
  );
};

storiesOf('Primitives|Tooltip', module)
  .add('Simple Tooltip', () => {
    return <Example />;
  })
  .add('Tooltip Right Placement', () => {
    return <RightPlacementExample />;
  })
  .add('Tooltip Left Placement', () => {
    return <LeftPlacementExample />;
  })
  .add('Tooltip Top Placement', () => {
    return <TopPlacementExample />;
  })
  .add('Tooltip Bottom Placement', () => {
    return <BottomPlacementExample />;
  });
