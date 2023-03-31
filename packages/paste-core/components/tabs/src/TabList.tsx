import * as React from 'react';
import PropTypes from 'prop-types';
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

const HorizontalTabList: React.FC<React.PropsWithChildren<{element?: BoxProps['element']}>> = ({children, element}) => (
  <Box
    display="flex"
    element={element}
    borderBottomStyle="solid"
    borderBottomWidth="borderWidth10"
    borderBottomColor="colorBorderWeaker"
    marginBottom="space60"
  >
    {children}
  </Box>
);

HorizontalTabList.displayName = 'HorizontalTabList';

const VerticalTabList: React.FC<React.PropsWithChildren<{element?: BoxProps['element']}>> = ({children, element}) => (
  <Box element={element} marginRight="space110" minWidth="size20" maxWidth="size40">
    {children}
  </Box>
);

VerticalTabList.displayName = 'VerticalTabList';

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

TabList.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  focusable: PropTypes.bool,
  disabled: PropTypes.bool,
  element: PropTypes.string,
};

TabList.displayName = 'TabList';
export {TabList};
