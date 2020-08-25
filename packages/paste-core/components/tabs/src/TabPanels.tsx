import * as React from 'react';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';

export interface TabPanelsProps extends Pick<BoxProps, 'element'> {
  children: React.ReactNode;
}

const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  ({children, element = 'TAB_PANELS', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} element={element} width="100%" ref={ref}>
        {children}
      </Box>
    );
  }
);

TabPanels.displayName = 'TabPanels';
export {TabPanels};
