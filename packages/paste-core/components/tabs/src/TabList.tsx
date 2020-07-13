import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {TabPrimitiveList} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';

interface TabListProps {
  'aria-label': string;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  children: React.ReactNode;
}

const HorizontalTabList: React.FC = ({children}) => (
  <Box
    display="flex"
    borderBottomWidth="borderWidth20"
    borderBottomColor="colorBorderLighter"
    borderBottomStyle="solid"
  >
    {children}
  </Box>
);

const VerticalTabList: React.FC = ({children}) => (
  <Box
    borderRightWidth="borderWidth20"
    borderRightColor="colorBorderLighter"
    borderRightStyle="solid"
    maxWidth="size30"
  >
    {children}
  </Box>
);

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({children, ...props}, ref) => {
  const tab = React.useContext(TabsContext);
  const TabListWrapper = tab.orientation === 'vertical' ? VerticalTabList : HorizontalTabList;
  return (
    <TabPrimitiveList {...(tab as any)} {...props} ref={ref}>
      <TabListWrapper>{children}</TabListWrapper>
    </TabPrimitiveList>
  );
});

if (process.env.NODE_ENV === 'development') {
  TabList.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    focusable: PropTypes.bool,
    disabled: PropTypes.bool,
  };
}

TabList.displayName = 'TabList';
export {TabList};
