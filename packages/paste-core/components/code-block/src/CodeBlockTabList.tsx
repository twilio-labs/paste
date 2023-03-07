import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {TabPrimitiveList} from '@twilio-paste/tabs-primitive';

import {CodeBlockTabsContext} from './CodeBlockTabsContext';

export interface CodeBlockTabListProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const CodeBlockTabList = React.forwardRef<HTMLDivElement, CodeBlockTabListProps>(
  ({children, element = 'CODE_BLOCK_TAB_LIST', ...props}, ref) => {
    const tabState = React.useContext(CodeBlockTabsContext);

    return (
      <TabPrimitiveList
        {...safelySpreadBoxProps(props)}
        {...tabState}
        as={Box}
        ref={ref}
        element={element}
        display="flex"
        columnGap="space80"
        backgroundColor="colorBackgroundInverse"
        paddingX="space60"
      >
        {children}
      </TabPrimitiveList>
    );
  }
);

CodeBlockTabList.displayName = 'CodeBlockTabList';

CodeBlockTabList.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
