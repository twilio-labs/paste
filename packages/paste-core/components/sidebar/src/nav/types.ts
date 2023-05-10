import type {DisclosurePrimitiveInitialState, DisclosurePrimitveStateReturn} from '@twilio-paste/disclosure-primitive';

export type SidebarNavigationDisclosureVariants = 'inner' | 'default';

export interface SidebarNavigationDisclosureStateReturn extends DisclosurePrimitveStateReturn {
  [key: string]: any;
}

export type {DisclosurePrimitiveInitialState as SidebarNavigationDisclosureInitialState};
