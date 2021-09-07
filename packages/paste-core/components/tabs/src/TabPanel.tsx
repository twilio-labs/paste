import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {TabPrimitivePanel} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';

export const tabPanelStyles = {
  borderRadius: 'borderRadius20',
  _focusVisible: {
    boxShadow: 'shadowFocus',
    outline: 'none',
  },
} as Partial<BoxStyleProps>;

export interface TabPanelProps {
  id?: string | undefined;
  tabId?: string | undefined;
  children: React.ReactNode;
  element?: BoxProps['element'];
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({children, element = 'TAB_PANEL', ...props}, ref) => {
  const tab = React.useContext(TabsContext);

  return (
    <TabPrimitivePanel
      {...(tab as any)}
      {...tabPanelStyles}
      {...props}
      element={`${tab.orientation.toUpperCase()}_${element}`}
      as={Box}
      ref={ref}
    >
      {children}
    </TabPrimitivePanel>
  );
});

if (process.env.NODE_ENV === 'development') {
  TabPanel.propTypes = {
    element: PropTypes.string,
    id: PropTypes.string,
    tabId: PropTypes.string,
  };
}

TabPanel.displayName = 'TabPanel';
export {TabPanel};
