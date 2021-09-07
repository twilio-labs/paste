import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {TabsContext} from './TabsContext';

export interface TabPanelsProps {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  ({children, element = 'TAB_PANELS', ...props}, ref) => {
    const {orientation} = React.useContext(TabsContext);
    return (
      <Box {...safelySpreadBoxProps(props)} element={`${orientation.toUpperCase()}_${element}`} width="100%" ref={ref}>
        {children}
      </Box>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  TabPanels.propTypes = {
    element: PropTypes.string,
  };
}

TabPanels.displayName = 'TabPanels';
export {TabPanels};
