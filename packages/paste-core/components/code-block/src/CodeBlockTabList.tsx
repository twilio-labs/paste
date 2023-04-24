import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {TabList} from '@twilio-paste/tabs';
import type {TabListProps} from '@twilio-paste/tabs';

export interface CodeBlockTabListProps extends Omit<TabListProps, 'aria-label'> {
  element?: BoxProps['element'];
}

export const CodeBlockTabList = React.forwardRef<HTMLDivElement, CodeBlockTabListProps>(
  ({children, element = 'CODE_BLOCK_TAB_LIST', ...props}, ref) => {
    return (
      <Box paddingX="space70">
        <TabList {...props} aria-label="label" ref={ref} element={element}>
          {children}
        </TabList>
      </Box>
    );
  }
);

CodeBlockTabList.displayName = 'CodeBlockTabList';

CodeBlockTabList.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
