import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {Box} from '@twilio-paste/box';
import {useTabPrimitiveState} from '@twilio-paste/tabs-primitive';
import type {TabPrimitiveInitialState, TabPrimitiveStateReturn} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import type {Variants} from './types';

export interface TabStateReturn extends TabPrimitiveStateReturn {
  [key: string]: any;
}

export interface TabsProps extends TabPrimitiveInitialState {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  state?: TabStateReturn;
  variant?: Variants;
}

// Set orientation to horizontal because undefined enables all arrow key movement
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({children, element = 'TABS', orientation = 'horizontal', state, variant, ...initialState}, ref) => {
    const tab = state || useTabPrimitiveState({orientation, ...initialState});
    const value = React.useMemo(() => ({...tab, variant}), [...Object.values(tab), variant]);
    const returnValue = <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;

    if (tab.orientation === 'vertical') {
      return (
        <Flex element={element} ref={ref} wrap={false} vAlignContent="stretch">
          {returnValue}
        </Flex>
      );
    }

    return <Box element={element}>{returnValue}</Box>;
  }
);

if (process.env.NODE_ENV === 'development') {
  Tabs.propTypes = {
    element: PropTypes.string,
    selectedId: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical', null]),
    variant: PropTypes.oneOf(['fitted', null]),
  };
}

Tabs.displayName = 'Tabs';
export {Tabs};

export {useTabPrimitiveState as useTabState};
