import * as React from 'react';

import type {BoxProps} from '@twilio-paste/box';
import {Tab} from '@twilio-paste/tabs';
import type {TabProps} from '@twilio-paste/tabs';

export interface CodeBlockTabProps extends TabProps {
  element?: BoxProps['element'];
}

export const CodeBlockTab = React.forwardRef<HTMLDivElement, CodeBlockTabProps>(
  ({children, element = 'CODE_BLOCK_TAB', ...props}, ref) => {
    return (
      <Tab element={element} ref={ref} {...props}>
        {children}
      </Tab>
    );
  }
);

CodeBlockTab.displayName = 'CodeBlockTab';
