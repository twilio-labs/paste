import * as React from 'react-16';
import {Box} from '@twilio-paste/box';

export interface GraphImageWrapperProps {
  children: NonNullable<React.ReactNode>;
}

const GraphImageWrapper: React.FC<GraphImageWrapperProps> = ({children}) => {
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

export {GraphImageWrapper};
