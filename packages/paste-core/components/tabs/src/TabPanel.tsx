import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {TabPrimitivePanel} from '@twilio-paste/tabs-primitive';

import {TabsContext} from './TabsContext';
import {getElementName} from './utils';

export interface TabPanelProps {
  id?: string | undefined;
  tabId?: string | undefined;
  children: React.ReactNode;
  element?: BoxProps['element'];
  paddingTop?: 'space0';
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({children, element, paddingTop = 'space60', ...props}, ref) => {
    const tab = React.useContext(TabsContext);
    const elementName = getElementName(tab.orientation, 'TAB_PANEL', element);

    return (
      <TabPrimitivePanel
        {...(tab as any)}
        paddingTop={paddingTop}
        borderRadius="borderRadius20"
        _focusVisible={{
          boxShadow: 'shadowFocus',
          outline: 'none',
        }}
        {...props}
        element={elementName}
        as={Box}
        ref={ref}
      >
        {children}
      </TabPrimitivePanel>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  TabPanel.propTypes = {
    element: PropTypes.string,
    id: PropTypes.string,
    tabId: PropTypes.string,
  };
}

TabPanel.displayName = 'TabPanel';
export {TabPanel};
