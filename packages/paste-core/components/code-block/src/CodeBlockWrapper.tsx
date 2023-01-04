import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useTabPrimitiveState} from '@twilio-paste/tabs-primitive';
import type {TabPrimitiveInitialState, TabPrimitiveStateReturn} from '@twilio-paste/tabs-primitive';

import {CodeBlockTabsContext} from './CodeBlockTabsContext';

export interface CodeBlockTabStateReturn extends TabPrimitiveStateReturn {
  [key: string]: any;
}

export interface CodeBlockWrapperProps extends Omit<TabPrimitiveInitialState, 'orientation'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  state?: CodeBlockTabStateReturn;
}

export const CodeBlockWrapper = React.forwardRef<HTMLDivElement, CodeBlockWrapperProps>(
  ({children, state, element = 'CODE_BLOCK_WRAPPER', ...initialState}, ref) => {
    const tabState = state || useTabPrimitiveState({orientation: 'horizontal', ...initialState});

    return (
      <CodeBlockTabsContext.Provider value={tabState}>
        <Box element={element} ref={ref}>
          {children}
        </Box>
      </CodeBlockTabsContext.Provider>
    );
  }
);

CodeBlockWrapper.displayName = 'CodeBlockWrapper';

CodeBlockWrapper.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
