import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {TabPrimitiveList} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import {Variants} from './types';

export interface TabListProps {
  'aria-label': string;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  children: React.ReactNode;
  variant?: Variants;
}

const HorizontalTabList: React.FC = ({children}) => (
  <Box
    display="flex"
    borderBottomWidth="borderWidth10"
    borderBottomColor="colorBorderWeak"
    borderBottomStyle="solid"
    marginBottom="space60"
  >
    {children}
  </Box>
);

const VerticalTabList: React.FC = ({children}) => (
  <Box
    borderLeftWidth="borderWidth10"
    borderLeftColor="colorBorderWeak"
    borderLeftStyle="solid"
    marginRight="space110"
    minWidth="size20"
    maxWidth="size40"
  >
    {children}
  </Box>
);

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({children, variant, ...props}, ref) => {
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
