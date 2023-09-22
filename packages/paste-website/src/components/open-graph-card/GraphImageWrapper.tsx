import { Box } from '@twilio-paste/box';
import * as React from 'react';

export interface GraphImageWrapperProps {
  children: NonNullable<React.ReactNode>;
}

const GraphImageWrapper: React.FC<React.PropsWithChildren<GraphImageWrapperProps>> = ({ children }) => {
  return (
    <Box
      padding="space140"
      paddingX="space150"
      paddingTop="space160"
      position="relative"
      width="800px"
      minHeight="420px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};

export { GraphImageWrapper };
