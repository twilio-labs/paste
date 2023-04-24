import * as React from 'react';
import PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {TabPanel} from '@twilio-paste/tabs';

export interface CodeBlockTabPanelProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const CodeBlockTabPanel = React.forwardRef<HTMLDivElement, CodeBlockTabPanelProps>(
  ({children, element = 'CODE_BLOCK_TAB_PANEL', ...props}, ref) => {
    return (
      <TabPanel {...props} paddingTop="space0" element={element} ref={ref}>
        {children}
      </TabPanel>
    );
  }
);

CodeBlockTabPanel.displayName = 'CodeBlockTabPanel';

CodeBlockTabPanel.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
