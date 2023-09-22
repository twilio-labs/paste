import * as React from 'react';
import { Button } from '@twilio-paste/core/button';
import { Tooltip } from '@twilio-paste/core/tooltip';

const TooltipPreview = (): JSX.Element => {
  return (
    <Tooltip text="Welcome to Paste!" placement="right">
      <Button variant="primary">Open tooltip</Button>
    </Tooltip>
  );
};

export { TooltipPreview };
