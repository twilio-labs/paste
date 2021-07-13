import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
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
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({children, ...props}, ref) => {
  const tab = React.useContext(TabsContext);
  return (
    <TabPrimitivePanel {...(tab as any)} {...tabPanelStyles} {...props} as={Box} ref={ref}>
      {children}
    </TabPrimitivePanel>
  );
});

if (process.env.NODE_ENV === 'development') {
  TabPanel.propTypes = {
    id: PropTypes.string,
    tabId: PropTypes.string,
  };
}

TabPanel.displayName = 'TabPanel';
export {TabPanel};
