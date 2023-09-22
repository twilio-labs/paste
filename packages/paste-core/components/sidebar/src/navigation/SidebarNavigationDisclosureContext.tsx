import * as React from 'react';
import type { DisclosurePrimitveStateReturn } from '@twilio-paste/disclosure-primitive';

export interface SidebarNavigationDisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
  nested: boolean;
}

const SidebarNavigationDisclosureContext = React.createContext<SidebarNavigationDisclosureContextProps>({} as any);

export { SidebarNavigationDisclosureContext };
