import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface TabPanelsProps {
  children: React.ReactNode;
}

const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(({children, ...props}, ref) => {
  return (
    <Box {...safelySpreadBoxProps(props)} width="100%" ref={ref}>
      {children}
    </Box>
  );
});

TabPanels.displayName = 'TabPanels';
export {TabPanels};
