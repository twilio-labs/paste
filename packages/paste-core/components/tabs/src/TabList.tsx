import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps} from '@twilio-paste/box';
import {TabPrimitiveList} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import {Variants} from './types';

interface TabListProps extends Pick<BoxProps, 'element'> {
  'aria-label': string;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  children: React.ReactNode;
  variant?: Variants;
}

type TabListWrapperProps = Pick<BoxProps, 'element'>;

const HorizontalTabList: React.FC<TabListWrapperProps> = ({children, element}) => (
  <Box
    display="flex"
    borderBottomWidth="borderWidth10"
    borderBottomColor="colorBorderLight"
    element={`${element}_HORIZONTAL`}
    borderBottomStyle="solid"
    marginBottom="space60"
  >
    {children}
  </Box>
);

const VerticalTabList: React.FC<TabListWrapperProps> = ({children, element}) => (
  <Box
    borderLeftWidth="borderWidth10"
    borderLeftColor="colorBorderLight"
    borderLeftStyle="solid"
    marginRight="space110"
    minWidth="size20"
    maxWidth="size40"
    element={`${element}_VERTICAL`}
  >
    {children}
  </Box>
);

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({children, element = 'TAB_LIST', variant, ...props}, ref) => {
    const tab = React.useContext(TabsContext);
    const TabListWrapper = tab.orientation === 'vertical' ? VerticalTabList : HorizontalTabList;
    return (
      <TabPrimitiveList {...(tab as any)} {...props} ref={ref}>
        <TabListWrapper element={element}>{children}</TabListWrapper>
      </TabPrimitiveList>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  TabList.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    focusable: PropTypes.bool,
    disabled: PropTypes.bool,
  };
}

TabList.displayName = 'TabList';
export {TabList};
