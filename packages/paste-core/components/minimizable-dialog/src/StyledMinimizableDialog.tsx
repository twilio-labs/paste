import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const StyledMinimizableDialog: React.FC<{element?: string; children: React.ReactNode}> = ({
  element,
  children,
}) => (
  <Box
    element={element}
    borderRadius="borderRadius20"
    display="flex"
    flexDirection="column"
    backgroundColor="colorBackgroundBody"
    width="size40"
    boxShadow="shadow"
  >
    {children}
  </Box>
);

StyledMinimizableDialog.displayName = 'StyledMinimizableDialog';
