import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export const StyledMinimizableDialog: React.FC<React.PropsWithChildren<Pick<BoxProps, 'element'>>> = ({
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
