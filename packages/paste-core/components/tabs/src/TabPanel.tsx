import * as React from 'react';
import * as PropTypes from 'prop-types';
import {TabPrimitivePanel} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';

export interface TabPanelProps {
  id?: string | undefined;
  tabId?: string | undefined;
  children: React.ReactNode;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({children, ...props}, ref) => {
  const tab = React.useContext(TabsContext);
  return (
    <TabPrimitivePanel {...(tab as any)} {...props} ref={ref}>
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
