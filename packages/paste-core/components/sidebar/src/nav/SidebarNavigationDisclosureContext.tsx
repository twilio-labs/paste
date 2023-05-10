import * as React from 'react';
import type {DisclosurePrimitveStateReturn} from '@twilio-paste/disclosure-primitive';

import type {SidebarNavigationDisclosureVariants} from './types';

export interface SidebarNavigationDisclosureContextProps {
  disclosure: DisclosurePrimitveStateReturn;
  variant: SidebarNavigationDisclosureVariants;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
}

const SidebarNavigationDisclosureContext = React.createContext<SidebarNavigationDisclosureContextProps>({} as any);

export {SidebarNavigationDisclosureContext};
