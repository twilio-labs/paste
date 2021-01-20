import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Flex} from '@twilio-paste/flex';
import {useTabPrimitiveState, TabPrimitiveInitialState, TabPrimitiveStateReturn} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import {Variants} from './types';

export interface TabStateReturn extends TabPrimitiveStateReturn {
  [key: string]: any;
}

export interface TabsProps extends TabPrimitiveInitialState {
  children?: React.ReactNode;
  state?: TabStateReturn;
  variant?: Variants;
}

// Set orientation to horizontal because undefined enables all arrow key movement
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({children, orientation = 'horizontal', state, variant, ...initialState}, ref) => {
    const tab = state || useTabPrimitiveState({orientation, ...initialState});
    const value = React.useMemo(() => ({...tab, variant}), [...Object.values(tab), variant]);
    const returnValue = <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;

    if (tab.orientation === 'vertical') {
      return (
        <Flex ref={ref} wrap={false} vAlignContent="stretch">
          {returnValue}
        </Flex>
      );
    }
    return returnValue;
  }
);

if (process.env.NODE_ENV === 'development') {
  Tabs.propTypes = {
    selectedId: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical', null]),
    variant: PropTypes.oneOf(['fitted', null]),
  };
}

Tabs.displayName = 'Tabs';
export {Tabs};

export {useTabPrimitiveState as useTabState};
