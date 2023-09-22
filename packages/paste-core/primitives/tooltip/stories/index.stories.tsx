import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';

import { useTooltipPrimitiveState, TooltipPrimitive, TooltipPrimitiveReference } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Tooltip',
  component: TooltipPrimitive,
  subcomponents: { TooltipPrimitiveReference },
};

export const SimpleTooltip = (): React.ReactNode => {
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

export const TooltipRightPlacement = (): React.ReactNode => {
  const tooltip = useTooltipPrimitiveState({ placement: 'right' });
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </>
  );
};

export const TooltipLeftPlacement = (): React.ReactNode => {
  const tooltip = useTooltipPrimitiveState({ placement: 'left' });
  return (
    <Box position="absolute" top={12} right={12}>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </Box>
  );
};

export const TooltipTopPlacement = (): React.ReactNode => {
  const tooltip = useTooltipPrimitiveState({ placement: 'top' });
  return (
    <Box position="absolute" bottom={12}>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </Box>
  );
};

export const TooltipBottomPlacement = (): React.ReactNode => {
  const tooltip = useTooltipPrimitiveState({ placement: 'bottom' });
  return (
    <>
      <TooltipPrimitiveReference {...tooltip} as={Button} variant="primary">
        Open Tooltip
      </TooltipPrimitiveReference>
      <TooltipPrimitive {...tooltip}>Welcome to Paste!</TooltipPrimitive>
    </>
  );
};
