import * as React from 'react';
import { Box } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import { Tabs } from '@twilio-paste/tabs';
import type { TabStateReturn } from '@twilio-paste/tabs';

export interface CodeBlockTabStateReturn extends TabStateReturn {
  [key: string]: any;
}

export interface CodeBlockWrapperProps {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  state?: CodeBlockTabStateReturn;
}

export const CodeBlockWrapper = React.forwardRef<HTMLDivElement, CodeBlockWrapperProps>(
  ({ children, state, element = 'CODE_BLOCK_WRAPPER' }, ref) => {
    return (
      <Tabs variant="inverse" state={state}>
        <Box
          backgroundColor="colorBackgroundInverseStrong"
          borderRadius="borderRadius20"
          overflow="hidden"
          element={element}
          ref={ref}
        >
          {children}
        </Box>
      </Tabs>
    );
  },
);

CodeBlockWrapper.displayName = 'CodeBlockWrapper';
