import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Flex} from '@twilio-paste/flex';
import {useTabPrimitiveState, TabPrimitiveInitialState} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import {Variants} from './types';

export interface TabsProps extends TabPrimitiveInitialState {
  variant?: Variants;
}

// Set orientation to horizontal because undefined enables all arrow key movement
const Tabs: React.FC<TabsProps> = ({children, orientation = 'horizontal', variant, ...initialState}) => {
  const tab = useTabPrimitiveState({orientation, ...initialState});
  const value = React.useMemo(() => ({...tab, variant}), [...Object.values(tab), variant]);
  const returnValue = <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;

  if (tab.orientation === 'vertical') {
    return (
      <Flex wrap={false} vAlignContent="stretch">
        {returnValue}
      </Flex>
    );
  }
  return returnValue;
};

if (process.env.NODE_ENV === 'development') {
  Tabs.propTypes = {
    selectedId: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical', null]),
    variant: PropTypes.oneOf(['fitted', null]),
  };
}

Tabs.displayName = 'Tabs';
export {Tabs};
