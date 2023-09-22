import { Button } from '@twilio-paste/button';
import { ProductDebuggerIcon } from '@twilio-paste/icons/esm/ProductDebuggerIcon';
import * as React from 'react';

export const DebuggerAction: React.FC = () => {
  return (
    <Button variant="secondary_icon" size="reset">
      <ProductDebuggerIcon decorative={false} title="Debugger" />
    </Button>
  );
};
