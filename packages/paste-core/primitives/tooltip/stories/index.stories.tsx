import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Absolute} from '@twilio-paste/absolute';
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
    <Absolute preset="right" top={12} right={12}>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </Absolute>
  );
};

const TopPlacementExample: React.FC<{}> = () => {
  const tooltip = useTooltipPrimitiveState({placement: 'top'});
  return (
    <Absolute preset="bottom" bottom={12}>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </Absolute>
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
