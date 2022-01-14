import * as React from 'react';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import type {DisclosurePrimitiveInitialState} from '@twilio-paste/disclosure-primitive';

import type {SidebarCategoryRoutes} from '../../../../constants';
import {getCurrentPathname} from '../../../../utils/RouteUtils';

import {SidebarItem} from '../SidebarItem';
import {SidebarDisclosureContext} from './SidebarDisclosureContext';

interface SidebarDisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
}

export const SidebarDisclosure: React.FC<SidebarDisclosureProps> = ({children, categoryRoute, ...props}) => {
  const disclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(categoryRoute),
    ...props,
  });

  return (
    <SidebarDisclosureContext.Provider value={{disclosure}}>
      <SidebarItem>{children}</SidebarItem>
    </SidebarDisclosureContext.Provider>
  );
};
