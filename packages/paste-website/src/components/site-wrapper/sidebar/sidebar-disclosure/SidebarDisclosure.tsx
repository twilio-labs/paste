import * as React from 'react';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import type {DisclosurePrimitiveInitialState} from '@twilio-paste/disclosure-primitive';

import type {SidebarCategoryRoutes} from '../../../../constants';
import {getCurrentPathname} from '../../../../utils/RouteUtils';

import {SidebarItem} from '../SidebarItem';
import {SidebarDisclosureContext} from './SidebarDisclosureContext';

interface SidebarDisclosureProps extends DisclosurePrimitiveInitialState {
  children: React.ReactNode;
  nested?: boolean;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
}

export const SidebarDisclosure: React.FC<SidebarDisclosureProps> = ({children, nested, categoryRoute, ...props}) => {
  const disclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(categoryRoute),
    ...props,
  });

  const disclosureContext = {disclosure, nested};

  return (
    <SidebarDisclosureContext.Provider value={disclosureContext}>
      <SidebarItem nested={nested}>{children}</SidebarItem>
    </SidebarDisclosureContext.Provider>
  );
};
