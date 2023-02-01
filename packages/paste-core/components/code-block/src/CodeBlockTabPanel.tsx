import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {TabPrimitivePanel} from '@twilio-paste/tabs-primitive';

import {CodeBlockTabsContext} from './CodeBlockTabsContext';

export interface CodeBlockTabPanelProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const CodeBlockTabPanel = React.forwardRef<HTMLDivElement, CodeBlockTabPanelProps>(
  ({children, element = 'CODE_BLOCK_TAB_PANEL', ...props}, ref) => {
    const tabState = React.useContext(CodeBlockTabsContext);

    return (
      <TabPrimitivePanel {...safelySpreadBoxProps(props)} {...tabState} as={Box} element={element} ref={ref}>
        {children}
      </TabPrimitivePanel>
    );
  }
);

CodeBlockTabPanel.displayName = 'CodeBlockTabPanel';

CodeBlockTabPanel.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
