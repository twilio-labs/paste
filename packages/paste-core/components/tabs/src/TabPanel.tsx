import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {TabPrimitivePanel} from '@twilio-paste/tabs-primitive';

import {TabsContext} from './TabsContext';
import {getElementName} from './utils';

export const tabPanelStyles = {
  paddingTop: 'space60',
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

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(({children, element, ...props}, ref) => {
  const tab = React.useContext(TabsContext);
  const elementName = getElementName(tab.orientation, 'TAB_PANEL', element);

  return (
    <TabPrimitivePanel {...(tab as any)} {...tabPanelStyles} {...props} element={elementName} as={Box} ref={ref}>
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
