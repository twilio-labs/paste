import * as React from 'react';
import {useDisclosurePrimitiveState} from '@twilio-paste/disclosure-primitive';
import type {DisclosurePrimitiveInitialState} from '@twilio-paste/disclosure-primitive';

import {SidebarItem} from '../SidebarItem';

import {SidebarDisclosureContext} from './SidebarDisclosureContext';

interface SidebarDisclosureProps extends DisclosurePrimitiveInitialState {
  children: React.ReactNode;
  nested?: boolean;
}

export const SidebarDisclosure: React.FC<SidebarDisclosureProps> = ({children, nested, ...props}) => {
  const disclosure = useDisclosurePrimitiveState({...props});
  const disclosureContext = {
    disclosure,
    nested,
  };

  return (
    <SidebarDisclosureContext.Provider value={disclosureContext}>
      <SidebarItem nested={nested}>{children}</SidebarItem>
    </SidebarDisclosureContext.Provider>
  );
};
