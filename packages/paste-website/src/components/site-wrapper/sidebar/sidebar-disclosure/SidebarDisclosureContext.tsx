import * as React from 'react';
import type {DisclosurePrimitveStateReturn} from '@twilio-paste/disclosure-primitive';

interface SidebarDisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
}

export const SidebarDisclosureContext = React.createContext<SidebarDisclosureContextProps>({} as any);
