import * as React from 'react';
import {ProductDebuggerIcon} from '@twilio-paste/icons/esm/ProductDebuggerIcon';
import {Button} from '@twilio-paste/button';

export const DebuggerAction: React.FC = () => {
  return (
    <Button variant="secondary_icon" size="reset">
      <ProductDebuggerIcon decorative={false} title="Debugger" />
    </Button>
  );
};
