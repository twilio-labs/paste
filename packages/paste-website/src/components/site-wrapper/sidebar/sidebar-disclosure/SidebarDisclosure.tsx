import * as React from 'react';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import type {DisclosurePrimitiveInitialState} from '@twilio-paste/disclosure-primitive';

import type {SidebarCategoryRoutes} from '../../../../constants';
import {useLocationPathname} from '../../../../utils/RouteUtils';
import {SidebarItem} from '../SidebarItem';
import {SidebarDisclosureContext} from './SidebarDisclosureContext';

export interface SidebarDisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
}

export const SidebarDisclosure: React.FC<React.PropsWithChildren<SidebarDisclosureProps>> = ({
  children,
  categoryRoute,
  ...props
}) => {
  const pathname = useLocationPathname();
  const disclosure = useDisclosurePrimitiveState({
    visible: pathname.startsWith(categoryRoute),
    ...props,
  });

  return (
    <SidebarDisclosureContext.Provider value={{disclosure}}>
      <SidebarItem>{children}</SidebarItem>
    </SidebarDisclosureContext.Provider>
  );
};
