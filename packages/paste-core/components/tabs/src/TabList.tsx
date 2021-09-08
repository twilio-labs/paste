import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {TabPrimitiveList} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import type {Variants} from './types';
import {getElementName} from './utils';

export interface TabListProps {
  'aria-label': string;
  disabled?: boolean | undefined;
  element?: BoxProps['element'];
  focusable?: boolean | undefined;
  children: React.ReactNode;
  variant?: Variants;
}

const HorizontalTabList: React.FC<{element?: BoxProps['element']}> = ({children, element}) => (
  <Box
    display="flex"
    borderBottomWidth="borderWidth10"
    borderBottomColor="colorBorderWeak"
    borderBottomStyle="solid"
    element={element}
    marginBottom="space60"
  >
    {children}
  </Box>
);

const VerticalTabList: React.FC<{element?: BoxProps['element']}> = ({children, element}) => (
  <Box
    borderLeftWidth="borderWidth10"
    borderLeftColor="colorBorderWeak"
    borderLeftStyle="solid"
    element={element}
    marginRight="space110"
    minWidth="size20"
    maxWidth="size40"
  >
    {children}
  </Box>
);

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({children, element, variant, ...props}, ref) => {
  const tab = React.useContext(TabsContext);
  const {orientation} = tab;
  const elementName = getElementName(orientation, 'TAB_LIST', element);
  const TabListWrapper = orientation === 'vertical' ? VerticalTabList : HorizontalTabList;

  return (
    <TabPrimitiveList {...(tab as any)} as={Box} {...props} element={elementName} ref={ref}>
      <TabListWrapper element={`${elementName}_CHILD`}>{children}</TabListWrapper>
    </TabPrimitiveList>
  );
});

if (process.env.NODE_ENV === 'development') {
  TabList.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    focusable: PropTypes.bool,
    disabled: PropTypes.bool,
    element: PropTypes.string,
  };
}

TabList.displayName = 'TabList';
export {TabList};
