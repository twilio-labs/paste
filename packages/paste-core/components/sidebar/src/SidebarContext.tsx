import * as React from 'react';

import type {Variants} from './types';

interface SidebarState {
  sidebarId: string;
  collapsed: boolean;
  variant: Variants;
}

export const SidebarContext = React.createContext<SidebarState>({} as SidebarState);
